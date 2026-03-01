import React from "react";
import { StyleSheet, View } from "react-native";
import Rive from "rive-react-native";

const RIV_SOURCE = require("../../../assets/man.riv");

type Props = {
  size?: number;
};

/**
 * Native Rive avatar for the coach character (おじいちゃん).
 * Replaces the previous WebView-based Rive rendering.
 */
export function CoachAvatar({ size = 210 }: Props) {
  return (
    <View style={[styles.wrap, { width: size, height: size }]}>
      <Rive
        resourceName={undefined}
        url={undefined}
        source={RIV_SOURCE}
        style={{ width: size, height: size }}
        autoplay
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    overflow: "hidden",
    flexShrink: 0,
  },
});
