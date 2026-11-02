# Product layout release gate

Compare each body module with the latest approved NP06, NP07, NP09, NP08, NP05 and NP12 pages before implementation. Record which page and module was used. Do not assume an old page is visually or factually correct.

Use `ProductOrderSection` for order quantities, pricing, lead time and export documents. It is shared by `ProductSections` and `PalletCoverSections`: keep quantity cards, quote facts and CTA, delivery steps, and document cards aligned with existing product pages. Product-specific construction and safety facts belong in their own modules; do not inherit unrelated bag claims or fixed commercial values.

Every two-column row needs two meaningful content blocks. If no image or second block exists, use the established appropriate single-column/cards pattern. Do not leave an empty column, invent content, or use fixed height to conceal missing content.

Compare title hierarchy, section numbering, content width, text/image alignment, spacing, card structure, buttons and mobile stacking. Inspect every section, including the lower page, in English, Chinese and Spanish at desktop, tablet and mobile widths. Save screenshots and explicit findings. Build checks and first-screen screenshots alone are insufficient.

`verify-seo.mjs` guards the pallet-cover regression by requiring all shared purchasing layout structures in every language. A failed layout or factual review blocks preview handoff and publication. Preserve URLs, core keywords and the user's per-product release approval.
