/**
 * Asynchronously loads the component for HomePage
 */

import React from "react";
import loadable from "../../utils/loadable";
import { Image, Text, View } from "react-native";
export default loadable(() => import("./index"), {
  fallback: () => {
    <View>
      <Text>LOADING</Text>
    </View>;
  },
});
