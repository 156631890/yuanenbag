# YUANEN editorial publishing

This site is a static, trilingual React/Vite build. Published articles are TypeScript files in `src/articles/`; adding one file creates all three localized detail pages during prerendering. Keep drafts outside that directory. Do not create a `/blog/` route.

## Sections and cadence

- Product and purchasing articles: `/guides/{slug}/`, listed under the existing `/guides/` page.
- Industry updates: `/industry-news/{slug}/`, listed under `/industry-news/`. The industry index is generated with the first publishable article; an empty index is not published.
- Archive pagination begins after 12 new articles in a section. Existing guide URLs and cards stay in place.
- Scheduled attempts are at 09:00 for a guide and 15:00 for an industry update, Asia/Shanghai. These are attempts, not a promise to publish unsupported material. Skip the slot when evidence or checks are insufficient.

## Article file contract

Export one `EditorialArticle` as the default value of a new `src/articles/{slug}.ts` file. The type lives in `src/editorial.ts`. Use a distinct lowercase-hyphenated slug and fill every `en`, `zh`, and `es` field with a genuine translation. Required fields include `kind`, `slug`, `publishedAt`, `title`, `description`, `intro`, at least one `section` and at least one verifiable `source`. Use `relatedProducts` only for existing product slugs. For industry updates, also supply `eventDate`, three-language `market`, and at least one source with `publishedAt`. Optional images must already exist under `public/images/` and have three-language alt text and captions; mark generated visuals as `illustration`.

The source list is displayed on the page. Do not invent studies, search volumes, rankings, reviews, prices, delivery promises, certifications, or tests. A cited external report is not proof that YUANEN's products passed its tests. Tie product claims to the site's actual catalog and specify what a buyer still needs to confirm.

For each scheduled attempt, record the Google Trends query, region, comparison window, and result in the run report. Describe a phrase as trending only when that comparison supports it. Google Trends is topic discovery, not a substitute for source verification or a guaranteed search-volume estimate. If Trends is inaccessible or inconclusive, use an accurate buyer question without a popularity claim and say so in the run report.

## Publication checks

Run `pnpm run build` and `pnpm run verify` before committing. The checks cover localized route generation, canonical/hreflang, article schema and visible dates, source and product links, archive membership, sitemap, image presence, and the established site regressions. A failed check blocks publication. Before pushing, check the remote branch and push only a fast-forward commit to `main`. Verify the Vercel production deployment and the live localized URLs; a successful Git push alone is not deployment proof. Report any skipped slot or failed deployment explicitly.

The scheduled workflow is AI-assisted and the site's article template discloses this. The owner explicitly chose automatic publication without per-article human approval; do not describe these articles as human reviewed.
