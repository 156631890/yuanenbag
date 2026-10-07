# YUANEN editorial publishing

This site is a static, trilingual React/Vite build. Published articles are TypeScript files in `src/articles/`; adding one file creates all three localized detail pages during prerendering. Keep drafts outside that directory. Do not create a `/blog/` route.

## Sections and cadence

- Product and purchasing articles: `/guides/{slug}/`, listed under the existing `/guides/` page.
- Industry updates: `/industry-news/{slug}/`, listed under `/industry-news/`. The industry index is generated with the first publishable article; an empty index is not published.
- Archive pagination begins after 12 new articles in a section. Existing guide URLs and cards stay in place.
- Scheduled attempts are at 09:00 for a guide and 15:00 for an industry update, Asia/Shanghai. These are attempts, not a promise to publish unsupported material. Skip the slot when evidence or checks are insufficient.

## Article file contract

Export one `EditorialArticle` as the default value of a new `src/articles/{slug}.ts` file. The type lives in `src/editorial.ts`. Use a distinct lowercase-hyphenated slug and fill every `en`, `zh`, and `es` field with a genuine translation. Required fields include `kind`, `slug`, `publishedAt`, `title`, `description`, `intro`, at least one `section`, at least one verifiable `source`, and one relevant image. Use `relatedProducts` only for existing product slugs. For industry updates, also supply `eventDate`, three-language `market`, and at least one source with `publishedAt`. The image must exist under `public/images/` and have accurate three-language alt text and captions. Prefer an existing, relevant site product image; disclose visualizations or generated visuals as `illustration` and never present them as photos of a real test or finished order. If no suitable image with clear provenance is available, skip publication rather than publish a text-only article.

The source list is displayed on the page. Do not invent studies, search volumes, rankings, reviews, prices, delivery promises, certifications, or tests. A cited external report is not proof that YUANEN's products passed its tests. Tie product claims to the site's actual catalog and specify what a buyer still needs to confirm.

Google Trends is a publication gate for every new article. For each scheduled attempt, inspect recent Rising queries in Google Trends Explore (prefer the last 90 days) for the relevant buyer market. Publish only when at least one specific, relevant long-tail query is visibly rising and its evidence can be revisited. Record the seed query, selected term, region, window, check date, Rising result, and Explore link or screenshot/export in the run report. Check ambiguity and seasonal effects, then use GSC and public search to assess buying intent; neither can replace the Trends evidence. Use the term naturally in the title, description, and body without keyword stuffing or mechanical translation. Trends reports relative interest, not search volume, ranking, or purchase intent. If Trends is unavailable or the evidence is inconclusive or unrelated, skip the slot without creating, committing, or deploying an article, and report why.

## Publication checks

Run `pnpm run build` and `pnpm run verify` before committing. The checks cover localized route generation, canonical/hreflang, article schema and visible dates, source and product links, archive membership, sitemap, image presence, and the established site regressions. A failed check blocks publication. Before pushing, check the remote branch and push only a fast-forward commit to `main`. Verify the Vercel production deployment and the live localized URLs; a successful Git push alone is not deployment proof. Report any skipped slot or failed deployment explicitly.

The scheduled workflow is AI-assisted and the site's article template discloses this. The owner explicitly chose automatic publication without per-article human approval; do not describe these articles as human reviewed.
