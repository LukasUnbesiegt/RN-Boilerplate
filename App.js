import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { configureStore } from "./redux/store";
import theme from "./styles/theme";
import Main from "./App/index";
const store = configureStore().store;

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Main />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}
