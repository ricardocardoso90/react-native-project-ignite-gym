import { Center, Heading, Image, Text, VStack, ScrollView } from "native-base";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleSignUp() {
    navigation.navigate("signUp");
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

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            placeholder="Senha"
            secureTextEntry
          />

          <Button title="Acessar" />
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