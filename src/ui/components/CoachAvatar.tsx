import React, { useRef, useImperativeHandle, forwardRef, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

let RiveComponent: any = null;
let RIV_SOURCE: any = null;
try {
  RiveComponent = require("rive-react-native").default;
  RIV_SOURCE = require("../../../assets/man.riv");
} catch {
  // rive-react-native not available (e.g. Expo Go)
}

export type CoachAvatarHandle = {
  /** Trigger the surprise animation. */
  surprise: () => void;
};

type Props = {
  size?: number;
};

/**
 * Native Rive avatar for the coach character (おじいちゃん).
 * Falls back to a static emoji when rive-react-native is unavailable.
 *
 * Use ref.surprise() to trigger the surprise animation on correct answer.
 * Default state is idle.
 */
export const CoachAvatar = forwardRef<CoachAvatarHandle, Props>(
  function CoachAvatar({ size = 210 }, ref) {
    const riveRef = useRef<any>(null);

    const surprise = useCallback(() => {
      try {
        riveRef.current?.fireState("Main", "toSurprise");
      } catch {
        // Rive not available or state machine not found
      }
    }, []);

    useImperativeHandle(ref, () => ({ surprise }), [surprise]);

    if (!RiveComponent) {
      return (
        <View style={[styles.wrap, styles.fallback, { width: size, height: size }]}>
          <Text style={{ fontSize: size * 0.45 }}>👴</Text>
        </View>
      );
    }

    return (
      <View style={[styles.wrap, { width: size, height: size }]}>
        <RiveComponent
          ref={riveRef}
          source={RIV_SOURCE}
          stateMachineName="Main"
          style={{ width: size, height: size }}
          autoplay
        />
      </View>
    );
  }
);

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
