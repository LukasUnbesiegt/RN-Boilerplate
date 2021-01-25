import React, { memo, useEffect, useState } from "react";
import { Text } from "react-native";
import View from "../../components/common/ViewContainer/ViewContainer";
import { StyledText } from "../../components/common/Text";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { useInjectReducer } from "../../utils/reducer/injectReducer";
import { useInjectSaga } from "../../utils/saga/injectSaga";
import {} from "../../App/selectors";
import {} from "../../App/actions";
import reducer from "./reducer";
// import saga from "./saga";

const key = "auth";
function SignUpScreen({}) {
  useEffect(() => {
    return () => {};
  }, []);

  useInjectReducer({ key, reducer });
  // useInjectSaga({ key, saga });
  return (
    <View
      styleProps={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledText fontSize={30}>SIGNUP SCREEN</StyledText>
    </View>
  );
}

SignUpScreen.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(SignUpScreen);
