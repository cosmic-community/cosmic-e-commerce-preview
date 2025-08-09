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
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Collections Section */}
        <section className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="section-header">
              Featured Collections
            </h2>
            <p className="section-subtitle">
              Explore our carefully curated product collections designed for every lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.length === 0 && (
              <div className="col-span-full text-center py-12">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <p className="text-slate-500">No collections found</p>
              </div>
            )}
            {collections.map((collection, index) => (
              <div 
                key={collection.id} 
                className="card group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {collection.metadata?.featured_image?.imgix_url && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`${collection.metadata.featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
                      alt={collection.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{collection.title}</h3>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  {!collection.metadata?.featured_image?.imgix_url && (
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {collection.title}
                    </h3>
                  )}
                  <p className="text-slate-600 leading-relaxed">
                    {collection.metadata?.description || 'Discover amazing products in this collection'}
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <button className="btn-secondary text-sm py-2 px-4">
                      View Collection
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="section-header">
              Latest Products
            </h2>
            <p className="section-subtitle">
              Discover our newest arrivals and customer favorites
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.length === 0 && (
              <div className="col-span-full text-center py-12">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <p className="text-slate-500">No products found</p>
              </div>
            )}
            {products.map((product, index) => (
              <div
                key={product.id}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="section-header">
              Customer Reviews
            </h2>
            <p className="section-subtitle">
              Read what our customers have to say about their purchases
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {reviews.length === 0 && (
              <div className="col-span-full text-center py-12">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p className="text-slate-500">No reviews found</p>
              </div>
            )}
            {reviews.map((review, index) => (
              <div
                key={review.id}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to build your own?
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              This preview is powered by Cosmic CMS. Start building your own e-commerce experience today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Started with Cosmic
              </button>
              <button className="btn-secondary">
                View Documentation
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}