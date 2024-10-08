import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base"
import { useFonts, Roboto_400Regular, Roboto_700Bold, } from "@expo-google-fonts/roboto";

import { THEME } from "src/theme";
import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";
import { AuthContextProvider } from "@contexts/AuthContext";

export default function Index() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#202024"
        translucent
      />

      <AuthContextProvider>
        {fontsLoaded
          ? <Routes />
          : <Loading />
        }
      </AuthContextProvider >

    </NativeBaseProvider>
  );
}
