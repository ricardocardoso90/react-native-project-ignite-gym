import { useTheme } from "native-base";
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { Home } from "../screens/Home";
import { Exercise } from "../screens/Exercise";
import { Profile } from "../screens/Profile";
import { History } from "../screens/History";

import HomeSvg from "../assets/home.svg";
import HistorySvg from "../assets/history.svg";
import ProfileSvg from "../assets/profile.svg";
import { Platform } from "react-native";

type AppRoutesProps = {
  home: undefined;
  history: undefined;
  profile: undefined;
  exercise: {exerciseId: string};
};

export type AppNavigatorRoutesProp = BottomTabNavigationProp<AppRoutesProps>;

export function AppRoutes() {
  const { sizes, colors } = useTheme();
  const { Screen, Navigator } = createBottomTabNavigator<AppRoutesProps>();

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.green[500],
      tabBarInactiveTintColor: colors.gray[300],
      tabBarStyle: {
        backgroundColor: colors.gray[600],
        borderTopWidth: 0,
        height: Platform.OS === "ios" ? 96 : "auto",
        paddingBottom: sizes[10],
        paddingTop: sizes[6]
      }
    }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={sizes[6]} height={sizes[6]} />
          )
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={sizes[6]} height={sizes[6]} />
          )
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} width={sizes[6]} height={sizes[6]} />
          )
        }}
      />
      <Screen
        name="exercise"
        component={Exercise}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  )
};