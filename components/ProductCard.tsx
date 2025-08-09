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
  const salePrice = meta?.sale_price
  const rating = meta?.average_rating
  const onSale = meta?.on_sale
  const inventory = meta?.inventory

  const displayPrice = salePrice ?? price
  const hasDiscount = salePrice && price && salePrice < price

  return (
    <article className="card-elevated group animate-fade-in">
      <div className="relative overflow-hidden">
        {image && (
          <div className="relative">
            <img
              src={`${image}?w=800&h=600&fit=crop&auto=format,compress`}
              alt={title}
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
        
        {onSale && hasDiscount && (
          <div className="absolute top-4 left-4">
            <span className="badge bg-red-100 text-red-800 border-red-200 font-semibold">
              Sale
            </span>
          </div>
        )}
        
        {rating && (
          <div className="absolute top-4 right-4 backdrop-blur-glass rounded-full px-2 py-1">
            <div className="rating-stars">
              <span className="text-amber-400">★</span>
              <span className="text-xs font-medium text-slate-700">{rating}</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>
          {meta?.description && (
            <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
              {meta.description}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="price-tag">
              ${displayPrice?.toFixed(2) ?? '—'}
            </span>
            {hasDiscount && (
              <span className="price-sale">
                ${price?.toFixed(2)}
              </span>
            )}
          </div>
          
          {inventory !== undefined && inventory > 0 && (
            <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
              {inventory} in stock
            </span>
          )}
        </div>

        {hasDiscount && (
          <div className="mt-3 pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-emerald-600">
                Save ${(price - salePrice).toFixed(2)}
              </span>
              <span className="text-xs text-slate-500">
                {Math.round(((price - salePrice) / price) * 100)}% off
              </span>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}