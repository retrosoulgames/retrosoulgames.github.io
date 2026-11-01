# v3.4 GA4 checks — 1 November 2026

Prepared against the current public repository commit `133decd6c9f0f3374cb3cff4497aa037e3b70d89`. This package has not been uploaded or deployed; no Google Analytics account settings were changed.

- PASS: all eight HTML pages contain one consent script/style include, accessible consent controls and the unchanged game-policy link.
- PASS: 14 isolated runtime checks covering no consent, rejection, acceptance, repeated acceptance, duplicate execution, saved choices, invalid/expired choices, blocked storage, withdrawal, cross-tab changes, expiry, local previews and settings keyboard/focus behavior. The harness tests our loader and UI logic; it does not execute Google’s remote library.
- PASS: no Google script/config is requested by our code before acceptance; no manual page-view or outbound-click event duplicates Google’s automatic events.
- PASS: the public official Google tag returned for `G-VBMXXRL2V6` declares automatic page views and outbound clicks enabled. This is configuration evidence only.
- PASS: original HTML content matches production after removing the explicit consent additions. Existing artwork, base styles, video, `script.js`, game data and `app-ads.txt` are byte-for-byte unchanged from production Git source. The ads file has its existing single trailing newline (59 bytes total).
- PASS: internal links, asset paths, fragments, tag nesting, unique IDs, English-only HTML, one H1 per page, seven unique content canonicals and matching sitemap.
- PASS: all three supplied closed-test URLs, In Testing status and the 14-day request are preserved.
- PASS: JavaScript syntax checks.

Browser rendering of this update and real GA4 collection/report receipt are **not verified**. The previously unavailable local-preview infrastructure has not been retried without a concrete repair. No live test traffic was generated. Follow the Network, consent, keyboard/mobile and Realtime checklist in `ANALYTICS.md` after uploading. The external Android privacy page was read successfully and is unchanged; no game or AdMob files are included.

---

The sections below describe earlier review packages and their historical verification limits.

# v3.3.1 delta QA

Source checked: both outdated cover references are removed from active HTML, the new shared image resolves, CSS framing has a reserved promo aspect ratio, and Chronicle sharing dimensions match the new image. Cross-page source/link checks run for this package. This is an image-presentation-only patch; shared scripts and all content/verification resources are retained. Browser visual inspection remains unverified.

# Website v3.3 — Artwork update QA
31 October 2026

## Passed checks
- Seven structurally checked HTML documents: six content pages and 404. One H1 each; IDs are unique.
- All local links, fragments, images, posters, scripts, stylesheets and video paths resolve.
- Unique titles, descriptions and canonicals for all six content pages; sitemap matches the real URLs.
- All site HTML is English-only.
- All fifteen character biographies match v3.2 exactly. Ren and Hana use their respective CSS views of the supplied character sheet, with full-sheet links.
- Portrait windows stay inside the original 1779 × 884 sheet and preserve its aspect ratio. Labels sit below the artwork rather than over the figures.
- Banner-window scale math was checked for desktop/mobile container sizes. Only the source's upper 510 pixels can appear; the menu buttons are outside that window.
- The complete new home screen is a separate, uncropped, clearly labelled image, included in the existing gallery.
- Four gallery images have sequential indices, and the viewer heading now says Gallery. Shared JavaScript is unchanged.
- New images decode and match their declared source dimensions. The game-page social metadata declares 1671 × 941 for the supplied full-screen image.
- Forty-two protected previous assets/base files compare byte-for-byte with v3.2, including studio art, gameplay media, scripts, base styles, ads file and untouched pages.
- Closed-test URLs, In Testing status, 14-day request, privacy links and collapsed ending spoilers are preserved.
- Root app-ads.txt remains the exact required 58-byte record, without BOM or newline.
- CSS braces balance; image sources and explicit dimensions are present. No new JS dependency, external image service, tracking or form was added.
- ZIP CRC, root layout and required new assets checked after packaging.

## Verification limit
These are source, content, asset and geometry checks. Actual desktop/mobile browser rendering, portrait framing, text/image overlap and the four-image viewer have not been exercised in-browser. The previously attempted local preview route is unavailable in this environment; no unchanged failed preview attempt or alternate browser-control route was used. The README identifies the local review steps. No visual certification or performance score is claimed.

The supplied images were fully re-encoded for web delivery; no AI redraw, retouch or raster crop was performed. All framing is in website CSS, and the complete reference sheet/home screen remain accessible. Nothing was published and no game or remote repository was modified.
