import { Center, Heading, Image, Text, VStack, ScrollView, useToast } from "native-base";

import LogoSvg from "../../assets/logo.svg";
import BackgroundImg from "../../assets/background.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { api } from "../../services/api";
import { AppError } from "../../utils/AppError";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const signUpSchema = yup.object({
  name:
    yup.string()
      .required('Informe o nome.'),

  email:
    yup.string()
      .required('Informe o e-mail.')
      .email('E-mail inválido.'),

  password:
    yup.string()
      .required('Informe a senha')
      .min(6, 'A senha deve ter no mínimo 6 digitos.'),

  password_confirm:
    yup.string()
      .required('As senhas não são iguais.')
      .oneOf([yup.ref('password') || null], 'As senhas não são iguais.')
});

export function SignUp() {
  const toast = useToast();
  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  const navigation = useNavigation();
  function handleSignIn() {
    navigation.goBack();
  };

  async function handleSignUp({ name, email, password }: FormDataProps) {
    try {
      setIsLoading(true);
      await api.post('/users', { name, email, password });
      await signIn(email, password);

    } catch (error) {
      setIsLoading(false);

      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível criar a conta!! Tente novamente mais tarde!!"

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

        <Center my={12}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center px={10}>
          <Heading
            color="gray.100"
            fontSize="xl" mb={6}
            fontFamily="heading"
          >
            Crie uma conta
          </Heading>

          <Controller
            control={control}
            name="name"
            // rules={{
            //   required: "Informe o nome"
            // }}
            render={({ field: { onChange, value } }) => (
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
            // rules={{
            //   required: "Informe o e-mail",
            //   pattern: {
            //     value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
            //     message: "E-mail inválido"
            //   }
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

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Confime a senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
                errorMessage={errors.password_confirm?.message}
              />
            )}
          />

          <Button
            title="Criar e acessar"
            onPress={handleSubmit(handleSignUp)}
            isLoading={isLoading}
          />
        </Center>

        <Center px={10} mt={10}>
          <Button
            title="Voltar para o login"
            variant="outline"
            onPress={handleSignIn}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
};