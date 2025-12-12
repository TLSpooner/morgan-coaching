'use client'

import { Button } from '@/components/button'
import { useState, useId } from 'react'

function TextInput({
  label,
  error,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string; error?: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className={`peer block w-full border bg-transparent px-6 pt-12 pb-4 text-base/6 text-gray-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:outline-hidden ${
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/5'
            : 'border-gray-300 focus:border-morganBrown-950 focus:ring-morganBrown-950/5'
        }`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold ${
          error
            ? 'text-red-600 peer-not-placeholder-shown:text-red-600 peer-focus:text-red-600'
            : 'text-gray-500 peer-not-placeholder-shown:text-gray-950 peer-focus:text-gray-950'
        }`}
      >
        {label}
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-2 px-6 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

function TextArea({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'textarea'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        id={id}
        {...props}
        rows={4}
        placeholder=" "
        className="peer block w-full resize-y border border-gray-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-gray-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-morganBrown-950 focus:ring-morganBrown-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-6 left-6 origin-left text-base/6 text-gray-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-2 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-gray-950 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-gray-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-gray-950/20 outline-hidden checked:border-[0.5rem] checked:border-morganBrown-950 focus-visible:ring-1 focus-visible:ring-morganBrown-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-gray-950">{label}</span>
    </label>
  )
}

export function ContactForm({ defaultInterest }: { defaultInterest?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validateForm(data: FormData): Record<string, string> {
    const errors: Record<string, string> = {}

    const name = data.get('name') as string
    const email = data.get('email') as string
    const phone = data.get('phone') as string

    // Name validation
    if (!name || name.trim().length < 2) {
      errors.name = 'Please enter your full name'
    }

    // Email validation
    if (!email) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address'
    }

    // Phone validation (optional but must be valid if provided)
    if (phone && !/^[\d\s\-\(\)\+]+$/.test(phone)) {
      errors.phone = 'Please enter a valid phone number'
    }

    return errors
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrors({})

    const form = e.currentTarget
    const formData = new FormData(form)

    // Validate form
    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setIsSubmitting(false)
      return
    }

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      interest: formData.get('interest'),
      persona: formData.get('persona'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }

      setSubmitStatus({
        type: 'success',
        message: "Thanks for reaching out! I'll get back to you soon.",
      })

      // Reset form
      if (form) {
        form.reset()
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-serif text-base font-bold text-gray-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            name="name"
            autoComplete="name"
            required
            error={errors.name}
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
            error={errors.email}
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            error={errors.phone}
          />
          <div className="border border-gray-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-gray-500">
                I&apos;m interested in:
              </legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput
                  label="Coaching"
                  name="interest"
                  value="coaching"
                  defaultChecked={defaultInterest === 'coaching'}
                />
                <RadioInput
                  label="Workshop"
                  name="interest"
                  value="workshop"
                  defaultChecked={defaultInterest === 'workshop'}
                />
                <RadioInput
                  label="Keynote"
                  name="interest"
                  value="keynote"
                  defaultChecked={defaultInterest === 'keynote'}
                />
              </div>
            </fieldset>
          </div>
          <div className="border border-gray-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-gray-500">I&apos;m a:</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput
                  label="Business Leader"
                  name="persona"
                  value="business-leader"
                />
                <RadioInput
                  label="Financial Advisor"
                  name="persona"
                  value="financial-advisor"
                />
              </div>
            </fieldset>
          </div>
          <TextArea label="Message" name="message" />
        </div>

        {submitStatus && (
          <div
            className={`mt-6 rounded-lg p-4 ${
              submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800'
                : 'bg-red-50 text-red-800'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <Button type="submit" className="mt-10" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : "Let's work together"}
        </Button>
      </form>
    </div>
  )
}
