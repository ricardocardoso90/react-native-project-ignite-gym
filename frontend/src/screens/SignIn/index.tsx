import { Center, Heading, Image, Text, VStack, ScrollView, useToast } from "native-base";

import { useState } from "react";
import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";

import { useAuth } from "@hooks/useAuth";
import { AppError } from "@utils/AppError";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormaDataProps = {
  email: string;
  password: string;
};

const signInSchema = yup.object({
  email:
    yup.string()
      .required('Informe o E-mail'),

  password:
    yup.string()
      .required('Informe a senha')
});

export function SignIn() {
  const toast = useToast();
  const { signIn } = useAuth();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const name = "Ricardo";

  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm<FormaDataProps>({
    resolver: yupResolver(signInSchema)
  });

  function handleSignUp() {
    navigation.navigate("signUp");
  };

  async function handleSignIn({ email, password }: FormaDataProps) {
    try {
      setIsLoading(true);
      await signIn(email, password);

    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : 'Não foi possível entrar. Tente novamente mais tarde!';

      setIsLoading(false);
      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500'
      });
    };
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <VStack flex={1} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="imagem de fundo"
          position="absolute"
        />

        <Center my={16}>
          <LogoSvg />
          <Text
            color="gray.100"
            fontSize="sm"
          >
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center px={10}>
          <Heading
            color="gray.100"
            fontSize="xl" mb={6}
            fontFamily="heading"
          >
            Acesse sua conta
          </Heading>

          <Controller
            control={control}
            name="email"
            // rules={{
            //   required: "Informe o E-mail",
            // }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          {/* <Text color="red.500">{errors.email?.message}</Text> */}

          <Controller
            control={control}
            name="password"
            // rules={{
            //   required: "Digite a senha"
            // }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                returnKeyType="send"
                onSubmitEditing={handleSubmit(handleSignIn)}
                errorMessage={errors.password?.message}
              />
            )}
          />

          {/* <Text color="red.500">{errors.password?.message}</Text> */}

          <Button
            title="Acessar"
            onPress={handleSubmit(handleSignIn)}
            isLoading={isLoading}
          />
        </Center>

        <Center px={10} mt={20}>
          <Text
            color="gray.100"
            fontSize="sm"
            fontFamily="body"
            mb={3}
          >
            Ainda não tem acesso?
          </Text>
          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleSignUp}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
};