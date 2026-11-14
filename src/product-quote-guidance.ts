type QuoteGuidance = {
  brief: string
  link?: { path: string; label: string }
}

export const productQuoteGuidance: Partial<Record<string, QuoteGuidance>> = {
  'insulated-pallet-covers': {
    brief: 'For a reflective insulated pallet cover, measure the widest wrapped load, including any overhang. Give the height from the deck to the top of the load and say where the bottom edge of the cover should sit. Include the handover location, exposure time, quantity and destination so the quote reflects how the cover will be fitted.',
    link: { path: '/guides/insulated-pallet-cover-overhang-installation-clearance/', label: 'Measure overhang and fitting clearance' },
  },
  'square-zipper-cake-cooler': {
    brief: 'Send the outside dimensions of one closed cake box, including any projecting board, and a photo showing how you lift it. The box needs room for your hands as it passes through the zipper. If several bakeries share the order, give the quantity for each box size and print design so each version can be costed.',
    link: { path: '/products/gold-trim-insulated-cake-bags/', label: 'Compare the white and gold bag for gift presentation' },
  },
  'upright-grocery-cooler': {
    brief: 'For a grocery delivery order that includes packaged fresh meat, describe one typical load. Give the width of the largest sealed tray, its intended orientation, and where the coolant sits. Try that layout in a sample and check that the zipper closes without pressing the tray lid. Include the bag quantity, logo and delivery destination in your request.',
  },
  'insulated-pizza-delivery-bags': {
    brief: 'Measure the outside of your largest closed pizza box, including the front tab, then measure the height of the full stack you dispatch together. Send both measurements and the bag quantity. Two shops selling the same pizza diameter can need different bags because their boxes and stack heights differ.',
    link: { path: '/guides/pizza-delivery-bag-packout-checklist/', label: 'Check the pizza-box stack before ordering' },
  },
  'insulated-catering-bags': {
    brief: 'Send the dimensions of a tray with its lid clipped on, including the rim and any projecting handles. Tell us which edge enters the bag first and how staff support the tray during loading. Those details determine the front opening you need. Include the number of bags and your destination for pricing.',
    link: { path: '/guides/catering-bag-front-opening-tray-fit/', label: 'Check the front opening against a lidded tray' },
  },
  'self-adhesive-foil-bags': {
    brief: 'When ordering insulated mailers, give the width, length and thickness of the filled pack, the quantity, and whether it will travel inside an outer carton. A thick pack uses some of the flat pouch width and needs enough flap overlap to seal. If you need insulation against the carton walls, specify the inside dimensions of the carton for a box liner.',
    link: { path: '/guides/foil-mailer-outer-carton-checklist/', label: 'Check when a foil mailer needs an outer carton' },
  },
  'insulated-beverage-delivery-bags': {
    brief: 'For a coffee delivery bag, send the widest lid diameter, filled cup height and cup mix for one order. A divider that fits the cup body can still leave adjacent lids touching. Check that one cup can be lifted straight out with the others in place, then specify the divider layout and bag quantity for pricing.',
    link: { path: '/guides/beverage-delivery-bag-cup-divider-fit/', label: 'Check cup lids and divider spacing' },
  },
  'insulated-ice-cream-delivery-bags': {
    brief: 'For a tub carrier, give the diameter across the closed lid, tub height, and size and placement of the refrigerant. Include your required temperature range, route duration and bag quantity. Check closure with that load in place, then test the complete pack on your route before specifying a holding time.',
    link: { path: '/guides/icecream-tub-refrigerant-fit/', label: 'Measure the tub and refrigerant together' },
  },
}
