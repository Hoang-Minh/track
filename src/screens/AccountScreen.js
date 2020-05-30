import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Button, Text } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import Spacer from "../components/Spacer";
import { Context as AuthContext, Context } from "../context/authContext";

const AccountScreen = () => {
  const { signout } = useContext(Context);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Account Screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout}></Button>
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = () => {
  return {
    title: "Account",
    tabBarIcon: <Feather name="settings" size={24} color="black" />,
  };
};

const styles = StyleSheet.create({});

export default AccountScreen;
