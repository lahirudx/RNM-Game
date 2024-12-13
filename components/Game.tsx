import { ballRadius, ballSpeed, boardHeight } from "@/constants";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Button,
  useWindowDimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withDecay,
  Easing,
  withSequence,
  withRepeat,
  withDelay,
  useFrameCallback,
} from "react-native-reanimated";

import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { BallData } from "@/types";
import { useEffect } from "react";
import { Ball } from "./Ball";

export default function Game() {
  const { width } = useWindowDimensions();

  const ball = useSharedValue<BallData>({
    x: width / 2,
    y: boardHeight - ballRadius,
    r: ballRadius,
    dx: 1,
    dy: -1,
  });

  useEffect(() => {
    ball.value = {
      ...ball.value,
      y: 0,
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.board}>
        <Ball ball={ball} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
  },
  board: {
    backgroundColor: "#202020",
    height: boardHeight,
    marginVertical: "auto",
    overflow: "hidden",
  },
});
