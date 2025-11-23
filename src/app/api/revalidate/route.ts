import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{
      _type: string
      slug?: string
    }>(req, process.env.SANITY_REVALIDATE_SECRET)

    if (!isValidSignature) {
      const message = 'Invalid signature'
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    if (!body?._type) {
      const message = 'Bad Request'
      return new Response(JSON.stringify({ message, body }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Revalidate based on content type
    switch (body._type) {
      case 'post':
        // Revalidate the blog index page
        revalidatePath('/blog')
        // If we have a slug, revalidate the specific post page
        if (body.slug) {
          revalidatePath(`/blog/${body.slug}`)
        }
        // Revalidate the RSS feed
        revalidatePath('/blog/feed.xml')
        break
      case 'category':
        // Revalidate all blog pages when categories change
        revalidatePath('/blog')
        break
      default:
        // For any other content type, revalidate all pages
        revalidatePath('/', 'layout')
    }

    return NextResponse.json(
      {
        status: 200,
        revalidated: true,
        now: Date.now(),
        body,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (err: unknown) {
    console.error(err)
    return new Response(
      JSON.stringify({
        message: err instanceof Error ? err.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
