# RetroSoul Games — GA4 integration

Analytics implementation prepared 1 November 2026; guide updated 3 November 2026 for the owner’s future production-launch package. Analytics code and consent behavior are unchanged.
Measurement ID: **G-VBMXXRL2V6**. No repository or account settings were changed; the owner will upload this package.

## What is included

- Every HTML page loads the same local `analytics.js` once, with `defer`, and `analytics-consent.css`. This includes the homepage, catalog, game overview, Chronicle, Studio, Contact, 404 and the new `privacy.html`.
- The official asynchronous `https://www.googletagmanager.com/gtag/js?id=G-VBMXXRL2V6` is loaded only after explicit analytics consent or a still-valid previously saved acceptance. It is never loaded by the site before a choice, after rejection, or in local/file previews. No Google preconnect, pixel or cookieless consent ping is added before consent.
- One `gtag('config', …)` per document generates the initial `page_view`. There is no manual page-view event or second Analytics/Tag Manager installation.
- Outbound clicks use GA4's own **Enhanced Measurement**, producing the standard **`click`** event with `outbound`, `link_domain` and `link_url`. No overlapping custom click listener was added. The public Google tag returned for this ID on 1 November 2026 declares `vtp_enableOutboundClick: true` and `vtp_enablePageView: true`; this is configuration evidence, not proof of receipt in reports.
- The Play Store action is a `click` with `link_domain = play.google.com` and `link_url = https://play.google.com/store/apps/details?id=com.moonveil.forestembers`. A click measures someone following the link, not an installation.
- Consent uses Google's **basic consent mode**. `analytics_storage` is granted only on acceptance. `ad_storage`, `ad_user_data` and `ad_personalization` remain denied. Google Signals and ad personalization are disabled in the website tag. Android and AdMob are outside this change.
- Initial page/referrer URLs passed to the tag omit query strings and fragments. No user ID, user data, custom dimensions or form values are supplied by this integration.

## Consent behavior

The English banner offers equally styled **Accept analytics** and **Reject analytics** buttons. It is a non-modal region: browsing is possible without making a choice, and ignoring it leaves analytics off. There is no automatic acceptance through scrolling or navigation.

Use **Analytics settings** in any footer to reopen the choice. **Keep current choice** or Escape closes the reopened banner without changing consent. On an initial visit, no choice is saved unless a decision button is selected.

The preference is stored locally as `rsg.analytics-consent.v1`, containing only its version, choice and timestamp, for 180 days. Both acceptance and rejection are remembered. Invalid, expired and future-dated choices fail closed. If local storage is blocked, an explicit choice applies only to the current document.

The website uses `rsg_ga*` cookie names, host-only cookies and a maximum cookie age of 180 days. A later consented visit may refresh cookie expiry. Rejecting after acceptance sets GA's disable flag, clears only those prefixed website analytics cookies and reloads the page to unload Google's code/listeners. This can stop a playing video. Other open tabs respond to preference changes; long-lived tabs also check consent expiry. Previously collected data is not retrospectively erased by withdrawing consent.

The separate **website** policy is `https://retrosoulgames.github.io/privacy.html`. The existing **game** policy and repository at `/cedar-shadows-privacy/` remain unchanged. `app-ads.txt` is preserved byte-for-byte from the current production Git source, including its existing trailing newline.

## Upload to the existing GitHub Pages repository

1. Back up the existing repository, then extract the package.
2. Upload the **contents** to `retrosoulgames/retrosoulgames.github.io`, retaining the existing directory structure. Do not upload the ZIP itself or put its contents inside an extra parent directory. Do not delete unrelated files or workflows.
3. For the production-launch package’s changed-file list, see `LAUNCH-REPORT.md`. The existing analytics and privacy files are retained; `app-ads.txt` requires no change.
4. Keep the current Pages publishing settings. Commit the files and wait for GitHub's existing Pages deployment to finish. Do not modify the Android project, AdMob configuration or `cedar-shadows-privacy` repository.
5. Hard-refresh the homepage and a nested game/Chronicle page. Ensure that all three new public assets (`analytics.js`, `analytics-consent.css`, `privacy.html`) return successfully. Check the footer's website/game policy links.

## Verify after upload

Use a fresh private browser session and temporarily disable an ad blocker **for your own verification session** if it blocks Google Analytics. Do not change visitors' browser settings.

1. Open browser Developer Tools → Network, enable **Preserve log**, and load the public homepage. Before choosing anything, there should be no request to `googletagmanager.com/gtag/js`, Google Analytics `g/collect`, or analytics cookie beginning `rsg_ga`.
2. Choose **Reject analytics**, follow an internal link and reload. Confirm that optional Google requests and analytics cookies remain absent. The banner should stay dismissed; footer settings should reopen it.
3. Open **Analytics settings → Accept analytics**. Expect one `gtag/js?id=G-VBMXXRL2V6` request in this document. Filter Network for `collect`; GA4 requests should contain `tid=G-VBMXXRL2V6`. Requests can batch events, so count `page_view` events, not simply the number of HTTP requests.
4. Follow an internal page link. Expect one initial `page_view` for that new document, not two. Reopening settings and accepting again on the same page must not configure or load the tag again.
5. On the game page, follow **Get it on Google Play** to the supplied Google Play listing. With Preserve log enabled, verify the GA4 `click` event, `outbound=true`, and the intended `link_url`. No installation needs to be completed for this verification.
6. Withdraw via **Analytics settings → Reject analytics**. The page reloads, `rsg_ga*` cookies disappear and further page navigation must not load the Google tag. Test this with another site tab open too.
7. Test keyboard access (Tab, Enter, Space and Escape), visible focus, small mobile widths and 200% zoom. Ensure the banner scrolls if necessary and the existing navigation/gallery still work.

### Realtime in Google Analytics

1. Sign in at [Google Analytics](https://analytics.google.com/) and select the property whose web stream uses **G-VBMXXRL2V6**.
2. Open **Reports → Realtime** (or **Realtime overview** in the current report menu).
3. In a separate browser tab, visit the uploaded website, choose **Accept analytics**, browse two pages and follow the Google Play link.
4. Allow a few minutes. Look for **`page_view`** and **`click`** under **Event count by event name**, and the page titles under **Views by page title and screen name**. Inspect the click's parameters or a user snapshot to check `link_url` and `link_domain` when available.
5. If outbound events are missing, check **Admin → Data streams → the website stream → Enhanced measurement → Outbound clicks** is enabled. It was enabled in the tag configuration inspected during preparation; keep it enabled. Also check that the Play domain has not been configured as part of cross-domain measurement, which can change outbound classification.
6. If there is still no data, check consent acceptance, the Measurement ID, published file versions, network blocking, internal/developer traffic filters and Realtime reporting delays. Ordinary historical reports can take longer to populate. A locally opened ZIP deliberately does not send Analytics traffic.

No authenticated Analytics or stream settings were changed. A successful local test or a `collect` request alone does not prove that data appears in the intended GA4 property. Confirm report receipt after the owner uploads this version.

## Future maintenance

- New pages should copy the consent includes, footer controls and consent region from an existing page at the same directory depth. Root-relative assets in `404.html` are intentional.
- Keep the Measurement ID in **one** place in executable code: `analytics.js`. Do not paste another Google tag or GTM snippet into individual pages.
- Keep default/advertising consent denied. Do not replace the gated loader with an unconditional script tag. Review and update the website policy whenever measurement changes.
- Raising the preference version/key is appropriate when asking for materially new consent; do not silently reuse previous analytics consent for advertising.
- GA4 property-level retention, regional settings, data filters and any account-level advertising/user-data features are controlled in Google Analytics, outside this code package. Review those in the account to match the studio's actual policies. The website's basic-consent implementation is not a legal-compliance certification.

## Official references

- [Google: implement basic consent mode](https://developers.google.com/tag-platform/security/guides/consent?consentmode=basic)
- [Google: enhanced measurement events and outbound clicks](https://support.google.com/analytics/answer/9216061)
- [Google: page views and avoiding duplicate events](https://developers.google.com/analytics/devguides/collection/ga4/views)
- [Google: configuration fields and cookie controls](https://developers.google.com/analytics/devguides/collection/ga4/reference/config)
- [Google: GA4 Realtime report](https://support.google.com/analytics/answer/9271392)
- [ICO: cookies and appropriate consent for nonessential storage](https://ico.org.uk/for-the-public/online/cookies)
