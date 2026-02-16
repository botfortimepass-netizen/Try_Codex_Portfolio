"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  title: string;
  subtitle?: string;
}>;

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="mx-auto w-full max-w-6xl px-6 py-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-2 text-sm text-white/70 md:text-base">{subtitle}</p> : null}
      </div>
      {children}
    </motion.section>
  );
}
