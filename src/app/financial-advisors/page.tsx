import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Financial Advisors',
  description:
    "You've built a successful practice. But is it truly differentiated? As AI commoditizes your technical value, hospitality is becoming your only competitive advantage.",
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-serif text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            You&apos;ve Built a Successful Practice. But Is It Truly
            Differentiated?
          </h1>
          <p className="mt-8 max-w-3xl font-sans text-balance text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Your clients can get portfolio management, financial planning, and
            investment research anywhere. So what are they really paying you
            for?
          </p>
          <p className="mt-6 max-w-3xl text-balance text-xl/7 font-medium text-gray-950 sm:text-2xl/8">
            If you&apos;re honest, you know the answer:{' '}
            <span className="font-bold">
              They&apos;re paying for how you make them feel.
            </span>
          </p>
          <p className="mt-6 max-w-3xl text-balance text-lg/8 text-gray-700">
            The problem is, most advisors haven&apos;t systematically designed
            that experience. And as AI commoditizes your technical value, client
            experience is becoming the only competitive advantage that matters.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact?interest=coaching">
              Schedule a Discovery Call
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Problem() {
  return (
    <Container className="py-32">
      <Heading as="h2" className="font-serif">
        The Problem You&apos;re Facing (Even If You Haven&apos;t Named It Yet)
      </Heading>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-3xl space-y-6 text-lg/8 text-gray-700 lg:col-span-2">
          <p>
            You&apos;ve built a successful practice. Your AUM is strong. Your
            clients are satisfied. But something feels off.
          </p>
          <p className="font-medium text-gray-950">
            Here&apos;s what I see when I visit advisor offices across the
            country:
          </p>
        </div>

        <div className="mt-8 max-w-3xl space-y-6 text-lg/8 text-gray-700 lg:col-span-2">
          <div>
            <p className="font-semibold text-gray-950">
              Your technical value is being commoditized.
            </p>
            <p className="mt-2">
              Clients can get portfolio management from a robo-advisor for 25
              basis points. They can get financial planning tools for free
              online. Your fee is under pressure, and clients are starting to
              ask: &quot;What am I really paying for?&quot;
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-950">
              Your team feels transactional, not relational.
            </p>
            <p className="mt-2">
              They show up. They do their jobs. But they don&apos;t seem
              energized or passionate. It&apos;s not that they hate the
              workthey just don&apos;t feel deeply connected to it.
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-950">
              Your culture is stale.
            </p>
            <p className="mt-2">
              Maybe it&apos;s not toxic. But it&apos;s not thriving either.
              There&apos;s a flatness. A lack of energy. And you can feel it the
              moment you walk in the door.
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-950">
              Your client experience is generic.
            </p>
            <p className="mt-2">
              You deliver good service. But your clients aren&apos;t raving
              fans. They&apos;re not referring you constantly. They&apos;re
              satisfiedbut they&apos;re not bonded to you.
            </p>
          </div>

          <p className="font-medium text-gray-950">
            And here&apos;s the hard truth: In five years, AI will do 95% of
            what you do technically. The advisors who survive will be the ones
            who mastered something AI can&apos;t replicate: genuine hospitality.
          </p>
        </div>
      </section>
    </Container>
  )
}

function Guide() {
  return (
    <div className="bg-gray-50 py-32">
      <Container>
        <Heading as="h2" className="font-serif">
          I Know Your WorldBecause I&apos;ve Lived In It
        </Heading>
        <div className="mt-16 max-w-3xl space-y-6 text-lg/8 text-gray-700">
          <p>
            I&apos;m Shaun Morgan. I&apos;ve spent 15+ years in financial
            servicesas a wholesaler, recruiter, and RIA consultant. I&apos;ve
            been inside hundreds of advisor offices. I&apos;ve seen what makes
            practices thrive and what makes them struggle.
          </p>
          <p className="font-medium text-gray-950">
            But I&apos;ve also seen your world from other angles:
          </p>
          <ul className="space-y-4">
            <li>
              &ldquo; As a business banker at JP Morgan Chase, I analyzed the
              financials of operating businesses and learned how leadership
              health shows up in the numbers.
            </li>
            <li>
              &ldquo; At Eventide, I worked alongside analysts and portfolio managers
              who evaluated management teams for multi-million-dollar investment
              decisions. I learned what makes a team investable.
            </li>
            <li>
              &ldquo; In the venture capital and angel investing community, I&apos;ve
              spoken at events and learned from investors who back early-stage
              companies based on team quality.
            </li>
            <li>
              &ldquo; As a three-time founder, I&apos;ve built teams, managed culture,
              and lived the challenges I now coach on.
            </li>
          </ul>
          <p>
            I know what sophisticated investors look for. I know what makes
            teams work. And I know what separates advisory practices that
            clients tolerate from practices that clients love.
          </p>
          <p className="font-medium text-gray-950">
            Here&apos;s what I&apos;ve learned: The practices that win in the
            next decade won&apos;t be the ones with the best investment
            performance or the fanciest planning software. They&apos;ll be the
            ones that make clients feel genuinely seen, valued, and cared for.
          </p>
          <p className="text-xl font-semibold text-gray-950">
            In other words: They&apos;ll be hospitality firms that happen to
            offer wealth management.
          </p>
        </div>
      </Container>
    </div>
  )
}

function Philosophy() {
  return (
    <Container className="py-32">
      <Heading as="h2" className="font-serif">
        Why Hospitality Is Your Competitive Moat
      </Heading>
      <div className="mt-16 max-w-3xl space-y-6 text-lg/8 text-gray-700">
        <p>
          Let me define what I mean by hospitalitybecause it&apos;s not what
          most people think.
        </p>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <p className="font-medium text-gray-950">
            Hospitality is not service.
          </p>
          <p className="mt-2">
            Service is part of the product. It&apos;s executing the plan,
            rebalancing the portfolio, filing the paperwork. Service is
            expected.
          </p>
          <p className="mt-4 text-xl font-semibold text-gray-950">
            Hospitality is the art of making people feel valuable and enjoyed.
          </p>
        </div>
        <p>
          It&apos;s the tone in your voice when you answer the phone. It&apos;s
          remembering what matters to them beyond their portfolio. It&apos;s the
          handwritten note after a hard conversation. It&apos;s designing
          moments that make them think, &quot;Wow, they really see me.&quot;
        </p>
        <p className="font-medium text-gray-950">And here&apos;s why it matters:</p>
        <div className="space-y-4">
          <p className="font-semibold text-gray-950">
            AI can replicate service. It can&apos;t replicate hospitality.
          </p>
          <p>
            In a world where algorithms can build portfolios and chatbots can
            answer planning questions, the only thing that can&apos;t be
            automated is the feeling of being genuinely cared for by another
            human being.
          </p>
          <p className="font-semibold text-gray-950">
            Hospitality is the competitive moat.
          </p>
          <p>
            And the best part? Most of your competitors aren&apos;t even
            thinking about this yet. They&apos;re still competing on performance,
            fees, and planning sophisticationall of which are being
            commoditized.
          </p>
          <p className="text-xl font-semibold text-gray-950">
            You have a narrow window to become a hospitality-driven practice.
            And when you do, you&apos;ll be nearly impossible to compete with.
          </p>
        </div>
      </div>
    </Container>
  )
}

function Approach() {
  return (
    <div className="bg-gray-50 py-32">
      <Container>
        <Heading as="h2" className="font-serif">
          How We&apos;ll Build Your Hospitality-Driven Practice
        </Heading>
        <p className="mt-6 max-w-3xl text-lg/8 text-gray-700">
          Transforming your practice into a hospitality-driven firm happens in
          three phases:
        </p>

        <div className="mt-16 space-y-12">
          <div>
            <Subheading>Phase 1: Build a Healthy Leader (You)</Subheading>
            <div className="mt-6 max-w-3xl space-y-4 text-lg/8 text-gray-700">
              <p>
                It starts with you. We&apos;ll work on your self-awareness,
                emotional intelligence, and relational capacity. This isn&apos;t
                touchy-feelyit&apos;s the foundation of everything else.
              </p>
              <p>
                You&apos;ll learn to lead with both confidence and humility.
                You&apos;ll develop the vulnerability that creates trust. And
                you&apos;ll build the personal disciplines that make great
                leadership sustainable.
              </p>
            </div>
          </div>

          <div>
            <Subheading>Phase 2: Build a Healthy Team</Subheading>
            <div className="mt-6 max-w-3xl space-y-4 text-lg/8 text-gray-700">
              <p>
                When you&apos;re healthy, your team can become healthy.
                We&apos;ll establish trust, alignment, and a culture where
                people feel known, understood, and appreciated.
              </p>
              <p>
                Your team will learn to operate like a basketball team, not a
                golf teamleaning on each other&apos;s strengths, covering each
                other&apos;s weaknesses, and working toward a shared goal.
              </p>
              <p className="font-medium text-gray-950">
                When your team feels valued internally, they&apos;ll naturally
                extend that hospitality externally to your clients.
              </p>
            </div>
          </div>

          <div>
            <Subheading>Phase 3: Build Hospitality Into Every Touchpoint</Subheading>
            <div className="mt-6 max-w-3xl space-y-4 text-lg/8 text-gray-700">
              <p>
                Finally, we&apos;ll map every client touchpointfrom the first
                phone call to the annual review to the estate planning
                conversationand design hospitality into each one.
              </p>
              <p>
                We&apos;ll teach your team to look for moments to elevate the
                experience. To surprise and delight. To make clients feel seen
                in ways your competitors never will.
              </p>
              <p className="font-medium text-gray-950">
                This isn&apos;t about gimmicks. It&apos;s about systematically
                designing an experience so memorable that clients become your
                best marketing.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Offerings() {
  return (
    <Container className="py-32">
      <Heading as="h2" className="font-serif">
        How We Can Work Together
      </Heading>

      <div className="mt-16 space-y-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl font-medium text-gray-950">
              1:1 Coaching for Financial Advisors
            </h3>
            <div className="mt-6 space-y-4 text-lg/8 text-gray-700">
              <p className="font-medium text-gray-950">What it is:</p>
              <p>
                Private coaching for advisors who want to build a
                hospitality-driven practice and lead a thriving team.
              </p>
              <p className="font-medium text-gray-950">Who it&apos;s for:</p>
              <p>
                Advisors who are successful but restless. You&apos;ve built
                something good, but you know it could be great. You want to
                differentiate in a commoditized market and create a practice
                you&apos;re genuinely proud of.
              </p>
              <p className="font-medium text-gray-950">What we&apos;ll work on:</p>
              <ul className="space-y-2">
                <li>&ldquo; Your identity and motivation as a leader</li>
                <li>&ldquo; Building a healthy, aligned team</li>
                <li>&ldquo; Designing unforgettable client experiences</li>
                <li>&ldquo; Making hospitality your competitive advantage</li>
              </ul>
            </div>
            <div className="mt-8">
              <Button href="/contact?interest=coaching">Learn More</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl font-medium text-gray-950">
              Team Workshops for Financial Advisory Practices
            </h3>
            <div className="mt-6 space-y-4 text-lg/8 text-gray-700">
              <p className="font-medium text-gray-950">What it is:</p>
              <p>
                A half-day or full-day workshop for your entire teamdesigned to
                align your culture, elevate your client experience, and build a
                hospitality-driven practice.
              </p>
              <p className="font-medium text-gray-950">Who it&apos;s for:</p>
              <p>
                Advisory teams (2-20 people) who want to move from
                &quot;satisfied clients&quot; to &quot;raving fans&quot; and
                create a culture where people love coming to work.
              </p>
              <p className="font-medium text-gray-950">What we&apos;ll cover:</p>
              <ul className="space-y-2">
                <li>
                  &ldquo; The three phases of organizational vitality (leader, team,
                  client experience)
                </li>
                <li>
                  &ldquo; Mapping every client touchpoint and elevating each one
                </li>
                <li>
                  &ldquo; Building trust, alignment, and accountability within your
                  team
                </li>
                <li>
                  &ldquo; Creating a hospitality system that becomes your competitive
                  moat
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <Button href="/contact?interest=workshop">Learn More</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl font-medium text-gray-950">
              Keynote: &quot;The Future of Financial Advice Is Hospitality&quot;
            </h3>
            <div className="mt-6 space-y-4 text-lg/8 text-gray-700">
              <p className="font-medium text-gray-950">What it is:</p>
              <p>
                A 45-60 minute keynote presentation for advisor conferences,
                study groups, or firm events.
              </p>
              <p className="font-medium text-gray-950">The talk covers:</p>
              <ul className="space-y-2">
                <li>&ldquo; The history of commoditization in financial advice</li>
                <li>
                  &ldquo; Why AI will automate most of your technical value in the
                  next 5 years
                </li>
                <li>
                  &ldquo; Why client experience is now your only sustainable
                  competitive advantage
                </li>
                <li>
                  &ldquo; The case for becoming a hospitality firm that happens to
                  offer wealth management
                </li>
                <li>
                  &ldquo; Practical steps to begin building a hospitality-driven
                  practice
                </li>
              </ul>
              <p className="font-medium text-gray-950">Who it&apos;s for:</p>
              <p>
                Conference organizers, RIA platforms, broker-dealers, custodians,
                study groups, and firms looking to inspire their advisors with a
                fresh, human-centered vision for the future.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/contact?interest=keynote">Learn More</Button>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12">
          <h3 className="font-serif text-3xl font-medium text-gray-950">
            Two-Day Summit: The Hospitable Wealth Management Lab in Dallas
          </h3>
          <p className="mt-2 text-sm text-gray-600">Coming Fall 2026</p>
          <div className="mt-6 space-y-4 text-lg/8 text-gray-700">
            <p className="font-medium text-gray-950">What it is:</p>
            <p>
              An immersive, two-day workshop (limited to 30 advisors) where
              you&apos;ll build the foundation of a hospitality-driven practice
              alongside a small cohort of like-minded advisors.
            </p>
            <p className="font-medium text-gray-950">What happens:</p>
            <ul className="space-y-2">
              <li>
                &ldquo; <strong>Day 1:</strong> We&apos;ll work on you as a leader,
                your team dynamics, and organizational vitality
              </li>
              <li>
                &ldquo; <strong>Day 2:</strong> We&apos;ll map your client experience,
                design hospitality into every touchpoint, and create actionable
                systems you can implement immediately
              </li>
            </ul>
            <p className="font-medium text-gray-950">Who it&apos;s for:</p>
            <p>
              Advisors who are ready to go all-in on differentiation and want
              dedicated time away from the office to completely reimagine their
              practice.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/contact">Join the Waitlist</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

function Stakes() {
  return (
    <div className="bg-gray-900 py-32 text-white">
      <Container>
        <Heading as="h2" className="font-serif text-white">
          What Happens If You Don&apos;t Differentiate Now
        </Heading>
        <div className="mt-16 max-w-3xl space-y-6 text-lg/8 text-gray-300">
          <p className="text-xl font-medium text-white">
            Here&apos;s the uncomfortable truth:
          </p>
          <p>
            In five years, your clients will be able to get everything you do
            technically from an algorithm. Portfolio construction. Tax planning.
            Retirement projections. Estate analysis. All of itautomated,
            cheaper, and faster than you can deliver it.
          </p>
          <p>
            If you haven&apos;t built a practice where clients feel genuinely
            seen and cared for, they&apos;ll leave. Not because they don&apos;t
            like you. But because they won&apos;t see a reason to pay your fee.
          </p>
          <p>
            Your best team members will leave toofor firms that have figured
            out how to create cultures where people thrive, not just survive.
          </p>
          <p>
            And you&apos;ll wake up one day and realize you spent the best years
            of your career building something people tolerated, not something
            they loved.
          </p>
          <p className="text-xl font-semibold text-white">
            Don&apos;t let that be your story.
          </p>
        </div>
      </Container>
    </div>
  )
}

function Success() {
  return (
    <Container className="py-32">
      <Heading as="h2" className="font-serif">
        What Your Practice Looks Like On The Other Side
      </Heading>
      <p className="mt-6 text-lg/8 text-gray-700">Imagine this:</p>
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex gap-4">
          <div className="flex-shrink-0 text-2xl"></div>
          <p className="text-lg/8 text-gray-700">
            Your clients don&apos;t just staythey refer you constantly because
            they can&apos;t stop talking about the experience you provide
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 text-2xl"></div>
          <p className="text-lg/8 text-gray-700">
            Your team shows up energized and aligned, genuinely excited about
            serving clients
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 text-2xl"></div>
          <p className="text-lg/8 text-gray-700">
            You&apos;ve built a hospitality-driven practice that AI can&apos;t
            touch
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 text-2xl"></div>
          <p className="text-lg/8 text-gray-700">
            Work feels meaningful againfor you and your team
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 text-2xl"></div>
          <p className="text-lg/8 text-gray-700">
            You&apos;re not competing on fees or performance. You&apos;re
            competing on something deeper: how you make people feel
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 text-2xl"></div>
          <p className="text-lg/8 text-gray-700">
            You&apos;ve created a practice you&apos;re genuinely proud of
          </p>
        </div>
      </div>
      <p className="mt-12 max-w-3xl text-xl font-medium text-gray-950">
        That&apos;s not a fantasy. It&apos;s what happens when you build
        hospitality into everything you do.
      </p>
    </Container>
  )
}

function CTA() {
  return (
    <div className="bg-gray-50 py-32">
      <Container className="text-center">
        <Heading as="h2" className="font-serif">
          Let&apos;s Build Your Hospitality-Driven Practice
        </Heading>
        <Lead className="mt-6">
          If this resonates with you, let&apos;s talk. I&apos;d love to learn
          about your practice and explore how we might work together.
        </Lead>
        <div className="mt-12">
          <Button href="/contact">Schedule a Free 30-Minute Discovery Call</Button>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <p className="text-lg text-gray-700">Not ready to schedule a call yet? Start here:</p>
          <div className="mt-6">
            <Button variant="secondary" href="/resources">
              Download: &quot;The 3 Pillars of a Hospitality-Driven Practice&quot;
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function FinancialAdvisors() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Problem />
        <Guide />
        <Philosophy />
        <Approach />
        <Offerings />
        <Stakes />
        <Success />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
