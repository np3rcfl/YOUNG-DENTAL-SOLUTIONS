"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-5 h-4 flex flex-col justify-between">
      <span
        className="absolute h-[1.5px] w-full bg-current transition-all duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
        style={{
          top: open ? "50%" : "0",
          transform: open ? "translateY(-50%) rotate(45deg)" : "none",
        }}
      />
      <span
        className="absolute h-[1.5px] w-full bg-current transition-all duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          opacity: open ? 0 : 1,
          translate: open ? "8px" : "none",
        }}
      />
      <span
        className="absolute h-[1.5px] w-full bg-current transition-all duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
        style={{
          bottom: open ? "50%" : "0",
          transform: open ? "translateY(50%) rotate(-45deg)" : "none",
        }}
      />
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled ? "w-[min(90vw,1040px)]" : "w-[min(94vw,1160px)]"
        }`}
      >
        <nav
          className={`flex items-center justify-between px-5 py-3 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled
              ? "bg-[#1A1A26]/98 backdrop-blur-xl shadow-2xl shadow-[#1A1A26]/25"
              : "bg-[#1A1A26]/88 backdrop-blur-md"
          }`}
        >
          <Link
            href="/"
            className="font-display text-[#FDFCF7] font-semibold text-lg tracking-tight hover:text-[#FDFCF7]/80 transition-colors duration-300"
          >
            Young Dental Solutions
          </Link>

          <ul className="hidden md:flex items-center gap-7">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-body font-medium transition-colors duration-300 ${
                    pathname === href
                      ? "text-[#FDFCF7]"
                      : "text-[#FDFCF7]/55 hover:text-[#FDFCF7]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full border border-[#FDFCF7]/20 text-[#FDFCF7] text-sm font-medium font-body hover:border-[#FDFCF7]/50 hover:bg-[#FDFCF7]/8 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            Free Consultation
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#FDFCF7] p-2 -mr-1"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <HamburgerIcon open={open} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#1A1A26]/97 backdrop-blur-3xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 mt-1">
              <Link
                href="/"
                className="font-display text-[#FDFCF7] font-semibold text-lg"
              >
                Young Dental Solutions
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="text-[#FDFCF7] p-2 -mr-1"
                aria-label="Close menu"
              >
                <HamburgerIcon open={true} />
              </button>
            </div>

            <nav className="flex flex-col gap-1 px-6 mt-10">
              {links.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 + i * 0.07,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={href}
                    className={`block font-display text-5xl font-light py-3 transition-colors duration-300 ${
                      pathname === href
                        ? "text-[#FDFCF7]"
                        : "text-[#FDFCF7]/45 hover:text-[#FDFCF7]"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-auto px-6 pb-14 space-y-6"
            >
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-between w-full px-6 py-4 rounded-full border border-[#FDFCF7]/20 text-[#FDFCF7] font-body font-medium text-base hover:border-[#FDFCF7]/40 hover:bg-[#FDFCF7]/6 transition-all duration-300"
              >
                Schedule Free Consultation
                <span className="w-8 h-8 rounded-full border border-[#FDFCF7]/15 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
              <p className="text-sm text-[#FDFCF7]/30 font-body">
                858-223-9714 &middot; arlene@youngdentalsolutions.com
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
