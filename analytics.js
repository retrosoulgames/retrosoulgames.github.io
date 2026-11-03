/* RetroSoul Games: basic consent mode. Google is contacted only after opt-in.
 * One config per document; outbound clicks use GA4 Enhanced Measurement.
 * See ANALYTICS.md before changing this file or adding another Google tag. */
(() => {
  "use strict";
  if (window.retroSoulAnalytics) return;

  const ID = "G-VBMXXRL2V6";
  const KEY = "rsg.analytics-consent.v1";
  const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
  const DISABLE = "ga-disable-" + ID;
  const production = location.protocol === "https:" && location.hostname === "retrosoulgames.github.io";
  const banner = document.getElementById("analytics-consent");
  const status = document.getElementById("analytics-consent-status");
  const close = document.getElementById("analytics-consent-close");
  const settings = [...document.querySelectorAll("[data-analytics-settings]")];
  if (!banner || !status || !close) return; // Fail closed if markup is missing.

  let active = false;
  let configured = false;
  let choice = null;
  let expiryTimer;
  let opener = null;
  window[DISABLE] = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  const gtag = window.gtag;
  // These commands are local queue entries, not network requests.
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });
  gtag("set", "ads_data_redaction", true);
  gtag("set", "url_passthrough", false);

  function valid(record) {
    return record && record.version === 1 &&
      (record.choice === "granted" || record.choice === "denied") &&
      Number.isFinite(record.updatedAt) && record.updatedAt <= Date.now() &&
      Date.now() - record.updatedAt < MAX_AGE;
  }

  function read() {
    try {
      const record = JSON.parse(localStorage.getItem(KEY));
      return valid(record) ? record : null;
    } catch (_) { return null; }
  }

  function persist(record) {
    try { localStorage.setItem(KEY, JSON.stringify(record)); } catch (_) {
      // Storage blocked: use this explicit choice only in this document.
    }
  }

  function clearAnalyticsCookies() {
    // Only this website's prefixed GA cookies. No game/AdMob storage is touched.
    document.cookie.split(";").forEach((part) => {
      const name = part.split("=")[0].trim();
      if (!/^rsg_ga(?:$|_)/.test(name)) return;
      const expired = name + "=; Max-Age=0; path=/; SameSite=Lax; Secure";
      document.cookie = expired;
      document.cookie = expired + "; domain=" + location.hostname;
      document.cookie = expired + "; domain=." + location.hostname;
    });
  }

  function updateStatus() {
    const enabled = valid(choice) && choice.choice === "granted";
    status.textContent = enabled ? "Your choice: analytics allowed." : "Your choice: analytics off.";
    close.hidden = !valid(choice);
  }

  function showSettings(event) {
    opener = event ? event.currentTarget : null;
    updateStatus();
    banner.hidden = false;
    if (opener) banner.querySelector("[data-analytics-choice]").focus();
  }

  function hideSettings() {
    banner.hidden = true;
    if (opener && opener.isConnected) opener.focus();
    opener = null;
  }

  function safeReferrer() {
    try {
      const url = new URL(document.referrer);
      return /^(https?:)$/.test(url.protocol) ? url.origin + url.pathname : "";
    } catch (_) { return ""; }
  }

  function start() {
    if (!production || configured || !valid(choice) || choice.choice !== "granted") return;
    configured = true;
    active = true;
    window[DISABLE] = false;
    gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
    gtag("js", new Date());
    // The config generates the single initial page_view. Do not add a manual one.
    gtag("config", ID, {
      send_page_view: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_domain: "none",
      cookie_prefix: "rsg",
      cookie_expires: MAX_AGE / 1000,
      cookie_flags: "SameSite=Lax;Secure",
      page_location: location.origin + location.pathname,
      page_referrer: safeReferrer()
    });
    const tag = document.createElement("script");
    tag.id = "rsg-google-tag";
    tag.async = true;
    tag.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
    document.head.appendChild(tag);
  }

  function stop() {
    const wasActive = active;
    active = false;
    window[DISABLE] = true;
    clearAnalyticsCookies();
    // Reload to unload Google's listeners completely. No denied-consent ping is
    // sent; the next document starts blocked and reads the saved rejection.
    if (wasActive) location.reload();
  }

  function scheduleExpiry() {
    clearTimeout(expiryTimer);
    if (!valid(choice)) return;
    // setTimeout is capped below its signed 32-bit limit for long-lived tabs.
    expiryTimer = setTimeout(checkExpiry, Math.min(MAX_AGE - (Date.now() - choice.updatedAt) + 10, 2147483647));
  }

  function checkExpiry() {
    if (choice && !valid(choice)) {
      choice = null;
      stop();
      showSettings();
    } else scheduleExpiry();
  }

  function choose(value) {
    choice = { version: 1, choice: value, updatedAt: Date.now() };
    persist(choice);
    updateStatus();
    hideSettings();
    if (value === "granted") start();
    else stop();
    scheduleExpiry();
  }

  // Public UI helper only; no event-tracking API and no identifiers are exposed.
  window.retroSoulAnalytics = Object.freeze({ openSettings: () => showSettings() });
  settings.forEach((button) => {
    button.hidden = false;
    button.addEventListener("click", showSettings);
  });
  banner.querySelectorAll("[data-analytics-choice]").forEach((button) => {
    button.addEventListener("click", () => choose(button.dataset.analyticsChoice));
  });
  close.addEventListener("click", hideSettings);
  banner.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && valid(choice)) {
      event.preventDefault();
      hideSettings();
    }
  });
  window.addEventListener("storage", (event) => {
    if (event.key !== KEY && event.key !== null) return;
    choice = read();
    updateStatus();
    if (!choice || choice.choice === "denied") stop();
    else start();
    banner.hidden = !!choice;
    scheduleExpiry();
  });
  window.addEventListener("focus", checkExpiry);
  document.addEventListener("visibilitychange", checkExpiry);

  choice = read();
  updateStatus();
  if (choice && choice.choice === "granted") start();
  else clearAnalyticsCookies();
  if (!choice) showSettings();
  scheduleExpiry();
})();
