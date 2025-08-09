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
  const createdAt = meta?.created_at

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? 'text-amber-400' : 'text-slate-300'
        }`}
      >
        ★
      </span>
    ))
  }

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch {
      return dateString
    }
  }

  return (
    <article className="card group animate-slide-up">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {author.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {review.title}
                </h4>
                <p className="text-sm text-slate-600">by {author}</p>
              </div>
            </div>
            
            <div className="rating-stars mb-3">
              {renderStars(rating)}
              <span className="ml-2 text-sm text-slate-600">
                ({rating}/5)
              </span>
            </div>
          </div>
          
          <div className="text-right flex-shrink-0">
            <div className="badge bg-blue-50 text-blue-700 border-blue-200 mb-2">
              {productTitle}
            </div>
            {createdAt && (
              <div className="text-xs text-slate-500">
                {formatDate(createdAt)}
              </div>
            )}
          </div>
        </div>

        <blockquote className="text-slate-700 leading-relaxed text-sm bg-slate-50 p-4 rounded-xl border-l-4 border-blue-200 italic">
          "{content}"
        </blockquote>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
          <span className="text-xs text-slate-500">Verified Purchase</span>
          <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
            Was this helpful?
          </button>
        </div>
      </div>
    </article>
  )
}