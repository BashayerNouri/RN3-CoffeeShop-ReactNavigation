import { createStackNavigator } from "react-navigation-stack";
import React, { Component } from "react";
import Login from "../Components/Login";
import Profile from "../Components/Profile";
import { Icon } from "native-base";

const AuthTab = createStackNavigator(
  {
    ProfileScreen: Profile,
    LoginScreen: Login
  },
  {
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
        activeBackgroundColor: "#b8cdd0",
        inactiveBackgroundColor: "white",
        style: {
          backgroundColor: "rgb(20,90,100)"
        }
      },

      tabBarIcon: () => <Icon type="AntDesign" name="user" />
    }
  }
);

export default AuthTab;
