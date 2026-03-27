// Interstitial ad manager - shows ad every N lesson completions

const INTERSTITIAL_AD_UNIT_ID = __DEV__
  ? "ca-app-pub-3940256099942544/1033173712" // Google test interstitial
  : "ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy"; // Production interstitial

const SHOW_EVERY_N_LESSONS = 3;

let interstitial: any = null;
let completionCount = 0;

// Try to load the ads module
let InterstitialAd: any = null;
let AdEventType: any = null;
try {
  const ads = require("react-native-google-mobile-ads");
  InterstitialAd = ads.InterstitialAd;
  AdEventType = ads.AdEventType;
} catch {
  // Native module not available
}

function loadAd() {
  if (!InterstitialAd) return;
  try {
    interstitial = InterstitialAd.createForAdRequest(INTERSTITIAL_AD_UNIT_ID, {
      requestNonPersonalizedAdsOnly: true,
    });
    interstitial.load();
  } catch {
    // ignore load errors
  }
}

/** Call this after each lesson completion. Shows interstitial every N lessons. */
export function onLessonCompleted(isPremium: boolean) {
  if (isPremium) return; // No ads for premium users
  if (!InterstitialAd) return;

  completionCount++;
  if (completionCount % SHOW_EVERY_N_LESSONS !== 0) return;

  try {
    if (interstitial) {
      interstitial.show();
      // Reload for next time
      interstitial.addAdEventListener(AdEventType.CLOSED, () => {
        loadAd();
      });
    }
  } catch {
    // ignore show errors
  }
}

/** Initialize interstitial ad loading. Call once on app start. */
export function initInterstitialAds() {
  loadAd();
}
