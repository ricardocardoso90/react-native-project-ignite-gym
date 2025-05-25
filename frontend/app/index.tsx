import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base"
// import { useFonts, Roboto_400Regular, Roboto_700Bold, } from "@expo-google-fonts/roboto";

import { THEME } from "../src/theme/index";
import { Loading } from "../src/components/Loading/index";
import { Routes } from "../src/routes/index";
import { AuthContextProvider } from "../src/contexts/AuthContext";

export default function App() {
  // const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#202024"
        translucent
      />

      <AuthContextProvider>
        <Routes />
        {/* {fontsLoaded
          : <Loading />
        } */}
      </AuthContextProvider >

    </NativeBaseProvider>
  );
}
