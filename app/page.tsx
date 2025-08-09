// PROGRESS: {"current":17,"total":18,"filename":"app/page.tsx"}
import React from 'react'
import { getProducts, getReviews, getCollections } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'
import ReviewCard from '@/components/ReviewCard'

export default async function Page() {
  const [products, reviews, collections] = await Promise.all([
    getProducts(6),
    getReviews(5),
    getCollections(6)
  ])

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <section>
        <h2 className="text-xl font-semibold">Collections</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {collections.length === 0 && <p className="text-sm text-gray-500">No collections found.</p>}
          {collections.map((col) => (
            <div key={col.id} className="border rounded p-4 bg-white">
              <h3 className="font-medium">{col.title}</h3>
              <p className="text-sm text-gray-600">{col.metadata?.description ?? ''}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Products</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length === 0 && <p className="text-sm text-gray-500">No products found.</p>}
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Recent Reviews</h2>
        <div className="mt-4 grid grid-cols-1 gap-4">
          {reviews.length === 0 && <p className="text-sm text-gray-500">No reviews found.</p>}
          {reviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      </section>
    </div>
  )
}