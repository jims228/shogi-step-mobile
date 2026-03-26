import React, { useState } from "react";
import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { theme } from "../ui/theme";

const PIECES = [
  { id: "pawn", label: "歩", image: require("../../assets/piece_move/pawn.png") },
  { id: "lance", label: "香", image: require("../../assets/piece_move/lance.png") },
  { id: "knight", label: "桂", image: require("../../assets/piece_move/horse.png") },
  { id: "silver", label: "銀", image: require("../../assets/piece_move/silver.png") },
  { id: "gold", label: "金", image: require("../../assets/piece_move/gold.png") },
  { id: "bishop", label: "角", image: require("../../assets/piece_move/bishop.png") },
  { id: "rook", label: "飛", image: require("../../assets/piece_move/rook.png") },
  { id: "king", label: "王", image: require("../../assets/piece_move/king.png") },
];

const PROMOTED_PIECES = [
  { id: "+pawn", label: "と", image: require("../../assets/piece_move/+pawn.png") },
  { id: "+lance", label: "成香", image: require("../../assets/piece_move/+lance.png") },
  { id: "+horse", label: "成桂", image: require("../../assets/piece_move/+horse.png") },
  { id: "+silver", label: "成銀", image: require("../../assets/piece_move/+silver.png") },
  { id: "+bishop", label: "馬", image: require("../../assets/piece_move/+bishop.png") },
  { id: "+rook", label: "龍", image: require("../../assets/piece_move/+rook.png") },
];

type Props = {
  visible: boolean;
  onClose: () => void;
};

export function PieceMoveGuide({ visible, onClose }: Props) {
  const [showPromoted, setShowPromoted] = useState(false);
  const pieces = showPromoted ? PROMOTED_PIECES : PIECES;

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.title}>駒の動き一覧</Text>
            <Pressable onPressIn={onClose} style={styles.closeBtn}>
              <Text style={styles.closeBtnText}>✕</Text>
            </Pressable>
          </View>

          <View style={styles.tabs}>
            <Pressable
              style={[styles.tab, !showPromoted && styles.tabActive]}
              onPressIn={() => setShowPromoted(false)}
            >
              <Text style={[styles.tabText, !showPromoted && styles.tabTextActive]}>通常</Text>
            </Pressable>
            <Pressable
              style={[styles.tab, showPromoted && styles.tabActive]}
              onPressIn={() => setShowPromoted(true)}
            >
              <Text style={[styles.tabText, showPromoted && styles.tabTextActive]}>成り駒</Text>
            </Pressable>
          </View>

          <ScrollView contentContainerStyle={styles.grid}>
            {pieces.map((p) => (
              <View key={p.id} style={styles.pieceCard}>
                <Image source={p.image} style={styles.pieceImage} resizeMode="contain" />
                <Text style={styles.pieceLabel}>{p.label}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: theme.colors.boardBg,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "85%",
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "900",
    color: theme.colors.text,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  closeBtnText: {
    fontSize: 16,
    fontWeight: "900",
    color: theme.colors.text,
  },
  tabs: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 12,
    gap: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  tabActive: {
    backgroundColor: "#5D4037",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "700",
    color: theme.colors.textMuted,
  },
  tabTextActive: {
    color: "#fff",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
    gap: 8,
    justifyContent: "center",
  },
  pieceCard: {
    width: "22%",
    alignItems: "center",
    padding: 4,
  },
  pieceImage: {
    width: 80,
    height: 80,
  },
  pieceLabel: {
    fontSize: 13,
    fontWeight: "900",
    color: theme.colors.text,
    marginTop: 4,
  },
});
