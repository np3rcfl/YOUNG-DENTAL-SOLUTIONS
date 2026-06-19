import Link from "next/link";
import { InstagramLogo, LinkedinLogo, Phone, Envelope, ArrowRight } from "@phosphor-icons/react/dist/ssr";

const services = [
  { href: "/services/practice-management", label: "Practice Management" },
  { href: "/services/due-diligence", label: "Due Diligence" },
  { href: "/services/coaching", label: "Coaching" },
  { href: "/services/recruiting", label: "Recruiting" },
];

export default function Footer() {
  return (
    <footer>
      {/* Editorial CTA band */}
      <div className="bg-navy py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[2.5rem] bg-bg/4 border border-bg/8 p-2">
            <div className="rounded-[calc(2.5rem-0.5rem)] bg-bg/4 border border-bg/6 px-10 py-14 md:px-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
              <div className="space-y-4 max-w-xl">
                <p className="eyebrow eyebrow-light">Start the Conversation</p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-bg leading-[1.05]">
                  Ready to Stop Guessing
                  <br />
                  <em className="text-gold" style={{ fontStyle: "italic" }}>
                    and Start Growing?
                  </em>
                </h2>
                <p className="text-bg/50 font-body text-base leading-relaxed">
                  30 minutes. No pitch. Just an honest look at your practice
                  and where it could go.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-between gap-8 px-6 py-4 bg-bg text-navy rounded-full font-body font-medium text-sm hover:bg-bg/95 active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  Schedule Free Consultation
                  <span className="w-8 h-8 rounded-full bg-navy/8 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110">
                    <ArrowRight size={13} weight="bold" />
                  </span>
                </Link>
                <p className="text-xs text-bg/35 font-body text-center">
                  858-223-9714 &middot; arlene@youngdentalsolutions.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-5">
            <p className="font-display text-navy font-semibold text-xl tracking-tight">
              Young Dental Solutions
            </p>
            <p className="text-sm leading-relaxed text-navy/55 font-body">
              30+ years of dental practice consulting across Southern
              California. Practice management, due diligence, coaching, and
              recruiting. All 1-on-1.
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href="https://www.instagram.com/youngdentalsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Young Dental Solutions on Instagram"
                className="w-9 h-9 rounded-full border border-navy/12 flex items-center justify-center text-navy/45 hover:text-navy hover:border-navy/30 transition-all duration-300"
              >
                <InstagramLogo size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/arlene-young-dental/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arlene Young on LinkedIn"
                className="w-9 h-9 rounded-full border border-navy/12 flex items-center justify-center text-navy/45 hover:text-navy hover:border-navy/30 transition-all duration-300"
              >
                <LinkedinLogo size={17} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-body font-medium text-navy/40 uppercase tracking-[0.18em]">
              Services
            </p>
            <ul className="space-y-2.5">
              {services.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-navy/55 hover:text-navy transition-colors duration-300 font-body"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-body font-medium text-navy/40 uppercase tracking-[0.18em]">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+18582239714"
                  className="flex items-center gap-2.5 text-sm text-navy/55 hover:text-navy transition-colors duration-300 font-body"
                >
                  <Phone size={15} />
                  858-223-9714
                </a>
              </li>
              <li>
                <a
                  href="mailto:arlene@youngdentalsolutions.com"
                  className="flex items-center gap-2.5 text-sm text-navy/55 hover:text-navy transition-colors duration-300 font-body"
                >
                  <Envelope size={15} />
                  arlene@youngdentalsolutions.com
                </a>
              </li>
              <li className="text-sm text-navy/45 font-body pt-1 leading-relaxed">
                San Diego, CA
                <br />
                Serving all of Southern California
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-navy">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-bg/30 font-body">
            &copy; {new Date().getFullYear()} Young Dental Solutions. All rights reserved.
          </p>
          <p className="text-xs text-bg/30 font-body">
            San Diego &middot; Rancho Bernardo &middot; Beverly Hills &middot; Santa Clarita
          </p>
        </div>
      </div>
    </footer>
  );
}
