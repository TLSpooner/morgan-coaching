import { AnimatedNumber } from '@/components/animated-number'
import { AnimatedUnderlineLink } from '@/components/animated-underline-link'
import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { HeroVideo } from '@/components/hero-video'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Screenshot } from '@/components/screenshot'
import { SetBanner } from '@/components/set-banner'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { TypewriterScript } from '@/components/typewriter-script'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Hospitality is your most valuable intangible asset. It goes beyond selling products—it builds loyalty.',
}

function Hero() {
  return (
    <div className="relative">
      <SetBanner>
        <Link
          href="/blog/how-to-grow-your-business-with-hospitality-in-the-age-of-a-i"
          className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
        >
          Hospitality in the age of A.I.
          <ChevronRightIcon className="size-4" />
        </Link>
      </SetBanner>
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-serif text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Grow by being human.
          </h1>
          <p className="sm:text-l/2 mt-8 max-w-2xl font-sans text-xl/7 font-normal text-gray-950/75 sm:leading-tight">
            Being human is more difficult than ever, which just might mean
            it&apos;s rarer and more valuable than ever. What&apos;s certain,
            A.I. is fundamentally changing what being human means. So let&apos;s
            start our partnership with the following principle: being human is
            being hospitable.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Schedule a 30 min. call</Button>
            <Button variant="secondary" href="/services">
              See pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function HeroWithVideo() {
  return (
    <div className="relative">
      <SetBanner>
        <Link
          href="/blog/how-to-grow-your-business-with-hospitality-in-the-age-of-a-i"
          className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
        >
          Hospitality in the age of A.I.
          <ChevronRightIcon className="size-4" />
        </Link>
      </SetBanner>
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Content */}
            <div>
              <h1 className="font-serif text-4xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-5xl/[0.8] lg:text-6xl/[0.8]">
                Grow by being human.
              </h1>
              <p className="mt-8 max-w-xl font-sans text-xl/7 font-normal text-gray-950/75">
                Your team is competent. Your clients are satisfied. But
                something&apos;s missing—the energy, the alignment, the sense
                that people (including you) genuinely love being here.
              </p>
              <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                <Button href="/contact">Schedule a 30 min. call</Button>
                <Button variant="secondary" href="/services">
                  See pricing
                </Button>
              </div>
            </div>

            {/* Right: Video */}
            <div>
              <HeroVideo vimeoId="1152426778" />
              <Link
                href="/explore"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-600"
              >
                <span className="relative text-base/7">
                  Start your coaching journey today
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-morganBrown-950 transition-all duration-500 ease-out group-hover:w-full" />
                </span>
                <ChevronRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function PlaceholderImage() {
  return (
    <div className="relative">
      {/* Offset background with shade overlay */}
      <div className="absolute -top-4 left-4 h-auto w-full max-w-[560px]">
        <svg
          width="560"
          height="560"
          viewBox="0 0 560 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-full"
        >
          <rect
            width="560"
            height="560"
            rx="24"
            className="fill-morganOrange-500"
          />
        </svg>
      </div>
      {/* Main image */}
      <img
        src="/definition-section/paradox-of-agency.webp"
        alt="Diagram showing the paradox of agency: will, conscious thought, unconscious brain activity, and action"
        width={560}
        height={560}
        className="relative aspect-square w-full max-w-[560px] rounded-3xl object-cover object-right"
      />
    </div>
  )
}

function DefinitionSection({ reversed = false }: { reversed?: boolean }) {
  return (
    <div className="py-24 sm:py-32">
      <Container>
        <div
          className={`grid grid-cols-1 items-center gap-8 lg:gap-16 ${
            reversed
              ? 'lg:grid-cols-[minmax(0,560px)_minmax(0,672px)]'
              : 'lg:grid-cols-[minmax(0,672px)_minmax(0,560px)]'
          }`}
        >
          {/* Left column: Definition content */}
          <div className={reversed ? 'lg:order-2' : ''}>
            <Heading as="h2" className="font-serif">
              It Starts With a Definition
            </Heading>
            <p className="mt-6 text-lg/8 text-gray-700">
              The word &quot;hospitable&quot; carries more weight than most
              people realize. It&apos;s not just about being nice or
              friendly—it&apos;s about creating an environment where people feel
              genuinely welcomed, valued, and cared for. Let&apos;s explore what
              it really means.
            </p>

            <div className="mt-12 space-y-4">
              <div className="font-serif text-xl/7 font-semibold text-gray-950/75 sm:text-xl/2 sm:leading-tight">
                <AnimatedUnderlineLink
                  text="hos·pi·ta·ble"
                  showCursor={false}
                  className="font-serif text-xl/7 font-semibold text-gray-950/75 sm:text-xl/2 sm:leading-tight"
                />
                <span className="font-serif text-xl/7 font-semibold text-gray-950/75 sm:text-xl/2 sm:leading-tight">
                  {' '}
                  /häˈspidəb(ə)l,ˈhäspidəb(ə)l/
                </span>
              </div>

              <div>
                <p className="font-serif text-xl/7 font-normal text-gray-950/50 italic sm:leading-tight">
                  adjective
                </p>
              </div>

              <div className="mt-6 min-h-[10.5rem] whitespace-pre-line sm:min-h-[3.5rem]">
                <TypewriterScript
                  as="div"
                  className="font-serif text-xl/7 font-medium text-gray-950/75 sm:leading-tight"
                  script={[
                    {
                      text: 'hospitable: friendly and welcoming to friends and family.\n"sometimes it\'s harder to be hospitable with family."',
                      endDelay: 1.5,
                      backspace: 'word',
                      backspaceFactor: 0.6,
                    },
                    {
                      text: 'hospitable: friendly and welcoming to strangers or guests.\n"two friendly, hospitable brothers run the hotel"',
                      endDelay: 3,
                      backspace: 'word',
                      backspaceFactor: 0.6,
                    },
                    {
                      text: 'hospitable: offering a pleasant and comfortable environment.\n"the hospital has a reputation for being hospitable to visitors"',
                      endDelay: 4,
                      backspace: 'character',
                      backspaceFactor: 1.2,
                    },
                    {
                      text: 'hospitable: receptive and open to new ideas or experiences.\n"she was hospitable to the idea of collaboration"',
                      endDelay: 3,
                      backspace: 'character',
                      backspaceFactor: 1.2,
                    },
                    {
                      text: 'hospitable: creating conditions favorable for growth or development.\n"a hospitable climate for innovation and creativity"',
                      endDelay: 2,
                      backspace: 'character',
                      backspaceFactor: 1.2,
                    },
                    {
                      text: 'hospitable: generous in providing care and sustenance.\n"they maintained a hospitable home for all who entered"',
                      endDelay: 1.5,
                      backspace: 'character',
                      backspaceFactor: 1.2,
                    },
                  ]}
                  speed={0.05}
                  loop={true}
                />
              </div>
            </div>
          </div>

          {/* Image column */}
          <div
            className={`flex justify-center ${
              reversed ? 'lg:order-1 lg:justify-start' : 'lg:justify-end'
            }`}
          >
            <PlaceholderImage />
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          A snapshot of your entire sales pipeline.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-144 sm:h-auto sm:w-304"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Sales</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Know more about your customers than they do.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-size-[1000px_560px] bg-position-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Undercut your competitors"
          description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-size-[1100px_650px] bg-position-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Built for power users"
          description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Sell globally"
          description="Radiant helps you sell in locations currently under international embargo."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Customer outreach has never been easier.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Networking"
            title="Sell at the speed of light"
            description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Meet leads where they are"
            description="With thousands of integrations, no one will be able to escape your cold outreach."
            graphic={<LogoTimeline />}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart call scheduling"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

function Problem() {
  return (
    <Container className="py-32">
      <Heading as="h2" className="pt-40 font-serif">
        The Real Problem Isn&apos;t What You Think
      </Heading>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg space-y-6 text-lg/8 text-gray-700">
          <p>
            Most leaders assume the problem is tactical: better systems, clearer
            processes, smarter marketing. But that&apos;s not it.
          </p>
          <p>
            The real problem is that somewhere along the way, we started
            checking our humanity at the door. Work became transactional.
            Relationships became functional. And without realizing it, we built
            organizations where people—employees and clients alike—feel like
            numbers instead of human beings.
          </p>
          <p className="font-medium text-gray-950">The result?</p>
          <ul className="space-y-4">
            <li>
              • Teams that show up but don&apos;t bring their full creativity or
              energy
            </li>
            <li>• Clients who stay but don&apos;t rave about you</li>
            <li>• Cultures that feel stale—or worse, toxic</li>
            <li>
              • Businesses that are successful on paper but hollow in reality
            </li>
          </ul>
          <p>
            What makes it even harder—you can&apos;t easily quantify culture.
            You can&apos;t put &quot;organizational vitality&quot; on a
            dashboard. So it&apos;s deprioritized and undervalued. But it&apos;s
            the foundation.
          </p>
        </div>
        <div className="pt-40 lg:row-span-2 xl:mr-auto">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/problem/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/problem/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/problem/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/problem/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>The Cost</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Employee turnover</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={52} />%
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Disengaged employees</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={68} />%
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Lost productivity</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                $<AnimatedNumber start={0} end={450} />B
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Leadership burnout</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={77} />%
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Guide() {
  return (
    <Container className="pt-48 pb-32">
      <Heading as="h2" className="font-serif">
        I&apos;m Shaun Morgan. And I See What Others Miss.
      </Heading>
      <div className="mt-16 max-w-3xl space-y-6 text-lg/8 text-gray-700">
        <p>
          I&apos;ve spent my career evaluating businesses and their leaders from
          multiple vantage points—not just as a coach, but as someone who&apos;s
          been in the rooms where real decisions get made.
        </p>
        <p>
          I started as a business banker at JP Morgan Chase, analyzing the
          financials and cash flow of operating businesses across Dallas. I
          learned early that the numbers tell a story—but the story behind the
          numbers is always about leadership and organizational health.
        </p>
        <p>
          I spent 15+ years in financial services as a wholesaler, recruiter,
          and consultant, visiting hundreds of advisor offices nationwide. I
          developed an almost instinctive sense for when a culture was thriving
          versus when it was just surviving—and I saw how directly that showed
          up in client retention, team longevity, and business growth.
        </p>
        <p>
          At Eventide, I worked closely with analysts and portfolio managers who
          were making multi-million-dollar investment decisions. I learned how
          they evaluated management teams and what intangible leadership
          qualities they looked for when deciding where to deploy institutional
          capital.
        </p>
        <p>
          I&apos;m deeply embedded in the venture capital and angel investing
          community, where I&apos;ve spoken at events and learned from investors
          who back early-stage companies. I&apos;ve seen that great ideas fail
          without great leadership, and average ideas thrive when led by
          healthy, aligned teams.
        </p>
        <p>
          And I&apos;ve founded three businesses myself—including Annalo
          Industries and Morgan Advisor Consulting—so I&apos;ve lived the
          leadership challenges I now coach on. I&apos;ve built teams, managed
          culture, navigated uncertainty, and learned that organizational
          vitality isn&apos;t a nice-to-have. It&apos;s the foundation of
          everything else.
        </p>
        <p className="font-medium text-gray-950">
          Here&apos;s what I know: The businesses that win aren&apos;t the
          smartest or best-capitalized. They&apos;re the ones with the
          healthiest leaders, the most aligned teams, and the most hospitable
          cultures.
        </p>
        <p>
          And in an age where AI is commoditizing technical expertise, the only
          sustainable competitive advantage is how you make people feel—both
          your team and your clients.
        </p>
      </div>
      <div className="mt-16">
        <Subheading>Experience</Subheading>
        <hr className="mt-6 border-t border-gray-200" />
        <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
            <dt className="text-sm/6 text-gray-600">
              Years in financial services
            </dt>
            <dd className="order-first text-6xl font-medium tracking-tight">
              <AnimatedNumber start={0} end={15} />+
            </dd>
          </div>
          <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
            <dt className="text-sm/6 text-gray-600">Advisor offices visited</dt>
            <dd className="order-first text-6xl font-medium tracking-tight">
              <AnimatedNumber start={0} end={500} />+
            </dd>
          </div>
          <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
            <dt className="text-sm/6 text-gray-600">Businesses founded</dt>
            <dd className="order-first text-6xl font-medium tracking-tight">
              <AnimatedNumber start={0} end={3} />
            </dd>
          </div>
          <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
            <dt className="text-sm/6 text-gray-600">Coaching clients</dt>
            <dd className="order-first text-6xl font-medium tracking-tight">
              <AnimatedNumber start={0} end={50} />+
            </dd>
          </div>
        </dl>
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroWithVideo />
      <main>
        {/* <Container className="mt-10">
          <LogoCloud />
        </Container> */}
        <Container className="mt-10">
          <DefinitionSection reversed />
        </Container>
        {/* <Problem />
        <Guide /> */}
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
