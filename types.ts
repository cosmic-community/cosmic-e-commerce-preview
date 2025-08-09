// PROGRESS: {"current":8,"total":18,"filename":"types.ts"}
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  bucket?: string;
  created_at?: string;
  modified_at?: string;
  status?: string;
  thumbnail?: string;
  published_at?: string | null;
  type?: string;
  metadata?: Record<string, any>;
}

export interface FeaturedImage {
  url: string;
  imgix_url: string;
}

export interface ProductMetadata {
  sku?: string;
  price?: number;
  sale_price?: number | null;
  description?: string;
  featured_image?: FeaturedImage;
  gallery?: FeaturedImage[];
  inventory?: number;
  on_sale?: boolean;
  collections?: any[] | null;
  attributes?: Record<string, any>;
  average_rating?: number;
}

export interface Product extends CosmicObject {
  type: 'products';
  metadata?: ProductMetadata;
}

export interface ReviewMetadata {
  product?: Product;
  author_name?: string;
  author_email?: string;
  rating?: number;
  content?: string;
  approved?: boolean;
  created_at?: string;
}

export interface Review extends CosmicObject {
  type: 'reviews';
  metadata?: ReviewMetadata;
}

export interface CollectionMetadata {
  name?: string;
  description?: string;
  featured_image?: FeaturedImage;
  products?: Product[] | null;
}

export interface Collection extends CosmicObject {
  type: 'collections';
  metadata?: CollectionMetadata;
}

// Helper type for cosmic responses
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Minimal error guard for cosmic SDK
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in (error as any);
}