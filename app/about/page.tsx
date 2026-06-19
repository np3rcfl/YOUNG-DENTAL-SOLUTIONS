import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedSection";
import { HeroText, HeroTextItem, HeroImage } from "@/components/HomeAnimations";

export const metadata: Metadata = {
  title: "About Arlene Young | Dental Practice Coach",
  description:
    "Arlene Young spent 30+ years coaching dental practices across Southern California. Finance background, personal approach, proven systems — learn her story.",
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
  sameAs: ["https://www.linkedin.com/in/arlene-young-dental/"],
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
    num: "01",
    title: "Listen First, Prescribe Second",
    desc: "Every practice is different. Before Arlene recommends anything, she understands your numbers, your team, your history, and your goals.",
  },
  {
    num: "02",
    title: "Finance-First Thinking",
    desc: "Her background in finance means she approaches your practice as a business. She sees the levers most dental consultants miss.",
  },
  {
    num: "03",
    title: "1-on-1, Always",
    desc: "No group programs. No associates handling your account. When you work with Young Dental Solutions, you work with Arlene.",
  },
  {
    num: "04",
    title: "Transparency Over Promises",
    desc: "Arlene will never guarantee 30% production growth. She will tell you exactly what she sees and what you can realistically achieve.",
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

      {/* ─── HERO ─── */}
      <section className="min-h-[85dvh] flex items-center pt-28 pb-20 bg-navy overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[56%_44%] gap-10 xl:gap-16 items-center">
            <HeroText>
              <HeroTextItem>
                <nav className="text-xs text-bg/35 font-body tracking-wide">
                  <Link href="/" className="hover:text-bg/60 transition-colors duration-300">
                    Home
                  </Link>
                  <span className="mx-2 opacity-40">/</span>
                  <span className="text-bg/55">About</span>
                </nav>
              </HeroTextItem>

              <HeroTextItem>
                <span className="eyebrow eyebrow-light">
                  The Coach Behind Young Dental Solutions
                </span>
              </HeroTextItem>

              <HeroTextItem>
                <h1 className="font-display text-[3.25rem] md:text-[4.25rem] lg:text-[4.75rem] xl:text-[5.25rem] font-light text-bg leading-[0.98] tracking-[-0.02em]">
                  30 Years.
                  <br />
                  No Templates.
                  <br />
                  <em className="text-gold" style={{ fontStyle: "italic" }}>
                    One Practice
                  </em>
                  <br />
                  at a Time.
                </h1>
              </HeroTextItem>

              <HeroTextItem>
                <p className="text-base md:text-lg text-bg/50 leading-relaxed font-body font-light max-w-lg">
                  Arlene Young has spent more than three decades working
                  alongside dental practice owners across Southern California.
                  Not as a vendor. Not as a report writer. As a coach who stays
                  engaged, picks up the phone, and treats your practice as a
                  long-term relationship.
                </p>
              </HeroTextItem>
            </HeroText>

            <HeroImage>
              <div className="relative mt-6 lg:mt-0">
                {/* Double-bezel photo frame */}
                <div
                  className="relative rounded-[2rem] p-2 bg-bg/5 border border-bg/10"
                  style={{ transform: "rotate(-1.5deg)" }}
                >
                  <div className="relative rounded-[calc(2rem-0.5rem)] overflow-hidden aspect-[3/4]">
                    <Image
                      src="/images/arlene-young.jpg"
                      alt="Arlene Young, Dental Practice Consultant and Coach, Southern California"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 1024px) 90vw, 44vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/5 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <p className="font-display text-bg/90 text-sm font-light italic">
                        Arlene Young
                      </p>
                      <p className="text-bg/50 text-xs font-body mt-0.5">
                        Dental Practice Consultant &amp; Coach
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating quote card */}
                <div
                  className="absolute bottom-8 -left-5 max-w-[200px] rounded-2xl bg-bg/95 backdrop-blur-sm border border-navy/8 shadow-2xl shadow-navy/15 px-4 py-4 space-y-1.5"
                  style={{ transform: "rotate(1.5deg)" }}
                >
                  <p className="font-display text-navy text-sm font-medium italic leading-snug">
                    &ldquo;She picks up the phone and follows through.&rdquo;
                  </p>
                  <p className="text-[10px] text-navy/40 font-body">
                    Consistent. Every time.
                  </p>
                </div>
              </div>
            </HeroImage>
          </div>
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="py-32 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedContainer>
            <AnimatedItem>
              <span className="eyebrow mb-8 inline-flex">Her Story</span>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-display text-3xl lg:text-4xl font-light text-navy mb-10 leading-[1.1]">
                A Finance Background That Changes
                <br />
                <em style={{ fontStyle: "italic" }} className="text-gold">
                  How You See Your Numbers
                </em>
              </h2>
            </AnimatedItem>
            <AnimatedItem className="space-y-6 text-navy/58 leading-relaxed font-body">
              <p>
                Most dental consultants come from clinical backgrounds. They
                know dentistry. Arlene knows dentistry too, but her lens is
                different. With roots in finance, she approaches every practice
                the way a CFO approaches a portfolio: What are the real numbers?
                Where is value being created? Where is it being destroyed?
              </p>
              <p>
                That combination — deep dental industry experience plus financial
                discipline — is rare. It means Arlene can sit down with your
                production reports and see what a dentist-turned-consultant
                might miss. Overhead ratios that look fine on the surface but
                signal deeper problems. Scheduling patterns that cap your growth.
                Billing systems that silently leak revenue month after month.
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

      {/* ─── PRINCIPLES ─── */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedContainer className="text-center mb-14 space-y-4">
            <AnimatedItem>
              <span className="eyebrow">How Arlene Works</span>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-navy">
                The Principles Behind the Practice
              </h2>
            </AnimatedItem>
          </AnimatedContainer>

          <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map(({ num, title, desc }) => (
              <AnimatedItem key={num}>
                <div className="rounded-2xl bg-cream border border-navy/8 p-1 h-full">
                  <div className="rounded-[calc(1rem-0.25rem)] bg-bg border border-navy/5 px-7 py-8 h-full flex gap-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                    <span className="font-display text-4xl font-light text-navy/12 shrink-0 leading-none mt-1">
                      {num}
                    </span>
                    <div className="space-y-2.5">
                      <h3 className="font-display text-xl font-medium text-navy">
                        {title}
                      </h3>
                      <p className="text-navy/55 leading-relaxed font-body text-sm">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* ─── QUOTE ─── */}
      <section className="py-32 bg-navy">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedContainer className="text-center space-y-8">
            <AnimatedItem>
              <div className="rounded-[2rem] bg-bg/4 border border-bg/8 p-2">
                <div className="rounded-[calc(2rem-0.5rem)] bg-bg/4 border border-bg/6 px-10 py-14 md:px-16 md:py-20">
                  <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-bg leading-relaxed">
                    &ldquo;Lasting success comes from more than just solutions.
                    It comes from strong relationships, clear systems, and a
                    positive culture. That&rsquo;s what I&rsquo;m here to help
                    you{" "}
                    <em style={{ fontStyle: "italic" }} className="text-gold">
                      build.
                    </em>
                    &rdquo;
                  </blockquote>
                  <p className="text-bg/35 font-body font-medium text-sm mt-8 tracking-wide">
                    Arlene Young &mdash; Young Dental Solutions
                  </p>
                </div>
              </div>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedContainer className="text-center space-y-7">
            <AnimatedItem>
              <span className="eyebrow">Ready to Begin</span>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-navy">
                Ready to Work With Arlene?
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-navy/55 text-base md:text-lg font-body leading-relaxed">
                Schedule a free 30-minute consultation. No pitch. Just an honest
                conversation about your practice and where it could go.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-between gap-8 px-6 py-4 bg-navy text-bg rounded-full font-body font-medium text-sm hover:bg-navy/85 active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                Schedule Free Consultation
                <span className="w-8 h-8 rounded-full bg-bg/10 flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110">
                  <ArrowRight size={13} weight="bold" />
                </span>
              </Link>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-sm text-navy/35 font-body">
                858-223-9714 &middot; arlene@youngdentalsolutions.com
              </p>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </section>
    </>
  );
}
