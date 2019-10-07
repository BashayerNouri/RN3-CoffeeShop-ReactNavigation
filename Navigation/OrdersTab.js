import { createStackNavigator } from "react-navigation-stack";
import React, { Component } from "react";
import CoffeeCart from "../Components/CoffeeCart";
import OrderHistory from "../Components/OrderHistory";

import { Icon } from "native-base";

const CoffeeTab = createStackNavigator(
  {
    OrderHistory: OrderHistory,
    CartScreen: CoffeeCart
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

      tabBarIcon: () => <Icon type="AntDesign" name="profile" />
    }
  }
);

export default CoffeeTab;
