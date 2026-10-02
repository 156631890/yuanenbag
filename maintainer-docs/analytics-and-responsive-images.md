# Website measurement and responsive images

The website is an enquiry preparation site. Preparing a draft or opening an email app does not prove that an enquiry was delivered.

## GA4 resource

Created on October 2, 2026 in the existing My Analytics account:

- Property: YUANEN - yuanenbag.com; property ID 557069828.
- Web stream: YUANEN Website; stream ID 15940493920.
- Stream URL: https://yuanenbag.com.
- Public measurement ID: G-TEESSYWLKE.
- Time zone: China (GMT+8); currency: CNY.
- Enhanced measurement is disabled. In particular, automatic form and outbound-link tracking must remain disabled because enquiry mailto URLs contain customer details.

Production builds default to the public measurement ID `G-TEESSYWLKE`; no new Vercel login or environment setting is required. `SITE_GA4_MEASUREMENT_ID` may override it; an explicitly empty value disables analytics. Preserve the existing indexing and base-path settings. Preview builds and non-root builds omit the measurement ID. Runtime collection also requires the canonical hostname, an indexable page, and explicit visitor consent.

The visitor can reject statistics or change their choice on the privacy page. Only after permission does the browser load gtag.js. Ads storage, ads personalization, and Google signals are disabled. Page location excludes query strings and fragments; referrer is reduced to its origin. Manual enquiry events contain only the action and destination measurement ID, never form values or generated mailto URLs.

| Event | Actual meaning |
| --- | --- |
| page_view | A consenting visitor viewed a page |
| enquiry_draft_prepared | The visitor prepared a local enquiry draft |
| enquiry_brief_download | The visitor clicked Download brief |
| enquiry_email_open | The visitor clicked Open email app |

Do not label these actions as delivered leads. Actual enquiry delivery would need a separate, verified workflow.

Deployment acceptance requires live HTML and asset checks, consent behavior, and observed receipt of events in the correct GA4 property. Creating the resource or passing local tests alone does not prove receipt.

## Image generation

`scripts/prepare-responsive-images.mjs` generates 384, 768, and 1280 pixel WebP candidates below each original's width, then writes `src/responsive-image-manifest.json`. Existing sharp is used; originals are retained. The nine sources were selected from the October 2 PageSpeed image-delivery findings. The manifest is shared by the homepage hero, factory photo, catalog cards, and product gallery. The enlarged image retains the original and loads lazily.

Run `pnpm run build` followed by `pnpm run verify`. Verification checks consent and data exclusions, production build gates, candidate dimensions, asset references, and permanent legacy redirects.

## Performance baseline and search evidence

The October 2 mobile homepage PageSpeed test scored 92: FCP 0.9 s, LCP 3.3 s, TBT 20 ms, CLS 0. It reported 1,289 KiB potential image savings. There was no CrUX field data; this is a lab baseline, not a Core Web Vitals field pass.

Baseline: https://pagespeed.web.dev/analysis/https-yuanenbag-com/s5k7bewkxj?form_factor=mobile

All 138 sitemap URLs were checked with HTTP 200, unique titles and descriptions, one H1, self canonicals, and no noindex. Search Console inspection identified two discovered but unindexed ice-pack pages. The June 29–September 29 query/page result contained only three low-volume impressions, insufficient evidence to merge product variants for keyword cannibalization. Reinspect after Google recrawls; do not promise immediate indexing or rankings.

Legacy category routes retain their existing language-specific destinations and change from temporary 307 to permanent 308. Verify these on Vercel after deployment; the local preview server does not emulate Vercel routes.
