'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cartItems] = useState(0) // This would connect to actual cart state

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      {/* Top banner */}
      <div className="bg-slate-900 text-white py-2 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <span>Free shipping on orders over $75 • 30-day returns</span>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-900">CosmicShop</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              All Products
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Collections
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-slate-200 py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/collections/best-sellers" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600">
                  Best Sellers
                </Link>
                <Link href="/collections/summer-collection" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600">
                  Summer Collection
                </Link>
              </div>
            </div>
            <Link href="/reviews" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Reviews
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden sm:flex items-center">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-64 pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Account */}
            <button className="hidden sm:flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm font-medium">Account</span>
            </button>

            {/* Cart */}
            <button className="relative flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors">
              <div className="relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8l-2-8M7 13L5.4 7H2M7 13l2.28 5.44a1 1 0 00.95.56H19M9 19a1 1 0 11-2 0 1 1 0 012 0zM20 19a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </div>
              <span className="hidden sm:block text-sm font-medium">Cart</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8 text-slate-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Mobile Menu Items */}
              <Link href="/products" className="text-slate-700 hover:text-blue-600 font-medium py-2">
                All Products
              </Link>
              <Link href="/collections/best-sellers" className="text-slate-700 hover:text-blue-600 font-medium py-2 pl-4">
                Best Sellers
              </Link>
              <Link href="/collections/summer-collection" className="text-slate-700 hover:text-blue-600 font-medium py-2 pl-4">
                Summer Collection
              </Link>
              <Link href="/reviews" className="text-slate-700 hover:text-blue-600 font-medium py-2">
                Reviews
              </Link>
              <Link href="/about" className="text-slate-700 hover:text-blue-600 font-medium py-2">
                About
              </Link>
              <Link href="/account" className="text-slate-700 hover:text-blue-600 font-medium py-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}