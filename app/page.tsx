import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChartLineUp,
  MagnifyingGlass,
  UsersThree,
  Handshake,
  CheckCircle,
  ArrowRight,
  CaretDown,
} from "@phosphor-icons/react/dist/ssr";
import { HeroText, HeroTextItem, HeroImage } from "@/components/HomeAnimations";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Dental Practice Consultant San Diego | Young Dental Solutions",
  description:
    "Arlene Young brings 30+ years of dental practice consulting to Southern California. Practice management, due diligence, coaching, and recruiting, all 1-on-1.",
  alternates: {
    canonical: "https://youngdentalsolutions.com",
  },
  openGraph: {
    title: "Dental Practice Consultant San Diego | Young Dental Solutions",
    description:
      "30+ years of dental practice consulting across Southern California. Practice management, due diligence, coaching, and recruiting.",
    url: "https://youngdentalsolutions.com",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a dental practice management consultant do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A dental practice management consultant analyzes your practice's systems, financials, scheduling, billing, and team dynamics to identify inefficiencies and growth opportunities. Unlike a general business consultant, a dental practice consultant understands the specific metrics, production per provider, collection rates, overhead percentages, and scheduling efficiency, that determine practice profitability.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a dental practice consultant cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dental practice consulting fees vary based on scope and engagement type. Practice analysis engagements are typically project-based, while ongoing coaching is structured as a monthly retainer. Schedule a free consultation with Arlene Young to discuss your specific situation and get a clear picture of what engagement makes sense.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a dental coach and a dental consultant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A dental consultant typically delivers a report or playbook and moves on. A dental coach works with you over time, holding you accountable, adjusting the plan as your practice evolves, and staying available as a thought partner. Arlene Young operates as a coach, she picks up the phone, follows through on every commitment, and treats your practice as a long-term relationship.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results from dental practice consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most practices see meaningful movement in 60-90 days after implementing the changes identified in a practice analysis. Scheduling and billing improvements often show results within the first month. Full cultural and systems transformation typically takes 6-12 months, depending on the depth of changes needed.",
      },
    },
    {
      "@type": "Question",
      name: "When should I hire a dental practice consultant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You should consider a dental practice consultant if your production has plateaued, overhead is creeping above 65%, you're losing patients without understanding why, your team has high turnover, or you're preparing to buy or sell a practice. Even high-performing practices benefit from an objective outside view.",
      },
    },
    {
      "@type": "Question",
      name: "What does dental practice due diligence include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dental practice due diligence includes a thorough review of production and collection trends, overhead ratios, patient retention and new patient flow, billing and insurance mix, staffing costs and turnover, equipment condition, lease terms, and practice culture. The goal is to give you a complete picture of what you're actually buying before you sign.",
      },
    },
  ],
};

const services = [
  {
    icon: ChartLineUp,
    title: "Practice Management",
    tagline: "Your practice metrics are telling a story. Let's find out what it says.",
    description:
      "A deep analysis of your scheduling, billing, team dynamics, and financials, with a prioritized action plan you can execute.",
    href: "/services/practice-management",
  },
  {
    icon: MagnifyingGlass,
    title: "Due Diligence",
    tagline: "Before you sign on a practice, know what you're actually buying.",
    description:
      "Production trends, overhead ratios, team health, lease terms, everything you need to make a confident acquisition decision.",
    href: "/services/due-diligence",
  },
  {
    icon: Handshake,
    title: "Coaching",
    tagline: "Clarity on your numbers. Confidence in your decisions.",
    description:
      "1-on-1 ongoing coaching for dentists who want a thought partner, not a template, as they grow their practice.",
    href: "/services/coaching",
  },
  {
    icon: UsersThree,
    title: "Recruiting",
    tagline: "The right team is the difference between a practice that runs and one that drains you.",
    description:
      "Talent acquisition and team-building support for dental practices across Southern California.",
    href: "/services/recruiting",
  },
];

const faqs = [
  {
    q: "What does a dental practice management consultant do?",
    a: "A dental practice management consultant analyzes your systems, financials, scheduling, billing, and team dynamics to identify what's holding your practice back and build a clear plan to fix it.",
  },
  {
    q: "How much does a dental practice consultant cost?",
    a: "Fees depend on engagement scope. Practice analyses are project-based; ongoing coaching is a monthly retainer. Schedule a free consultation to get a clear picture of what makes sense for your practice.",
  },
  {
    q: "What's the difference between a dental coach and a consultant?",
    a: "A consultant delivers a report and moves on. Arlene operates as a coach, she picks up the phone, follows through on every commitment, and stays with you as your practice evolves.",
  },
  {
    q: "How long before I see results?",
    a: "Most practices see meaningful improvement within 60-90 days. Scheduling and billing changes often show results within the first month.",
  },
  {
    q: "When should I hire a dental practice consultant?",
    a: "If production has plateaued, overhead is above 65%, you're losing patients you can't explain, or you're preparing to buy or sell, it's time.",
  },
  {
    q: "What does dental due diligence include?",
    a: "Production and collection trends, overhead ratios, patient retention, billing mix, staffing costs, equipment condition, lease terms, and practice culture, everything before you sign.",
  },
];

const steps = [
  {
    num: "01",
    title: "Free Consultation Call",
    desc: "We talk for 30 minutes. You describe your practice, your goals, and your biggest challenges. No pitch. Just listening.",
  },
  {
    num: "02",
    title: "Practice Analysis",
    desc: "Arlene reviews your numbers, your systems, and your team. You get a clear picture of where you are and what needs to change.",
  },
  {
    num: "03",
    title: "Prioritized Action Plan",
    desc: "Not a 90-page playbook. A focused, ranked list of changes that will move the needle, starting this month.",
  },
];

const cities = [
  "San Diego",
  "Rancho Bernardo",
  "Beverly Hills",
  "Santa Clarita",
  "Los Angeles",
  "Orange County",
];

const differentiators = [
  {
    them: "Sent a playbook for someone else's practice",
    us: "Diagnosis before prescription, your practice, your plan",
  },
  {
    them: "Never returned your calls",
    us: "Arlene picks up the phone",
  },
  {
    them: "Guaranteed results, delivered regret",
    us: "Transparent about what's realistic, no guarantees, only honesty",
  },
  {
    them: "Made your team feel like the problem",
    us: "Coaches your team as a partner, not a liability",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="min-h-[100dvh] flex items-center pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[58%_42%] gap-12 items-center">
          <HeroText>
            <HeroTextItem>
              <p className="text-sm font-body font-medium text-gold uppercase tracking-widest">
                Dental Practice Consulting &middot; San Diego, CA
              </p>
            </HeroTextItem>
            <HeroTextItem>
              <h1 className="font-display text-5xl lg:text-7xl font-semibold text-navy leading-[1.05]">
                30 Years.
                <br />
                One Coach.
                <br />
                <span className="text-gold">Your Practice,</span>
                <br />
                Finally Running
                <br />
                Like a Business.
              </h1>
            </HeroTextItem>
            <HeroTextItem>
              <p className="text-lg text-navy/70 max-w-xl leading-relaxed">
                Most consultants send a playbook. Arlene picks up the phone.
                Young Dental Solutions brings 30+ years of dental industry
                experience and a finance background to practices across Southern
                California. 1-on-1, no templates.
              </p>
            </HeroTextItem>
            <HeroTextItem>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy rounded-lg font-medium font-body hover:bg-gold-light transition-colors"
                >
                  Schedule Free Consultation
                  <ArrowRight size={18} weight="bold" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-navy/20 text-navy rounded-lg font-medium font-body hover:border-navy/40 transition-colors"
                >
                  See All Services
                </Link>
              </div>
            </HeroTextItem>
          </HeroText>

          <HeroImage>
            <div className="relative rounded-2xl overflow-hidden bg-cream border border-navy/8 p-1.5">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                <Image
                  src="/images/arlene-young.jpg"
                  alt="Arlene Young, Dental Practice Consultant serving San Diego and Southern California"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1200px) 40vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>
            </div>
          </HeroImage>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-navy py-10">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedContainer className="grid grid-cols-3 divide-x divide-bg/10 text-center">
            {[
              { stat: "30+", label: "Years in Dental Industry" },
              { stat: "4", label: "Specialized Services" },
              { stat: "SoCal", label: "Wide Service Area" },
            ].map(({ stat, label }) => (
              <AnimatedItem key={stat} className="px-6 py-4">
                <p className="font-display text-3xl lg:text-4xl font-semibold text-gold">
                  {stat}
                </p>
                <p className="text-bg/70 text-sm mt-1 font-body">{label}</p>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedContainer>
            <AnimatedItem className="space-y-6">
              <p className="text-sm font-body font-medium text-gold uppercase tracking-widest">
                Why Arlene
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-navy">
                A Finance Background
                <br />
                <span className="text-gold">Changes Everything.</span>
              </h2>
              <p className="text-navy/70 leading-relaxed">
                Most dental consultants come from clinical backgrounds. Arlene
                Young comes from finance, which means she reads your practice the
                way a CFO reads a balance sheet. She finds the 2-3 levers that
                actually move the needle, rather than prescribing solutions
                designed for someone else's practice.
              </p>
              <p className="text-navy/70 leading-relaxed">
                After 30+ years working across every practice type in Southern
                California, she brings both the pattern recognition of a seasoned
                consultant and the accountability of a personal coach. She picks
                up the phone. She follows through. She stays.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gold font-medium font-body hover:gap-3 transition-all"
              >
                Meet Arlene
                <ArrowRight size={18} weight="bold" />
              </Link>
            </AnimatedItem>
          </AnimatedContainer>

          <AnimatedContainer delay={0.1}>
            {[
              { text: "Finance-first analysis, not clinical assumption" },
              { text: "1-on-1 coaching, not group programs or playbooks" },
              { text: "30+ years of Southern California dental industry knowledge" },
              { text: "Real accountability, she picks up the phone" },
            ].map(({ text }) => (
              <AnimatedItem key={text} className="mb-4">
                <div className="flex items-start gap-4 rounded-2xl bg-cream border border-navy/8 p-1">
                  <div className="rounded-xl bg-bg border border-navy/5 p-5 flex items-start gap-4 w-full">
                    <CheckCircle size={22} weight="fill" className="text-gold mt-0.5 shrink-0" />
                    <p className="text-navy/80 font-body">{text}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-cream" id="services">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedContainer className="text-center mb-16 space-y-4">
            <AnimatedItem>
              <p className="text-sm font-body font-medium text-gold uppercase tracking-widest">
                Services
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-navy">
                Four Ways We Grow Your Practice
              </h2>
            </AnimatedItem>
          </AnimatedContainer>

          <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map(({ icon: Icon, title, tagline, description, href }) => (
              <AnimatedItem key={href}>
                <Link
                  href={href}
                  className="group block rounded-2xl bg-bg border border-navy/8 p-1.5 hover:border-gold/40 hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="rounded-xl bg-cream border border-navy/5 p-7 space-y-4 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Icon size={22} weight="duotone" className="text-gold" />
                    </div>
                    <p className="font-display text-xl font-semibold text-navy">{title}</p>
                    <p className="text-sm font-body text-gold/80 italic">{tagline}</p>
                    <p className="text-sm text-navy/60 leading-relaxed">{description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm text-gold font-medium group-hover:gap-3 transition-all">
                      Learn more <ArrowRight size={14} weight="bold" />
                    </span>
                  </div>
                </Link>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* Why Arlene, Counter-positioning */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-navy rounded-3xl p-10 lg:p-16">
            <AnimatedContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <AnimatedItem className="space-y-6">
                <p className="text-sm font-body font-medium text-gold uppercase tracking-widest">
                  The Difference
                </p>
                <h2 className="font-display text-4xl font-semibold text-bg">
                  You&rsquo;ve Tried Consultants.
                  <br />
                  <span className="text-gold">Try One Who Actually Shows Up.</span>
                </h2>
                <p className="text-bg/70 leading-relaxed">
                  Dentists who&rsquo;ve worked with consultants before come to
                  Arlene with the same story: never returned calls, sent a
                  playbook that wasn&rsquo;t built for their practice, guaranteed
                  30% growth and delivered chaos. That&rsquo;s not how Arlene
                  works.
                </p>
              </AnimatedItem>
              <AnimatedItem className="space-y-4">
                {differentiators.map(({ them, us }) => (
                  <div
                    key={us}
                    className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-bg/5 border border-bg/10"
                  >
                    <p className="text-sm text-bg/40 line-through">{them}</p>
                    <p className="text-sm text-bg/80 font-medium">{us}</p>
                  </div>
                ))}
              </AnimatedItem>
            </AnimatedContainer>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedContainer className="text-center mb-16 space-y-4">
            <AnimatedItem>
              <p className="text-sm font-body font-medium text-gold uppercase tracking-widest">
                Process
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-display text-4xl font-semibold text-navy">
                How It Works
              </h2>
            </AnimatedItem>
          </AnimatedContainer>

          <AnimatedContainer className="space-y-5">
            {steps.map(({ num, title, desc }) => (
              <AnimatedItem key={num}>
                <div className="rounded-2xl bg-bg border border-navy/8 p-1">
                  <div className="rounded-xl border border-navy/5 bg-cream p-8 flex gap-6">
                    <span className="font-display text-4xl font-semibold text-gold/30 shrink-0 leading-none mt-1">
                      {num}
                    </span>
                    <div className="space-y-2">
                      <h3 className="font-display text-xl font-semibold text-navy">{title}</h3>
                      <p className="text-navy/60 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" id="faq">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedContainer className="text-center mb-16 space-y-4">
            <AnimatedItem>
              <p className="text-sm font-body font-medium text-gold uppercase tracking-widest">
                FAQ
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-display text-4xl font-semibold text-navy">
                Frequently Asked Questions
              </h2>
            </AnimatedItem>
          </AnimatedContainer>

          <AnimatedContainer className="space-y-3">
            {faqs.map(({ q, a }) => (
              <AnimatedItem key={q}>
                <details className="group border border-navy/10 rounded-xl overflow-hidden bg-bg">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-display font-semibold text-navy list-none">
                    {q}
                    <CaretDown
                      size={20}
                      className="shrink-0 text-gold transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="px-6 pb-6 text-navy/70 leading-relaxed border-t border-navy/5 pt-4">
                    {a}
                  </p>
                </details>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedContainer className="text-center space-y-6">
            <AnimatedItem>
              <p className="text-sm font-body font-medium text-gold uppercase tracking-widest">
                Service Areas
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-display text-3xl font-semibold text-navy">
                Serving Southern California
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-navy/60">
                Young Dental Solutions works with dental practices across:
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <div className="flex flex-wrap justify-center gap-3">
                {cities.map((city) => (
                  <span
                    key={city}
                    className="px-4 py-2 bg-bg rounded-full border border-navy/10 text-navy/70 text-sm font-body"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedContainer className="text-center space-y-6">
            <AnimatedItem>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-navy">
                Ready to Stop Guessing
                <br />
                <span className="text-gold">and Start Growing?</span>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-navy/60 text-lg max-w-xl mx-auto">
                Schedule a free consultation. 30 minutes. No pitch. Just an honest
                look at your practice and where it could go.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gold text-navy rounded-xl font-medium text-lg font-body hover:bg-gold-light transition-colors"
              >
                Schedule Free Consultation
                <ArrowRight size={20} weight="bold" />
              </Link>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-sm text-navy/40">
                858-223-9714 &middot; arlene@youngdentalsolutions.com
              </p>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </section>
    </>
  );
}
