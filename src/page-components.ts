import { lazy } from 'react'
export const ExpandedGuide = lazy(() => import('./ExpandedGuide'))

export const CatalogPage = lazy(() => import('./CatalogBrowser'))
export const Enquiry = lazy(() => import('./Enquiry'))
export const ProductSections = lazy(() => import('./ProductSections'))
export const SelectionGuide = lazy(() => import('./SelectionGuide'))
export const EditorialArticlePage = lazy(() => import('./EditorialArticlePage'))
export const GuidesArchive = lazy(() => import('./EditorialPages').then(module => ({ default: module.GuidesArchive })))
export const IndustryArchive = lazy(() => import('./EditorialPages').then(module => ({ default: module.IndustryArchive })))

export const OrderReference = lazy(() => import('./OrderReference'))
export const CustomizationOrderOptions = lazy(() => import('./CustomizationOrderOptions'))

export const MealPrepDetails = lazy(() => import('./MealPrepDetails'))
export const MailerDetails = lazy(() => import('./MailerDetails'))
export const CateringDetails = lazy(() => import('./CateringDetails'))

export const ReferenceNote = lazy(() => import('./ReferenceNote'))
export const BeverageDetails = lazy(() => import('./BeverageDetails'))

export const IceCreamDetails = lazy(() => import('./IceCreamDetails'))
export const PaperDeliveryDetails = lazy(() => import('./PaperDeliveryDetails'))
export const HomeHero = lazy(() => import('./HomeHero'))
export const CollectionShowcase = lazy(() => import('./CollectionShowcase'))
export const Quality = lazy(() => import('./Quality'))

export const BoxLinerApplications = lazy(() => import('./BoxLinerApplications'))

export const CollectionPage = lazy(() => import('./CollectionPage'))

export const CustomerBrands = lazy(() => import('./CustomerBrands'))

export const InsulationRollSections = lazy(() => import('./InsulationRollSections'))

export const PalletCoverSections = lazy(() => import('./PalletCoverSections'))

export const BubbleRollSections = lazy(() => import('./BubbleRollSections'))

export const CageCoverSections = lazy(() => import('./CageCoverSections'))

export const DrumCoverSections = lazy(() => import('./DrumCoverSections'))
export const DrumCoverPurchaseIntro = lazy(() => import('./DrumCoverSections').then(module => ({ default: module.DrumCoverPurchaseIntro })))
export const DrumCoverConsiderations = lazy(() => import('./DrumCoverSections').then(module => ({ default: module.DrumCoverConsiderations })))
export const IBCCoverSections = lazy(() => import('./IBCCoverSections'))
