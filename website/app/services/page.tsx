import type { Metadata } from "next";
import Link from "next/link";
import { ChartLineUp, MagnifyingGlass, Handshake, UsersThree, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { HeroText, HeroTextItem } from "@/components/HomeAnimations";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Dental Practice Consulting Services | Southern California",
  description:
    "Four services, practice management analysis, due diligence, coaching, and recruiting, built for dental practice owners across Southern California.",
  alternates: {
    canonical: "https://youngdentalsolutions.com/services",
  },
  openGraph: {
    title: "Dental Practice Consulting Services | Young Dental Solutions",
    description:
      "Practice management, due diligence, coaching, and recruiting for dental practices across Southern California.",
    url: "https://youngdentalsolutions.com/services",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://youngdentalsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://youngdentalsolutions.com/services" },
  ],
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Dental Practice Management Consulting",
        description: "Deep analysis of scheduling, billing, team dynamics, and financials for dental practices. Includes a prioritized action plan.",
        provider: { "@id": "https://youngdentalsolutions.com/#business" },
        areaServed: "Southern California",
        url: "https://youngdentalsolutions.com/services/practice-management",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Dental Practice Due Diligence",
        description: "Pre-acquisition analysis covering production trends, overhead, team health, and lease terms for dental practices in Southern California.",
        provider: { "@id": "https://youngdentalsolutions.com/#business" },
        areaServed: "Southern California",
        url: "https://youngdentalsolutions.com/services/due-diligence",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Dental Practice Coaching",
        description: "Ongoing 1-on-1 coaching for dentists who want accountability, clarity, and a trusted advisor as they grow their practice.",
        provider: { "@id": "https://youngdentalsolutions.com/#business" },
        areaServed: "Southern California",
        url: "https://youngdentalsolutions.com/services/coaching",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Dental Practice Recruiting",
        description: "Talent acquisition and placement for dental practices across Southern California, finding and placing the right people.",
        provider: { "@id": "https://youngdentalsolutions.com/#business" },
        areaServed: "Southern California",
        url: "https://youngdentalsolutions.com/services/recruiting",
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
      "Arlene analyzes your scheduling systems, billing workflows, overhead structure, team dynamics, and production metrics, then hands you a clear, prioritized action plan. Not a 90-page report. A focused roadmap for this practice, this quarter.",
    outcomes: [
      "Production and collection benchmarking",
      "Scheduling optimization",
      "Overhead analysis and reduction plan",
      "Billing and insurance workflow review",
      "Team accountability structure",
    ],
    href: "/services/practice-management",
  },
  {
    icon: MagnifyingGlass,
    title: "Due Diligence",
    tagline: "Before you sign on a practice, know what you're actually buying.",
    description:
      "Buying a dental practice is one of the biggest financial decisions of your career. Arlene's due diligence process gives you a complete, honest picture of the practice before you commit, production trends, overhead, team health, lease terms, and hidden risks.",
    outcomes: [
      "Production and collection trend analysis",
      "Overhead ratio benchmarking",
      "Patient retention and new patient flow",
      "Insurance mix and billing health",
      "Staffing costs, turnover, and team culture",
    ],
    href: "/services/due-diligence",
  },
  {
    icon: Handshake,
    title: "Coaching",
    tagline: "Clarity on your numbers. Confidence in your decisions.",
    description:
      "This isn't a group program or a monthly Zoom call where you're one of twenty clients. It's a real 1-on-1 coaching relationship, Arlene stays engaged with your specific practice, holds you accountable, and adjusts the plan as your situation evolves.",
    outcomes: [
      "Monthly 1-on-1 sessions with Arlene",
      "Between-session phone support",
      "Custom KPI dashboard for your practice",
      "Decision-making framework for growth moves",
      "Team leadership and accountability coaching",
    ],
    href: "/services/coaching",
  },
  {
    icon: UsersThree,
    title: "Recruiting",
    tagline: "The right team is the difference between a practice that runs and one that drains you.",
    description:
      "Arlene understands what makes a dental team work, because she's worked with hundreds of them. She helps you identify what you actually need, find the right people, and build a team structure that supports growth instead of creating churn.",
    outcomes: [
      "Role definition and compensation benchmarking",
      "Candidate sourcing across Southern California",
      "Interview support and team fit assessment",
      "Onboarding structure and 90-day plan",
      "Culture fit evaluation",
    ],
    href: "/services/recruiting",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center bg-navy">
        <div className="max-w-3xl mx-auto px-6">
          <HeroText>
            <HeroTextItem>
              <nav className="text-sm text-bg/40 font-body">
                <Link href="/" className="hover:text-bg transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-bg/70">Services</span>
              </nav>
            </HeroTextItem>
            <HeroTextItem>
              <p className="text-sm font-body font-medium text-bg/40 uppercase tracking-widest">
                Services
              </p>
            </HeroTextItem>
            <HeroTextItem>
              <h1 className="font-display text-5xl lg:text-6xl font-semibold text-bg">
                Four Ways We
                <br className="hidden sm:block" />
                Grow Your Practice
              </h1>
            </HeroTextItem>
            <HeroTextItem>
              <p className="text-lg text-bg/50 leading-relaxed">
                Every service is delivered 1-on-1 by Arlene Young. No associates,
                no templates, no playbooks designed for someone else&rsquo;s practice.
              </p>
            </HeroTextItem>
          </HeroText>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedContainer className="space-y-5">
            {services.map(({ icon: Icon, title, tagline, description, outcomes, href }) => (
              <AnimatedItem key={href}>
                <div className="rounded-2xl bg-cream border border-navy/8 p-1.5">
                  <div className="rounded-xl bg-bg border border-navy/5 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8">
                    <div className="space-y-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-navy/6 flex items-center justify-center">
                          <Icon size={22} weight="duotone" className="text-navy/50" />
                        </div>
                        <div>
                          <h2 className="font-display text-2xl font-semibold text-navy">{title}</h2>
                          <p className="text-navy/40 text-sm italic mt-0.5">{tagline}</p>
                        </div>
                      </div>
                      <p className="text-navy/60 leading-relaxed">{description}</p>
                      <ul className="space-y-2">
                        {outcomes.map((o) => (
                          <li key={o} className="flex items-start gap-3 text-sm text-navy/50">
                            <span className="text-navy/30 mt-1.5 text-xs">&#9670;</span>
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-end">
                      <Link
                        href={href}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-bg rounded-lg font-medium font-body hover:bg-navy/80 transition-colors whitespace-nowrap"
                      >
                        Learn More
                        <ArrowRight size={16} weight="bold" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedContainer className="text-center space-y-6">
            <AnimatedItem>
              <h2 className="font-display text-4xl font-semibold text-bg">
                Not Sure Which Service
                <br className="hidden sm:block" />
                Is Right for Your Practice?
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-bg/50 text-lg">
                Schedule a free consultation. Arlene will listen to your situation
                and recommend only what actually makes sense.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-bg text-navy rounded-xl font-medium text-lg font-body hover:bg-bg/90 transition-colors"
              >
                Schedule Free Consultation
                <ArrowRight size={20} weight="bold" />
              </Link>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </section>
    </>
  );
}
