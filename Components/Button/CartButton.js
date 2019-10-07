import React, { Component } from "react";
import { observer } from "mobx-react";
// NativeBase Components
import { Button, Icon } from "native-base";

class CartButton extends Component {
  render() {
    return;
  }
}

export default observer(CartButton);

CartButton.navigationOptions = ({ navigation }) => {
  const cafeID = navigation.getParam("cafeID");
  const cafe = cafes.find(cafe => cafeID === cafe.id);
  return {
    title: cafe.name,
    headerRight: (
      <Button transparent onPress={() => navigation.navigate("CartScreen")}>
        <Icon type="AntDesign" name="shoppingcart" />
      </Button>
    )
  };
};
