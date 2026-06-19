import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { HeroText, HeroTextItem } from "@/components/HomeAnimations";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Dental Practice Recruiting | Southern California",
  description:
    "The right team is the difference between a practice that runs and one that drains you. Dental recruiting for practices across Southern California.",
  alternates: {
    canonical: "https://youngdentalsolutions.com/services/recruiting",
  },
  openGraph: {
    title: "Dental Practice Recruiting | Southern California | Young Dental Solutions",
    description:
      "Talent acquisition for San Diego and Southern California dental practices. Find and place the right people, with Arlene Young's 30+ years of team-building experience.",
    url: "https://youngdentalsolutions.com/services/recruiting",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dental Practice Recruiting",
  serviceType: "Dental Staff Recruiting and Placement",
  description:
    "Talent acquisition and team-building support for dental practices across Southern California, role definition, candidate sourcing, interview support, and onboarding structure.",
  provider: { "@id": "https://youngdentalsolutions.com/#business" },
  areaServed: [
    { "@type": "City", name: "San Diego" },
    { "@type": "City", name: "Rancho Bernardo" },
    { "@type": "City", name: "Beverly Hills" },
    { "@type": "City", name: "Santa Clarita" },
    { "@type": "State", name: "Southern California" },
  ],
  url: "https://youngdentalsolutions.com/services/recruiting",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://youngdentalsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://youngdentalsolutions.com/services" },
    { "@type": "ListItem", position: 3, name: "Recruiting", item: "https://youngdentalsolutions.com/services/recruiting" },
  ],
};

const process = [
  { num: "01", title: "Role Definition", desc: "Before sourcing, Arlene works with you to define exactly what success looks like in the role, skills, culture fit, compensation range, and non-negotiables." },
  { num: "02", title: "Candidate Sourcing", desc: "Leveraging 30+ years of Southern California dental industry relationships and targeted outreach to find candidates who fit your practice specifically." },
  { num: "03", title: "Interview Support", desc: "Structured interview questions, culture-fit assessment, and compensation benchmarking so you make the decision with full information." },
  { num: "04", title: "Onboarding Plan", desc: "A 90-day onboarding structure that sets expectations clearly, reduces friction, and gives new team members the best chance to succeed." },
];

const roles = [
  "Office Manager",
  "Front Desk / Patient Coordinator",
  "Dental Hygienist",
  "Dental Assistant",
  "Treatment Coordinator",
  "Billing Specialist",
  "Practice Administrator",
];

export default function RecruitingPage() {
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
                <span className="text-bg/70">Recruiting</span>
              </nav>
            </HeroTextItem>
            <HeroTextItem>
              <p className="text-sm font-body font-medium text-navy/40 uppercase tracking-widest">
                Recruiting
              </p>
            </HeroTextItem>
            <HeroTextItem>
              <h1 className="font-display text-5xl lg:text-6xl font-semibold text-bg leading-[1.05] max-w-3xl">
                The Right Team Is the Difference
                <br className="hidden sm:block" />
                Between a Practice That Runs
                <br className="hidden sm:block" />
                <span className="text-navy/40">and One That Drains You.</span>
              </h1>
            </HeroTextItem>
            <HeroTextItem>
              <p className="text-lg text-bg/60 leading-relaxed max-w-2xl">
                Staff turnover in dental practices costs more than most owners
                realize, recruiting fees, training time, lost productivity, and
                team morale. Arlene Young helps you find the right people the
                first time, with 30+ years of Southern California dental industry
                relationships to draw from.
              </p>
            </HeroTextItem>
            <HeroTextItem>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-bg rounded-lg font-medium font-body hover:bg-navy/80 transition-colors"
              >
                Schedule Consultation
                <ArrowRight size={18} weight="bold" />
              </Link>
            </HeroTextItem>
          </HeroText>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedContainer className="space-y-4 mb-12">
            <AnimatedItem>
              <p className="text-sm font-body font-medium text-navy/40 uppercase tracking-widest">
                Process
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-display text-4xl font-semibold text-navy">
                How We Find the Right People
              </h2>
            </AnimatedItem>
          </AnimatedContainer>

          <AnimatedContainer className="space-y-5">
            {process.map(({ num, title, desc }) => (
              <AnimatedItem key={num}>
                <div className="rounded-2xl bg-bg border border-navy/8 p-1">
                  <div className="rounded-xl bg-cream border border-navy/5 p-8 flex gap-6">
                    <span className="font-display text-4xl font-semibold text-bg/20 shrink-0 leading-none mt-1">
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

      {/* Why It Matters + Roles */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedContainer>
              <AnimatedItem>
                <h2 className="font-display text-3xl font-semibold text-navy mb-6">
                  Recruiting Isn&rsquo;t Just Filling a Chair
                </h2>
              </AnimatedItem>
              <AnimatedItem className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  The wrong hire doesn&rsquo;t just underperform. They create
                  friction, damage patient relationships, and drain your best
                  team members who carry the slack. In a small practice
                  environment, one bad fit affects everything.
                </p>
                <p>
                  Arlene approaches recruiting the same way she approaches
                  practice management: with a finance-first eye. What&rsquo;s the
                  true cost of this role? What does the ROI look like if it&rsquo;s
                  filled right? What does it cost if it&rsquo;s filled wrong?
                </p>
                <p>
                  Her 30+ years of working inside Southern California dental
                  practices means she knows what good looks like, and she
                  won&rsquo;t recommend a candidate she wouldn&rsquo;t put in her own
                  practice.
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <AnimatedContainer delay={0.1}>
              <AnimatedItem>
                <div className="rounded-2xl bg-navy p-8 space-y-4">
                  <h3 className="font-display text-xl font-semibold text-bg">
                    Roles We Recruit For
                  </h3>
                  <ul className="space-y-3">
                    {roles.map((role) => (
                      <li key={role} className="flex items-center gap-3">
                        <CheckCircle size={16} weight="fill" className="text-navy/40 shrink-0" />
                        <span className="text-sm text-bg/80">{role}</span>
                      </li>
                    ))}
                  </ul>
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
                Need to Build a Stronger Team?
                <br className="hidden sm:block" />
                Let&rsquo;s Talk.
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-bg/60 text-lg">
                Schedule a free consultation to discuss what roles you need to fill
                and what the right candidate looks like for your practice.
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
