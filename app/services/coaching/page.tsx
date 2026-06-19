import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { HeroText, HeroTextItem, HeroImage } from "@/components/HomeAnimations";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Dental Practice Coach | 1-on-1 Coaching | Southern California",
  description:
    "1-on-1 coaching for dentists who want clarity on their numbers and confidence in their decisions. Arlene Young, serving Southern California dental practices.",
  alternates: {
    canonical: "https://youngdentalsolutions.com/services/coaching",
  },
  openGraph: {
    title: "Dental Practice Coach | 1-on-1 Coaching | Young Dental Solutions",
    description:
      "Ongoing 1-on-1 coaching for San Diego and Southern California dental practices. Clarity, accountability, and a coach who actually picks up the phone.",
    url: "https://youngdentalsolutions.com/services/coaching",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dental Practice Coaching",
  serviceType: "Business Coaching",
  description:
    "Ongoing 1-on-1 dental practice coaching by Arlene Young, monthly sessions, between-session support, KPI tracking, and accountability for practice owners across Southern California.",
  provider: { "@id": "https://youngdentalsolutions.com/#business" },
  areaServed: [
    { "@type": "City", name: "San Diego" },
    { "@type": "City", name: "Rancho Bernardo" },
    { "@type": "City", name: "Beverly Hills" },
    { "@type": "City", name: "Santa Clarita" },
    { "@type": "State", name: "Southern California" },
  ],
  url: "https://youngdentalsolutions.com/services/coaching",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://youngdentalsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://youngdentalsolutions.com/services" },
    { "@type": "ListItem", position: 3, name: "Coaching", item: "https://youngdentalsolutions.com/services/coaching" },
  ],
};

const included = [
  { title: "Monthly 1-on-1 Sessions", desc: "Deep-dive sessions focused on your numbers, your challenges, and your goals, not a template agenda." },
  { title: "Between-Session Phone Access", desc: "Decisions don't wait for the next call. Arlene picks up the phone when you need her." },
  { title: "Custom KPI Dashboard", desc: "A set of metrics built for your practice, so you always know exactly where you stand." },
  { title: "Decision-Making Framework", desc: "A consistent process for evaluating growth moves, equipment, staff, expansion, so you stop second-guessing." },
  { title: "Team Leadership Coaching", desc: "How to lead your team, set expectations, and build accountability without creating conflict." },
  { title: "Quarterly Practice Review", desc: "A formal look at where you were 90 days ago, where you are now, and what needs to change next quarter." },
];

const whoItIsFor = [
  "Practice owners who are busy but not profitable and can't figure out why",
  "Dentists preparing for major decisions: hiring, expansion, equipment",
  "New practice owners who want to start with the right systems",
  "Experienced practitioners whose growth has plateaued",
  "Anyone who's tried a consultant before and been disappointed",
];

export default function CoachingPage() {
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

      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <HeroText>
            <HeroTextItem>
              <nav className="text-sm text-navy/40 font-body">
                <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
                <span className="mx-2">/</span>
                <span className="text-navy">Coaching</span>
              </nav>
            </HeroTextItem>
          </HeroText>

          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16 items-center mt-8">
            <HeroText>
              <HeroTextItem>
                <p className="text-sm font-body font-medium text-gold uppercase tracking-widest">
                  1-on-1 Coaching
                </p>
              </HeroTextItem>
              <HeroTextItem>
                <h1 className="font-display text-5xl lg:text-6xl font-semibold text-navy leading-[1.05]">
                  Clarity on Your Numbers.
                  <br />
                  <span className="text-gold">Confidence in
                  <br />Your Decisions.</span>
                </h1>
              </HeroTextItem>
              <HeroTextItem>
                <p className="text-lg text-navy/70 leading-relaxed">
                  Most dentists are excellent clinicians and overwhelmed business
                  owners. Arlene Young&rsquo;s coaching gives you the financial
                  literacy, the accountability structure, and the thought partner
                  you need to run your practice, not just work in it.
                </p>
              </HeroTextItem>
              <HeroTextItem>
                <p className="text-navy/70 leading-relaxed">
                  This isn&rsquo;t a group program. You&rsquo;re not one of twenty clients on
                  a monthly Zoom call. Arlene works with a limited number of
                  practices at a time, so every session is built around your
                  specific situation.
                </p>
              </HeroTextItem>
              <HeroTextItem>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy rounded-lg font-medium font-body hover:bg-gold-light transition-colors"
                >
                  Schedule Free Consultation
                  <ArrowRight size={18} weight="bold" />
                </Link>
              </HeroTextItem>
            </HeroText>

            <HeroImage>
              <div className="relative rounded-2xl overflow-hidden bg-cream border border-navy/8 p-1.5">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                  <Image
                    src="/images/coaching.jpg"
                    alt="Dental practice coaching, 1-on-1 sessions with Arlene Young, Southern California"
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

      {/* What's Included */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedContainer className="space-y-4 mb-12">
            <AnimatedItem>
              <p className="text-sm font-body font-medium text-gold uppercase tracking-widest">
                What&rsquo;s Included
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-display text-4xl font-semibold text-navy">
                Everything a Practice Owner Actually Needs
              </h2>
            </AnimatedItem>
          </AnimatedContainer>

          <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {included.map(({ title, desc }) => (
              <AnimatedItem key={title}>
                <div className="rounded-2xl bg-bg border border-navy/8 p-1 h-full">
                  <div className="rounded-xl bg-cream border border-navy/5 p-6 space-y-3 h-full">
                    <div className="flex items-start gap-3">
                      <CheckCircle size={20} weight="fill" className="text-gold mt-0.5 shrink-0" />
                      <h3 className="font-display font-semibold text-navy">{title}</h3>
                    </div>
                    <p className="text-sm text-navy/60 leading-relaxed pl-8">{desc}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* Philosophy + Who It's For */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedContainer>
              <AnimatedItem>
                <h2 className="font-display text-3xl font-semibold text-navy mb-6">
                  A Coach Is Not a Consultant
                </h2>
              </AnimatedItem>
              <AnimatedItem className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  A consultant visits, diagnoses, writes a report, and moves on.
                  Their accountability ends when they leave. A coach stays , 
                  holds the plan, tracks the metrics, adjusts as the practice
                  evolves, and shows up every month as a genuine thought partner.
                </p>
                <p>
                  Arlene has worked with dentists who&rsquo;ve spent $50,000 on
                  consultants who called twice and disappeared. She built her
                  coaching model specifically against that experience.
                </p>
                <p>
                  The result: practice owners who stop feeling like they&rsquo;re
                  flying blind, start understanding their numbers, and make
                  decisions with confidence instead of anxiety.
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <AnimatedContainer delay={0.1}>
              <AnimatedItem>
                <div className="rounded-2xl bg-navy border border-navy p-1">
                  <div className="rounded-xl bg-navy p-8 space-y-6">
                    <h3 className="font-display text-2xl font-semibold text-bg">
                      Who Coaching Is For
                    </h3>
                    <ul className="space-y-4">
                      {whoItIsFor.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="text-gold mt-1.5 text-xs shrink-0">&#9670;</span>
                          <p className="text-sm text-bg/80">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
                Ready to Stop Flying Blind?
                <br />
                <span className="text-gold">Let&rsquo;s Talk.</span>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-bg/60 text-lg">
                Schedule a free 30-minute consultation. Arlene will listen to your
                situation and tell you honestly if coaching is the right fit.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy rounded-xl font-medium font-body hover:bg-gold-light transition-colors"
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
