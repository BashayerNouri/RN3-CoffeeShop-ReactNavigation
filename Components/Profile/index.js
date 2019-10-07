import React, { Component } from "react";
import { Image } from "react-native";

// NativeBase Components
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
const Profile = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: "https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png" }} />
              <Body>
                <Text>Bashayer Nouri</Text>
                <Text note>Profile Created: 10/Oct/2019</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default Profile;
