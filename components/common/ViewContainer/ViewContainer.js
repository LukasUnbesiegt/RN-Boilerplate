import React from "react";
import { View, Text } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
function ViewContainer({ children, styleProps }) {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        fontFamily: "MAIN_FONT_REGULAR",
        ...styleProps,
      }}
    >
      {children}
    </SafeAreaView>
  );
}
export default ViewContainer;
