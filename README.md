# RetroSoul Games — Website v3.3.1
Review package · 31 October 2026

This is an evolution of the supplied v2 ZIP. Its gateway artwork, circular RS emblem, midnight/gold palette, serif headings, game concept illustrations, actual gameplay screenshots and 18-second silent video are retained. No repository, account setting or deployment has been changed.

## Pages
- `/` — a shorter cinematic introduction and first-world preview.
- `/worlds/` — permanent catalog; one current game, with no invented announcements.
- `/worlds/cedar-shadows-hana/` — game hero, story, facts, video, screenshots, testing notice and privacy link.
- `/worlds/cedar-shadows-hana/chronicle/` — the English illustrated story companion, character profiles, Order hierarchy and five chapters; ending spoilers are collapsed.
- `/studio/` — studio philosophy across genres.
- `/contact/` — studio email action; no backend form.
- `404.html` — missing-page response.

Each directory has its own index.html. All primary pages have unique title, description, canonical URL and sharing metadata. The game uses an additional sharing image derived from its retained concept art. The sitemap lists only the six real content URLs.

## Local review
Extract the entire ZIP before opening `index.html`. With JavaScript enabled, directory links are adapted automatically for direct file opening. If JavaScript is disabled, or for the most accurate clean-URL review, serve the extracted directory over local HTTP:
`python -m http.server 8000`
Then open http://localhost:8000/ . No npm install or build step is required.

All actual site navigation uses relative directory links. Production canonical URLs remain on https://retrosoulgames.github.io/ . Direct file opening is a convenience; local HTTP is the recommended preview.

## Deploy only after approving the review
1. Back up the existing `retrosoulgames/retrosoulgames.github.io` root repository.
2. Copy the ZIP CONTENTS into that repository root. Keep `worlds/`, `studio/`, `contact/` and `assets/` as directories; do not add an extra enclosing folder. Retain `.nojekyll`.
3. Do not delete unrelated repository files or workflows. If root `app-ads.txt` already matches the included record, leave the existing file unchanged. The package record is exactly 58 bytes with no BOM or newline:
   `google.com, pub-9369958314749030, DIRECT, f08c47fec0942fa0`
4. Publishing commits to an already configured Pages branch can immediately publish the change. Commit/upload only after owner approval.
5. In repository Settings → Pages → Build and deployment, use Deploy from a branch, `main`, `/(root)`. If already configured, retain those settings.
6. Wait for the Pages deployment to succeed. Visit every clean URL, reload a nested page directly and check the missing-page response.
7. Verify https://retrosoulgames.github.io/app-ads.txt still returns the exact record.
8. Verify https://retrosoulgames.github.io/cedar-shadows-privacy/ is still available.

Do not edit, move, overwrite or delete the separate `cedar-shadows-privacy` repository. This package only links to it and contains no replacement privacy policy. It does not alter the website URL already used by Google Play Console.

GitHub reference: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Shared navigation and footer
All six pages include the same navigation and footer as static HTML, so they work without JavaScript or a runtime fetch. `aria-current="page"` identifies the current main page. On the game page Our Worlds is visually marked as the parent section; the breadcrumb links to its catalog.

Below 700px, navigation uses native HTML details/summary: Menu opens and closes with mouse, touch, Enter or Space without JS. JS adds outside-click and Escape closing. Focus remains visible.

## Gateway interaction
The original illustration is unchanged. On desktop above 1100px, JS positions restrained portal hit areas using the original 1536 × 1024 coordinate system and the hero image's cover crop. Hover/focus reveals a small gold glow and label. The central portal links to Hana. The other two are informational buttons: click/Enter toggles “More Worlds Await” and an explicit “No game announced” message. They do not navigate or advertise a project. Escape dismisses the labels.

On smaller screens, hotspots are disabled in favor of a clear Hana text link and the catalog CTA. The same links remain available with JS disabled. The geometry is source-checked but has not been visually validated in-browser in this environment; check placement before publication. If the hero image size, crop, object-position or composition changes, update the map logic/coordinates together, or disable the hotspots. Visual quality takes priority over this enhancement.

## Edit existing content
- Edit the relevant page's index.html for text and links.
- `styles.css` is the retained v2 design. `v3.css` layers page layouts, typography, spacing, navigation and portal styles on it.
- `script.js` retains the gallery and adds shared navigation, direct-file link support and portal mapping. No library or backend is required.
- Media stays in the original `assets/` directory to preserve stable, simple paths.
- Keep actual gameplay and concept artwork labelled distinctly. No finale art is shown.
- Contact is `retrosoulgames.dev@gmail.com`, supplied in the Play Console screenshot.
- Before public release, keep every status as In Testing. Update the homepage card, catalog card, game hero, facts, availability panel, descriptions and `games.json` together.
- The game page links to the owner-supplied closed-test signup and installation URLs. Keep closed-test access separate from a future public release; update the availability wording only when a public release is confirmed.
- The video uses native controls, no autoplay, no audio and `preload="none"`. Gallery links open original WebP assets without JS; native dialog enhancement adds Previous/Next, arrow keys, Escape and focus restoration.
- Do not add trackers, remote dependencies or storage unless separately requested.

## Add another game
1. Choose a real announced game's slug and create `worlds/your-game-slug/index.html`, using the existing Hana page as a structural reference.
2. Replace its title, copy, facts, availability and all artwork with approved material for that game. Remove features/media that do not apply. Never leave Hana's story or privacy link attached to a different game.
3. Set a unique title, description, canonical, OG URL and sharing image. Use `../../` for shared assets and site-root links from a game page.
4. Copy the existing `.game-card` article in `worlds/index.html`; update metadata, artwork alt text, status, summary and game-page link. The catalog cards use the same reusable markup and CSS.
5. Add a matching record to `games.json`. This is an authoring reference, NOT runtime data: HTML remains hand-editable and requires no build or fetch.
6. Update the homepage preview only if useful. Keep the homepage concise.
7. Add the actual clean game URL to `sitemap.xml`.
8. Apply any shared navigation/footer change consistently across all pages, including 404. Relative paths differ by depth; copy them from the page at the same depth.
9. Run the QA checklist below.

## Final review checklist
- [ ] Inspect every page in desktop, tablet and mobile browsers (320, 390, 768, 1024, 1440px).
- [ ] Check image crop, headline contrast, portal alignment and no horizontal overflow.
- [ ] Activate global links, logo, cards, breadcrumbs, mailto and privacy links.
- [ ] Test mobile Menu opening/closing, keyboard focus and Escape.
- [ ] Test every screenshot, Previous/Next, arrows, Escape, touch and returned focus.
- [ ] Play/pause the native video on desktop and mobile.
- [ ] Check JS disabled, reduced motion and 200% zoom.
- [ ] Check direct navigation/reload of nested production URLs.
- [ ] Confirm current status, contact address and story language with the owner.
- [ ] Verify ads record, privacy page, sitemap and social previews after deployment.

Read `QA-REPORT.md` for checks performed and verification limits; `CHANGE-REPORT.md` for the concise v2→v3 summary; `ASSET-NOTES.md` for original media provenance.

## v3.1 — Closed-test access
The game page now has a three-step `#closed-test` section, linked from its hero, Home and Our Worlds:
1. Join https://groups.google.com/g/cedar-shadows-testers
2. Opt in at https://play.google.com/apps/testing/com.moonveil.forestembers
3. Install through https://play.google.com/store/apps/details?id=com.moonveil.forestembers

The owner supplied these exact links. They could not be independently fetched by the web tool; signed-in group membership, opt-in and installation were not tested. No Google account action was performed.

The site asks visitors to use the same Google account for all three steps and stay opted in for at least 14 days. This is the studio's request; the site does not promise production approval or track participation. Availability remains In Testing, and installation is described as closed-test access, not a public release.

When the game publicly releases, revise the testing invitation and availability wording together. Until then, retain the account/eligibility guidance and make sure Google Group membership and the Play Console tester configuration stay consistent. No change to those services is made by this website package.


## v3.2 — The Cedar Chronicle integration
New production path: https://retrosoulgames.github.io/worlds/cedar-shadows-hana/chronicle/

The supplied Cedar-Shadows-Legend-HTML-v2 page is integrated as an English-only story companion. Its complete English lore, 15 profiles, 21 illustrations, Order hierarchy, five-chapter route and optional ending are retained. The supplied Georgian translation dictionary and language controls are not included.

The original main-site pages remain the studio shell. Game overview and Chronicle share a local game-navigation row; links on the game page and catalog make the new page discoverable. The homepage remains concise and genre-neutral. Existing closed-test actions remain intact.

The standalone source embedded every image in a roughly 5.25 MB HTML file. The integrated Chronicle HTML is roughly 30 KB. Its 21 source WebP files are extracted byte-for-byte into `assets/chronicle/`, with dimensions reserved and below-the-fold images lazy-loaded. The initial page no longer carries every image in its HTML. All original transparency is retained. No new character artwork was generated.

Edit Chronicle text in `worlds/cedar-shadows-hana/chronicle/index.html`. Its visual rules live in `chronicle.css`, scoped to `.chronicle-page` so its Japanese-inspired identity does not alter the studio homepage. The small game-navigation and story-preview rules in that stylesheet are shared with the game and catalog pages. No extra JavaScript, runtime translation, build step or external library is added.

Keep the `details#ending` element CLOSED by default (do not add `open`). The visible spoiler note also clarifies that the ending is part of Hana's story, not an announcement of another game. The overview remains spoiler-light. The Chronicle identifies its content as world lore and illustration; story presentation may differ from the test build.

Preview the page through its links from the game overview, then test the chapter links, hierarchy links, first-rescue disclosure, ending disclosure and mobile Menu. The existing file-opening helper supports the new directory depth; local HTTP remains the recommended review method. Inspect the six real pages before deployment. The preview server in this environment started but its loopback readiness request timed out, so browser layout and interaction QA remain unverified here. No hosting or repository changes were made.


## v3.3 — New Ren/Hana references and current home screen
The two owner-supplied images are now used without redrawing or retouching. Full-size WebP encodes keep the original compositions at 1779 × 884 and 1671 × 941; a full-image JPEG is provided for the game-page social preview.

- Chronicle: Ren and Hana have separate CSS-framed views of the supplied reference sheet, showing each full figure and both facial views. Profile metadata sits below the art. View full character sheet links open the complete sheet. Their written biographies are unchanged.
- Homepage/catalog/game overview: game banners now use only the top artwork from the new game home screen, keeping the actual menu buttons outside the banner window. The studio's gateway hero remains unchanged.
- Game overview: a full, uncropped home-screen figure shows Story, Endless and Memories and can open in the existing image viewer. It is labelled as a game home screen; the controls inside the image do not act as website buttons.
- The existing gallery now has four images: home screen followed by the three gameplay captures. The viewer caption says Gallery; shared viewer JavaScript is unchanged.
- The game's social metadata points to the full new screen and declares its real dimensions. The studio-wide sharing image is unchanged.

New presentation rules are in `art-update.css`, loaded after the existing site styles on the four affected pages. `ART-UPDATE-MEDIA.json` documents source hashes, exact dimensions and source-coordinate display windows. The previous reference portraits and other artwork remain in the package as provenance; no original source was overwritten.

When replacing these supplied images later, update the dimensions and CSS display windows together. The portrait windows are Ren [25,55,850,807] and Hana [905,55,850,807], measured from the same 1779 × 884 sheet. Banner framing uses only the top 1671 × 510 region of the 1671 × 941 home screen. These are CSS windows, not edited bitmap files. The full screen and full sheet links always show the uncropped images.

Review the two portraits and banner framing at desktop and mobile widths, open the home screen in the viewer, check previous/next navigation across four images, and verify the complete reference-sheet links. Browser rendering remains unverified in this environment because the previously established local-preview route is unavailable. All content stays in English. In Testing status, three signup URLs, 14-day request, app-ads.txt and existing privacy links are preserved. Nothing has been deployed.


## v3.3.1 — Chronicle cover consistency
The outdated Chronicle cover is no longer displayed. Its overview invitation and Chronicle hero now use CSS-framed artwork from the updated game home screen. Chronicle sharing metadata also uses the new supplied screen. Existing source assets are retained as inactive provenance; no source artwork was deleted. Copy, navigation, profiles, closed-test steps and all verification resources are unchanged.
