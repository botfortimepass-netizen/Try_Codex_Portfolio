import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaurav Kaklotar | AI Portfolio",
  description: "Futuristic animated portfolio built with Next.js, Tailwind CSS, and Framer Motion."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
