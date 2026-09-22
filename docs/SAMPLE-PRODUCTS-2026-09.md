# September 2026 sample photograph product release

Date: 2026-09-22. Owner request: import new products from `E:\冰包\新建文件夹`, with differentiated keywords, titles and descriptions.

## Scope and source

- Reviewed all 65 photographs using four contact sheets and selected enlarged originals.
- Created two product series: `compact-insulated-lunch-bags` and `gold-trim-insulated-cake-bags`.
- Added six real photographs to the existing `square-zipper-cake-cooler` series. Its four existing visualizations remain labelled separately.
- Selected 20 photographs: six lunch-bag, eight gold-trim cake-bag and six mint cake-bag photographs. Alternate heights, colours and angles are grouped by design instead of publishing duplicate product pages.
- Catalog now contains 15 products/series. Both new series have English, Chinese and Spanish content and the existing eight procurement sections.
- Source manifest: `sample-photo-import-2026-09.json`, with source/output SHA256 hashes and reasons for excluding other photographs.
- Repeatable import: `node scripts/import-sample-photos.mjs "E:\冰包\新建文件夹"`. EXIF orientation, proportional resize to a maximum 1600 px, WebP quality 86 and metadata removal only. No generative changes, recolouring or shape changes. Originals are untouched. Selected output totals 1,718,380 bytes.

## Keyword decisions

Ubersuggest query: `custom insulated lunch bags`, `insulated cake bags`, English, location ID 2840 (United States). Retrieved 2026-09-22.

| Series | Primary topic | Supporting purchase intent | English SEO title |
| --- | --- | --- | --- |
| Compact lunch bags | custom insulated lunch bags | carry handles, zip lid, packed meals, logo, bulk quotation | Custom Insulated Lunch Bags with Handles \| YUANEN |
| White/gold cake bags | insulated cake bags | bakery packaging, cake boxes, dessert gifts, custom fit | White & Gold Insulated Cake Bags for Bakeries \| YUANEN |

The lunch-bag term returned estimated monthly volume 140, SEO difficulty 37 and CPC USD 8.51. The cake-bag term returned no metrics. The suggested `custom insulated lunch bags bulk` returned volume 0; this does not establish absence of demand. These are third-party estimates, not Google Trends, verified traffic or ranking promises. White/gold distinguishes the actual design; no search-volume claim is made for that colour modifier.

Search intent was reviewed through Google queries with `hl=en&gl=us`; signed-in/personalized results included regional prices, so these are not a controlled US ranking snapshot. The Custom Earth Promos page below was read for procurement structure. Its prices, specifications and performance claims were not copied. A MyBakeStore result failed to load and was not used as a verified source.

- https://www.google.com/search?q=custom+insulated+lunch+bags+bulk&hl=en&gl=us
- https://www.customearthpromos.com/custom-insulated-boxed-lunch-bags.html
- https://www.google.com/search?q=insulated+cake+bags+bakery+packaging&hl=en&gl=us

Raw keyword response and local review artifacts are under ignored `.verification/new-products-2026-09-22/`.

## Factual boundaries

Photos establish appearance and visible construction only. New-series exact dimensions, material composition, MOQ, price, lead time, tested load and cooling duration remain subject to specification/sample/quotation confirmation. No fabricated offers, reviews, performance claims or finished-product certification were added. Display props are not included. Existing commercial data and certificate scope remain unchanged.

## Validation

- Type check, indexable production build and build verification passed: 81 indexable pages plus three localized 404 pages, 81 sitemap URLs.
- Checks cover localized metadata, canonical/hreflang, schema, internal links, image existence/dimensions, provenance, galleries, original approved main images and eight product-detail sections.
- Browser checks: Chinese cake-bag image switch/lightbox/Escape; Spanish lunch-bag narrow viewport with no horizontal page overflow or broken loaded images; correct preselected product in enquiry; English catalog count 15 and lunch search returning one series; mint gallery 10 images with six sample-photograph labels. No browser console errors during these checks.
- Inquiry continues to prepare a draft/email-app handoff; it does not silently send email.
- Existing uncommitted `docs/HANDOFF.md` and `docs/outreach/` belong to earlier outreach work and must be excluded from this release commit.

## Product URLs

- https://yuanenbag.com/products/compact-insulated-lunch-bags/
- https://yuanenbag.com/products/gold-trim-insulated-cake-bags/
- https://yuanenbag.com/zh/products/compact-insulated-lunch-bags/
- https://yuanenbag.com/zh/products/gold-trim-insulated-cake-bags/
- https://yuanenbag.com/es/products/compact-insulated-lunch-bags/
- https://yuanenbag.com/es/products/gold-trim-insulated-cake-bags/

Release intent: push the reviewed product changes to the existing main branch and verify the matching Vercel production deployment and live product pages. A build or local check alone is not evidence of publication.
