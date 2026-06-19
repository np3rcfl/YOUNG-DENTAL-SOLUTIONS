import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { HeroText, HeroTextItem, HeroImage } from "@/components/HomeAnimations";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Dental Practice Management Consultant | San Diego CA",
  description:
    "Struggling with scheduling, billing, or overhead? Arlene Young delivers a personalized practice analysis and action plan for dental practices in Southern California.",
  alternates: {
    canonical: "https://youngdentalsolutions.com/services/practice-management",
  },
  openGraph: {
    title: "Dental Practice Management Consultant | San Diego | Young Dental Solutions",
    description:
      "A deep analysis of your scheduling, billing, overhead, and team, with a clear action plan built for your practice. Serving San Diego and Southern California.",
    url: "https://youngdentalsolutions.com/services/practice-management",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dental Practice Management Consulting",
  serviceType: "Dental Practice Management Consulting",
  description:
    "A comprehensive analysis of a dental practice's scheduling, billing, overhead, team dynamics, and production metrics, delivered with a prioritized action plan by Arlene Young.",
  provider: { "@id": "https://youngdentalsolutions.com/#business" },
  areaServed: [
    { "@type": "City", name: "San Diego" },
    { "@type": "City", name: "Rancho Bernardo" },
    { "@type": "City", name: "Beverly Hills" },
    { "@type": "City", name: "Santa Clarita" },
    { "@type": "State", name: "Southern California" },
  ],
  url: "https://youngdentalsolutions.com/services/practice-management",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://youngdentalsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://youngdentalsolutions.com/services" },
    { "@type": "ListItem", position: 3, name: "Practice Management", item: "https://youngdentalsolutions.com/services/practice-management" },
  ],
};

const deliverables = [
  "Full production and collection benchmarking against SoCal averages",
  "Scheduling system audit, identify hidden capacity and booking gaps",
  "Overhead ratio breakdown by category (staff, lab, supplies, facility)",
  "Billing and insurance workflow analysis, find where revenue is leaking",
  "Team structure review, roles, compensation, and accountability",
  "Prioritized action plan ranked by impact and ease of implementation",
];

const symptoms = [
  "Production has plateaued despite a full schedule",
  "Overhead is above 65% and you don't know why",
  "Collections are inconsistent month to month",
  "The schedule looks full but revenue doesn't show it",
  "You're busy but not profitable",
  "You have no clear picture of your key metrics",
];

export default function PracticeManagementPage() {
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
                <span className="text-bg/70">Practice Management</span>
              </nav>
            </HeroTextItem>
          </HeroText>

          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16 items-center mt-8">
            <HeroText>
              <HeroTextItem>
                <p className="text-sm font-body font-medium text-navy/40 uppercase tracking-widest">
                  Practice Management
                </p>
              </HeroTextItem>
              <HeroTextItem>
                <h1 className="font-display text-5xl lg:text-6xl font-semibold text-bg leading-[1.05]">
                  Your Practice Metrics
                  <br />
                  Are Telling a Story.
                  <br />
                  <span className="text-navy/40">Let&rsquo;s Find Out
                  <br />What It Says.</span>
                </h1>
              </HeroTextItem>
              <HeroTextItem>
                <p className="text-lg text-bg/60 leading-relaxed">
                  Arlene Young analyzes your scheduling, billing, overhead, and
                  team dynamics, not to write a report, but to hand you a ranked
                  list of changes that will move the needle. Built for your
                  practice, not the last one she visited.
                </p>
              </HeroTextItem>
              <HeroTextItem>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-bg text-navy rounded-lg font-medium font-body hover:bg-bg/90 transition-colors">
                  Schedule Free Consultation
                  <ArrowRight size={18} weight="bold" />
                </Link>
              </HeroTextItem>
            </HeroText>

            <HeroImage>
              <div className="relative rounded-2xl overflow-hidden border border-bg/10 p-1.5">
                <div className="relative rounded-xl overflow-hidden aspect-square">
                  <Image
                    src="/images/practice-management.jpg"
                    alt="Dental practice management consultation, Young Dental Solutions San Diego"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1200px) 40vw, 480px"
                  />
                </div>
              </div>
            </HeroImage>
          </div>
        </div>
      </section>

      {/* Symptoms + Deliverables */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedContainer>
              <AnimatedItem>
                <h2 className="font-display text-3xl font-semibold text-navy mb-6">
                  If Any of This Sounds Familiar, It&rsquo;s Time.
                </h2>
              </AnimatedItem>
              <div className="space-y-3">
                {symptoms.map((s) => (
                  <AnimatedItem key={s}>
                    <div className="rounded-2xl bg-bg border border-navy/8 p-1">
                      <div className="rounded-xl bg-cream border border-navy/5 p-4 flex items-start gap-3">
                        <span className="text-navy/20 mt-1.5 text-xs shrink-0">&#9670;</span>
                        <p className="text-navy/70">{s}</p>
                      </div>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </AnimatedContainer>

            <AnimatedContainer delay={0.1}>
              <AnimatedItem>
                <h2 className="font-display text-3xl font-semibold text-navy mb-6">
                  What You Get
                </h2>
              </AnimatedItem>
              <div className="space-y-4">
                {deliverables.map((d) => (
                  <AnimatedItem key={d} className="flex items-start gap-3">
                    <CheckCircle size={20} weight="fill" className="text-navy/40 mt-0.5 shrink-0" />
                    <p className="text-navy/70">{d}</p>
                  </AnimatedItem>
                ))}
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedContainer>
            <AnimatedItem>
              <h2 className="font-display text-3xl font-semibold text-navy mb-8">
                Not a Report. A Plan You Can Execute.
              </h2>
            </AnimatedItem>
            <AnimatedItem className="space-y-5 text-navy/70 leading-relaxed">
              <p>
                Most practice analyses end with a thick report that sits on your
                desk. Arlene&rsquo;s ends with a prioritized list of 3-5 things you
                can do this month that will have the most impact on your practice
               , ranked by both impact and how quickly you can implement them.
              </p>
              <p>
                The analysis covers your numbers and your systems. It also covers
                your team, because systems are only as strong as the people
                running them. Arlene looks at culture, communication, and
                accountability structures, not just spreadsheets.
              </p>
              <p>
                San Diego dental practices typically see meaningful production
                changes within 60-90 days of implementing the priority items.
                Billing improvements often show up within the first month.
              </p>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedContainer className="text-center space-y-6">
            <AnimatedItem>
              <h2 className="font-display text-4xl font-semibold text-bg">
                Ready to See What&rsquo;s
                <br />
                Actually Holding You Back?
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-bg/60 text-lg">
                Schedule a free consultation. 30 minutes, no pitch, just an honest
                look at your practice.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-bg text-navy rounded-xl font-medium font-body hover:bg-bg/90 transition-colors"
                >
                  Schedule Free Consultation
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
