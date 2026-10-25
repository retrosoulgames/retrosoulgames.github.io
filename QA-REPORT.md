# v3.1 — Closed-test update QA

PASS: exact three supplied URLs, ordered signup steps, 14-day request, same-account guidance, homepage/catalog anchor links, cross-page source checks and preserved media/ads record. Existing JavaScript is unchanged from tested v3. No Google account was used; external group membership, opt-in and installation have not been exercised. The web tool could not fetch the supplied external pages. Visual browser limitations described below remain.

# Website v3 — QA report
25 October 2026

## Passed source checks
- Six HTML documents: five real content pages and a consistent 404 page.
- Proper explicit HTML tag nesting, unique IDs and one H1 per page.
- Every relative/root-relative link, fragment, image, poster, stylesheet, script and video resolves to an included destination.
- All five content pages have unique title, description and canonical URL; Open Graph and social metadata are present.
- Three consistent navigation surfaces per page: desktop, mobile and footer.
- Current-page aria-current attributes; Our Worlds parent-section marking on the Hana page.
- Sitemap contains exactly the five canonical content URLs.
- All ten original v2 assets compare byte-for-byte with the source ZIP.
- Root app-ads.txt compares byte-for-byte with v2 and the exact required 58-byte record.
- Game sharing image is 1200 × 630; all retained WebP files decode.
- Source includes image alternative text and reserved dimensions (except the dynamic modal image).
- Homepage excludes the full game video/story/studio/contact sections.
- Game page contains native video controls, preload=none, no autoplay, and an explicit release-location notice.
- No backend form, placeholder store link, invented game or public-release claim.
- JavaScript syntax passes Node --check.
- ZIP entry paths, root index.html, required pages and CRC integrity checked after packaging.

## Passed interaction logic checks
Actual script.js was executed with a small mocked DOM (no browser rendering or policy workaround):
- Direct-file directory-link adaptation.
- Cover-image scale/offset calculation for the 1536 × 1024 retained hero.
- Mutually exclusive future-portal expanded state and Escape dismissal.
- Mobile Menu Escape closing and summary focus.
- Gallery opening, previous/next wraparound, arrow navigation, closing and returned opener focus.
These verify logic, not browser layout or native behavior.

## Source review
- Midnight/gold v2 styling retained with larger body and secondary text, tighter section gaps and visible focus.
- Native details/summary mobile menu works without JavaScript; normal static links remain primary navigation.
- Portal hotspots only enhance desktop above 1100px; the same destinations are clear links on smaller screens and without JS.
- Future portals are informative buttons, not links to invented games.
- Gallery uses native dialog, explicit Close, Escape, touch-sized controls and ordinary image-link fallback.
- Reduced-motion CSS retained; no autoplay or decorative animation.
- 404 resource/navigation paths resolve from the domain root for nested unknown URLs.
- No changes to the external privacy-policy repository or live GitHub settings.

## Verification limits
The browser URL policy rejected the local file preview because file: URLs are not allowed. No workaround, alternate browser surface or indirect browser execution was attempted. Actual rendered desktop/tablet/mobile pages, portal alignment, horizontal overflow, native menu/dialog behavior, video playback and browser console state have not been verified in-browser. Contrast and performance have not been measured. Source checks do not establish WCAG certification or a performance score.

The existing external privacy URL and a production deployment were not revalidated. Owner browser review using the README checklist remains necessary before publishing. No new deployment was made.
