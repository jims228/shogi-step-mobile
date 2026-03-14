import type { LessonData } from "../../lesson/types";
import { BASICS_PAWN_LESSON } from "./basics_pawn";
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

// Lesson data registry. Add new lessons here.
const NATIVE_LESSONS: Record<string, LessonData> = {
  [BASICS_PAWN_LESSON.id]: BASICS_PAWN_LESSON,
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
};

/**
 * Get native lesson data by lesson ID.
 * Returns null if no native lesson data exists for this ID
 * (the caller should fall back to WebView-based lessons).
 */
export function getNativeLessonData(lessonId: string): LessonData | null {
  return NATIVE_LESSONS[lessonId] ?? null;
}
