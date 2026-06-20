"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StoryScrollCard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [48, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <div ref={ref} className="hidden lg:block">
      <motion.div
        style={{ y, opacity }}
        className="rounded-3xl overflow-hidden border border-navy/10 shadow-xl shadow-navy/8"
      >
        <div className="relative aspect-[4/3]">
          <Image
            src="/images/service-workspace.jpg"
            alt="Dental practice workspace — organized systems and clear processes"
            fill
            className="object-cover"
            sizes="40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-navy/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="font-display text-bg text-xl font-light italic leading-snug">
              Finance background.
              <br />
              Clinical instincts.
            </p>
            <p className="text-bg/55 text-xs font-body mt-2 tracking-wide uppercase">
              Arlene Young &mdash; Young Dental Solutions
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
