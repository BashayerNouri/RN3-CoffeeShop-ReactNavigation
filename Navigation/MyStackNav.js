import { createStackNavigator } from "react-navigation-stack";

import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";
import Login from "../Components/Login";

const MyStackNav = createStackNavigator(
  {
    ListScreen: CoffeeList,
    DetailScreen: CoffeeDetail,
    CartScreen: CoffeeCart,
    LoginScreen: Login
  },
  {
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      }
    },
    headerTitleStyle: {
      fontWeight: "bold"
    },
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    }
  }
);

export default MyStackNav;
