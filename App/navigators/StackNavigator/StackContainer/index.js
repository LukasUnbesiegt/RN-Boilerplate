import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./Header.js";

const Stack = createStackNavigator();
const StackNavigator = ({ screens }) => {
  const render_screens = () => {
    return screens.map((screen) => {
      return (
        <Stack.Screen
          name={screen.name}
          component={screen.Comp}
          options={{ headerTitle: screen.headerTitle }}
        />
      );
    });
  };
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      {render_screens()}
    </Stack.Navigator>
  );
};
export default StackNavigator;
