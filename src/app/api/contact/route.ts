import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, phone, interest, persona, message } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const keapAccessToken = process.env.KEAP_ACCESS_TOKEN

    if (!keapAccessToken) {
      console.error('KEAP_ACCESS_TOKEN is not configured')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Prepare custom fields array
    const customFields = []

    // Add interest to custom field if configured
    if (interest && process.env.KEAP_CUSTOM_FIELD_INTEREST) {
      customFields.push({
        id: parseInt(process.env.KEAP_CUSTOM_FIELD_INTEREST),
        content: interest,
      })
    }

    // Add persona to custom field if configured
    if (persona && process.env.KEAP_CUSTOM_FIELD_PERSONA) {
      customFields.push({
        id: parseInt(process.env.KEAP_CUSTOM_FIELD_PERSONA),
        content: persona,
      })
    }

    // Prepare contact data for Keap
    const contactData = {
      given_name: name.split(' ')[0] || name,
      family_name: name.split(' ').slice(1).join(' ') || '',
      email_addresses: [
        {
          email: email,
          field: 'EMAIL1',
        },
      ],
      phone_numbers: phone
        ? [
            {
              number: phone,
              field: 'PHONE1',
            },
          ]
        : [],
      company: company
        ? {
            company_name: company,
          }
        : undefined,
      // Add custom fields if any are configured
      ...(customFields.length > 0 ? { custom_fields: customFields } : {}),
    }

    // Create or update contact in Keap
    const keapResponse = await fetch('https://api.infusionsoft.com/crm/rest/v1/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${keapAccessToken}`,
      },
      body: JSON.stringify(contactData),
    })

    if (!keapResponse.ok) {
      const errorData = await keapResponse.json()
      console.error('Keap API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to submit contact to Keap' },
        { status: keapResponse.status }
      )
    }

    const contactResult = await keapResponse.json()
    const contactId = contactResult.id

    // Add tags for tracking and automation
    const tags = ['Website Contact Form']
    if (interest) {
      tags.push(`Interest: ${interest}`)
    }
    if (persona) {
      tags.push(`Persona: ${persona}`)
    }

    // Apply tags to contact
    for (const tagName of tags) {
      try {
        // First, find or create the tag
        const tagSearchResponse = await fetch(
          `https://api.infusionsoft.com/crm/rest/v1/tags?name=${encodeURIComponent(tagName)}`,
          {
            headers: {
              Authorization: `Bearer ${keapAccessToken}`,
            },
          }
        )

        let tagId
        if (tagSearchResponse.ok) {
          const tagSearchResult = await tagSearchResponse.json()
          if (tagSearchResult.tags && tagSearchResult.tags.length > 0) {
            tagId = tagSearchResult.tags[0].id
          } else {
            // Create the tag if it doesn't exist
            const createTagResponse = await fetch('https://api.infusionsoft.com/crm/rest/v1/tags', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${keapAccessToken}`,
              },
              body: JSON.stringify({
                name: tagName,
                description: 'Auto-created from website contact form',
              }),
            })
            if (createTagResponse.ok) {
              const newTag = await createTagResponse.json()
              tagId = newTag.id
            }
          }

          // Apply tag to contact
          if (tagId) {
            await fetch(`https://api.infusionsoft.com/crm/rest/v1/contacts/${contactId}/tags`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${keapAccessToken}`,
              },
              body: JSON.stringify({
                tagIds: [tagId],
              }),
            })
          }
        }
      } catch (tagError) {
        console.error(`Failed to apply tag "${tagName}":`, tagError)
        // Continue processing even if tagging fails
      }
    }

    // If there's a message, create a note
    if (message || interest || persona) {
      const noteText = [
        interest ? `Interest: ${interest}` : '',
        persona ? `Persona: ${persona}` : '',
        message ? `Message: ${message}` : '',
      ]
        .filter(Boolean)
        .join('\n\n')

      // Create a note on the contact
      await fetch(`https://api.infusionsoft.com/crm/rest/v1/contacts/${contactId}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${keapAccessToken}`,
        },
        body: JSON.stringify({
          title: 'Contact Form Submission',
          body: noteText,
          type: 'OTHER',
        }),
      })
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Contact submitted successfully',
        contactId,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error submitting contact:', error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500 }
    )
  }
}
