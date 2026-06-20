import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
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

const values = [
  {
    title: "Transparency",
    desc: "No hidden agendas, no inflated timelines. You will always know where you stand, what is working, and what needs to change.",
  },
  {
    title: "Consistency",
    desc: "Same coach, every call. The results that last come from a steady relationship, not a rotation of associates with a binder.",
  },
  {
    title: "Purpose",
    desc: "When your team thrives, your practice follows. Every system we build is designed to bring balance as much as growth.",
  },
];

const services = [
  {
    num: "01",
    title: "Practice Management",
    desc: "Scheduling, billing, accounts receivable, patient communication, and the dental metrics that actually move the needle. Every plan is built around how your practice really runs.",
    href: "/services/practice-management",
  },
  {
    num: "02",
    title: "Due Diligence",
    desc: "Thinking of buying? An in-depth practice management analysis confirms the operational side matches what the seller represents. Know exactly what you're walking into before you sign.",
    href: "/services/due-diligence",
  },
  {
    num: "03",
    title: "Coaching",
    desc: "One-on-one for doctors and every team role. Thirty years of helping professionals get to where they actually want to be — not where a template tells them to go.",
    href: "/services/coaching",
  },
  {
    num: "04",
    title: "Recruiting",
    desc: "Connected to hundreds of qualified candidates across Southern California. We find the right fit so you can stay focused on your patients.",
    href: "/services/recruiting",
  },
];

const downloads = [
  {
    title: "QuickBooks Time",
    desc: "Time tracking guide for dental practices",
    href: "https://www.youngdentalsolutions.com/product-page/quickbooks-time-formerly-timesheets",
  },
  {
    title: "Employee Feedback",
    desc: "Ready-to-use feedback template for your team",
    href: "https://www.youngdentalsolutions.com/product-page/employee-feedback",
  },
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
        className="relative overflow-hidden pt-28 pb-0"
        style={{ background: "#252220" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 72% 50%, rgba(168,144,144,0.10) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-[1180px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-end">
          <HeroText>
            <HeroTextItem>
              <span className="eyebrow eyebrow-light">
                Dental Practice Consulting &middot; Southern California
              </span>
            </HeroTextItem>

            <HeroTextItem>
              <h1
                className="font-display font-light leading-[1.02] tracking-[-0.015em] text-bg"
                style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.25rem)" }}
              >
                30 Years.
                <br />
                One Coach.
                <br />
                <em className="not-italic" style={{ color: "#A89090" }}>
                  Your Practice,
                  <br />
                  Finally Running
                  <br />
                  Like a Business.
                </em>
              </h1>
            </HeroTextItem>

            <HeroTextItem>
              <div
                style={{
                  width: "48px",
                  height: "1px",
                  background: "rgba(245,242,238,0.2)",
                }}
              />
            </HeroTextItem>

            <HeroTextItem>
              <p
                className="font-body text-lg leading-relaxed"
                style={{ color: "rgba(245,242,238,0.55)", maxWidth: "36ch" }}
              >
                Most consultants send a playbook. Arlene picks up the phone.
              </p>
            </HeroTextItem>

            <HeroTextItem>
              <div className="flex items-center gap-7 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-block rounded font-body font-medium text-sm transition-opacity duration-200 hover:opacity-85"
                  style={{
                    background: "#A89090",
                    color: "#F5F2EE",
                    padding: "15px 32px",
                    letterSpacing: "0.02em",
                  }}
                >
                  Schedule Free Consultation
                </Link>
                <a
                  href="tel:8582239714"
                  className="font-body text-sm transition-colors duration-300 hover:text-bg/70"
                  style={{ color: "rgba(245,242,238,0.42)" }}
                >
                  858-223-9714
                </a>
              </div>
            </HeroTextItem>
          </HeroText>

          <HeroImage>
            <div
              className="relative"
              style={{
                borderRadius: "220px 220px 18px 18px",
                overflow: "hidden",
                height: "580px",
              }}
            >
              <Image
                src="/images/arlene-headshot.jpg"
                alt="Arlene Young, Dental Practice Consultant serving San Diego and Southern California"
                fill
                className="object-cover object-top"
                priority
                sizes="400px"
              />
              <div
                className="absolute bottom-6 left-5 right-5 rounded px-5 py-3.5"
                style={{
                  background: "rgba(37,34,32,0.88)",
                  backdropFilter: "blur(8px)",
                  borderTop: "1px solid rgba(168,144,144,0.3)",
                }}
              >
                <p className="font-display text-bg" style={{ fontSize: "18px" }}>
                  Arlene Young
                </p>
                <p
                  className="font-body uppercase tracking-[0.18em] mt-1"
                  style={{
                    fontSize: "10.5px",
                    color: "rgba(245,242,238,0.45)",
                  }}
                >
                  Founder &amp; Consultant, Young Dental Solutions
                </p>
              </div>
            </div>
          </HeroImage>
        </div>
      </section>

      {/* ─── STATS BAND ─── */}
      <section
        style={{
          background: "#1A1816",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <AnimatedContainer className="max-w-[1180px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3">
            {[
              { stat: "30+ Years", label: "In dental consulting" },
              { stat: "1-on-1 Always", label: "Never a junior team" },
              { stat: "SoCal", label: "San Diego & beyond" },
            ].map(({ stat, label }, i) => (
              <AnimatedItem key={stat}>
                <div
                  className="py-9 px-6 text-center"
                  style={
                    i < 2
                      ? { borderRight: "1px solid rgba(255,255,255,0.06)" }
                      : undefined
                  }
                >
                  <p
                    className="font-display text-bg leading-none"
                    style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.625rem)" }}
                  >
                    {stat}
                  </p>
                  <p
                    className="font-body uppercase tracking-[0.12em] mt-2"
                    style={{
                      fontSize: "11.5px",
                      color: "rgba(245,242,238,0.35)",
                    }}
                  >
                    {label}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedContainer>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-20" style={{ background: "#F5F2EE" }}>
        <div className="max-w-[1180px] mx-auto px-6 lg:px-12">
          <AnimatedContainer>
            <AnimatedItem>
              <p
                className="font-body uppercase tracking-[0.24em] mb-12"
                style={{ fontSize: "11px", color: "#A89090" }}
              >
                How we work
              </p>
            </AnimatedItem>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map(({ title, desc }) => (
                <AnimatedItem key={title}>
                  <h3
                    className="font-display text-navy mb-3.5"
                    style={{ fontSize: "1.75rem" }}
                  >
                    {title}
                  </h3>
                  <div
                    className="mb-4"
                    style={{
                      width: "28px",
                      height: "1px",
                      background: "#A89090",
                    }}
                  />
                  <p
                    className="font-body leading-[1.75]"
                    style={{ fontSize: "15px", color: "#5C5858" }}
                  >
                    {desc}
                  </p>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedContainer>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" style={{ background: "#252220" }}>
        <div className="max-w-[1180px] mx-auto px-6 lg:px-12 py-24">
          <AnimatedContainer>
            <AnimatedItem>
              <div
                className="flex items-baseline justify-between mb-16 pb-8 flex-wrap gap-6"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                <h2
                  className="font-display font-light text-bg"
                  style={{ fontSize: "2.625rem" }}
                >
                  Services
                </h2>
                <p
                  className="font-body text-sm text-right leading-relaxed"
                  style={{
                    color: "rgba(245,242,238,0.4)",
                    maxWidth: "32ch",
                  }}
                >
                  Every engagement is built around your office. No two practices
                  get the same plan.
                </p>
              </div>
            </AnimatedItem>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
              {services.map(({ num, title, desc, href }) => (
                <AnimatedItem key={num}>
                  <Link href={href} className="group block py-1">
                    <p
                      className="font-body uppercase tracking-[0.2em] mb-3"
                      style={{ fontSize: "10.5px", color: "#A89090" }}
                    >
                      {num}
                    </p>
                    <h3
                      className="font-display font-light text-bg mb-3.5 transition-colors duration-300 group-hover:text-[#C4B0B0]"
                      style={{ fontSize: "1.875rem" }}
                    >
                      {title}
                    </h3>
                    <p
                      className="font-body leading-[1.75] mb-4"
                      style={{
                        fontSize: "15px",
                        color: "rgba(245,242,238,0.5)",
                      }}
                    >
                      {desc}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5 font-body font-medium transition-colors duration-300 group-hover:text-bg/60"
                      style={{
                        fontSize: "12px",
                        color: "rgba(245,242,238,0.38)",
                      }}
                    >
                      Learn more
                      <ArrowRight
                        size={11}
                        weight="bold"
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedContainer>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" style={{ background: "#EAE1EC" }}>
        <div className="max-w-[1180px] mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimatedContainer>
            <AnimatedItem>
              <div className="relative p-5">
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{ background: "#D8CEDC", zIndex: 0 }}
                />
                <div
                  className="relative rounded-lg overflow-hidden"
                  style={{
                    zIndex: 1,
                    boxShadow: "0 24px 56px rgba(37,34,32,0.18)",
                  }}
                >
                  <Image
                    src="/images/arlene-headshot.jpg"
                    alt="Arlene Young"
                    width={600}
                    height={750}
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              </div>
            </AnimatedItem>
          </AnimatedContainer>

          <AnimatedContainer delay={0.1}>
            <AnimatedItem className="space-y-6">
              <p
                className="font-body uppercase tracking-[0.24em]"
                style={{ fontSize: "11px", color: "#A89090" }}
              >
                About Arlene
              </p>
              <h2
                className="font-display font-light leading-[1.1] text-navy"
                style={{ fontSize: "2.5rem" }}
              >
                A finance mind, brought to the chairside.
              </h2>
              <div
                style={{
                  width: "36px",
                  height: "1px",
                  background: "#A89090",
                }}
              />
              <p
                className="font-body leading-[1.78]"
                style={{ fontSize: "16.5px", color: "#4A4646" }}
              >
                Before dentistry, Arlene spent years in finance reading balance
                sheets and spotting what the numbers were really saying. Thirty
                years ago she brought that lens to dental practices, and never
                looked back.
              </p>
              <p
                className="font-body leading-[1.78]"
                style={{ fontSize: "16.5px", color: "#4A4646" }}
              >
                She doesn&rsquo;t send a binder and disappear. She picks up the
                phone, learns your office, and stays through the hard quarters
                and the good ones. One coach, one relationship, for as long as
                it serves you.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-navy hover:text-navy/60 transition-colors duration-300"
              >
                Meet Arlene
                <ArrowUpRight size={14} weight="bold" />
              </Link>
              <div className="pt-2">
                <Image
                  src="/images/arlene-young.png"
                  alt="Young Dental Solutions"
                  width={160}
                  height={60}
                  className="h-14 w-auto object-contain"
                  style={{ opacity: 0.65 }}
                />
              </div>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </section>

      {/* ─── DOWNLOADS ─── */}
      <section id="resources" className="py-20" style={{ background: "#F5F2EE" }}>
        <div className="max-w-[1180px] mx-auto px-6 lg:px-12">
          <AnimatedContainer>
            <AnimatedItem>
              <div className="flex items-end justify-between gap-8 mb-10 flex-wrap">
                <div>
                  <p
                    className="font-body uppercase tracking-[0.24em] mb-4"
                    style={{ fontSize: "11px", color: "#A89090" }}
                  >
                    Free Resources
                  </p>
                  <h2
                    className="font-display font-light text-navy"
                    style={{ fontSize: "2.375rem" }}
                  >
                    Tools you can use today.
                  </h2>
                </div>
                <p
                  className="font-body leading-[1.7]"
                  style={{
                    fontSize: "15px",
                    color: "#7A7474",
                    maxWidth: "36ch",
                  }}
                >
                  Practical templates built from 30 years of working inside real
                  practices. Download free.
                </p>
              </div>
            </AnimatedItem>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {downloads.map(({ title, desc, href }) => (
                <AnimatedItem key={title}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-6 rounded-lg px-8 py-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{
                      background: "#EAE1EC",
                      border: "1px solid rgba(37,34,32,0.06)",
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "#252220" }}
                    >
                      <ArrowUpRight
                        size={16}
                        weight="bold"
                        style={{ color: "#F5F2EE" }}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                    <div className="flex-1">
                      <p
                        className="font-display text-navy mb-0.5"
                        style={{ fontSize: "20px" }}
                      >
                        {title}
                      </p>
                      <p
                        className="font-body text-sm"
                        style={{ color: "#7A7474" }}
                      >
                        {desc}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      style={{ color: "#A89090" }}
                      className="shrink-0"
                    />
                  </a>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedContainer>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="contact" style={{ background: "#252220" }}>
        <div className="max-w-[1180px] mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimatedContainer>
            <AnimatedItem>
              <h2
                className="font-display font-light leading-[1.06] text-shimmer"
                style={{ fontSize: "clamp(2.5rem, 5vw, 3.25rem)" }}
              >
                Ready to talk?
              </h2>
              <p
                className="font-body text-xl mt-4 leading-[1.55]"
                style={{ color: "rgba(245,242,238,0.5)" }}
              >
                30 minutes, no pitch. Just a conversation about your practice.
              </p>
            </AnimatedItem>
          </AnimatedContainer>

          <AnimatedContainer delay={0.1}>
            <AnimatedItem className="flex flex-col items-start gap-4">
              <Link
                href="/contact"
                className="inline-block rounded font-body font-medium text-base transition-opacity duration-200 hover:opacity-85"
                style={{
                  background: "#A89090",
                  color: "#F5F2EE",
                  padding: "16px 34px",
                  letterSpacing: "0.02em",
                }}
              >
                Schedule Free Consultation
              </Link>
              <p
                className="font-body text-sm"
                style={{ color: "rgba(245,242,238,0.35)" }}
              >
                No contracts. No pitch. Just a conversation.
              </p>
              <div className="flex flex-col gap-2 mt-2">
                <a
                  href="tel:8582239714"
                  className="font-body transition-colors duration-300"
                  style={{
                    fontSize: "15px",
                    color: "rgba(245,242,238,0.5)",
                  }}
                >
                  858-223-9714
                </a>
                <a
                  href="mailto:arlene@youngdentalsolutions.com"
                  className="font-body transition-colors duration-300"
                  style={{
                    fontSize: "15px",
                    color: "rgba(245,242,238,0.5)",
                  }}
                >
                  arlene@youngdentalsolutions.com
                </a>
              </div>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </section>
    </>
  );
}
