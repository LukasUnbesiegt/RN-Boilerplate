import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default StackContainer = ({ screens }) => {
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
    <Stack.Navigator initialRouteName={screens[0].name} headerMode="none">
      {render_screens()}
    </Stack.Navigator>
  );
};
