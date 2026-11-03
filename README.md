# RetroSoul Games — Website v3.5 / Production launch package

Prepared 3 November 2026 from the existing GitHub Pages repository, commit `cdb954126d0862760095763ab0bc3b23e60e1e21`.

**Prepared for publication after Google Play availability is confirmed. This package has NOT been published.** At preparation time, the public store listing returned 404 and the owner confirmed the release was still under review. At the owner's explicit request, this future launch package already says **Available on Google Play** and uses **Get it on Google Play** actions. Upload it only when you are ready to announce actual public availability. The `publiclyReleased` value in `games.json` describes this prepared launch presentation, not a newly verified live release.

## What changed

- Homepage, Our Worlds and game overview: availability labels and descriptions now present the Google Play launch. Existing Explore This World/navigation actions are retained.
- Seven Google Play links across the homepage, catalog, game overview and Chronicle use the exact official listing URL: `https://play.google.com/store/apps/details?id=com.moonveil.forestembers`.
- The old group/opt-in/three-step block is replaced with a Google Play Availability section and a large mobile-friendly button. The former group and opt-in URLs and participation-duration instructions are absent from HTML and game data.
- Gameplay video and screenshot notes identify development/earlier-build footage. They do not claim to show version 4.14.30.
- Chronicle navigation points to Google Play; its introduction no longer describes the game as undergoing testing. All 15 character profiles and story content are retained.
- `games.json` records production version 4.14.30 (56), provided by the owner. It is an authoring reference, not runtime data.
- `v3.css` adds bounded storefront/availability layout rules using the existing colors and typography. A versioned CSS URL on the four updated pages requests the new styles after upload.

## What is preserved

The original studio gateway, RS emblem, fonts, palette, animations, concept art, gameplay video, four-image viewer, story, characters and Memories/Story home-screen presentation are retained. Studio, Contact, website privacy, external game privacy policy, `app-ads.txt`, `analytics.js`, `analytics-consent.css`, `script.js`, base styles and all media are unchanged. Existing canonical URLs, social images, page structure and sitemap are preserved.

GA4 continues to use `G-VBMXXRL2V6`, with optional Google code blocked before consent. Accept/Reject, stored preferences and footer settings are unchanged. Google Play clicks use existing GA4 Enhanced Measurement; no second tracker or custom click handler was added.

## Pages

- `/` — studio homepage.
- `/worlds/` — game catalog.
- `/worlds/cedar-shadows-hana/` — game overview and Google Play availability (`#google-play`).
- `/worlds/cedar-shadows-hana/chronicle/` — illustrated story companion; ending remains collapsed.
- `/studio/`, `/contact/`, `/privacy.html` and `404.html` — existing pages, unchanged.

## Owner upload

1. Confirm the Google Play listing is visible to a non-tester and that the launch can be announced. The preparation-time listing was not yet publicly available.
2. Back up `retrosoulgames/retrosoulgames.github.io`.
3. Extract the **contents** of the full-site ZIP into the existing repository root, preserving directories. Do not upload an enclosing folder or the ZIP itself. Alternatively, use the changed-files ZIP and replace its listed files in their matching paths.
4. Preserve unrelated files, workflows and the existing Pages settings. The existing `app-ads.txt` and separate `cedar-shadows-privacy` repository require no changes.
5. Commit/upload and wait for the existing GitHub Pages deployment. The assistant has not uploaded, committed, pushed or deployed this package.
6. Refresh the site. If old styles remain cached, use a hard refresh; affected pages request `v3.css?v=3.5`.
7. Verify the homepage, catalog, game page, Chronicle, Google Play link and consent behavior. Follow the post-upload checklist in `QA-REPORT.md` and the Realtime instructions in `ANALYTICS.md`.

No build step, installation or external paid dependency is required. For local review, run `python -m http.server 8000` from the extracted site directory and open `http://localhost:8000/`. Local previews deliberately do not load Google Analytics, even after acceptance.

## Editing later

Edit each page's HTML directly. `styles.css` is the base design, `v3.css` contains page/action layout, `chronicle.css` contains story-specific styles and `art-update.css` contains supplied-art framing. Keep shared consent markup, privacy links and relative path depths consistent when adding pages. Preserve `details#ending` without an `open` attribute. Do not paste a second Google tag into a page; consult `ANALYTICS.md` before measurement changes.

`LAUNCH-REPORT.md` lists changed files, verification and limitations. Older asset/change reports in the package are provenance for earlier review versions.
