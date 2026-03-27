import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../theme";

type Props = {
  visible: boolean;
  onSignUp: () => void;
  onLater: () => void;
  /** If true, the "later" button is hidden (hard wall). */
  required?: boolean;
};

export function SignUpPrompt({ visible, onSignUp, onLater, required }: Props) {
  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={required ? undefined : onLater}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.emoji}>🔐</Text>
          <Text style={styles.title}>進捗を保存しよう！</Text>
          <Text style={styles.description}>
            アカウントを作成すると{"\n"}
            進捗が保存されて{"\n"}
            どの端末でも続きから学べます。
          </Text>

          <Pressable onPress={onSignUp} style={styles.signUpBtn}>
            <Text style={styles.signUpBtnText}>アカウントを作成</Text>
          </Pressable>

          {!required && (
            <Pressable onPress={onLater} style={styles.laterBtn}>
              <Text style={styles.laterBtnText}>あとで</Text>
            </Pressable>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  modal: {
    backgroundColor: theme.colors.boardBg,
    borderRadius: 20,
    padding: 28,
    alignItems: "center",
    width: "100%",
    maxWidth: 340,
  },
  emoji: { fontSize: 48, marginBottom: 12 },
  title: {
    fontSize: 22,
    fontWeight: "900",
    color: theme.colors.text,
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    fontWeight: "600",
    color: theme.colors.textMuted,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
  },
  signUpBtn: {
    backgroundColor: "#5D4037",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },
  signUpBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
  },
  laterBtn: {
    marginTop: 12,
    paddingVertical: 10,
  },
  laterBtnText: {
    fontSize: 14,
    fontWeight: "700",
    color: theme.colors.textMuted,
  },
});
