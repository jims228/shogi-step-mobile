import React from "react";
import { StyleSheet, Text, View } from "react-native";

let Rive: any = null;
let RIV_SOURCE: any = null;
try {
  Rive = require("rive-react-native").default;
  RIV_SOURCE = require("../../../assets/man.riv");
} catch {
  // rive-react-native not available (e.g. Expo Go)
}

type Props = {
  size?: number;
};

/**
 * Native Rive avatar for the coach character (おじいちゃん).
 * Falls back to a static emoji when rive-react-native is unavailable.
 */
export function CoachAvatar({ size = 210 }: Props) {
  if (!Rive) {
    return (
      <View style={[styles.wrap, styles.fallback, { width: size, height: size }]}>
        <Text style={{ fontSize: size * 0.45 }}>👴</Text>
      </View>
    );
  }

  return (
    <View style={[styles.wrap, { width: size, height: size }]}>
      <Rive
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
  fallback: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 999,
  },
});
