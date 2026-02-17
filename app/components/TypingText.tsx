"use client";

import { useEffect, useMemo, useState } from "react";

type TypingTextProps = {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
};

export function TypingText({
  texts,
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseMs = 1400
}: TypingTextProps) {
  const safeTexts = useMemo(() => texts.filter(Boolean), [texts]);
  const [textIndex, setTextIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!safeTexts.length) return;

    const currentText = safeTexts[textIndex % safeTexts.length];
    const reachedEnd = display === currentText;
    const reachedStart = display.length === 0;

    if (reachedEnd && !isDeleting) {
      const pause = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(pause);
    }

    if (reachedStart && isDeleting) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % safeTexts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setDisplay((prev) =>
          isDeleting ? currentText.slice(0, Math.max(prev.length - 1, 0)) : currentText.slice(0, prev.length + 1)
        );
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [deletingSpeed, display, isDeleting, pauseMs, safeTexts, textIndex, typingSpeed]);

  return (
    <p className="font-mono text-base text-neon-blue md:text-lg">
      {display}
      <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-neon-blue align-middle" />
    </p>
  );
}
