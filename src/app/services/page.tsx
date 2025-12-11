import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Transform your approach to hospitality through personalized coaching, team workshops, and inspiring keynote addresses.',
}

const tiers = [
  {
    name: 'Coaching' as const,
    slug: 'coaching',
    description:
      'Personalized one-on-one guidance to transform your leadership approach.',
    priceMonthly: 5,
    href: '/contact?interest=coaching',
    highlights: [
      { description: 'Individual executive coaching sessions' },
      { description: 'Customized development roadmap' },
      { description: 'Monthly progress assessments' },
      { description: 'Team transformation workshops', disabled: true },
      { description: 'Speaking engagement opportunities', disabled: true },
    ],
    features: [
      { section: 'Session Details', name: 'Participants', value: '1-on-1' },
      { section: 'Session Details', name: 'Duration', value: '3-6 months' },
      {
        section: 'Session Details',
        name: 'Session frequency',
        value: 'Bi-weekly',
      },
      { section: 'Session Details', name: 'Session length', value: '90 min' },
      { section: 'Session Details', name: 'Custom action plans', value: true },
      { section: 'Outcomes', name: 'Leadership development', value: true },
      { section: 'Outcomes', name: 'Client experience strategy', value: true },
      {
        section: 'Outcomes',
        name: 'Team culture transformation',
        value: false,
      },
      { section: 'Outcomes', name: 'Organization-wide impact', value: false },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: 'Follow-up resources', value: true },
      { section: 'Support', name: 'Ongoing mentorship', value: false },
    ],
  },
  {
    name: 'Workshop' as const,
    slug: 'growth',
    description: 'Interactive team sessions focused on hospitality excellence.',
    priceMonthly: 20,
    href: '/contact?interest=workshop',
    highlights: [
      { description: 'Half-day or full-day workshops' },
      { description: 'Up to 30 team members' },
      { description: 'Tailored curriculum for your industry' },
      { description: 'Interactive exercises and real scenarios' },
      { description: 'Post-workshop implementation guide' },
    ],
    features: [
      { section: 'Session Details', name: 'Participants', value: 'Up to 30' },
      { section: 'Session Details', name: 'Duration', value: '1-2 days' },
      {
        section: 'Session Details',
        name: 'Session frequency',
        value: 'One-time',
      },
      {
        section: 'Session Details',
        name: 'Session length',
        value: '4-8 hours',
      },
      { section: 'Session Details', name: 'Custom action plans', value: true },
      { section: 'Outcomes', name: 'Leadership development', value: true },
      { section: 'Outcomes', name: 'Client experience strategy', value: true },
      { section: 'Outcomes', name: 'Team culture transformation', value: true },
      { section: 'Outcomes', name: 'Organization-wide impact', value: true },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: 'Follow-up resources', value: true },
      { section: 'Support', name: 'Ongoing mentorship', value: false },
    ],
  },
  {
    name: 'Keynote' as const,
    slug: 'keynote',
    description:
      'Inspiring presentations that energize and transform audiences.',
    priceMonthly: 30,
    href: '/contact?interest=keynote',
    highlights: [
      { description: 'Conference or event presentation' },
      { description: 'Customized content for your audience' },
      { description: 'Unlimited audience size' },
      { description: 'Pre-event consultation call' },
      { description: 'Optional Q&A session' },
    ],
    features: [
      { section: 'Session Details', name: 'Participants', value: 'Unlimited' },
      { section: 'Session Details', name: 'Duration', value: '1 day' },
      {
        section: 'Session Details',
        name: 'Session frequency',
        value: 'One-time',
      },
      {
        section: 'Session Details',
        name: 'Session length',
        value: '60-90 min',
      },
      { section: 'Session Details', name: 'Custom action plans', value: true },
      { section: 'Outcomes', name: 'Leadership development', value: true },
      { section: 'Outcomes', name: 'Client experience strategy', value: true },
      { section: 'Outcomes', name: 'Team culture transformation', value: true },
      { section: 'Outcomes', name: 'Organization-wide impact', value: true },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: 'Follow-up resources', value: true },
      { section: 'Support', name: 'Ongoing mentorship', value: true },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Subheading className="mt-16">Services</Subheading>
      <Heading as="h1" className="font-serif">
        Flexible pricing designed to support your journey.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Business leaders worldwide have grown their companies through genuine
        hospitality. Start creating lasting client relationships today.
      </Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
        <LogoCloud className="mt-24" />
      </Container>
    </div>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              ${tier.priceMonthly}K
            </div>
            <div className="text-sm/5 text-gray-950/75">
              <p>USD</p>
              <p>per engagement</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href={tier.href}>Contact me</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Start selling with:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingTable({
  selectedTier,
}: {
  selectedTier: (typeof tiers)[number]
}) {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-selected:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-gray-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/services?tier=${tier.slug}`}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-gray-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href={selectedTier.href}>
                Get started
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Get started</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
              >
                <Button variant="outline" href={tier.href}>
                  Get started
                </Button>
              </td>
            ))}
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map(
          (section) => (
            <tbody key={section} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                    >
                      {name}
                    </th>
                    {tiers.map((tier) => {
                      let value = tier.features.find(
                        (feature) =>
                          feature.section === section && feature.name === name,
                      )?.value

                      return (
                        <td
                          key={tier.slug}
                          data-selected={
                            selectedTier === tier ? true : undefined
                          }
                          className="p-4 data-selected:table-cell max-sm:hidden"
                        >
                          {value === true ? (
                            <>
                              <CheckIcon className="size-4 fill-green-600" />
                              <span className="sr-only">
                                Included in {tier.name}
                              </span>
                            </>
                          ) : value === false || value === undefined ? (
                            <>
                              <MinusIcon className="size-4 fill-gray-400" />
                              <span className="sr-only">
                                Not included in {tier.name}
                              </span>
                            </>
                          ) : (
                            <div className="text-sm/6">{value}</div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
            </tbody>
          ),
        )}
      </table>
    </Container>
  )
}

function FeatureItem({
  description,
  disabled = false,
}: {
  description: string
  disabled?: boolean
}) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-3.75 shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function PlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

function Testimonial() {
  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="/testimonials/tina-yards.jpg"
                    className="aspect-3/4 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
              <blockquote>
                <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”'] lg:text-4xl">
                  Thanks to Shaun, we&apos;re finding new leads that we never
                  would have found.
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-white">Tina Yards</p>
                <p className="text-sm/6 font-medium">
                  <span className="bg-linear-to-r from-morganYellow-400 from-28% via-morganOrange-500 via-70% to-morganBrown-600 bg-clip-text text-transparent">
                    VP of Sales, Protocol
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          Frequently asked questions
        </Subheading>
        <Heading as="div" className="mt-2 text-center font-serif">
          Your questions answered.
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">
              How do I know which service is right for me or my team?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              It depends on your goals and current needs. One-on-one coaching is
              ideal for individual leaders looking to develop their personal
              approach to hospitality and leadership. Team workshops work best
              when you want to transform your entire team&apos;s culture and
              create shared practices. Keynote speaking is perfect for
              conferences, events, or when you want to inspire a large audience
              with fresh perspectives on hospitality excellence.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What industries do you work with?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              While I specialize in the hospitality sector—including hotels,
              restaurants, resorts, and event venues—the principles of genuine
              hospitality apply across all service industries. I&apos;ve worked
              with healthcare organizations, professional services firms, retail
              businesses, and corporate teams who want to elevate their client
              experience and build lasting relationships.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What can I expect from a coaching engagement?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Coaching engagements typically run 3-6 months with bi-weekly
              sessions. We&apos;ll start by identifying your specific challenges
              and goals, then develop a customized roadmap for growth. Between
              sessions, you&apos;ll implement what we discuss and receive
              follow-up support via email. The focus is always on practical,
              actionable strategies you can apply immediately to transform how
              you lead and serve your clients.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              How are workshops customized for our organization?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Every workshop is tailored to your specific industry, challenges,
              and team dynamics. Before the workshop, we&apos;ll have a
              consultation to understand your goals, team composition, and
              current pain points. I&apos;ll design interactive exercises,
              real-world scenarios, and discussions that directly address your
              situation. You&apos;ll also receive a post-workshop implementation
              guide to help sustain the momentum and changes we create together.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What topics do you typically cover in keynote presentations?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Keynote topics center on transforming client experiences through
              authentic hospitality, building cultures of excellence, and
              creating memorable moments that drive loyalty and growth. Each
              presentation is customized based on your event theme, audience
              needs, and desired outcomes. We&apos;ll have a pre-event
              consultation to ensure the content resonates perfectly with your
              attendees and supports your event objectives.
            </dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}

export default async function Pricing({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  let params = await searchParams
  let tier =
    typeof params.tier === 'string'
      ? tiers.find(({ slug }) => slug === params.tier)!
      : tiers[0]

  return (
    <main className="overflow-hidden">
      <Header />
      <PricingCards />
      <PricingTable selectedTier={tier} />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  )
}
