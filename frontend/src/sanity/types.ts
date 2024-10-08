/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}

export type GameMeat = {
  _id: string
  _type: 'gameMeat'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  section?: 'gameBirds' | 'venison' | 'buffalo' | 'elk'
  price?: number
  priceUnit?: 'perPound' | 'perPackage'
  description?: string
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
}

export type SpecialtyMeat = {
  _id: string
  _type: 'specialtyMeat'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  section?: 'lamb' | 'veal'
  price?: number
  priceUnit?: 'perPound' | 'perPackage' | 'perItem'
  description?: string
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
}

export type LandingPageCard = {
  _id: string
  _type: 'landingPageCard'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  subTitle?: string
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  cardRowItems?: Array<string>
}

export type DeliSalad = {
  _id: string
  _type: 'deliSalad'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  price?: number
  priceUnit?: 'perPound' | 'perPackage' | 'perItem'
}

export type Cheese = {
  _id: string
  _type: 'cheese'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  price?: number
  priceUnit?: 'perPound' | 'perPackage' | 'perItem'
}

export type ColdCuts = {
  _id: string
  _type: 'coldCuts'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  price?: number
  priceUnit?: 'perPound' | 'perPackage' | 'perItem'
}

export type Bundle = {
  _id: string
  _type: 'bundle'
  _createdAt: string
  _updatedAt: string
  _rev: string
  weight?: number
  price?: number
  bundleItems?: Array<string>
}

export type FranksOriginalBundle = {
  _id: string
  _type: 'franksOriginalBundle'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  weight?: number
  price?: number
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  bundleItems?: Array<string>
}

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Slug
  | GameMeat
  | SpecialtyMeat
  | LandingPageCard
  | DeliSalad
  | Cheese
  | ColdCuts
  | Bundle
  | FranksOriginalBundle
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
export declare const internalGroqTypeReferenceTo: unique symbol
// Source: ./frontend/src/app/page.tsx
// Variable: FO_BUNDLES_QUERY
// Query: *[  _type == "foBundle"]{_id, name, weight, price, image, bundleItems}|order(price desc)
export type FO_BUNDLES_QUERYResult = Array<never>
// Variable: COLDCUTS_QUERY
// Query: *[  _type == "coldCuts"]{_id, name, price}|order(name desc)
export type COLDCUTS_QUERYResult = Array<{
  _id: string
  name: string | null
  price: number | null
}>
// Variable: BUNDLES_QUERY
// Query: *[  _type == "bundle"]{_id, weight, price, image, bundleItems}|order(price desc)
export type BUNDLES_QUERYResult = Array<{
  _id: string
  weight: number | null
  price: number | null
  image: null
  bundleItems: Array<string> | null
}>

// Query TypeMap
import '@sanity/client'
declare module '@sanity/client' {
  interface SanityQueries {
    '*[\n  _type == "foBundle"\n]{_id, name, weight, price, image, bundleItems}|order(price desc)': FO_BUNDLES_QUERYResult
    '*[\n  _type == "coldCuts"\n]{_id, name, price}|order(name desc)': COLDCUTS_QUERYResult
    '*[\n  _type == "bundle"\n]{_id, weight, price, image, bundleItems}|order(price desc)': BUNDLES_QUERYResult
  }
}