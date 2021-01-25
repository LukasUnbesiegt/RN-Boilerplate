import React, { memo, useEffect, useState } from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { useInjectReducer } from "../../utils/reducer/injectReducer";
import { useInjectSaga } from "../../utils/saga/injectSaga";
import reducer from "./reducer";
import StackContainer from "../../App/navigators/StackNavigator/StackContainer/index";
import { AnotherHome, HomeIndex } from "./components";
// import saga from "./saga";
const key = "home";
function HomeScreen({}) {
  useEffect(() => {
    return () => {};
  }, []);
  useInjectReducer({ key, reducer });
  // useInjectSaga({ key, saga });
  return (
    <StackContainer
      screens={[
        {
          name: "Home",
          headerTitle: "Home Index",
          Comp: HomeIndex,
        },
        {
          name: "AnotherDetails",
          headerTitle: "AnotherIndex",
          Comp: AnotherHome,
        },
      ]}
    />
  );
}

HomeScreen.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(HomeScreen);
