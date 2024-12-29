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

export type Sandwich = {
  _id: string
  _type: 'sandwich'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  availableBreads?: Array<'white' | 'wheat' | 'rye'>
  ingredients?: Array<string>
  description?: string
}

export type SandwichPrices = {
  _id: string
  _type: 'sandwichPrices'
  _createdAt: string
  _updatedAt: string
  _rev: string
  fourInchPrice?: number
  sixInchPrice?: number
  eightInchPrice?: number
  halfRyePrice?: number
  wholeRyePrice?: number
}

export type SandwichMeat = {
  _id: string
  _type: 'sandwichMeat'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
}

export type SandwichCheese = {
  _id: string
  _type: 'sandwichCheese'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
}

export type LunchSpecialBottomBanner = {
  _id: string
  _type: 'lunchSpecialBottomBanner'
  _createdAt: string
  _updatedAt: string
  _rev: string
  header?: string
  subheader?: string
}

export type WeeklySpecial = {
  _id: string
  _type: 'weeklySpecial'
  _createdAt: string
  _updatedAt: string
  _rev: string
  photo?: {
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
  name?: string
  description?: string
}

export type DailySpecial = {
  _id: string
  _type: 'dailySpecial'
  _createdAt: string
  _updatedAt: string
  _rev: string
  photo?: {
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
  name?: string
  description?: string
}

export type Condiment = {
  _id: string
  _type: 'condiment'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
}

export type GameMeat = {
  _id: string
  _type: 'gameMeat'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  section?: 'gameBirds' | 'venison' | 'buffalo' | 'elk' | 'other'
  price?: number
  priceUnit?: 'perPound' | 'perPackage'
  description?: string
}

export type SpecialtyMeat = {
  _id: string
  _type: 'specialtyMeat'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  section?: 'lamb' | 'veal' | 'pork' | 'beef' | 'chicken' | 'other'
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

export type HomePageInfoCard = {
  _id: string
  _type: 'homePageInfoCard'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  subtitle?: string
  content?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  isSeasonalNotification?: boolean
}

export type HomePageNavCard = {
  _id: string
  _type: 'homePageNavCard'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  subtitle?: string
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
  navigationLink?: '/bundles' | '/deli' | '/specialty-meats' | '/lunch'
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
  imageUrl?: string
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
  | Sandwich
  | SandwichPrices
  | SandwichMeat
  | SandwichCheese
  | LunchSpecialBottomBanner
  | WeeklySpecial
  | DailySpecial
  | Condiment
  | GameMeat
  | SpecialtyMeat
  | HomePageInfoCard
  | HomePageNavCard
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
