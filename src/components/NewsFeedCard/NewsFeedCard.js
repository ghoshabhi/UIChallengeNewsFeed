// @flow

import React from "react";
import { View, Animated, Text, Image, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/dist/FontAwesome";

export default class NewsFeedCard extends React.Component {
  // state = {
  //   opacity: new Animated.Value(0)
  // };

  // componentDidMount() {
  //   this.animate();
  // }

  // animate = () => {
  //   Animated.timing(this.state.opacity, {
  //     toValue: 1,
  //     duration: 350
  //   }).start();
  // };

  render() {
    // const containerStyle = {
    //   opacity: this.state.opacity.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0, 1]
    //   })
    // };
    return (
      <View style={[styles.nfcContainer]}>
        <View style={styles.nfcHeader}>
          <Image
            source={{ uri: "https://via.placeholder.com/45x45" }}
            resizeMethod={"resize"}
            style={styles.avatarImg}
          />
          <View style={styles.nfcHeaderTitleContainer}>
            <Text style={styles.nfcHeaderUserName}>John Doe</Text>
            <Text style={styles.nfcHeaderTime}>19 min ago</Text>
          </View>
        </View>
        <View style={styles.postTitleContainer}>
          <Text style={styles.postTitle}>
            Fugiat duis cillum nostrud dolor ex ad aliquip consequat est
            occaecat eiusmod culpa.
          </Text>
        </View>
        <View style={styles.likeCommentContainer}>
          <View style={styles.likeBtnContainer}>
            <Icon.Button
              name="heart"
              size={20}
              backgroundColor="transparent"
              iconStyle={{
                padding: 0,
                margin: 0
              }}
              color="gray"
              onPress={() => alert("like 🖖")}
            >
              <Text style={styles.likeCommentText}>
                {Math.floor(Math.random() * 100)}
              </Text>
            </Icon.Button>
          </View>
          <View style={styles.likeBtnContainer}>
            <Icon.Button
              name="comment"
              size={20}
              backgroundColor="transparent"
              iconStyle={{
                padding: 0,
                margin: 0
              }}
              color="gray"
              onPress={() => alert("like 🖖")}
            >
              <Text style={styles.likeCommentText}>
                {Math.floor(Math.random() * 100)}
              </Text>
            </Icon.Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nfcContainer: {
    minHeight: 200,
    width: "100%",
    margin: 12,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: "rgba(0,0,0,.25)"
  },
  nfcHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10
  },
  nfcHeaderTitleContainer: {
    marginLeft: 15
  },
  nfcHeaderUserName: {
    color: "black",
    fontWeight: "500"
  },
  nfcHeaderTime: {
    fontWeight: "400",
    color: "#bcbcbc",
    fontSize: 12,
    marginTop: 5
  },
  avatarImg: {
    height: 45,
    width: 45,
    borderRadius: 45 / 2
  },
  postTitleContainer: {
    padding: 10,
    paddingBottom: 0,
    margin: 0
  },
  postTitle: {
    fontWeight: "400",
    color: "#878787",
    fontSize: 14
  },
  likeCommentContainer: {
    height: 55,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 0,
    margin: 0,
    alignItems: "center"
  },
  likeBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative"
  },
  likeCommentText: {
    margin: 0,
    padding: 0,
    color: "#bcbcbc",
    fontSize: 10
  }
});
