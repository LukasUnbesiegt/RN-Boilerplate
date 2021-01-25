import React from "react";
import { View, Text } from "react-native";
import { Appbar, Avatar, useTheme } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function Header({ scene, previous, navigation }) {
  const { options } = scene.descriptor;
  const theme = useTheme();
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;
  function onTweetPress() {
    navigation.push("AnotherDetails");
  }
  function onBack() {
    navigation.pop();
  }
  return (
    <Appbar.Header theme={{ colors: { primary: theme.colors.surface } }}>
      {previous ? (
        <Appbar.BackAction onPress={onBack} color={theme.colors.primary} />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Avatar.Image
            size={40}
            source={{
              uri:
                "https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg",
            }}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content
        onPress={onTweetPress}
        title={
          previous ? title : <MaterialCommunityIcons name="twitter" size={40} />
        }
      />
    </Appbar.Header>
  );
}

export default Header;
