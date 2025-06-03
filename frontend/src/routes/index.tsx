import { useAuth } from "../hooks/useAuth";
import { NavigationContainer } from "@react-navigation/native";

import SignIn from "../screens/SignIn";

export function Routes() {
  const { user, isLoadingStogareUserData } = useAuth();

  return (
    // <Box flex={1} bg="gray.700">
    //   <NavigationContainer
    //     theme={theme}
    //   independent={true}
    //   >
    //     {user.id ? <AppRoutes /> : <AuthRoutes />}

    //   </NavigationContainer>
    // </Box>

    <NavigationContainer>
      <SignIn />
    </NavigationContainer>
  )
};