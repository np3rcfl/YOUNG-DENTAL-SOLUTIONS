import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChartLineUp,
  MagnifyingGlass,
  UsersThree,
  Handshake,
  ArrowRight,
  CaretDown,
  CheckCircle,
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
        text: "A dental practice management consultant analyzes your practice's systems, financials, scheduling, billing, and team dynamics to identify inefficiencies and growth opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a dental practice consultant cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dental practice consulting fees vary based on scope and engagement type. Practice analysis engagements are typically project-based, while ongoing coaching is structured as a monthly retainer.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a dental coach and a dental consultant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A dental consultant typically delivers a report and moves on. A dental coach works with you over time, holding you accountable and staying available as a thought partner.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results from dental practice consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most practices see meaningful movement in 60-90 days. Scheduling and billing improvements often show results within the first month.",
      },
    },
    {
      "@type": "Question",
      name: "When should I hire a dental practice consultant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consider a dental practice consultant if your production has plateaued, overhead is above 65%, you're losing patients without understanding why, or you're preparing to buy or sell a practice.",
      },
    },
    {
      "@type": "Question",
      name: "What does dental practice due diligence include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Due diligence includes review of production and collection trends, overhead ratios, patient retention, billing and insurance mix, staffing costs, equipment condition, lease terms, and practice culture.",
      },
    },
  ],
};

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
    a: "A consultant delivers a report and moves on. Arlene operates as a coach — she picks up the phone, follows through on every commitment, and stays with you as your practice evolves.",
  },
  {
    q: "How long before I see results?",
    a: "Most practices see meaningful improvement within 60-90 days. Scheduling and billing changes often show results within the first month.",
  },
  {
    q: "When should I hire a dental practice consultant?",
    a: "If production has plateaued, overhead is above 65%, you're losing patients you can't explain, or you're preparing to buy or sell — it's time.",
  },
  {
    q: "What does dental due diligence include?",
    a: "Production and collection trends, overhead ratios, patient retention, billing mix, staffing costs, equipment condition, lease terms, and practice culture — everything before you sign.",
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
    desc: "Not a 90-page playbook. A focused, ranked list of changes that will move the needle — starting this month.",
  },
];

const differentiators = [
  {
    them: "Sent a playbook for someone else's practice",
    us: "Diagnosis before prescription — your practice, your plan",
  },
  {
    them: "Never returned your calls",
    us: "Arlene picks up the phone",
  },
  {
    them: "Guaranteed results, delivered regret",
    us: "Transparent about what's realistic — honesty over promises",
  },
  {
    them: "Made your team feel like the problem",
    us: "Coaches your team as a partner, not a liability",
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ─── HERO ─── */}
      <section
        className="min-h-[100dvh] flex items-center pt-24 pb-14 overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 75% 15%, #221D35 0%, #1A1A26 45%, #111019 100%)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[56%_44%] gap-8 xl:gap-14 items-center">

            {/* Left: Text */}
            <HeroText>
              <HeroTextItem>
                <span className="eyebrow eyebrow-light">
                  Dental Practice Consulting &middot; San Diego, CA
                </span>
              </HeroTextItem>

              <HeroTextItem>
                <h1 className="font-display text-[2.75rem] md:text-[3.5rem] lg:text-[3.75rem] xl:text-[4.25rem] font-light text-bg leading-[1.0] tracking-[-0.02em]">
                  30 Years.
                  <br />
                  One Coach.
                  <br />
                  <em className="text-gold" style={{ fontStyle: "italic" }}>
                    Your Practice,
                  </em>{" "}
                  Finally Running
                  <br />
                  Like a Business.
                </h1>
              </HeroTextItem>

              <HeroTextItem>
                <p className="text-base md:text-lg text-bg/55 max-w-lg leading-relaxed font-body font-light">
                  Most consultants send a playbook. Arlene picks up the phone.
                  30+ years of dental industry experience and a finance
                  background, applied 1-on-1 to your practice.
                </p>
              </HeroTextItem>

              <HeroTextItem>
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Primary CTA — button-in-button architecture */}
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-between gap-6 px-5 py-3.5 bg-bg text-navy rounded-full font-body font-medium text-sm hover:bg-bg/96 active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  >
                    Schedule Free Consultation
                    <span className="w-8 h-8 rounded-full bg-navy/8 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110">
                      <ArrowRight size={13} weight="bold" />
                    </span>
                  </Link>
                  {/* Ghost CTA */}
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-5 py-3.5 rounded-full border border-bg/20 text-bg font-body font-medium text-sm hover:border-bg/45 hover:bg-bg/6 transition-all duration-300"
                  >
                    See All Services
                  </Link>
                </div>
              </HeroTextItem>
            </HeroText>

            {/* Right: Photo with Z-axis depth */}
            <HeroImage>
              <div className="relative mt-6 lg:mt-0">
                {/* Outer double-bezel frame, slightly rotated */}
                <div
                  className="relative rounded-[2rem] p-2 bg-bg/5 border border-bg/10"
                  style={{ transform: "rotate(-1.5deg)" }}
                >
                  <div className="relative rounded-[calc(2rem-0.5rem)] overflow-hidden aspect-[3/4]">
                    <Image
                      src="/images/arlene-headshot.jpg"
                      alt="Arlene Young, Dental Practice Consultant serving San Diego and Southern California"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 1024px) 90vw, 44vw"
                    />
                    {/* Gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                    {/* Logo top-left overlay — inverted white on photo */}
                    <div className="absolute top-5 left-5">
                      <div className="relative w-28 h-auto">
                        <Image
                          src="/images/arlene-young.png"
                          alt="Arlene Young Dental Consultant logo"
                          width={112}
                          height={75}
                          className="object-contain"
                          style={{ filter: "invert(1) brightness(10)" }}
                        />
                      </div>
                    </div>
                    {/* Inner image caption */}
                    <div className="absolute bottom-6 left-6">
                      <p className="font-display text-bg/90 text-sm font-light italic">
                        Arlene Young
                      </p>
                      <p className="text-bg/50 text-xs font-body mt-0.5">
                        Founder, Young Dental Solutions
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating stat card — bottom left */}
                <div
                  className="absolute bottom-10 -left-5 rounded-2xl bg-bg/95 backdrop-blur-sm border border-navy/8 shadow-2xl shadow-navy/15 p-0.5"
                  style={{ transform: "rotate(1.5deg)" }}
                >
                  <div className="rounded-[calc(1rem-0.125rem)] bg-bg px-5 py-4 border border-navy/5">
                    <p className="font-display text-3xl font-semibold text-navy leading-none">
                      30+
                    </p>
                    <p className="text-[11px] text-navy/45 font-body mt-1 tracking-wide">
                      Years in Dental Industry
                    </p>
                  </div>
                </div>

                {/* Floating location card — top right */}
                <div
                  className="absolute -top-3 -right-3 rounded-xl backdrop-blur-sm shadow-xl px-4 py-3 border"
                  style={{
                    transform: "rotate(1.5deg)",
                    background: "rgba(253,252,247,0.96)",
                    borderColor: "rgba(26,26,38,0.12)",
                  }}
                >
                  <p className="text-[10px] text-navy/45 font-body uppercase tracking-wider">
                    Service Area
                  </p>
                  <p className="text-xs text-navy/80 font-body font-medium mt-0.5">
                    Southern California
                  </p>
                </div>
              </div>
            </HeroImage>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="py-12" style={{ background: "linear-gradient(180deg, #E8E3D8 0%, #EDE9DF 100%)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedContainer className="grid grid-cols-3 divide-x divide-navy/10">
            {[
              { stat: "30+", label: "Years in Dental Industry" },
              { stat: "1-on-1", label: "Every Engagement, Always" },
              { stat: "SoCal", label: "Wide Regional Coverage" },
            ].map(({ stat, label }) => (
              <AnimatedItem key={stat} className="px-6 py-4 text-center">
                <p className="font-display text-3xl lg:text-4xl font-semibold text-navy">
                  {stat}
                </p>
                <p className="text-navy/45 text-xs mt-1.5 font-body tracking-wide">
                  {label}
                </p>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* ─── EDITORIAL PULL QUOTE ─── */}
      <section className="py-24 overflow-hidden" style={{ background: "linear-gradient(160deg, #F4F0E6 0%, #FDFCF7 100%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedContainer>
            <AnimatedItem>
              <blockquote className="relative">
                <span
                  className="absolute -top-10 -left-6 font-display leading-none select-none pointer-events-none"
                  aria-hidden="true"
                  style={{ fontSize: "14rem", color: "rgba(26,26,38,0.055)", lineHeight: 1 }}
                >
                  &ldquo;
                </span>
                <p className="font-display text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-light text-navy leading-[1.18] italic max-w-4xl relative z-10 tracking-[-0.01em]">
                  Most consultants send a playbook and move on.
                  I stay until the practice actually changes.
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <div className="w-10 h-px bg-gold" />
                  <p className="font-body text-sm text-navy/55 tracking-wide">
                    Arlene Young &mdash; Founder, Young Dental Solutions
                  </p>
                </footer>
              </blockquote>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="py-32" style={{ background: "linear-gradient(155deg, #FDFCF7 0%, #F4F0E6 55%, #EDE9DF 100%)" }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedContainer>
            <AnimatedItem className="space-y-7">
              <span className="eyebrow">Why Arlene</span>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-[3.25rem] font-light text-navy leading-[1.05]">
                A Finance Background
                <br />
                <em style={{ fontStyle: "italic" }} className="text-gold">
                  Changes Everything.
                </em>
              </h2>
              <p className="text-navy/58 leading-relaxed font-body">
                Most dental consultants come from clinical backgrounds. Arlene
                Young comes from finance — which means she reads your practice
                the way a CFO reads a balance sheet. She finds the 2-3 levers
                that actually move the needle.
              </p>
              <p className="text-navy/58 leading-relaxed font-body">
                After 30+ years working across every practice type in Southern
                California, she brings both the pattern recognition of a
                seasoned consultant and the accountability of a personal coach.
                She picks up the phone. She follows through. She stays.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 text-navy font-body font-medium text-sm hover:text-navy/70 transition-all duration-300"
              >
                Meet Arlene
                <ArrowRight
                  size={15}
                  weight="bold"
                  className="transition-all duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            </AnimatedItem>
          </AnimatedContainer>

          <AnimatedContainer delay={0.08}>
            {[
              "Finance-first analysis, not clinical assumption",
              "1-on-1 coaching, not group programs or playbooks",
              "30+ years of Southern California dental industry knowledge",
              "Real accountability — she picks up the phone",
            ].map((text) => (
              <AnimatedItem key={text} className="mb-3.5">
                {/* Double-bezel card */}
                <div className="rounded-2xl bg-cream border border-navy/8 p-1">
                  <div className="rounded-[calc(1rem-0.25rem)] bg-bg border border-navy/5 px-5 py-4 flex items-start gap-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                    <CheckCircle
                      size={18}
                      weight="fill"
                      className="text-gold mt-0.5 shrink-0"
                    />
                    <p className="text-navy/68 font-body text-sm leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* ─── SERVICES BENTO ─── */}
      <section
        className="py-32"
        id="services"
        style={{ background: "radial-gradient(ellipse at 20% 80%, #221D35 0%, #1A1A26 50%, #111019 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedContainer className="mb-14 space-y-4">
            <AnimatedItem>
              <span className="eyebrow eyebrow-light">Services</span>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-[3.5rem] font-light text-bg leading-[1.05]">
                Four Ways We Grow
                <br />
                <em style={{ fontStyle: "italic" }} className="text-gold">
                  Your Practice
                </em>
              </h2>
            </AnimatedItem>
          </AnimatedContainer>

          {/* Asymmetric bento grid */}
          <AnimatedContainer className="grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* Practice Management — wide, image card */}
            <AnimatedItem className="md:col-span-7">
              <Link
                href="/services/practice-management"
                className="group block rounded-[2rem] bg-bg/5 border border-bg/10 p-2 overflow-hidden h-full min-h-[400px] relative transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-bg/25"
              >
                <div className="relative rounded-[calc(2rem-0.5rem)] overflow-hidden h-full min-h-[384px]">
                  <Image
                    src="/images/service-practice-management.jpeg"
                    alt="Dental practice management consulting"
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 58vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="w-10 h-10 rounded-xl bg-bg/10 border border-bg/15 flex items-center justify-center">
                      <ChartLineUp size={18} weight="light" className="text-bg/80" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-body font-medium">
                        Practice Management
                      </p>
                      <h3 className="font-display text-3xl font-light text-bg leading-tight">
                        Your practice metrics
                        <br />
                        are telling a story.
                      </h3>
                      <p className="text-bg/55 text-sm font-body leading-relaxed max-w-sm">
                        Deep analysis of scheduling, billing, and financials
                        with a prioritized action plan.
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-bg/60 text-xs font-body font-medium group-hover:text-bg transition-colors duration-300 pt-1">
                        Learn more{" "}
                        <ArrowRight
                          size={11}
                          weight="bold"
                          className="transition-all duration-300 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedItem>

            {/* Due Diligence — narrow, dark text card */}
            <AnimatedItem className="md:col-span-5">
              <Link
                href="/services/due-diligence"
                className="group block rounded-[2rem] bg-bg/5 border border-bg/10 p-2 h-full min-h-[400px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-bg/8 hover:border-bg/22"
              >
                <div className="rounded-[calc(2rem-0.5rem)] bg-bg/5 border border-bg/8 p-8 h-full min-h-[384px] flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center">
                    <MagnifyingGlass size={17} weight="light" className="text-gold" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-body font-medium">
                      Due Diligence
                    </p>
                    <h3 className="font-display text-3xl font-light text-bg leading-tight">
                      Before you sign, know what you're buying.
                    </h3>
                    <p className="text-bg/50 text-sm font-body leading-relaxed">
                      Production trends, overhead ratios, team health, lease
                      terms — everything before the acquisition.
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-bg/55 text-xs font-body font-medium group-hover:text-bg transition-colors duration-300">
                      Learn more{" "}
                      <ArrowRight size={11} weight="bold" className="transition-all duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedItem>

            {/* Coaching — narrow, dark text card */}
            <AnimatedItem className="md:col-span-5">
              <Link
                href="/services/coaching"
                className="group block rounded-[2rem] bg-bg/5 border border-bg/10 p-2 h-full min-h-[400px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-bg/8 hover:border-bg/22"
              >
                <div className="rounded-[calc(2rem-0.5rem)] bg-bg/5 border border-bg/8 p-8 h-full min-h-[384px] flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center">
                    <Handshake size={17} weight="light" className="text-gold" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-body font-medium">
                      Coaching
                    </p>
                    <h3 className="font-display text-3xl font-light text-bg leading-tight">
                      Clarity on your numbers. Confidence in your decisions.
                    </h3>
                    <p className="text-bg/50 text-sm font-body leading-relaxed">
                      1-on-1 ongoing coaching for dentists who want a thought
                      partner, not a template.
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-bg/55 text-xs font-body font-medium group-hover:text-bg transition-colors duration-300">
                      Learn more{" "}
                      <ArrowRight size={11} weight="bold" className="transition-all duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedItem>

            {/* Recruiting — wide, image card */}
            <AnimatedItem className="md:col-span-7">
              <Link
                href="/services/recruiting"
                className="group block rounded-[2rem] bg-bg/5 border border-bg/10 p-2 overflow-hidden h-full min-h-[400px] relative transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-bg/25"
              >
                <div className="relative rounded-[calc(2rem-0.5rem)] overflow-hidden h-full min-h-[384px]">
                  <Image
                    src="/images/service-recruiting.jpg"
                    alt="Dental practice team building and recruiting"
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 58vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="w-10 h-10 rounded-xl bg-bg/10 border border-bg/15 flex items-center justify-center">
                      <UsersThree size={18} weight="light" className="text-bg/80" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-body font-medium">
                        Recruiting
                      </p>
                      <h3 className="font-display text-3xl font-light text-bg leading-tight">
                        The right team is
                        <br />
                        the difference.
                      </h3>
                      <p className="text-bg/55 text-sm font-body leading-relaxed max-w-sm">
                        Talent acquisition and team-building support across
                        Southern California.
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-bg/60 text-xs font-body font-medium group-hover:text-bg transition-colors duration-300 pt-1">
                        Learn more{" "}
                        <ArrowRight
                          size={11}
                          weight="bold"
                          className="transition-all duration-300 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </section>

      {/* ─── COUNTER-POSITIONING ─── */}
      <section className="py-32" style={{ background: "linear-gradient(160deg, #FDFCF7 0%, #F6F2EA 100%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedContainer className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedItem className="space-y-7">
              <span className="eyebrow">The Difference</span>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-navy leading-[1.05]">
                You&rsquo;ve Tried Consultants.
                <br />
                <em style={{ fontStyle: "italic" }} className="text-gold">
                  Try One Who Shows Up.
                </em>
              </h2>
              <p className="text-navy/55 leading-relaxed font-body">
                Dentists who&rsquo;ve worked with consultants before come to Arlene
                with the same story: never returned calls, sent a playbook that
                wasn&rsquo;t built for their practice, guaranteed 30% growth and
                delivered chaos.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              {/* Column headers */}
              <div className="grid grid-cols-2 gap-4 mb-3 px-1">
                <p className="text-[10px] font-body font-medium text-navy/30 uppercase tracking-[0.2em]">
                  The usual
                </p>
                <p className="text-[10px] font-body font-medium text-gold uppercase tracking-[0.2em]">
                  With Arlene
                </p>
              </div>
              <div className="space-y-2">
                {differentiators.map(({ them, us }) => (
                  <div
                    key={us}
                    className="rounded-2xl border border-navy/8 p-px overflow-hidden"
                    style={{ background: "linear-gradient(160deg, #F4F0E6 0%, #FDFCF7 100%)" }}
                  >
                    <div className="rounded-[calc(1rem-0.0625rem)] bg-bg/70 grid grid-cols-2 divide-x divide-navy/8">
                      <p className="text-sm text-navy/30 leading-relaxed font-body p-5 pr-4 line-through decoration-navy/15">
                        {them}
                      </p>
                      <p className="text-sm text-navy/80 font-medium leading-relaxed font-body p-5 pl-4">
                        {us}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-32" style={{ background: "linear-gradient(170deg, #E8E3D8 0%, #EDE9DF 50%, #E4DFD4 100%)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedContainer className="text-center mb-14 space-y-4">
            <AnimatedItem>
              <span className="eyebrow">Process</span>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-navy">
                How It Works
              </h2>
            </AnimatedItem>
          </AnimatedContainer>

          <AnimatedContainer className="relative">
            {/* Connecting line */}
            <div className="absolute left-7 top-8 bottom-8 w-px bg-navy/10 hidden sm:block" aria-hidden="true" />
            <div className="space-y-3">
            {steps.map(({ num, title, desc }) => (
              <AnimatedItem key={num}>
                <div className="relative flex gap-6 items-start px-0 py-2">
                  {/* Step number bubble */}
                  <div className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-bg border border-navy/12 flex items-center justify-center shadow-sm">
                    <span className="font-display text-lg font-medium text-navy/50 leading-none">
                      {num}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-3.5 pb-6 space-y-2 border-b border-navy/8 last:border-0">
                    <h3 className="font-display text-xl font-medium text-navy">
                      {title}
                    </h3>
                    <p className="text-navy/55 leading-relaxed font-body text-sm">
                      {desc}
                    </p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
            </div>
          </AnimatedContainer>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-32" id="faq" style={{ background: "linear-gradient(180deg, #F8F5ED 0%, #FDFCF7 100%)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedContainer className="text-center mb-14 space-y-4">
            <AnimatedItem>
              <span className="eyebrow">FAQ</span>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-navy">
                Common Questions
              </h2>
            </AnimatedItem>
          </AnimatedContainer>

          <AnimatedContainer className="space-y-2.5">
            {faqs.map(({ q, a }) => (
              <AnimatedItem key={q}>
                <details className="group rounded-2xl bg-cream border border-navy/8 overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-display font-medium text-navy text-lg list-none select-none hover:bg-navy/3 transition-colors duration-200">
                    {q}
                    <CaretDown
                      size={18}
                      className="shrink-0 text-navy/30 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-open:rotate-180"
                    />
                  </summary>
                  <p className="px-6 pb-6 text-navy/58 leading-relaxed border-t border-navy/6 pt-4 font-body text-sm">
                    {a}
                  </p>
                </details>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #E4DFD4 0%, #EDE9DF 100%)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <AnimatedItem className="space-y-4">
              <span className="eyebrow">Service Areas</span>
              <h2 className="font-display text-3xl lg:text-4xl font-light text-navy leading-[1.05]">
                Serving Southern
                <br />
                <em style={{ fontStyle: "italic" }} className="text-gold">California</em>
              </h2>
              <p className="text-navy/55 font-body text-sm leading-relaxed">
                On-site or remote engagements across San Diego County, LA, and beyond.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <span
                    key={city}
                    className="px-4 py-2.5 rounded-xl border border-navy/12 text-navy/60 text-xs font-body tracking-wide font-medium"
                    style={{ background: "rgba(253,252,247,0.7)" }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </section>
    </>
  );
}
