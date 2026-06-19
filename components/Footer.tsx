import Link from "next/link";
import { InstagramLogo, LinkedinLogo, Phone, Envelope } from "@phosphor-icons/react/dist/ssr";

const services = [
  { href: "/services/practice-management", label: "Practice Management" },
  { href: "/services/due-diligence", label: "Due Diligence" },
  { href: "/services/coaching", label: "Coaching" },
  { href: "/services/recruiting", label: "Recruiting" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-bg/80">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <p className="font-display text-bg font-semibold text-xl">
            Young Dental Solutions
          </p>
          <p className="text-sm leading-relaxed text-bg/70">
            30+ years of dental practice consulting across Southern California.
            Practice management, due diligence, coaching, and recruiting — all
            1-on-1.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://www.instagram.com/youngdentalsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Young Dental Solutions on Instagram"
              className="text-bg/60 hover:text-gold transition-colors"
            >
              <InstagramLogo size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/arlene-young-dental/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arlene Young on LinkedIn"
              className="text-bg/60 hover:text-gold transition-colors"
            >
              <LinkedinLogo size={22} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-display text-bg font-semibold text-sm uppercase tracking-widest">
            Services
          </p>
          <ul className="space-y-2">
            {services.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-bg/70 hover:text-gold transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="font-display text-bg font-semibold text-sm uppercase tracking-widest">
            Contact
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href="tel:+18582239714"
                className="flex items-center gap-2 text-sm text-bg/70 hover:text-gold transition-colors"
              >
                <Phone size={16} />
                858-223-9714
              </a>
            </li>
            <li>
              <a
                href="mailto:arlene@youngdentalsolutions.com"
                className="flex items-center gap-2 text-sm text-bg/70 hover:text-gold transition-colors"
              >
                <Envelope size={16} />
                arlene@youngdentalsolutions.com
              </a>
            </li>
            <li className="text-sm text-bg/60 pt-1">
              San Diego, CA
              <br />
              Serving all of Southern California
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bg/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-bg/40">
            &copy; {new Date().getFullYear()} Young Dental Solutions. All rights
            reserved.
          </p>
          <p className="text-xs text-bg/40">
            San Diego &middot; Rancho Bernardo &middot; Beverly Hills &middot;
            Santa Clarita
          </p>
        </div>
      </div>
    </footer>
  );
}
