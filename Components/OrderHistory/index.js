import React, { Component } from "react";

// NativeBase Components
import { Text, Container, Header, Content, ListItem, List } from "native-base";

const OrderHistory = () => {
  return (
    <Container>
      <Header />
      <Content>
        <List>
          <ListItem>
            <Text>Vanilla Milkshake</Text>
          </ListItem>
          <ListItem>
            <Text>White Mocha</Text>
          </ListItem>
          <ListItem>
            <Text>French Coffee</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default OrderHistory;
