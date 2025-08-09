// PROGRESS: {"current":9,"total":18,"filename":"lib/cosmic.ts"}
import { createBucketClient } from '@cosmicjs/sdk'
import type { CosmicResponse, Product, Review, Collection } from '@/types'
import { hasStatus } from '@/types'

const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string | undefined
const readKey = process.env.COSMIC_READ_KEY as string | undefined

export const cosmic = createBucketClient({
  bucketSlug: bucketSlug ?? '',
  readKey: readKey ?? ''
})

export async function getProducts(limit = 10): Promise<Product[]> {
  try {
    const res = await cosmic.objects.find({
      type: 'products',
      limit,
      props: ['id', 'title', 'slug', 'metadata'],
      depth: 1
    })
    return (res.objects as Product[]) ?? []
  } catch (error: unknown) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch products')
  }
}

export async function getReviews(limit = 10): Promise<Review[]> {
  try {
    const res = await cosmic.objects.find({
      type: 'reviews',
      limit,
      props: ['id', 'title', 'slug', 'metadata'],
      depth: 1
    })
    return (res.objects as Review[]) ?? []
  } catch (error: unknown) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch reviews')
  }
}

export async function getCollections(limit = 10): Promise<Collection[]> {
  try {
    const res = await cosmic.objects.find({
      type: 'collections',
      limit,
      props: ['id', 'title', 'slug', 'metadata'],
      depth: 1
    })
    return (res.objects as Collection[]) ?? []
  } catch (error: unknown) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch collections')
  }
}