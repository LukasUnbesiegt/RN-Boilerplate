import * as React from "react";

import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import {
  DefaultTheme as PaperDefaultTheme,
  configureFonts,
} from "react-native-paper";
import merge from "deepmerge";
import { PRIMARY } from "./colors";

const fontConfig = {
  default: {
    regular: {
      fontFamily: "MAIN_FONT_REGULAR",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "MAIN_FONT_REGULAR",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "MAIN_FONT_LIGHT",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "MAIN_FONT_BOLD",
      fontWeight: "normal",
    },
  },
};
const MyTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    primary: PRIMARY,
  },
  fonts: configureFonts(fontConfig),
};

export default MyTheme;
