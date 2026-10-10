import { lazy } from 'react'

export const CatalogPage = lazy(() => import('./CatalogBrowser'))
export const Enquiry = lazy(() => import('./Enquiry'))
export const ProductSections = lazy(() => import('./ProductSections'))
export const SelectionGuide = lazy(() => import('./SelectionGuide'))
export const EditorialArticlePage = lazy(() => import('./EditorialArticlePage'))
export const GuidesArchive = lazy(() => import('./EditorialPages').then(module => ({ default: module.GuidesArchive })))
export const IndustryArchive = lazy(() => import('./EditorialPages').then(module => ({ default: module.IndustryArchive })))

export const OrderReference = lazy(() => import('./OrderReference'))
export const ContentPolicy = lazy(() => import('./ContentPolicy'))
export const CustomizationOrderOptions = lazy(() => import('./CustomizationOrderOptions'))
