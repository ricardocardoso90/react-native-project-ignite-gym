import { useState } from "react";
import { styles } from "./styles";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, ScrollView } from "react-native";

import { useAuth } from "@hooks/useAuth";
import { AppError } from "@utils/AppError";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormData = {
  email: string;
  password: string;
};

export function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const { singIn } = useAuth();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  function handleNewAccount() {
    navigation.navigate("register");
  };

  async function handleSignIn({ email, password }: FormData) {
    try {
      setIsLoading(true);
      await singIn(email, password);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível entrar. Tente novamente mais tarde.";
      console.log(title);
      setIsLoading(false);
    };
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          resizeMode="contain"
          style={styles.backgroundImage}
        />

        <View style={styles.logoContainer}>
          <LogoSvg />
          <Text style={styles.subtitle}>Treine sua mente e o seu corpo.</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.heading}>Acesse a conta</Text>

          <Controller
            control={control}
            name="email"
            rules={{ required: "Informe o e-mail" }}
            render={({ field: { onChange } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{ required: "Informe a senha" }}
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Button
            title="Acessar"
            onPress={handleSubmit(handleSignIn)}
            isLoading={isLoading}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Ainda não tem acesso?</Text>

          <Button
            title="Criar Conta"
            variant="outline"
            onPress={handleNewAccount}
          />
        </View>
      </View>
    </ScrollView>
  );
}
