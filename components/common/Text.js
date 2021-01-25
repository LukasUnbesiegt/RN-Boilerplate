import React from "react";
import styled from "styled-components/native";
const StyledText = styled.Text`
  font-family: "MAIN_FONT_REGULAR";
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14")};
`;

export { StyledText };
