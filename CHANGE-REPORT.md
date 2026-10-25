# v3.1 — Closed-test update

Added the three owner-supplied Google Group, opt-in and Google Play installation links on the game page. Added Join the Closed Test actions on Home, the catalog and the game hero; added the 14-day opt-in request, same-account guidance and closed-test availability wording. Preserved all v3 pages, media, branding, ads verification and privacy links. No publication occurred.

# Website v3 — Change report
25 October 2026

## Changed from v2
- Split the long single-page presentation into Home, Our Worlds, Cedar Shadows: Hana, The Studio and Contact.
- Shortened Home to the retained gateway hero, concise introduction and first-game preview.
- Moved the full story, actual gameplay, gallery and release information onto the dedicated game page.
- Added shared static navigation/footer with active-page state, breadcrumbs and native mobile Menu.
- Added restrained desktop portal glows/labels; Hana links to its page and other portals show clearly unannounced possibilities.
- Increased body text, secondary text and action sizes; tightened large gaps.
- Added unique metadata and canonical URLs per page, a five-URL sitemap and a game-specific sharing image.
- Added an explicit future-release location without a public download claim.

## Preserved
The original v2 ZIP is the source. All original assets are preserved byte-for-byte, including gateway art, RS emblem, story illustrations, screenshots and the exact 18-second gameplay clip. The palette, heading style and cinematic composition remain. Root app-ads.txt is unchanged, and the external privacy repository remains untouched.

## How navigation works
Every page is a real directory/index.html document. Relative directory links work on GitHub Pages without routing or a build step. Static HTML navigation works without JS. Native mobile details/summary provides accessible opening and closing; JS adds Escape/outside-click behavior. A file-only enhancement makes extracted local directory links open index.html directly.

## Adding a game
Reuse the catalog card markup and game-page structure; replace all content with approved game data, use correct relative paths and unique metadata, add its actual URL to the sitemap and update the authoring reference games.json. README contains the detailed procedure.

## Known limitations
The browser URL policy rejected local file previews. No policy workaround was attempted. Actual visual rendering, mobile overflow, portal alignment, video playback and browser console state have not been verified in-browser. Source and interaction-logic checks are documented separately. Owner browser review is required before publishing. No new game is announced and nothing has been deployed.
