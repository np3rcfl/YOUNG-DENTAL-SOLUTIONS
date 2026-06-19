import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Dental Practice Management Resources & Insights",
  description:
    "Articles, guides, and insights on dental practice management, due diligence, coaching, and team building — from Arlene Young and Young Dental Solutions.",
  alternates: {
    canonical: "https://youngdentalsolutions.com/blog",
  },
};

const planned = [
  "How Much Does a Dental Practice Consultant Cost?",
  "Dental Coach vs. Consultant: What's the Difference?",
  "Dental Practice Due Diligence Checklist",
  "How to Increase Production Without Raising Fees",
  "Dental Practice Overhead Benchmarks: Is Your Practice on Track?",
  "What Does a Dental Consultant Actually Do?",
  "10 Signs Your Practice Needs a Management Consultant",
  "How to Build a High-Performing Dental Team",
  "Scheduling Systems That Actually Work",
  "The Metrics Every Practice Owner Should Track",
];

export default function BlogPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div className="space-y-4">
          <nav className="text-sm text-navy/40 font-body">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-navy">Resources</span>
          </nav>
          <p className="text-sm font-body font-medium text-gold uppercase tracking-widest">
            Resources
          </p>
          <h1 className="font-display text-5xl font-semibold text-navy">
            Dental Practice
            <br />
            <span className="text-gold">Management Insights</span>
          </h1>
          <p className="text-lg text-navy/60 leading-relaxed">
            Practical guidance on practice management, due diligence, team
            building, and growth — from Arlene Young and 30+ years of Southern
            California dental practice experience.
          </p>
        </div>

        <div className="p-8 bg-cream rounded-2xl border border-navy/5 space-y-4">
          <p className="font-display text-xl font-semibold text-navy">
            Articles Coming Soon
          </p>
          <p className="text-navy/60">
            Content launching shortly. Topics include:
          </p>
          <ul className="space-y-2">
            {planned.map((title) => (
              <li key={title} className="flex items-center gap-2 text-sm text-navy/60">
                <span className="text-gold">&#9670;</span>
                {title}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 bg-navy rounded-2xl space-y-4 text-center">
          <p className="font-display text-2xl font-semibold text-bg">
            Don&rsquo;t Wait for the Articles
          </p>
          <p className="text-bg/60">
            Schedule a free consultation and get answers specific to your
            practice — not generic advice.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy rounded-xl font-medium font-body hover:bg-gold-light transition-colors"
          >
            Schedule Free Consultation
            <ArrowRight size={18} weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
