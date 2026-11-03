# v3.5 — Production launch package QA

Prepared 3 November 2026 for owner upload after public Google Play availability. This package is not deployed. Its release copy is intentionally prepared in advance at the owner's request.

## Completed checks

- All eight HTML pages parse with matching tags, unique IDs, one H1 and working local asset/navigation/fragment paths.
- Obsolete group/opt-in URLs, closed-testing instructions, 14-day requirements and In Testing statuses are absent from HTML and games.json.
- Seven official Google Play links use the exact package URL, open a new tab and include `rel="noopener"`.
- Homepage/catalog/game meta descriptions, Open Graph descriptions and Twitter descriptions use the launch presentation. Canonical URLs, sharing images and sitemap are unchanged.
- All 15 Chronicle character profiles, Ren/Hana story paragraphs, quote, image/video/source elements and gallery markup are preserved. Ending spoilers remain collapsed.
- 53 protected files are byte-identical to the repository snapshot, including Studio, Contact, website privacy, all assets, scripts and app-ads.txt. The external game policy was fetched successfully and was not modified.
- analytics.js and the complete consent/footer HTML remain byte-identical. The existing consent harness passed all 14 cases against this package's analytics.js: no consent, acceptance/rejection, saved/invalid/expired choices, repeated acceptance/duplicate execution, blocked storage, withdrawal, cross-tab updates, expiry, local previews and settings focus/Escape.
- `node --check` passed for script.js and analytics.js. `git diff --check` passed. Stylesheet braces and the versioned stylesheet links were checked.
- This is a buildless static site; there is no build/install task to run.

## Public listing and browser limits

The anonymous Google Play request and the in-app browser both returned Not Found for the official listing during preparation. The owner confirmed the release is still in review and will upload this launch version only after it becomes available. Production version 4.14.30 (56) comes from the owner's instructions; no Play Console changes were made.

The local IPv4 preview server passed its own HTTP 200 readiness check. The in-app browser could not reach the local preview (connection timed out). Native Desktop Chrome control was then stopped by the computer-use tool because it could not determine the current browser URL confidently enough to enforce its policy. No further computer input was attempted. Therefore **new desktop/mobile rendering, actual Android Chrome, scrolling, video playback and image-viewer interaction were not visually verified for this package**. Existing scripts/media are unchanged, but source checks are not a substitute for those browser checks. No GA4 traffic was generated and no report receipt is claimed.

## Post-upload owner checklist

- [ ] Confirm public Google Play availability from a non-tester account/device before uploading this package.
- [ ] Open all clean site URLs in Desktop Chrome and Android Chrome; check 320px/390px mobile widths, tablet, wide desktop and 200% zoom.
- [ ] Check availability badges do not overlap artwork labels. Check the Google Play button is readable, at least 49px tall and easy to reach on mobile.
- [ ] Test mobile Menu, global navigation, footer policies, Chronicle navigation and collapsed ending.
- [ ] Play/pause the existing video and open all four gallery images; check previous/next, arrows, Escape and returned focus.
- [ ] Before consent and after Reject, confirm no Google tag/collection request. After Accept, confirm one Google tag initialization and a page_view per document.
- [ ] Follow Get it on Google Play, then verify the GA4 click destination and Realtime events using ANALYTICS.md.
- [ ] Withdraw consent from the footer and verify blocking/cookie removal after reload.
- [ ] Confirm app-ads.txt and the external game privacy page remain available and unchanged.
