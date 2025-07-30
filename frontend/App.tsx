import { StatusBar } from 'react-native';

import { 
  useFonts, 
  Roboto_700Bold, 
  Roboto_400Regular 
} from '@expo-google-fonts/roboto';

import { Routes } from '@routes/index';
import { AuthContextProvider } from '@contexts/AuthContext';

import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </>
  );
}
