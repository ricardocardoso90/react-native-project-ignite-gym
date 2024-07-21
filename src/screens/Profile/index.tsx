import { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { Center, Heading, ScrollView, Skeleton, Text, useToast, VStack } from "native-base";

import { ScreenHeader } from "@screens/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState("https://github.com/ricardocardoso90.png");

  const toast = useToast();

  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true);

    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true
      });

      if (photoSelected.canceled) {
        return;
      };

      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);

        if (photoInfo.exists && (photoInfo.size / 1024 / 1024) > 5) {
          toast.show({
            title: "Tamanho da imagem excedeu o tamanho máximo de 6MB.",
            placement: "top",
            bgColor: "red.500"
          });
        };

        setUserPhoto(photoSelected.assets[0].uri);
      };

    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  };

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          {photoIsLoading
            ? <Skeleton
              size={33}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
            :
            <UserPhoto
              size={33}
              source={{ uri: userPhoto }}
              alt="foto de usuário"
            />
          }

          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input
            bg="gray.600"
            placeholder="Nome"
          />

          <Input
            bg="gray.600"
            placeholder="E-mail"
            isDisabled
          />

          <Heading
            color="gray.200"
            fontSize="md"
            mb={2}
            alignSelf="flex-start"
            mt={8}
          >
            Alterar senha
          </Heading>

          <Input
            bg="gray.600"
            placeholder="Senha antiga"
            secureTextEntry
          />

          <Input
            bg="gray.600"
            placeholder="Nova senha"
          />

          <Input
            bg="gray.600"
            placeholder="Confimar senha"
          />

          <Button
            title="Atualizar"
            mt={4}
          />
        </Center>
      </ScrollView>
    </VStack>
  )
};