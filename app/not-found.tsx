import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center pt-24">
      <div className="max-w-lg mx-auto px-6 text-center space-y-6">
        <p className="font-display text-7xl font-semibold text-navy">404</p>
        <h1 className="font-display text-3xl font-semibold text-navy">
          This Page Doesn&rsquo;t Exist
        </h1>
        <p className="text-navy/60">
          The page you&rsquo;re looking for has moved or doesn&rsquo;t exist. Head back
          home or schedule a consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-bg rounded-lg font-medium font-body hover:bg-navy/80 transition-colors"
          >
            Go Home <ArrowRight size={16} weight="bold" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-navy/20 text-navy rounded-lg font-medium font-body hover:border-navy/40 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
