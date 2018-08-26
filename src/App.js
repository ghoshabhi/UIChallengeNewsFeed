/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  ScrollView,
  Animated,
  StyleSheet,
  Text,
  View
} from "react-native";
import { createStackNavigator } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";

import NewsFeedNavbar from "./components/NewsFeedNavbar";
import NewsFeedCard from "./components/NewsFeedCard";

console.disableYellowBox = true;

const HEADER_MAX_HEIGHT = 150;
const HEADER_MIN_HEIGHT = 70;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const MAX_MARGIN_TOP = 150;
const MIN_MARGIN_TOP = 70;
const MARGIN_TOP_DISTANCE = MAX_MARGIN_TOP - MIN_MARGIN_TOP;

type Props = {};
type State = {
  scrollY: number
};
class HomeScreen extends Component<Props, State> {
  _scrollView = null;

  state = {
    scrollY: new Animated.Value(0)
  };

  render() {
    const AnimatedLinearGradient = Animated.createAnimatedComponent(
      LinearGradient
    );

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE - 20, HEADER_SCROLL_DISTANCE],
      outputRange: [
        HEADER_MAX_HEIGHT,
        HEADER_MAX_HEIGHT / 2,
        HEADER_MIN_HEIGHT
      ],
      extrapolate: "clamp"
    });

    const scrollViewMarginTop = this.state.scrollY.interpolate({
      // inputRange: [
      //   0,
      //   HEADER_SCROLL_DISTANCE / 4,
      //   HEADER_SCROLL_DISTANCE / 2,
      //   HEADER_SCROLL_DISTANCE / 2,
      //   HEADER_SCROLL_DISTANCE
      // ],
      // outputRange: [150, 130, 100, 100, HEADER_SCROLL_DISTANCE],
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: "clamp"
    });

    return (
      <View style={styles.container}>
        <AnimatedLinearGradient
          start={[0, 0]}
          end={[1, 0]}
          colors={["#009fff", "#ec2f4b"]}
          style={[
            styles.header,
            {
              height: headerHeight
            }
          ]}
        >
          <NewsFeedNavbar />
        </AnimatedLinearGradient>
        <Animated.ScrollView
          scrollEventThrottle={16}
          onScrollEndDrag={this.onScrollEndSnapToEdge}
          onMomentumScrollEnd={this.onScrollEndSnapToEdge}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
          showsVerticalScrollIndicator={false}
          style={[styles.newsFeedContainer, { marginTop: scrollViewMarginTop }]}
          contentContainerStyle={{
            // flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <NewsFeedCard />
          <NewsFeedCard />
          <NewsFeedCard />
          <NewsFeedCard />
          <NewsFeedCard />
          <NewsFeedCard />
        </Animated.ScrollView>
      </View>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedede90"
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#009fff"
  },
  newsFeedContainer: {
    flex: 1,
    marginHorizontal: 15
    // marginVertical: 0
    // marginTop: HEADER_MAX_HEIGHT
    // position: "absolute",
    // top: 50
  }
});
