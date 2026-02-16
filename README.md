# Futuristic AI Portfolio — Gaurav Kaklotar

A modern animated personal portfolio built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack
- Next.js (App Router)
- Tailwind CSS
- Framer Motion

## Features
- Dark futuristic UI with glassmorphism
- Gradient ambient backgrounds
- Hero typing animation
- Floating particles background animation
- Scroll reveal section animations
- Hover glow interactions on cards/buttons
- Smooth page fade-in transition
- Animated timeline and interactive skills grid

## Component Structure

```text
app/
  components/
    Particles.tsx      # Floating ambient particles
    Section.tsx        # Reusable scroll-reveal section wrapper
    TypingText.tsx     # Hero typing effect
  globals.css          # Theme styles and utility animations
  layout.tsx           # Metadata and root layout
  page.tsx             # Complete one-page portfolio sections
```

## Animation Setup
- Framer Motion powers:
  - Initial page transition (`motion.main`)
  - Scroll reveal for each `Section`
  - Hero text/button entrance
  - Timeline entry animations
  - Card hover lift + glow
  - Particle looping motion
- Tailwind + CSS powers:
  - Glassmorphism cards (`section-card` class)
  - Background glow + grid overlay
  - Floating oscillation (`.float` keyframes)

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```
