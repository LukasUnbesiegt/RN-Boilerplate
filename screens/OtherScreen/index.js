import React, { memo, useEffect, useState } from "react";
import View from "../../components/common/ViewContainer/ViewContainer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { useInjectReducer } from "../../utils/reducer/injectReducer";
import { useInjectSaga } from "../../utils/saga/injectSaga";
import { StyledText } from "../../components/common/Text";
import reducer from "./reducer";
// import saga from "./saga";
const key = "other";
function OtherScreen({}) {
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
      <StyledText>Other Screen</StyledText>
    </View>
  );
}

OtherScreen.propTypes = {};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(OtherScreen);
