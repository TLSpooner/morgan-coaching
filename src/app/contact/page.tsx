import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Offices } from '@/components/offices'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'
import { useId } from 'react'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Let's work together. I can't wait to hear from you.",
}

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-gray-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-gray-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-morganBrown-950 focus:ring-morganBrown-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-gray-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-gray-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-gray-950"
      >
        {label}
      </label>
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

function ContactForm({ defaultInterest }: { defaultInterest?: string }) {
  return (
    <div className="lg:order-last">
      <form>
        <h2 className="font-serif text-base font-bold text-gray-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
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
        <Button type="submit" className="mt-10">
          Let&apos;s work together
        </Button>
      </form>
    </div>
  )
}

function ContactDetails() {
  return (
    <div>
      <h2 className="font-serif text-base font-bold text-gray-950">
        My office
      </h2>
      <p className="mt-6 text-base text-gray-600">
        Prefer doing things in person? Need to schedule a quick video meeting?
        Submit your information, and I&apos;ll get back to you within three
        business days.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <div className="mt-16 border-t border-gray-200 pt-16">
        <h2 className="font-serif text-base font-bold text-gray-950">
          Let&apos;s talk
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Email', 'shaun@shaunmorgancoaching.com'],
            ['Call or Text', '(479) 629-5164'],
          ].map(([label, contact]) => (
            <div key={contact}>
              <dt className="font-semibold text-gray-950">{label}</dt>
              <dd>
                <Link
                  href={
                    label === 'Email'
                      ? `mailto:${contact}`
                      : `tel:${contact.replace(/[^0-9]/g, '')}`
                  }
                  className="text-gray-600 hover:text-gray-950"
                >
                  {contact}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-16 border-t border-gray-200 pt-16">
        <h2 className="font-serif text-base font-bold text-gray-950">
          Follow me
        </h2>
        <div className="mt-6 flex gap-6">
          <Link
            href="https://facebook.com"
            target="_blank"
            aria-label="Visit us on Facebook"
            className="text-gray-950 data-hover:text-gray-950/75"
          >
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </Link>
          <Link
            href="https://x.com"
            target="_blank"
            aria-label="Visit us on X"
            className="text-gray-950 data-hover:text-gray-950/75"
          >
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z" />
            </svg>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            aria-label="Visit us on LinkedIn"
            className="text-gray-950 data-hover:text-gray-950/75"
          >
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

function Header() {
  return (
    <Container className="mt-16">
      <Subheading>Contact me</Subheading>
      <Heading as="h1" className="mt-2 font-serif">
        Let&apos;s work together
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        I can&apos;t wait to hear from you.
      </Lead>
    </Container>
  )
}

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const interest =
    typeof params.interest === 'string' ? params.interest : undefined

  return (
    <main className="overflow-hidden">
      <Header />
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm defaultInterest={interest} />
          <ContactDetails />
        </div>
      </Container>
      <div className="mt-24 sm:mt-32 lg:mt-40">
        <Footer hideCallToAction />
      </div>
    </main>
  )
}
