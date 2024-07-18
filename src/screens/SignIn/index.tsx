import { Center, Heading, Image, Text, VStack, ScrollView } from "native-base";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormaDataProps = {
  email: string;
  password: string;
};

const signInSchema = yup.object({
  email: yup.string().required('Informe o E-mail'),
  password: yup.string().required('Informe a senha')
});

export function SignIn() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormaDataProps>({
    resolver: yupResolver(signInSchema)
  });

  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  function handleSignUp() {
    navigation.navigate("signUp");
  };

  function handleSignIn(data: FormaDataProps) {
    console.log(data);
  }

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