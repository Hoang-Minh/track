import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  console.log(state);
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks}></NavigationEvents>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("TrackDetail", { _id: item._id })
            }
          >
            <ListItem chevron title={item.name}></ListItem>
          </TouchableOpacity>
        )}
      ></FlatList>
    </>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    title: "Tracks",
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
};

const styles = StyleSheet.create({});

export default TrackListScreen;
