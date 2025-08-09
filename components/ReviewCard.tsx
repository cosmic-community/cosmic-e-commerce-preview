// PROGRESS: {"current":13,"total":18,"filename":"components/ReviewCard.tsx"}
import React from 'react'
import type { Review } from '@/types'

interface Props {
  review: Review
}

export default function ReviewCard({ review }: Props) {
  const meta = review.metadata
  const product = meta?.product
  const productTitle = product?.title ?? 'Product'
  const rating = meta?.rating ?? 0
  const author = meta?.author_name ?? 'Anonymous'
  const content = meta?.content ?? ''

  return (
    <div className="border rounded p-4 bg-gray-50">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold">{review.title}</h4>
          <p className="text-sm text-gray-600">By {author} — <span className="text-sm text-yellow-600">⭐ {rating}</span></p>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500">{productTitle}</div>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-700">{content}</p>
    </div>
  )
}