import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/dist/FontAwesome";

class NewsFeedNavbar extends React.Component {
  render() {
    return (
      <View style={styles.newsFeedNavbarContainer}>
        <Icon.Button
          name="bars"
          size={20}
          backgroundColor="transparent"
          color="#fff"
          iconStyle={{ paddingLeft: 2 }}
          onPress={() => alert("side menu")}
        />
        <Text style={styles.newsFeedNavbarText}>My Blog</Text>
        <Icon.Button
          name="search"
          size={20}
          backgroundColor="transparent"
          color="#fff"
          iconStyle={{ paddingRight: 2, marginRight: 0 }}
          onPress={() => alert("side menu")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newsFeedNavbarContainer: {
    flex: 1,
    margin: 15,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  newsFeedNavbarText: {
    fontWeight: "800",
    color: "#222222",
    fontSize: 18
  }
});

export default NewsFeedNavbar;
