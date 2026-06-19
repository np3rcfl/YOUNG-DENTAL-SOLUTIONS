import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Warning } from "@phosphor-icons/react/dist/ssr";
import { HeroText, HeroTextItem } from "@/components/HomeAnimations";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Dental Practice Due Diligence | Buying a Practice in SoCal",
  description:
    "Before you sign, know what you're buying. Arlene Young's due diligence analysis covers operations, financials, and team health for dental practices in Southern California.",
  alternates: {
    canonical: "https://youngdentalsolutions.com/services/due-diligence",
  },
  openGraph: {
    title: "Dental Practice Due Diligence | Southern California | Young Dental Solutions",
    description:
      "Complete pre-acquisition analysis for dental practices, production trends, overhead, team health, lease terms. Serving San Diego and Southern California.",
    url: "https://youngdentalsolutions.com/services/due-diligence",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dental Practice Due Diligence",
  serviceType: "Dental Practice Acquisition Analysis",
  description:
    "Pre-acquisition due diligence analysis for dental practices including production trends, overhead ratios, patient retention, team health, and lease review.",
  provider: { "@id": "https://youngdentalsolutions.com/#business" },
  areaServed: [
    { "@type": "City", name: "San Diego" },
    { "@type": "City", name: "Rancho Bernardo" },
    { "@type": "City", name: "Beverly Hills" },
    { "@type": "City", name: "Santa Clarita" },
    { "@type": "State", name: "Southern California" },
  ],
  url: "https://youngdentalsolutions.com/services/due-diligence",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://youngdentalsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://youngdentalsolutions.com/services" },
    { "@type": "ListItem", position: 3, name: "Due Diligence", item: "https://youngdentalsolutions.com/services/due-diligence" },
  ],
};

const reviewAreas = [
  { label: "Production & Collections", desc: "3-5 year trend analysis, seasonality, provider mix, and collection rate by insurance type" },
  { label: "Overhead Analysis", desc: "Staff costs, lab fees, supply spend, facility costs, benchmarked against SoCal dental averages" },
  { label: "Patient Retention", desc: "Active patient count, recall effectiveness, new patient trends, and attrition risk" },
  { label: "Insurance & Billing Health", desc: "Payor mix, fee schedules, billing backlog, and claim denial rates" },
  { label: "Team & Culture", desc: "Staffing ratios, tenure, compensation, turnover history, and culture indicators" },
  { label: "Facility & Equipment", desc: "Equipment condition and age, lease terms, facility constraints" },
];

const redFlags = [
  "Production declining 3+ years with no explanation from sellers",
  "Collection rate below 96%, hidden billing problems",
  "High staff turnover in the past 18 months",
  "Lease terms under 3 years with no renewal option",
  "Insurance mix heavy in low-reimbursement plans",
  "Patient attrition outpacing new patient flow",
];

const walkAwayWith = [
  "A plain-English summary of what the numbers actually show",
  "A ranked list of risks, minor, moderate, and deal-level",
  "Fair market value context for the asking price",
  "Negotiation leverage based on identified issues",
  "A post-acquisition 90-day priority plan (if you proceed)",
];

export default function DueDiligencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="pt-32 pb-16 bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <HeroText>
            <HeroTextItem>
              <nav className="text-sm text-bg/40 font-body">
                <Link href="/" className="hover:text-bg transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/services" className="hover:text-bg transition-colors">Services</Link>
                <span className="mx-2">/</span>
                <span className="text-bg/70">Due Diligence</span>
              </nav>
            </HeroTextItem>
            <HeroTextItem>
              <p className="text-sm font-body font-medium text-navy/40 uppercase tracking-widest">
                Due Diligence
              </p>
            </HeroTextItem>
            <HeroTextItem>
              <h1 className="font-display text-5xl lg:text-6xl font-semibold text-bg leading-[1.05] max-w-3xl">
                Before You Sign on a Practice,
                <br className="hidden sm:block" />
                <span className="text-navy/40">Know What You&rsquo;re Actually Buying.</span>
              </h1>
            </HeroTextItem>
            <HeroTextItem>
              <p className="text-lg text-bg/60 leading-relaxed max-w-2xl">
                Acquiring a dental practice is one of the most significant
                financial commitments of your career. Arlene Young&rsquo;s due
                diligence analysis gives you an independent, finance-first view of
                the practice, so you go to closing with full clarity, not
                assumptions.
              </p>
            </HeroTextItem>
            <HeroTextItem>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-bg rounded-lg font-medium font-body hover:bg-navy/80 transition-colors"
              >
                Schedule a Consultation
                <ArrowRight size={18} weight="bold" />
              </Link>
            </HeroTextItem>
          </HeroText>
        </div>
      </section>

      {/* What We Review */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedContainer className="space-y-4 mb-12">
            <AnimatedItem>
              <p className="text-sm font-body font-medium text-navy/40 uppercase tracking-widest">
                What We Review
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-display text-4xl font-semibold text-navy">
                Every Area That Matters.
                <br className="hidden sm:block" />
                Nothing That Doesn&rsquo;t.
              </h2>
            </AnimatedItem>
          </AnimatedContainer>

          <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviewAreas.map(({ label, desc }) => (
              <AnimatedItem key={label}>
                <div className="rounded-2xl bg-bg border border-navy/8 p-1 h-full">
                  <div className="rounded-xl bg-cream border border-navy/5 p-6 space-y-3 h-full">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={18} weight="fill" className="text-navy/40 shrink-0" />
                      <h3 className="font-display font-semibold text-navy">{label}</h3>
                    </div>
                    <p className="text-sm text-navy/60 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* Red Flags + What You Walk Away With */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedContainer>
              <AnimatedItem>
                <h2 className="font-display text-3xl font-semibold text-navy mb-4">
                  The Red Flags Most Buyers Miss
                </h2>
              </AnimatedItem>
              <AnimatedItem>
                <p className="text-navy/70 leading-relaxed mb-6">
                  Sellers present their practices in the best possible light. Most
                  buyers, even experienced dentists, don&rsquo;t know what to look
                  for in the numbers. Arlene does. She&rsquo;s seen these patterns
                  across dozens of practice acquisitions in Southern California.
                </p>
              </AnimatedItem>
              <div className="space-y-3">
                {redFlags.map((flag) => (
                  <AnimatedItem key={flag}>
                    <div className="rounded-2xl bg-cream border border-navy/8 p-1">
                      <div className="rounded-xl bg-bg border border-navy/5 p-4 flex items-start gap-3">
                        <Warning size={18} weight="fill" className="text-navy/40 mt-0.5 shrink-0" />
                        <p className="text-sm text-navy/70">{flag}</p>
                      </div>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </AnimatedContainer>

            <AnimatedContainer delay={0.1} className="space-y-5">
              <AnimatedItem>
                <div className="rounded-2xl bg-navy p-8 space-y-5">
                  <h3 className="font-display text-2xl font-semibold text-bg">
                    What You Walk Away With
                  </h3>
                  <ul className="space-y-4">
                    {walkAwayWith.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={18} weight="fill" className="text-navy/40 mt-0.5 shrink-0" />
                        <p className="text-sm text-bg/80">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedItem>

              <AnimatedItem>
                <blockquote className="p-6 bg-cream rounded-xl border-l-4 border-navy/20">
                  <p className="text-navy/70 italic leading-relaxed">
                    &ldquo;The goal isn&rsquo;t to talk you out of the deal. It&rsquo;s to make
                    sure you know exactly what you&rsquo;re getting into, so if you
                    proceed, you do it with your eyes open.&rdquo;
                  </p>
                  <p className="text-navy/40 font-medium mt-3 text-sm">Arlene Young</p>
                </blockquote>
              </AnimatedItem>
            </AnimatedContainer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedContainer className="text-center space-y-6">
            <AnimatedItem>
              <h2 className="font-display text-4xl font-semibold text-bg">
                Buying a Practice Soon?
                <br className="hidden sm:block" />
                Let&rsquo;s Talk Before You Sign.
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-bg/60 text-lg">
                The consultation is free. The analysis is not, but it&rsquo;s a fraction
                of what a bad acquisition costs.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-bg text-navy rounded-xl font-medium font-body hover:bg-bg/90 transition-colors"
                >
                  Schedule Consultation
                  <ArrowRight size={18} weight="bold" />
                </Link>
                <a
                  href="tel:+18582239714"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-bg/20 text-bg rounded-xl font-medium font-body hover:border-bg/40 transition-colors"
                >
                  Call 858-223-9714
                </a>
              </div>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </section>
    </>
  );
}
