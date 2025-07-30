import {
  NativeStackNavigationProp,
  createNativeStackNavigator
} from '@react-navigation/native-stack';

import { Login } from '../screens/Login/index';
import { Register } from '../screens/Register/index';

type AuthRoutes = {
  login: undefined;
  register: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();
export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="register" component={Register} />
    </Navigator>
  );
};