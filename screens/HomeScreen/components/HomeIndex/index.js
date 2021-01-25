import React from "react";
import View from "../../../../components/common/ViewContainer/ViewContainer";
import { StyledText } from "../../../../components/common/Text";
function HomeIndex({}) {
  return (
    <View
      styleProps={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledText fontSize={40}>Home Index</StyledText>
    </View>
  );
}

export default HomeIndex;
