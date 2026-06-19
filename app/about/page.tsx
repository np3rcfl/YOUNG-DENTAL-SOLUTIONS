import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedSection";
import { HeroText, HeroTextItem, HeroImage } from "@/components/HomeAnimations";

export const metadata: Metadata = {
  title: "About Arlene Young | Dental Practice Coach",
  description:
    "Arlene Young spent 30+ years coaching dental practices across Southern California. Finance background, personal approach, proven systems, learn her story.",
  alternates: {
    canonical: "https://youngdentalsolutions.com/about",
  },
  openGraph: {
    title: "About Arlene Young | Dental Practice Coach | Young Dental Solutions",
    description:
      "30+ years. Finance background. Every client is 1-on-1. Learn why dental practices across Southern California trust Arlene Young.",
    url: "https://youngdentalsolutions.com/about",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://youngdentalsolutions.com/#arlene-young",
  name: "Arlene Young",
  jobTitle: "Dental Practice Consultant & Coach",
  telephone: "+18582239714",
  email: "arlene@youngdentalsolutions.com",
  url: "https://youngdentalsolutions.com/about",
  worksFor: {
    "@type": "Organization",
    name: "Young Dental Solutions",
    url: "https://youngdentalsolutions.com",
  },
  knowsAbout: [
    "dental practice management",
    "dental practice consulting",
    "dental due diligence",
    "dental business coaching",
    "dental team recruiting",
    "dental billing systems",
    "dental scheduling optimization",
  ],
  sameAs: ["https://www.linkedin.com/in/arlene-young-dental/"],
  description:
    "Arlene Young is a dental practice consultant and coach with 30+ years of experience in Southern California. She brings a finance background to practice management, delivering 1-on-1 coaching rather than generic playbooks.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://youngdentalsolutions.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://youngdentalsolutions.com/about" },
  ],
};

const values = [
  {
    title: "Listen First, Prescribe Second",
    desc: "Every practice is different. Before Arlene recommends anything, she understands your numbers, your team, your history, and your goals.",
  },
  {
    title: "Finance-First Thinking",
    desc: "Her background in finance means she approaches your practice as a business, not just a clinical environment. She sees the levers most dental consultants miss.",
  },
  {
    title: "1-on-1, Always",
    desc: "No group programs. No associates handling your account. When you work with Young Dental Solutions, you work with Arlene.",
  },
  {
    title: "Transparency Over Promises",
    desc: "Arlene will never guarantee 30% production growth. She will tell you exactly what she sees and what she thinks you can realistically achieve.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center">
            <HeroText>
              <HeroTextItem>
                <nav className="text-sm text-navy/40 font-body">
                  <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                  <span className="mx-2">/</span>
                  <span className="text-navy">About</span>
                </nav>
              </HeroTextItem>
              <HeroTextItem>
                <p className="text-sm font-body font-medium text-gold uppercase tracking-widest">
                  The Coach Behind Young Dental Solutions
                </p>
              </HeroTextItem>
              <HeroTextItem>
                <h1 className="font-display text-5xl lg:text-6xl font-semibold text-navy leading-[1.05]">
                  30 Years.
                  <br />
                  <span className="text-gold">No Templates.</span>
                  <br />
                  One Practice at a Time.
                </h1>
              </HeroTextItem>
              <HeroTextItem>
                <p className="text-lg text-navy/70 leading-relaxed">
                  Arlene Young has spent more than three decades working alongside
                  dental practice owners across Southern California. Not as a
                  vendor. Not as a report writer. As a coach, someone who stays
                  engaged, picks up the phone, and treats your practice as a
                  long-term relationship.
                </p>
              </HeroTextItem>
            </HeroText>

            <HeroImage>
              <div className="relative rounded-2xl overflow-hidden bg-cream border border-navy/8 p-1.5">
                <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="/images/arlene-young.jpg"
                    alt="Arlene Young, Dental Practice Consultant and Coach, Southern California"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 1200px) 45vw, 520px"
                  />
                </div>
              </div>
            </HeroImage>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedContainer>
            <AnimatedItem>
              <h2 className="font-display text-3xl font-semibold text-navy mb-8">
                A Finance Background That Changes How You See Your Numbers
              </h2>
            </AnimatedItem>
            <AnimatedItem className="space-y-5 text-navy/70 leading-relaxed">
              <p>
                Most dental consultants come from clinical backgrounds. They know
                dentistry. Arlene knows dentistry too, but her lens is different.
                With roots in finance, she approaches every practice the way a CFO
                approaches a portfolio: What are the real numbers? Where is value
                being created? Where is it being destroyed?
              </p>
              <p>
                That combination, deep dental industry experience plus financial
                discipline, is rare. It means Arlene can sit down with your
                production reports and see what a dentist-turned-consultant might
                miss. Overhead ratios that look fine on the surface but signal
                deeper problems. Scheduling patterns that cap your growth. Billing
                systems that silently leak revenue month after month.
              </p>
              <p>
                She started Young Dental Solutions because she saw a gap in how
                consulting was being done: too much prescription, not enough
                diagnosis. Too many playbooks designed for practices that
                didn&rsquo;t look anything like yours. Too many consultants who
                called once and disappeared.
              </p>
              <p>
                Young Dental Solutions is built on the opposite model: listen
                first, diagnose thoroughly, build a plan for this practice, and
                stay accountable to it alongside you.
              </p>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedContainer className="text-center mb-16 space-y-4">
            <AnimatedItem>
              <p className="text-sm font-body font-medium text-gold uppercase tracking-widest">
                How Arlene Works
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-display text-4xl font-semibold text-navy">
                The Principles Behind the Practice
              </h2>
            </AnimatedItem>
          </AnimatedContainer>

          <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map(({ title, desc }) => (
              <AnimatedItem key={title}>
                <div className="rounded-2xl bg-bg border border-navy/8 p-1.5 h-full">
                  <div className="rounded-xl bg-cream border border-navy/5 p-8 space-y-3 h-full">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={22} weight="fill" className="text-gold shrink-0" />
                      <h3 className="font-display text-xl font-semibold text-navy">{title}</h3>
                    </div>
                    <p className="text-navy/60 leading-relaxed pl-9">{desc}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-navy">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedContainer className="text-center space-y-6">
            <AnimatedItem>
              <blockquote className="font-display text-2xl lg:text-3xl font-semibold text-bg leading-relaxed">
                &ldquo;Lasting success comes from more than just solutions. It comes
                from strong relationships, clear systems, and a positive culture.
                That&rsquo;s what I&rsquo;m here to help you build.&rdquo;
              </blockquote>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-gold font-body font-medium">
                Arlene Young, Young Dental Solutions
              </p>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedContainer className="text-center space-y-6">
            <AnimatedItem>
              <h2 className="font-display text-4xl font-semibold text-navy">
                Ready to Work With Arlene?
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-navy/60 text-lg">
                Schedule a free 30-minute consultation. No pitch. Just an honest
                conversation about your practice.
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
          </AnimatedContainer>
        </div>
      </section>
    </>
  );
}
