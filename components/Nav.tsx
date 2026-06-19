"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

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
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? "w-[min(92vw,1100px)]" : "w-[min(96vw,1200px)]"
        }`}
      >
        <nav
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-navy/97 backdrop-blur-md shadow-xl"
              : "bg-navy/90 backdrop-blur-sm"
          }`}
        >
          <Link
            href="/"
            className="font-display text-bg font-semibold text-lg tracking-tight hover:text-bg/80 transition-colors"
          >
            Young Dental Solutions
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-body font-medium transition-colors ${
                    pathname === href
                      ? "text-bg"
                      : "text-bg/60 hover:text-bg"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full border border-bg/30 text-bg text-sm font-medium font-body hover:border-bg/60 hover:bg-bg/10 transition-colors"
          >
            Free Consultation
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-bg p-1"
            aria-label="Open menu"
          >
            <List size={24} weight="bold" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-navy flex flex-col overflow-auto"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <Link
                href="/"
                className="font-display text-bg font-semibold text-lg"
              >
                Young Dental Solutions
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="text-bg p-1"
                aria-label="Close menu"
              >
                <X size={24} weight="bold" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 px-6 mt-12">
              {links.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={href}
                    className={`font-display text-4xl font-semibold transition-colors ${
                      pathname === href ? "text-bg" : "text-bg/60 hover:text-bg"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto px-6 pb-12">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full border border-bg/30 text-bg font-medium text-lg hover:bg-bg/10 transition-colors"
                onClick={() => setOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
