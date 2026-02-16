"use client";

import { useEffect, useState } from "react";

type TypingTextProps = {
  text: string;
  speed?: number;
};

export function TypingText({ text, speed = 70 }: TypingTextProps) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      setDisplay(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <p className="font-mono text-base text-neon-blue md:text-lg">
      {display}
      <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-neon-blue align-middle" />
    </p>
  );
}
