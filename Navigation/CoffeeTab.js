import { createStackNavigator } from "react-navigation-stack";
import React, { Component } from "react";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import { Icon } from "native-base";

const CoffeeTab = createStackNavigator(
  {
    ListScreen: CoffeeList,
    DetailScreen: CoffeeDetail
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

      tabBarIcon: () => <Icon type="FontAwesome" name="coffee" />
    }
  }
);

export default CoffeeTab;
