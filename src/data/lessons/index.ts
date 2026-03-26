import type { LessonData } from "../../lesson/types";
import { BASICS_PAWN_LESSON } from "./basics_pawn";
import { U1_WHAT_IS_SHOGI } from "./u1_what_is_shogi";
import { U1_GOLD_MOVE } from "./u1_gold_move";
import { U1_KING_MOVE } from "./u1_king_move";
import { U1_WHAT_IS_CHECK } from "./u1_what_is_check";
import { U1_GIVE_CHECK } from "./u1_give_check";
import { U1_COMPARE_CHECK } from "./u1_compare_check";
import { U1_REVIEW } from "./u1_review";
import { U2_SILVER_MOVE } from "./u2_silver_move";
import { U2_SILVER_USE } from "./u2_silver_use";
import { U2_COMPARE_GOLD_SILVER } from "./u2_compare_gold_silver";
import { U2_ROOK_MOVE } from "./u2_rook_move";
import { U2_BISHOP_MOVE } from "./u2_bishop_move";
import { U2_BIG_PIECES } from "./u2_big_pieces";
import { U2_KNIGHT_MOVE } from "./u2_knight_move";
import { U2_LANCE_MOVE } from "./u2_lance_move";
import { U2_COMPARE_TAKE } from "./u2_compare_take";
import { U2_REVIEW } from "./u2_review";
import { U3_CAPTURE_HAND } from "./u3_capture_hand";
import { U3_DROP } from "./u3_drop";
import { U3_COMPARE_DROP_WHERE } from "./u3_compare_drop_where";
import { U3_PROMOTION } from "./u3_promotion";
import { U3_PROMOTE_DO } from "./u3_promote_do";
import { U3_PROMOTE_POWER } from "./u3_promote_power";
import { U3_NIFU } from "./u3_nifu";
import { U3_COMPARE_DROP_VS_MOVE } from "./u3_compare_drop_vs_move";
import { U3_REVIEW } from "./u3_review";
import { U4_WHAT_IS_MATE } from "./u4_what_is_mate";
import { U4_HEAD_GOLD } from "./u4_head_gold";
import { U4_BELLY_GOLD } from "./u4_belly_gold";
import { U4_TSUME_GOLD_SILVER } from "./u4_tsume_gold_silver";
import { U4_TSUME_ROOK_BISHOP } from "./u4_tsume_rook_bishop";
import { U4_TSUME_DROP } from "./u4_tsume_drop";
import { U4_COMPARE_CHECK_VS_MATE } from "./u4_compare_check_vs_mate";
import { U4_TSUME_MIX } from "./u4_tsume_mix";
import { U4_REVIEW } from "./u4_review";
import { U5_THREE_DEFENSES } from "./u5_three_defenses";
import { U5_ESCAPE } from "./u5_escape";
import { U5_BLOCK } from "./u5_block";
import { U5_CAPTURE_ATTACKER } from "./u5_capture_attacker";
import { U5_COMPARE_DEFENSE } from "./u5_compare_defense";
import { U5_IS_KING_SAFE } from "./u5_is_king_safe";
import { U5_REVIEW } from "./u5_review";
import { U6_PIECE_VALUE } from "./u6_piece_value";
import { U6_COMPARE_TRADE } from "./u6_compare_trade";
import { U6_FIND_FREE } from "./u6_find_free";
import { U6_TESUJI_TATAKI } from "./u6_tesuji_tataki";
import { U6_TESUJI_WARIDACHI } from "./u6_tesuji_waridachi";
import { U6_TESUJI_FORK } from "./u6_tesuji_fork";
import { U6_TESUJI_PIN } from "./u6_tesuji_pin";
import { U6_COMPARE_ATTACK_DEFEND } from "./u6_compare_attack_defend";
import { U6_REVIEW } from "./u6_review";
import { TESUJI_PAWN_TATAKI_L1 } from "./tesuji_pawn_tataki_l1";
import { TESUJI_PAWN_RENDA_L1 } from "./tesuji_pawn_renda_l1";
import { TESUJI_PAWN_HIKAE_L1 } from "./tesuji_pawn_hikae_l1";
import { TESUJI_PAWN_SOKOBU_L1 } from "./tesuji_pawn_sokobu_l1";
import { TESUJI_PAWN_TAREFU_L1 } from "./tesuji_pawn_tarefu_l1";
import { TESUJI_PAWN_TSUGIFU_L1 } from "./tesuji_pawn_tsugifu_l1";
import { TESUJI_SILVER_KEITOGIN_L1 } from "./tesuji_silver_keitogin_l1";
import { TESUJI_SILVER_HARAGIN_L1 } from "./tesuji_silver_haragin_l1";
import { TESUJI_SILVER_WARIGIN_L1 } from "./tesuji_silver_warigin_l1";
import { TESUJI_GOLD_ATAMAKIN_L1 } from "./tesuji_gold_atamakin_l1";
import { TESUJI_GOLD_SHIRIKIN_L1 } from "./tesuji_gold_shirikin_l1";
import { TESUJI_LANCE_DENGAKU_SASHI_L1 } from "./tesuji_lance_dengaku-sashi_l1";
import { TESUJI_LANCE_2DAN_ROCKET_L1 } from "./tesuji_lance_2dan-rocket_l1";
import { TESUJI_LANCE_SOKOKYO_L1 } from "./tesuji_lance_sokokyo_l1";
import { TESUJI_KNIGHT_FUNDOSHI_KEI_L1 } from "./tesuji_knight_fundoshi-kei_l1";
import { TESUJI_KNIGHT_FUTO_NO_KEI_L1 } from "./tesuji_knight_futo-no-kei_l1";
import { TESUJI_KNIGHT_TSURUSHI_KEI_L1 } from "./tesuji_knight_tsurushi-kei_l1";
import { TESUJI_KNIGHT_HIKAE_KEI_L1 } from "./tesuji_knight_hikae-kei_l1";
import { TESUJI_KNIGHT_TSUGIKEI_L1 } from "./tesuji_knight_tsugikei_l1";
import { TESUJI_BISHOP_KAKU_RYOTORI_L1 } from "./tesuji_bishop_kaku-ryotori_l1";
import { TESUJI_BISHOP_SUJI_CHIGAI_L1 } from "./tesuji_bishop_suji-chigai_l1";
import { TESUJI_BISHOP_KAKU_KEI_L1 } from "./tesuji_bishop_kaku-kei_l1";
import { TESUJI_BISHOP_KOBO_KAKU_L1 } from "./tesuji_bishop_kobo-kaku_l1";
import { TESUJI_ROOK_JUJI_HISHA_L1 } from "./tesuji_rook_juji-hisha_l1";
import { TESUJI_ROOK_HOME_ROOK_DROP_L1 } from "./tesuji_rook_home-rook-drop_l1";
import { TESUJI_ROOK_IKKEN_RYU_L1 } from "./tesuji_rook_ikken-ryu_l1";
import { TESUJI_ROOK_OKURI_L1 } from "./tesuji_rook_okuri_l1";
import { CASTLE_YAGURA_L1 } from "./castle_yagura_l1";
import { CASTLE_FUNAGAKOI_L1 } from "./castle_funagakoi_l1";
import { CASTLE_MINO_L1 } from "./castle_mino_l1";
import { CASTLE_HIDARI_MINO_L1 } from "./castle_hidari_mino_l1";
import { CASTLE_ANAGUMA_L1 } from "./castle_anaguma_l1";
import { CASTLE_KINMUSOU_L1 } from "./castle_kinmusou_l1";
import { CASTLE_NAKAZUMAI_L1 } from "./castle_nakazumai_l1";
import { OPENING_YAGURA_OPENING_L1 } from "./opening_yagura_opening_l1";
import { OPENING_KAKU_GAWARI_L1 } from "./opening_kaku_gawari_l1";
import { OPENING_YOKOFUDORI_L1 } from "./opening_yokofudori_l1";
import { OPENING_AIGAKARI_L1 } from "./opening_aigakari_l1";
import { OPENING_SHIKENBISHA_L1 } from "./opening_shikenbisha_l1";
import { OPENING_SANKENBISHA_L1 } from "./opening_sankenbisha_l1";
import { OPENING_MUKAI_BISHA_L1 } from "./opening_mukai_bisha_l1";
import { OPENING_NAKABISHA_L1 } from "./opening_nakabisha_l1";
import { U7_WHY_CASTLE } from "./u7_why_castle";
import { U7_YAGURA_BUILD } from "./u7_yagura_build";
import { U7_MINO_BUILD } from "./u7_mino_build";
import { U7_COMPARE_CASTLE } from "./u7_compare_castle";
import { U7_CASTLE_ATTACK } from "./u7_castle_attack";
import { U7_REVIEW } from "./u7_review";
import { U8_OPENING_PRINCIPLES } from "./u8_opening_principles";
import { U8_OPENING_GUIDE } from "./u8_opening_guide";
import { U8_IBISHA_VS_FURI } from "./u8_ibisha_vs_furi";
import { U8_FIND_OPENING } from "./u8_find_opening";
import { U8_COMPARE_OPENING } from "./u8_compare_opening";
import { U8_MIDDLE_GAME } from "./u8_middle_game";
import { U8_REVIEW } from "./u8_review";
import { U9_TOTAL_REVIEW } from "./u9_total_review";

// Lesson data registry. Add new lessons here.
const NATIVE_LESSONS: Record<string, LessonData> = {
  [BASICS_PAWN_LESSON.id]: BASICS_PAWN_LESSON,
  [U1_WHAT_IS_SHOGI.id]: U1_WHAT_IS_SHOGI,
  [U1_GOLD_MOVE.id]: U1_GOLD_MOVE,
  [U1_KING_MOVE.id]: U1_KING_MOVE,
  [U1_WHAT_IS_CHECK.id]: U1_WHAT_IS_CHECK,
  [U1_GIVE_CHECK.id]: U1_GIVE_CHECK,
  [U1_COMPARE_CHECK.id]: U1_COMPARE_CHECK,
  [U1_REVIEW.id]: U1_REVIEW,
  [U2_SILVER_MOVE.id]: U2_SILVER_MOVE,
  [U2_SILVER_USE.id]: U2_SILVER_USE,
  [U2_COMPARE_GOLD_SILVER.id]: U2_COMPARE_GOLD_SILVER,
  [U2_ROOK_MOVE.id]: U2_ROOK_MOVE,
  [U2_BISHOP_MOVE.id]: U2_BISHOP_MOVE,
  [U2_BIG_PIECES.id]: U2_BIG_PIECES,
  [U2_KNIGHT_MOVE.id]: U2_KNIGHT_MOVE,
  [U2_LANCE_MOVE.id]: U2_LANCE_MOVE,
  [U2_COMPARE_TAKE.id]: U2_COMPARE_TAKE,
  [U2_REVIEW.id]: U2_REVIEW,
  [U3_CAPTURE_HAND.id]: U3_CAPTURE_HAND,
  [U3_DROP.id]: U3_DROP,
  [U3_COMPARE_DROP_WHERE.id]: U3_COMPARE_DROP_WHERE,
  [U3_PROMOTION.id]: U3_PROMOTION,
  [U3_PROMOTE_DO.id]: U3_PROMOTE_DO,
  [U3_PROMOTE_POWER.id]: U3_PROMOTE_POWER,
  [U3_NIFU.id]: U3_NIFU,
  [U3_COMPARE_DROP_VS_MOVE.id]: U3_COMPARE_DROP_VS_MOVE,
  [U3_REVIEW.id]: U3_REVIEW,
  [U4_WHAT_IS_MATE.id]: U4_WHAT_IS_MATE,
  [U4_HEAD_GOLD.id]: U4_HEAD_GOLD,
  [U4_BELLY_GOLD.id]: U4_BELLY_GOLD,
  [U4_TSUME_GOLD_SILVER.id]: U4_TSUME_GOLD_SILVER,
  [U4_TSUME_ROOK_BISHOP.id]: U4_TSUME_ROOK_BISHOP,
  [U4_TSUME_DROP.id]: U4_TSUME_DROP,
  [U4_COMPARE_CHECK_VS_MATE.id]: U4_COMPARE_CHECK_VS_MATE,
  [U4_TSUME_MIX.id]: U4_TSUME_MIX,
  [U4_REVIEW.id]: U4_REVIEW,
  [U5_THREE_DEFENSES.id]: U5_THREE_DEFENSES,
  [U5_ESCAPE.id]: U5_ESCAPE,
  [U5_BLOCK.id]: U5_BLOCK,
  [U5_CAPTURE_ATTACKER.id]: U5_CAPTURE_ATTACKER,
  [U5_COMPARE_DEFENSE.id]: U5_COMPARE_DEFENSE,
  [U5_IS_KING_SAFE.id]: U5_IS_KING_SAFE,
  [U5_REVIEW.id]: U5_REVIEW,
  [U6_PIECE_VALUE.id]: U6_PIECE_VALUE,
  [U6_COMPARE_TRADE.id]: U6_COMPARE_TRADE,
  [U6_FIND_FREE.id]: U6_FIND_FREE,
  [U6_TESUJI_TATAKI.id]: U6_TESUJI_TATAKI,
  [U6_TESUJI_WARIDACHI.id]: U6_TESUJI_WARIDACHI,
  [U6_TESUJI_FORK.id]: U6_TESUJI_FORK,
  [U6_TESUJI_PIN.id]: U6_TESUJI_PIN,
  [U6_COMPARE_ATTACK_DEFEND.id]: U6_COMPARE_ATTACK_DEFEND,
  [U6_REVIEW.id]: U6_REVIEW,
  [TESUJI_PAWN_TATAKI_L1.id]: TESUJI_PAWN_TATAKI_L1,
  [TESUJI_PAWN_RENDA_L1.id]: TESUJI_PAWN_RENDA_L1,
  [TESUJI_PAWN_HIKAE_L1.id]: TESUJI_PAWN_HIKAE_L1,
  [TESUJI_PAWN_SOKOBU_L1.id]: TESUJI_PAWN_SOKOBU_L1,
  [TESUJI_PAWN_TAREFU_L1.id]: TESUJI_PAWN_TAREFU_L1,
  [TESUJI_PAWN_TSUGIFU_L1.id]: TESUJI_PAWN_TSUGIFU_L1,
  [TESUJI_SILVER_KEITOGIN_L1.id]: TESUJI_SILVER_KEITOGIN_L1,
  [TESUJI_SILVER_HARAGIN_L1.id]: TESUJI_SILVER_HARAGIN_L1,
  [TESUJI_SILVER_WARIGIN_L1.id]: TESUJI_SILVER_WARIGIN_L1,
  [TESUJI_GOLD_ATAMAKIN_L1.id]: TESUJI_GOLD_ATAMAKIN_L1,
  [TESUJI_GOLD_SHIRIKIN_L1.id]: TESUJI_GOLD_SHIRIKIN_L1,
  [TESUJI_LANCE_DENGAKU_SASHI_L1.id]: TESUJI_LANCE_DENGAKU_SASHI_L1,
  [TESUJI_LANCE_2DAN_ROCKET_L1.id]: TESUJI_LANCE_2DAN_ROCKET_L1,
  [TESUJI_LANCE_SOKOKYO_L1.id]: TESUJI_LANCE_SOKOKYO_L1,
  [TESUJI_KNIGHT_FUNDOSHI_KEI_L1.id]: TESUJI_KNIGHT_FUNDOSHI_KEI_L1,
  [TESUJI_KNIGHT_FUTO_NO_KEI_L1.id]: TESUJI_KNIGHT_FUTO_NO_KEI_L1,
  [TESUJI_KNIGHT_TSURUSHI_KEI_L1.id]: TESUJI_KNIGHT_TSURUSHI_KEI_L1,
  [TESUJI_KNIGHT_HIKAE_KEI_L1.id]: TESUJI_KNIGHT_HIKAE_KEI_L1,
  [TESUJI_KNIGHT_TSUGIKEI_L1.id]: TESUJI_KNIGHT_TSUGIKEI_L1,
  [TESUJI_BISHOP_KAKU_RYOTORI_L1.id]: TESUJI_BISHOP_KAKU_RYOTORI_L1,
  [TESUJI_BISHOP_SUJI_CHIGAI_L1.id]: TESUJI_BISHOP_SUJI_CHIGAI_L1,
  [TESUJI_BISHOP_KAKU_KEI_L1.id]: TESUJI_BISHOP_KAKU_KEI_L1,
  [TESUJI_BISHOP_KOBO_KAKU_L1.id]: TESUJI_BISHOP_KOBO_KAKU_L1,
  [TESUJI_ROOK_JUJI_HISHA_L1.id]: TESUJI_ROOK_JUJI_HISHA_L1,
  [TESUJI_ROOK_HOME_ROOK_DROP_L1.id]: TESUJI_ROOK_HOME_ROOK_DROP_L1,
  [TESUJI_ROOK_IKKEN_RYU_L1.id]: TESUJI_ROOK_IKKEN_RYU_L1,
  [TESUJI_ROOK_OKURI_L1.id]: TESUJI_ROOK_OKURI_L1,
  [CASTLE_YAGURA_L1.id]: CASTLE_YAGURA_L1,
  [CASTLE_FUNAGAKOI_L1.id]: CASTLE_FUNAGAKOI_L1,
  [CASTLE_MINO_L1.id]: CASTLE_MINO_L1,
  [CASTLE_HIDARI_MINO_L1.id]: CASTLE_HIDARI_MINO_L1,
  [CASTLE_ANAGUMA_L1.id]: CASTLE_ANAGUMA_L1,
  [CASTLE_KINMUSOU_L1.id]: CASTLE_KINMUSOU_L1,
  [CASTLE_NAKAZUMAI_L1.id]: CASTLE_NAKAZUMAI_L1,
  [OPENING_YAGURA_OPENING_L1.id]: OPENING_YAGURA_OPENING_L1,
  [OPENING_KAKU_GAWARI_L1.id]: OPENING_KAKU_GAWARI_L1,
  [OPENING_YOKOFUDORI_L1.id]: OPENING_YOKOFUDORI_L1,
  [OPENING_AIGAKARI_L1.id]: OPENING_AIGAKARI_L1,
  [OPENING_SHIKENBISHA_L1.id]: OPENING_SHIKENBISHA_L1,
  [OPENING_SANKENBISHA_L1.id]: OPENING_SANKENBISHA_L1,
  [OPENING_MUKAI_BISHA_L1.id]: OPENING_MUKAI_BISHA_L1,
  [OPENING_NAKABISHA_L1.id]: OPENING_NAKABISHA_L1,
  [U7_WHY_CASTLE.id]: U7_WHY_CASTLE,
  [U7_YAGURA_BUILD.id]: U7_YAGURA_BUILD,
  [U7_MINO_BUILD.id]: U7_MINO_BUILD,
  [U7_COMPARE_CASTLE.id]: U7_COMPARE_CASTLE,
  [U7_CASTLE_ATTACK.id]: U7_CASTLE_ATTACK,
  [U7_REVIEW.id]: U7_REVIEW,
  [U8_OPENING_PRINCIPLES.id]: U8_OPENING_PRINCIPLES,
  [U8_OPENING_GUIDE.id]: U8_OPENING_GUIDE,
  [U8_IBISHA_VS_FURI.id]: U8_IBISHA_VS_FURI,
  [U8_FIND_OPENING.id]: U8_FIND_OPENING,
  [U8_COMPARE_OPENING.id]: U8_COMPARE_OPENING,
  [U8_MIDDLE_GAME.id]: U8_MIDDLE_GAME,
  [U8_REVIEW.id]: U8_REVIEW,
  [U9_TOTAL_REVIEW.id]: U9_TOTAL_REVIEW,
};

/**
 * Get native lesson data by lesson ID.
 * Returns null if no native lesson data exists for this ID
 * (the caller should fall back to WebView-based lessons).
 */
export function getNativeLessonData(lessonId: string): LessonData | null {
  return NATIVE_LESSONS[lessonId] ?? null;
}
