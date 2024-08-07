import { useAuth } from "@hooks/useAuth";
import { useTheme, Box } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { Loading } from "@components/Loading";

export function Routes() {
  const { colors } = useTheme();
  const { user, isLoadingStogareUserData } = useAuth();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  // if (isLoadingStogareUserData) {
  //   return <Loading />
  // };

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer
        theme={theme}
        independent={true}
      >
        {user.id ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  )
};