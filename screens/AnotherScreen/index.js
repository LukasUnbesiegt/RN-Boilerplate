import React, { memo, useEffect, useState } from "react";
import { Text } from "react-native";
import View from "../../components/common/ViewContainer/ViewContainer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { useInjectReducer } from "../../utils/reducer/injectReducer";
import { useInjectSaga } from "../../utils/saga/injectSaga";
import reducer from "./reducer";
import { StyledText } from "../../components/common/Text";
// import saga from "./saga";
const key = "another";
function AnotherScreen({}) {
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
      <StyledText fontSize={30}>Other Screen 2</StyledText>
    </View>
  );
}

AnotherScreen.propTypes = {};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(AnotherScreen);
