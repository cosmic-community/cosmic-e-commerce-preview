// PROGRESS: {"current":12,"total":18,"filename":"components/ProductCard.tsx"}
import React from 'react'
import type { Product } from '@/types'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const meta = product.metadata
  const image = meta?.featured_image?.imgix_url
  const title = product.title
  const price = meta?.price
  const sale = meta?.sale_price

  return (
    <article className="border rounded-md p-4 bg-white">
      {image && (
        <img
          src={`${image}?w=800&h=500&fit=crop&auto=format,compress`}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <h3 className="mt-3 text-lg font-medium">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{meta?.description ?? ''}</p>
      <div className="mt-3 flex items-center gap-3">
        <span className="text-lg font-semibold">${sale ?? price ?? '—'}</span>
        {sale && price && (
          <span className="text-sm text-gray-500 line-through">${price}</span>
        )}
        {meta?.average_rating && (
          <span className="ml-auto text-sm text-yellow-600">⭐ {meta.average_rating}</span>
        )}
      </div>
    </article>
  )
}