import { createBottomTabNavigator } from "react-navigation-tabs";

import AuthTab from "./AuthTab";
import CoffeeTab from "./CoffeeTab";
import OrdersTab from "./OrdersTab";

const BottomNav = createBottomTabNavigator({
  AuthTab: AuthTab,
  CoffeeTab: CoffeeTab,
  OrdersTab: OrdersTab
});

export default BottomNav;
