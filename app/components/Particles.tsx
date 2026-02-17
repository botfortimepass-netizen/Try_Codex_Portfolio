"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 22 }).map((_, idx) => ({
  id: idx,
  left: `${(idx * 37) % 100}%`,
  top: `${(idx * 53) % 100}%`,
  duration: 8 + (idx % 7),
  delay: (idx % 5) * 0.5,
  size: 2 + (idx % 4)
}));

export function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white/40"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.15, 0.8, 0.15],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}
    </div>
  );
}
