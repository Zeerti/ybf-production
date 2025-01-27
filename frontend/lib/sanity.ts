// src/lib/sanity.ts
import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type {FranksOriginalBundle, Bundle, DailySpecial} from '../types/sanity/types'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'
import type {ColdCuts, Cheese, DeliSalad} from '../types/sanity/types'
import type {SpecialtyMeat, GameMeat} from '../types/sanity/types'
import type {HomePageNavCard} from '../types/sanity/types'
import type {
  Sandwich,
  SandwichPrices,
  SandwichMeat,
  SandwichCheese,
  LunchSpecialBottomBanner,
  WeeklySpecial,
  Condiment,
} from '../types/sanity/types'

export const projectId = 'che1sfre'
export const dataset = 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-05',
  useCdn: true,
})

// Create image builder instance
const builder = imageUrlBuilder(client)

export async function getFranksBundles(): Promise<FranksOriginalBundle[]> {
  return client.fetch(`
    *[_type == "franksOriginalBundle"] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      _rev,
      name,
      weight,
      price,
      bundleItems,
      image {
        asset->{
          _ref,
          _type,
          url
        },
        hotspot,
        crop,
        _type
      }
    }
  `)
}

export async function getOtherBundles(): Promise<Bundle[]> {
  return client.fetch(`
    *[_type == "bundle"] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      _rev,
      weight,
      price,
      bundleItems
    }
  `)
}

// Safe utility function to get the Sanity image URL
export function getImageUrl(source: SanityImageSource | null | undefined): string | undefined {
  if (!source) return undefined
  try {
    return builder.image(source).url()
  } catch (error) {
    console.error('Error generating image URL:', error)
    return undefined
  }
}

// Fetch all deli meats
export async function getDeliMeats(): Promise<ColdCuts[]> {
  return client.fetch(`
    *[_type == "coldCuts"] | order(name asc) {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      _rev,
      name,
      price,
      priceUnit
    }
  `)
}

// Fetch all cheeses
export async function getCheeses(): Promise<Cheese[]> {
  return client.fetch(`
    *[_type == "cheese"] | order(name asc) {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      _rev,
      name,
      price,
      priceUnit
    }
  `)
}

// Fetch all deli salads
export async function getDeliSalads(): Promise<DeliSalad[]> {
  return client.fetch(`
    *[_type == "deliSalad"] | order(name asc) {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      _rev,
      name,
      price,
      priceUnit
    }
  `)
}

export async function getSpecialtyMeats(): Promise<SpecialtyMeat[]> {
  return client.fetch(`
    *[_type == "specialtyMeat"] | order(section asc, name asc) {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      _rev,
      name,
      section,
      price,
      priceUnit,
      description,
      "imageUrl": image.asset->url
    }
  `)
}

export async function getGameMeats(): Promise<GameMeat[]> {
  return client.fetch(`
    *[_type == "gameMeat"] | order(section asc, name asc) {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      _rev,
      name,
      section,
      price,
      priceUnit,
      description
    }
  `)
}

export async function getHomePageNavCards(): Promise<HomePageNavCard[]> {
  const query = `*[_type == "homePageNavCard"] {
    _id,
    title,
    subtitle,
    navigationLink,
    image {
      asset->,
      hotspot,
      crop
    }
  } | order(_createdAt asc)`

  return await client.fetch(query)
}

export async function getHomePageInfoCard() {
  const query = `*[_type == "homePageInfoCard" && !isSeasonalNotification] {
    _id,
    title,
    subtitle,
    content
  }[0]`

  return await client.fetch(query)
}

export async function getSeasonalNotification() {
  const query = `*[_type == "homePageInfoCard" && isSeasonalNotification] {
    _id,
    title,
    subtitle,
    content
  }[0]`

  return await client.fetch(query)
}

interface SimplifiedSpecial {
  name?: string
  description?: string
  photo?: {
    asset?: {
      url?: string
    }
  }
}

export type LunchMenuData = {
  sandwiches: Sandwich[]
  prices: SandwichPrices
  meats: SandwichMeat[]
  cheeses: SandwichCheese[]
  condiments: Condiment[]
  bottomBanner: LunchSpecialBottomBanner
  weeklySpecial: SimplifiedSpecial | null
  dailySpecial: SimplifiedSpecial | null
}

export const getLunchMenuData = async (): Promise<LunchMenuData> => {
  const query = `{
    "sandwiches": *[_type == "sandwich"] {
      _id,
      name,
      availableBreads,
      ingredients,
      description
    },
    "prices": *[_type == "sandwichPrices"][0] {
      fourInchPrice,
      sixInchPrice,
      eightInchPrice,
      halfRyePrice,
      wholeRyePrice
    },
    "meats": *[_type == "sandwichMeat"] {
      _id,
      name
    },
    "cheeses": *[_type == "sandwichCheese"] {
      _id,
      name
    },
    "condiments": *[_type == "condiment"] {
      _id,
      name
    },
    "bottomBanner": *[_type == "lunchSpecialBottomBanner"][0] {
      header,
      subheader
    },
    "weeklySpecial": *[_type == "weeklySpecial"][0] {
      name,
      description,
      photo {
        asset-> {
          url
        }
      }
    },
    "dailySpecial": *[_type == "dailySpecial"][0] {
      name,
      description,
      photo {
        asset-> {
          url
        }
      }
    }
  }`

  return client.fetch<LunchMenuData>(query)
}

// Export the client for use in other parts of the application
export {client as sanityClient}
