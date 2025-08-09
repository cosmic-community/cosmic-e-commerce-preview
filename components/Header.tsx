// PROGRESS: {"current":10,"total":18,"filename":"components/Header.tsx"}
import React from 'react'

export default function Header() {
  return (
    <header className="border-b border-gray-200 py-6">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-2xl font-semibold">Cosmic E-commerce Preview</h1>
        <p className="text-sm text-gray-600">Products, collections and reviews from your Cosmic bucket</p>
      </div>
    </header>
  )
}