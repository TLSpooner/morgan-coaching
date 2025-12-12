import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Business Leaders',
  description:
    "You've built a successful business. But does your team actually love being there? Transform culture from a buzzword into business strategy.",
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-serif text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            You&apos;ve Built a Successful Business. But Does Your Team Actually
            Love Being There?
          </h1>
          <p className="mt-8 max-w-3xl font-sans text-xl/7 font-medium text-balance text-gray-950/75 sm:text-2xl/8">
            You know culture matters. You know client experience matters. But
            you&apos;re not sure how to transform them from buzzwords into
            business strategy.
          </p>
          <p className="mt-6 max-w-3xl text-lg/8 text-balance text-gray-700">
            The truth is, most leaders underestimate how much their internal
            culture affects their external results. Unhealthy teams create
            generic client experiences. Healthy teams create unforgettable ones.
          </p>
          <p className="mt-4 max-w-3xl text-lg/8 font-medium text-balance text-gray-950">
            And in a world where AI is commoditizing what you do, how you make
            people feel is becoming your only sustainable competitive advantage.
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
        The Problem Hiding In Plain Sight
      </Heading>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-3xl space-y-6 text-lg/8 text-gray-700 lg:col-span-2">
          <p>
            You&apos;ve built a successful business. Revenue is solid. Clients
            are satisfied. But if you&apos;re honest, something feels off.
          </p>
          <p className="font-medium text-gray-950">
            Here&apos;s what I see when I work with business leaders:
          </p>
        </div>

        <div className="mt-8 max-w-3xl space-y-6 text-lg/8 text-gray-700 lg:col-span-2">
          <div>
            <p className="font-semibold text-gray-950">
              Your team is competent but not energized.
            </p>
            <p className="mt-2">
              People show up. They do their jobs. But they&apos;re not bringing
              their full creativity or passion. They&apos;re not buzzing with
              ideas. They&apos;re just... there.
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-950">
              Your culture feels staleor worse.
            </p>
            <p className="mt-2">
              Maybe it&apos;s not toxic. But it&apos;s not thriving either.
              There&apos;s a flatness. Sometimes there&apos;s tension. People
              are professional, but not connected.
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-950">
              Your client experience is generic.
            </p>
            <p className="mt-2">
              You deliver good service. But your clients aren&apos;t raving
              fans. They&apos;re not bonding to your brand. They&apos;re
              satisfiedbut not loyal.
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-950">
              You can&apos;t quantify it, so you keep deprioritizing it.
            </p>
            <p className="mt-2">
              You know culture and experience matter. But you don&apos;t have
              clear KPIs. You can&apos;t put &quot;organizational health&quot;
              on a dashboard. So it keeps getting pushed aside for things that
              feel more measurable.
            </p>
          </div>

          <p className="font-medium text-gray-950">
            And here&apos;s the deeper problem:
          </p>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <p className="font-semibold text-gray-950">
              Somewhere along the way, you started believing that caring about
              people is soft, juvenile, or unprofessional.
            </p>
            <p className="mt-4">
              You tell yourself that people should just &quot;be adults&quot;
              and do their jobs. That feelings and emotions are things you
              shouldn&apos;t have to consider in a business setting.
            </p>
            <p className="mt-4 font-medium text-gray-950">
              But here&apos;s the truth: Being an adult IS being a human. And
              humanseven the most competent, high-performing humansdo better
              work when they feel known, understood, and appreciated.
            </p>
            <p className="mt-4 text-xl font-semibold text-gray-950">
              You&apos;re not compensating for emotional immaturity. You&apos;re
              unlocking human potential.
            </p>
          </div>
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
          I&apos;ve Seen What Makes Businesses ThriveFrom Every Angle
        </Heading>
        <div className="mt-16 max-w-3xl space-y-6 text-lg/8 text-gray-700">
          <p>
            I&apos;m Shaun Morgan. And I&apos;ve spent my career evaluating
            businesses and their leaders from multiple vantage points.
          </p>
          <p>
            I started as a business banker at JP Morgan Chase, analyzing the
            financials and cash flow of operating businesses. I learned early
            that the numbers always tell a storybut the story behind the numbers
            is always about leadership and people.
          </p>
          <p>
            I spent 15+ years in financial services, visiting hundreds of
            offices and developing an instinct for when a culture is thriving
            versus when it&apos;s just surviving. I saw how directly internal
            health shows up in client retention, employee tenure, and revenue
            growth.
          </p>
          <p>
            At Eventide, I worked alongside analysts and portfolio managers who
            were making multi-million-dollar investment decisions. I learned
            what they looked for in management teamsand it wasn&apos;t just
            strategy or market position. It was trust, alignment, and emotional
            intelligence.
          </p>
          <p>
            I&apos;m deeply embedded in the venture capital and angel investing
            community, where I&apos;ve spoken at events and learned from
            investors who back early-stage companies. I&apos;ve seen that great
            ideas fail without great leadership, and average ideas thrive when
            led by healthy teams.
          </p>
          <p>
            And I&apos;ve founded three businesses myselfso I&apos;ve lived the
            challenges I now coach on. I&apos;ve built teams, managed culture,
            made hard decisions, and learned that organizational vitality
            isn&apos;t a luxury. It&apos;s the foundation of sustainable growth.
          </p>
          <p className="text-xl font-semibold text-gray-950">
            Here&apos;s what I know: The businesses that win aren&apos;t the
            smartest or best-capitalized. They&apos;re the ones with the
            healthiest leaders, the most aligned teams, and the most hospitable
            cultures.
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
        Healthy Leaders � Healthy Teams � Unforgettable Client Experiences
      </Heading>
      <div className="mt-16 max-w-3xl space-y-6 text-lg/8 text-gray-700">
        <p>
          Organizational transformation isn&apos;t mysterious. It&apos;s
          systematic. And it follows a predictable pattern:
        </p>

        <div className="space-y-8">
          <div>
            <p className="text-xl font-semibold text-gray-950">
              It starts with the leader.
            </p>
            <p className="mt-2">
              If you&apos;re not healthyself-aware, emotionally intelligent,
              confident yet humbleyour team can&apos;t be healthy either.
              Leadership dysfunction cascades through the organization.
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-gray-950">
              Then it extends to the team.
            </p>
            <p className="mt-2">
              When the leader is healthy, the team can build trust, engage in
              healthy conflict, commit to decisions, hold each other
              accountable, and focus on results. This isn&apos;t Kumbaya.
              It&apos;s how high-performing teams actually operate.
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-gray-950">
              And it culminates in how you serve clients.
            </p>
            <p className="mt-2">
              When employees feel valued, known, and energized, they naturally
              extend that spirit to customers. They look for ways to elevate the
              experience. They care more. They try harder. And customers feel
              it.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <p className="text-xl font-semibold text-gray-950">
            This is hospitality.
          </p>
          <p className="mt-4">
            Hospitality isn&apos;t service. Service is executing the
            transaction. Hospitality is making people feel valuable and
            enjoyedboth internally and externally.
          </p>
        </div>

        <p className="font-medium text-gray-950">
          And here&apos;s why it matters now more than ever:
        </p>

        <div className="space-y-4">
          <p className="font-semibold text-gray-950">
            AI can replicate your expertise. It can&apos;t replicate
            hospitality.
          </p>
          <p>
            In five years, algorithms will do most of what your business does
            technically. The businesses that survive will be the ones that
            mastered something AI can&apos;t: making people feel genuinely seen
            and cared for.
          </p>
          <p className="text-xl font-semibold text-gray-950">
            Hospitality is your competitive moat.
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
          How We&apos;ll Transform Your Organization
        </Heading>
        <p className="mt-6 max-w-3xl text-lg/8 text-gray-700">
          We&apos;ll work together in three phases:
        </p>

        <div className="mt-16 space-y-12">
          <div>
            <Subheading>Phase 1: Build a Healthy Leader</Subheading>
            <div className="mt-6 max-w-3xl space-y-4 text-lg/8 text-gray-700">
              <p>
                It starts with you. We&apos;ll work on your self-awareness,
                emotional intelligence, and relational capacity. We&apos;ll
                develop the personal disciplinesorganization, focus,
                goal-settingthat make great leadership sustainable.
              </p>
              <p>
                But more importantly, we&apos;ll work on your relational
                intelligence: your ability to be vulnerable, to inspire trust,
                to lead with both confidence and humility.
              </p>
              <p className="font-medium text-gray-950">
                When you&apos;re healthy, everything downstream gets easier.
              </p>
            </div>
          </div>

          <div>
            <Subheading>Phase 2: Build a Healthy Team</Subheading>
            <div className="mt-6 max-w-3xl space-y-4 text-lg/8 text-gray-700">
              <p>
                When you&apos;re healthy, your team can become healthy.
                We&apos;ll establish the foundation of genuine trustnot just
                confidence that people will do what they say, but the deeper
                security that allows people to be fully honest with each other.
              </p>
              <p>
                Your team will learn to communicate without fear: admitting
                mistakes openly, asking for help without shame, acknowledging
                when someone else&apos;s approach is better, and being
                transparent about their limitations and struggles.
              </p>
              <p>
                We&apos;ll develop the five critical dynamics of exceptional
                teams: genuine trust, productive disagreement, full buy-in,
                mutual ownership, and collective focus.
              </p>
              <p>
                And we&apos;ll help your broader organization operate with these
                same dynamicscreating a culture where people feel known,
                understood, and appreciated.
              </p>
              <p className="font-medium text-gray-950">
                When people feel secure enough to be real with each other, teams
                become exponentially more productiveand that culture naturally
                extends to how they serve your clients.
              </p>
            </div>
          </div>

          <div>
            <Subheading>Phase 3: Build Hospitality Into Everything</Subheading>
            <div className="mt-6 max-w-3xl space-y-4 text-lg/8 text-gray-700">
              <p>
                Finally, we&apos;ll translate your internal health into
                unforgettable external experiences. We&apos;ll map every
                customer touchpoint and design hospitality into each one.
              </p>
              <p>
                We&apos;ll teach your team to look for moments to make people
                feel valuable and enjoyed. To surprise and delight. To create
                experiences so memorable that customers become your marketing
                strategy.
              </p>
              <p className="font-medium text-gray-950">
                When hospitality permeates your organizationwhen it becomes
                &quot;cool to care&quot;your business becomes nearly impossible
                to compete with.
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
              1:1 Coaching for Business Leaders
            </h3>
            <div className="mt-6 space-y-4 text-lg/8 text-gray-700">
              <p className="font-medium text-gray-950">What it is:</p>
              <p>
                Private coaching for leaders who want to build healthy
                organizations where people thriveand where that vitality
                translates into loyal customers and sustainable growth.
              </p>
              <p className="font-medium text-gray-950">Who it&apos;s for:</p>
              <p>
                CEOs, founders, and senior leaders who are successful but
                restless. You&apos;ve built something good, but you know it
                could be great. You want a culture that attracts top talent and
                a client experience that creates raving fans.
              </p>
              <p className="font-medium text-gray-950">
                What we&apos;ll work on:
              </p>
              <ul className="space-y-2">
                <li>" Your personal health and leadership capacity</li>
                <li>
                  " Building trust and alignment within your leadership team
                </li>
                <li>" Creating a culture where people feel known and valued</li>
                <li>" Designing hospitality into every customer touchpoint</li>
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
              Team Workshops for Business Leaders
            </h3>
            <div className="mt-6 space-y-4 text-lg/8 text-gray-700">
              <p className="font-medium text-gray-950">What it is:</p>
              <p>
                A half-day or full-day workshop for your leadership team or
                entire organizationdesigned to build trust, alignment, and a
                hospitality-driven culture.
              </p>
              <p className="font-medium text-gray-950">Who it&apos;s for:</p>
              <p>
                Leadership teams (5-15 people) or departments and full
                organizations (up to 50 people) who want to move from
                &quot;functional&quot; to &quot;thriving.&quot;
              </p>
              <p className="font-medium text-gray-950">
                What we&apos;ll cover:
              </p>
              <ul className="space-y-2">
                <li>
                  " The three phases of organizational vitality (leader, team,
                  client experience)
                </li>
                <li>" Building vulnerability-based trust within your team</li>
                <li>
                  " Establishing healthy conflict, commitment, accountability,
                  and results
                </li>
                <li>
                  " Mapping customer touchpoints and elevating the experience at
                  each one
                </li>
                <li>
                  " Creating a culture where hospitality becomes your
                  competitive advantage
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
              Keynote: &quot;Rehumanizing Work: Why Hospitality Is Your
              Competitive Weapon&quot;
            </h3>
            <div className="mt-6 space-y-4 text-lg/8 text-gray-700">
              <p className="font-medium text-gray-950">What it is:</p>
              <p>
                A 45-60 minute keynote presentation for business conferences,
                leadership retreats, or company events.
              </p>
              <p className="font-medium text-gray-950">The talk covers:</p>
              <ul className="space-y-2">
                <li>
                  " Why most businesses have accidentally dehumanized work
                </li>
                <li>
                  " The connection between internal culture and external client
                  experience
                </li>
                <li>
                  " Why healthy leaders create healthy teams, and healthy teams
                  create loyal customers
                </li>
                <li>
                  " How hospitalitymaking people feel valuable and enjoyedis the
                  only competitive advantage AI can&apos;t replicate
                </li>
                <li>
                  " Practical steps to begin building a hospitality-driven
                  organization
                </li>
              </ul>
              <p className="font-medium text-gray-950">Who it&apos;s for:</p>
              <p>
                Conference organizers, industry associations, and companies
                looking to inspire their leaders with a human-centered vision
                for the future of work.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/contact?interest=keynote">Learn More</Button>
            </div>
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
          What Happens If You Don&apos;t Invest In This Now
        </Heading>
        <div className="mt-16 max-w-3xl space-y-6 text-lg/8 text-gray-300">
          <p className="text-xl font-medium text-white">
            Here&apos;s what&apos;s at risk:
          </p>
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-white">
                Your best people will leave.
              </p>
              <p className="mt-2">
                Talented employees don&apos;t stay at companies that feel stale
                or transactional. They leave for organizations where they feel
                valued, challenged, and connected to something meaningful.
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">
                Your clients will become indifferent.
              </p>
              <p className="mt-2">
                In a world where competitors can replicate your product or
                service, clients will choose based on how they feel. If your
                experience is generic, you&apos;re just another option.
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">
                You&apos;ll lose ground to competitors who figured out
                hospitality.
              </p>
              <p className="mt-2">
                While you&apos;re competing on features and price, your smartest
                competitors are competing on something deeper: how they make
                people feel. And they&apos;re winning.
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">
                You&apos;ll spend the best years of your career managing a
                business that feels hollow.
              </p>
              <p className="mt-2">
                You didn&apos;t start this business to check boxes and hit
                metrics. You started it to build something meaningful. But
                without organizational vitality, it becomes just another job.
              </p>
            </div>
          </div>
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
        What Your Business Looks Like On The Other Side
      </Heading>
      <p className="mt-6 text-lg/8 text-gray-700">Imagine this:</p>
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex gap-4">
          <div className="flex-shrink-0 text-2xl"></div>
          <p className="text-lg/8 text-gray-700">
            Your team shows up energized, aligned, and genuinely excited about
            the work
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 text-2xl"></div>
          <p className="text-lg/8 text-gray-700">
            People bring their full creativity and ingenuityyou don&apos;t have
            to micromanage
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 text-2xl"></div>
          <p className="text-lg/8 text-gray-700">
            Your culture is a competitive advantage that attracts top talent
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 text-2xl"></div>
          <p className="text-lg/8 text-gray-700">
            Your clients don&apos;t just buythey bond to your brand and refer
            you constantly
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 text-2xl"></div>
          <p className="text-lg/8 text-gray-700">
            You&apos;ve built an organization where people feel known, valued,
            and inspired
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 text-2xl"></div>
          <p className="text-lg/8 text-gray-700">
            Work feels meaningful againfor you, your team, and your customers
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 text-2xl"></div>
          <p className="text-lg/8 text-gray-700">
            You&apos;ve created something you&apos;re genuinely proud of
          </p>
        </div>
      </div>
      <p className="mt-12 max-w-3xl text-xl font-medium text-gray-950">
        That&apos;s not a fantasy. It&apos;s what happens when you build
        organizational vitality and hospitality into everything you do.
      </p>
    </Container>
  )
}

function CTA() {
  return (
    <div className="bg-gray-50 py-32">
      <Container className="text-center">
        <Heading as="h2" className="font-serif">
          Let&apos;s Build a Business People Love
        </Heading>
        <Lead className="mt-6">
          If this resonates with you, let&apos;s talk. I&apos;d love to learn
          about your business and explore how we might work together.
        </Lead>
        <div className="mt-12">
          <Button href="/contact">
            Schedule a Free 30-Minute Discovery Call
          </Button>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <p className="text-lg text-gray-700">
            Not ready to schedule a call yet? Start here:
          </p>
          <div className="mt-6">
            <Button variant="secondary" href="/resources">
              Download: &quot;The 3 Pillars of Organizational Vitality&quot;
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function BusinessLeaders() {
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
