// PROGRESS: {"current":15,"total":18,"filename":"app/api/bucket-info/route.ts"}
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    bucketSlug: process.env.COSMIC_BUCKET_SLUG ?? ''
  })
}