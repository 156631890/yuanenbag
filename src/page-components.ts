import { lazy } from 'react'

export const CatalogPage = lazy(() => import('./CatalogBrowser'))
export const Enquiry = lazy(() => import('./Enquiry'))
export const ProductSections = lazy(() => import('./ProductSections'))
export const SelectionGuide = lazy(() => import('./SelectionGuide'))
