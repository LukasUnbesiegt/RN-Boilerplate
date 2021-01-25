import React, { Fragment } from "react";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import OtherScreen from "../screens/OtherScreen";
import AnotherScreen from "../screens/AnotherScreen";
import AppLoading from "expo-app-loading";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { useFonts } from "@expo-google-fonts/inter";
import View from "../components/common/ViewContainer/ViewContainer";
import { StyledText } from "../components/common/Text";
import AppDrawerContainer from "./navigators/DrawerNavigator";
import StackContainer from "./navigators/StackNavigator/StackWithoutHeader/index";
import { useTheme, Portal, FAB } from "react-native-paper";

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => {
  const isFocused = useIsFocused();
  return (
    <Fragment>
      <AppTabs.Navigator
        initialRouteName="Home"
        shifting={true}
        backBehavior="initialRoute"
        tabBarOptions={{
          labelStyle: {
            fontFamily: "MAIN_FONT_REGULAR",
          },
        }}
      >
        <AppTabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: (props) => (
              <AntDesign name="home" size={props.size} color={props.color} />
            ),
          }}
        />
        <AppTabs.Screen
          name="Others"
          component={OtherScreen}
          options={{
            tabBarIcon: (props) => (
              <AntDesign name="user" size={props.size} color={props.color} />
            ),
          }}
        />
        <AppTabs.Screen
          name="Another"
          component={AnotherScreen}
          options={{
            tabBarIcon: (props) => (
              <AntDesign
                name="iconfontdesktop"
                size={props.size}
                color={props.color}
              />
            ),
          }}
        />
      </AppTabs.Navigator>
      <Portal>
        <FAB
          visible={isFocused}
          icon="feather"
          style={{
            position: "absolute",
            bottom: 100,
            right: 16,
          }}
        />
      </Portal>
    </Fragment>
  );
};

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
  </AuthStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  let [fontsLoaded] = useFonts({
    MAIN_FONT_REGULAR: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    MAIN_FONT_BOLD: require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    MAIN_FONT_LIGHT: require("../assets/fonts/Poppins/Poppins-Light.ttf"),
  });
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      setUser({});
    }, 500);
  }, []);

  return (
    <SafeAreaProvider>
      {isLoading ? (
        <AppLoading />
      ) : user ? (
        <AppDrawerContainer
          screens={[
            {
              name: "Tabs",
              Comp: AppTabsScreen,
              label: "Tabs",
            },
          ]}
        />
      ) : (
        <StackContainer
          screens={[
            {
              name: "SignUp",
              Comp: SignUpScreen,
              headerTitle: "SignUp",
            },
          ]}
        />
      )}
    </SafeAreaProvider>
  );
};
