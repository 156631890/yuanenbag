# Product classification release gate

Product form, material and application are separate axes. `src/product-classification.ts` owns the primary form and material mapping for every active product. There is no default cooler-bag classification.

- Map each active stable product ID to exactly one primary form family. Paper carry bags belong with takeaway totes. Pallet hoods and container liners belong with liners and covers, not hand-held foil bags.
- Use material labels only where product records support them. Unknown exterior composition remains `to-confirm`; insulation and cold-chain use are not materials. Paper exterior does not imply washable paper.
- Keep rendering `type` and legacy `category` separate from customer-facing taxonomy. Neither determines public collection membership.
- Product filters, collection membership, product breadcrumbs, related-category links and schema consume the same classification source. Preserve existing product URLs, stable IDs, core keyword targets and history.
- Every release runs the classification checks in `verify-seo.mjs`, including complete/exclusive membership and representative form boundary regressions. Do not remove these checks to accommodate an unmapped new product.
- Before publishing, inspect three-language catalog filters, counts, affected category pages and product breadcrumbs on desktop and mobile. Check material labels and related products, not only the detail page.
- After deployment, verify actual production pages, crawlable category links, reciprocal product links, schema, canonical, hreflang and sitemap. Only then record success.
