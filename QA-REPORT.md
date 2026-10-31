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
