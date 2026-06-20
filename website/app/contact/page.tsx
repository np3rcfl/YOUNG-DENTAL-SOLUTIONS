import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Envelope, InstagramLogo, LinkedinLogo, MapPin } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Free Dental Practice Consultation | Contact Young Dental Solutions",
  description:
    "Schedule a free consultation with Arlene Young, dental practice consultant serving San Diego, Rancho Bernardo, Beverly Hills, Santa Clarita, and all of Southern California.",
  alternates: {
    canonical: "https://youngdentalsolutions.com/contact",
  },
  openGraph: {
    title: "Free Dental Practice Consultation | Young Dental Solutions",
    description:
      "Schedule a free 30-minute consultation with Arlene Young. No pitch, just an honest look at your practice.",
    url: "https://youngdentalsolutions.com/contact",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://youngdentalsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://youngdentalsolutions.com/contact" },
  ],
};

const cities = [
  "San Diego",
  "Rancho Bernardo",
  "Beverly Hills",
  "Santa Clarita",
  "Los Angeles",
  "Orange County",
  "All of Southern California",
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="text-sm text-navy/40 font-body mb-8">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-navy">Contact</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">
            {/* Left, Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-body font-medium text-navy/40 uppercase tracking-widest">
                  Get in Touch
                </p>
                <h1 className="font-display text-5xl lg:text-6xl font-semibold text-navy leading-[1.1]">
                  Let&rsquo;s Talk About
                  <br className="hidden sm:block" />
                  <span className="text-navy/40">Your Practice.</span>
                </h1>
                <p className="text-lg text-navy/70 leading-relaxed">
                  Schedule a free 30-minute consultation. Arlene will listen to
                  your situation, ask the right questions, and give you an
                  honest perspective, no pitch, no pressure.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+18582239714"
                  className="flex items-center gap-4 p-5 bg-cream rounded-xl border border-navy/5 hover:border-navy/20 transition-colors group"
                >
                  <div className="p-3 bg-navy/6 rounded-lg group-hover:bg-navy/10 transition-colors">
                    <Phone size={22} weight="duotone" className="text-navy/40" />
                  </div>
                  <div>
                    <p className="text-xs font-body text-navy/40 uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="font-display font-semibold text-navy">858-223-9714</p>
                  </div>
                </a>

                <a
                  href="mailto:arlene@youngdentalsolutions.com"
                  className="flex items-center gap-4 p-5 bg-cream rounded-xl border border-navy/5 hover:border-navy/20 transition-colors group"
                >
                  <div className="p-3 bg-navy/6 rounded-lg group-hover:bg-navy/10 transition-colors">
                    <Envelope size={22} weight="duotone" className="text-navy/40" />
                  </div>
                  <div>
                    <p className="text-xs font-body text-navy/40 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="font-display font-semibold text-navy">arlene@youngdentalsolutions.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 bg-cream rounded-xl border border-navy/5">
                  <div className="p-3 bg-navy/6 rounded-lg">
                    <MapPin size={22} weight="duotone" className="text-navy/40" />
                  </div>
                  <div>
                    <p className="text-xs font-body text-navy/40 uppercase tracking-wider mb-0.5">Location</p>
                    <p className="font-display font-semibold text-navy">San Diego, CA</p>
                    <p className="text-sm text-navy/50">Serving all of Southern California</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-body text-navy/50 uppercase tracking-wider">
                  Follow Arlene
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/youngdentalsolutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-navy/60 hover:text-navy transition-colors text-sm"
                  >
                    <InstagramLogo size={20} />
                    @youngdentalsolutions
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arlene-young-dental/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-navy/60 hover:text-navy transition-colors text-sm"
                  >
                    <LinkedinLogo size={20} />
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-body text-navy/50 uppercase tracking-wider">
                  Service Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1.5 bg-cream border border-navy/10 rounded-full text-xs text-navy/60 font-body"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right, Form */}
            <div>
              <form
                action="mailto:arlene@youngdentalsolutions.com"
                method="POST"
                encType="text/plain"
                className="space-y-5 p-8 bg-cream rounded-3xl border border-navy/5"
              >
                <h2 className="font-display text-2xl font-semibold text-navy">
                  Schedule a Free Consultation
                </h2>
                <p className="text-sm text-navy/50">
                  Fill out the form below and Arlene will get back to you within
                  one business day.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-body font-medium text-navy/70">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Dr. Jane Smith"
                      className="w-full px-4 py-3 bg-bg border border-navy/15 rounded-lg text-navy placeholder:text-navy/30 focus:outline-none focus:border-navy/40 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-body font-medium text-navy/70">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(619) 555-0100"
                      className="w-full px-4 py-3 bg-bg border border-navy/15 rounded-lg text-navy placeholder:text-navy/30 focus:outline-none focus:border-navy/40 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-body font-medium text-navy/70">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@yourpractice.com"
                    className="w-full px-4 py-3 bg-bg border border-navy/15 rounded-lg text-navy placeholder:text-navy/30 focus:outline-none focus:border-navy/40 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="practice" className="text-sm font-body font-medium text-navy/70">
                    Practice Name & Location
                  </label>
                  <input
                    id="practice"
                    name="practice"
                    type="text"
                    placeholder="Sunshine Dental, San Diego, CA"
                    className="w-full px-4 py-3 bg-bg border border-navy/15 rounded-lg text-navy placeholder:text-navy/30 focus:outline-none focus:border-navy/40 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="service" className="text-sm font-body font-medium text-navy/70">
                    What do you need help with?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-bg border border-navy/15 rounded-lg text-navy focus:outline-none focus:border-navy/40 text-sm appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="practice-management">Practice Management Analysis</option>
                    <option value="due-diligence">Due Diligence (buying a practice)</option>
                    <option value="coaching">1-on-1 Coaching</option>
                    <option value="recruiting">Recruiting / Staffing</option>
                    <option value="not-sure">Not sure yet, just want to talk</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-body font-medium text-navy/70">
                    Tell me about your practice
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="What's your biggest challenge right now? What would a win look like for you?"
                    className="w-full px-4 py-3 bg-bg border border-navy/15 rounded-lg text-navy placeholder:text-navy/30 focus:outline-none focus:border-navy/40 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-navy text-bg rounded-lg font-medium font-body hover:bg-navy/80 transition-colors"
                >
                  Send Message
                </button>

                <p className="text-xs text-navy/40 text-center">
                  Or call directly: 858-223-9714
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
