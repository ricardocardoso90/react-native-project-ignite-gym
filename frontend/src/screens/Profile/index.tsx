import { useState } from "react";
import { styles } from "./styles";
import { api } from "@services/api";

import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { View, TouchableOpacity, ScrollView, Text } from "react-native";

import * as yup from "yup";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";

import { AppError } from "@utils/AppError";
import { useAuth } from "@hooks/useAuth";
import defaulUserPhotoImg from "@assets/userPhotoDefault.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Loading } from "@components/Loading";

const PHOTO_SIZE = 130;

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  old_password: string;
  confirm_password: string;
};

const profileSchema = yup.object({
  name: yup.string().required("Informe o nome"),

  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 dígitos.")
    .nullable()
    .transform((value) => (!!value ? value : null)),

  confirm_password: yup
    .string()
    .nullable()
    .transform((value) => (!!value ? value : null))
    .oneOf([yup.ref("password"), null], "A confirmação de senha não confere.")
    .when("password", {
      is: (Field: any) => Field,
      then: yup
        .string()
        .nullable()
        .required("Informe a confirmação da senha.")
        .transform((value) => (!!value ? value : null)),
    }),
});

export function Profile() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  const { user, updateUserProfile } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
    resolver: yupResolver(profileSchema),
  });

  async function handleUserPhotoSelected() {
    setPhotoIsLoading(true);
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.cancelled) return;

      if (photoSelected.uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.uri);
        if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
          alert("Essa imagem é muito grande. Escolha uma de até 5MB.");
          return;
        }

        const fileExtension = photoSelected.uri.split(".").pop();
        const photoFile = {
          name: `${user.name}.${fileExtension}`.toLowerCase(),
          uri: photoSelected.uri,
          type: `${photoSelected.type}/${fileExtension}`,
        } as any;

        const userPhotoUploadForm = new FormData();
        userPhotoUploadForm.append("avatar", photoFile);

        const avatarUpdtedResponse = await api.patch(
          "/users/avatar",
          userPhotoUploadForm,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        const userUpdated = user;
        userUpdated.avatar = avatarUpdtedResponse.data.avatar;
        await updateUserProfile(userUpdated);

        alert("Foto atualizada!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  }

  async function handleProfileUpdate(data: FormDataProps) {
    try {
      setIsUpdating(true);
      const userUpdated = user;
      userUpdated.name = data.name;

      await api.put("/users", data);
      await updateUserProfile(userUpdated);

      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível atualizar os dados. Tente novamente mais tarde.";
      alert(title);
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <View style={styles.container}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.centerContent}>
          {photoIsLoading ? (
            <Loading />
          ) : (
            <UserPhoto
              source={
                user.avatar
                  ? { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` }
                  : defaulUserPhotoImg
              }
              alt="Foto do usuário"
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity onPress={handleUserPhotoSelected}>
            <Text style={styles.changePhotoText}>Alterar Foto</Text>
          </TouchableOpacity>

          <Controller
            control={control}
            name="name"
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="E-mail"
                editable
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Text style={styles.sectionTitle}>Alterar senha</Text>

          <Controller
            control={control}
            name="old_password"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Senha antiga"
                secureTextEntry
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Nova senha"
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="confirm_password"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Confirme a nova senha"
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.confirm_password?.message}
              />
            )}
          />

          <Button
            title="Atualizar"
            onPress={handleSubmit(handleProfileUpdate)}
            isLoading={isUpdating}
            style={styles.updateButton}
          />
        </View>
      </ScrollView>
    </View>
  );
}
