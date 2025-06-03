import { useState } from "react";
import LogoSvg from "../../assets/logo.svg";
import BackgroundImg from "../../assets/background.png";
import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm, Control } from "react-hook-form";

import { useAuth } from "../../hooks/useAuth";
import { AppError } from "../../utils/AppError";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ScrollView, Text, View } from "react-native";
import { Image } from "react-native-elements";

type FormaDataProps = {
  email: string;
  password: string;
};

export default function SignIn() {

  const { signIn } = useAuth();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const [isLoading, setIsLoading] = useState(false);

  function handleSignUp() {
    navigation.navigate("signUp");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={{ flex: 1, paddingBottom: 16 }}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="imagem de fundo"

          // position="absolute"
        />

        <View style={{ marginTop: 16, marginBottom: 16 }}>
          <LogoSvg />
          <Text style={{ color: "#E1E1E6", fontSize: 14 }}>
            Treine sua mente e o seu corpo
          </Text>
        </View>

        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Text style={{ color: "#E1E1E6", fontSize: 20, marginBottom: 6, fontFamily: "Roboto_700Bold" }}>
            Acesse sua conta
          </Text>

          <Controller
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
              />
            )}
          />

          {/* <Text color="red.500">{errors.email?.message}</Text> */}

          <Controller
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
              />
            )}
          />

          {/* <Text color="red.500">{errors.password?.message}</Text> */}

          <Button title="Acessar"/>
        </View>

        <View style={{paddingLeft: 10, paddingRight: 10, marginTop: 20}}>
          <Text style={{color: "#E1E1E6", fontSize: 14, fontFamily: "Roboto_400Regular", marginBottom: 3}}>
            Ainda não tem acesso?
          </Text>
          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleSignUp}
          />
        </View>
      </View>
    </ScrollView>
  )
};