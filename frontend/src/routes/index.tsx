import {
  DefaultTheme,
  NavigationContainer
} from "@react-navigation/native";

import { View, StyleSheet } from "react-native";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "@hooks/useAuth";
import { Loading } from "@components/Loading";

export function Routes() {
  const { user, isLoadingUserStorageData } = useAuth();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#121214",
    },
  };

  if (isLoadingUserStorageData) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <NavigationContainer theme={theme}>
        {user.id ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214", // equivalente ao bg="gray.700"
  },
});
