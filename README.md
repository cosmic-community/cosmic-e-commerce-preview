# Cosmic E-commerce Preview

![App Preview](https://imgix.cosmicjs.com/6400a840-7555-11f0-a051-23c10f41277a-photo-1526772662000-3f88f10405ff-1754767005349.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A minimal Next.js storefront that reads Products, Collections, and Reviews from your existing Cosmic bucket and displays them in a responsive UI.

Features
- Product listing with price, sale price, gallery and average rating
- Latest customer reviews that reference the product (depth=1)
- Strict TypeScript types generated to match your Cosmic object models
- Built with Cosmic dismissible badge that tracks the bucket via UTM
- Tailwind CSS with a global stylesheet and responsive components
- Pre-build type checking to prevent deployment type errors

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=68979dce2987c1a81b77a86c&clone_repository=68979f192987c1a81b77a88c)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design a content model for an e-commerce store with products, collections, and customer reviews"

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

Technologies used
- Next.js 15 (App Router)
- React 18
- TypeScript (strict)
- Tailwind CSS
- @cosmicjs/sdk
- Bun (recommended for running scripts)

Getting Started

Prerequisites
- Node.js (or Bun) environment
- COSMIC_BUCKET_SLUG, COSMIC_READ_KEY, COSMIC_WRITE_KEY set in your deployment environment (these are provided automatically by the Cosmic UI when deploying)

Installation
1. Install dependencies via Bun (recommended):
   bun install
2. Run dev server:
   bun run dev

Cosmic SDK Examples
- lib/cosmic.ts contains a single exported bucket client and helper fetchers with type-safe responses and 404 handling. See that file for usage examples.

Cosmic CMS Integration
- The app expects your existing object types: products, collections, reviews. It queries published objects with depth=1 to include connected objects (e.g., review.metadata.product).
- All metafields from your models are typed in types.ts and handled defensively (optional properties, null checks).

Deployment Options
- Vercel (recommended for Next.js App Router)
- Netlify (static subset)
- Self-hosted (Docker)

<!-- README_END -->