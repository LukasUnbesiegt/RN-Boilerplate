import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerContent from "./DrawerContent";
function DrawerNavigator({ screens }) {
  const AppDrawer = createDrawerNavigator();
  const render_screens = () => {
    return screens.map((screen) => {
      return (
        <AppDrawer.Screen
          name={screen.name}
          component={screen.Comp}
          options={{ drawerLabel: screen.label }}
        />
      );
    });
  };
  return (
    <AppDrawer.Navigator
      drawerPosition="left"
      drawerContent={() => <DrawerContent />}
    >
      {render_screens()}
    </AppDrawer.Navigator>
  );
}
export default DrawerNavigator;
