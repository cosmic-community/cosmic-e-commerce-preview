// PROGRESS: {"current":11,"total":18,"filename":"components/Footer.tsx"}
import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 mt-12">
      <div className="mx-auto max-w-5xl px-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Cosmic E-commerce Preview
      </div>
    </footer>
  )
}