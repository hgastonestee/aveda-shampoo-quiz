"use client";

import Link from "next/link";

export default function FloatingQuizCTA() {
  return (
    <Link
      href="/shampoo-quiz"
      aria-label="Take the Shampoo Quiz"
      className="
        fixed bottom-20 right-4 z-50
        flex items-center justify-center
        rounded-full
        bg-[#1C4220] text-white
        shadow-lg
        px-4 py-3
        text-sm font-medium
        leading-tight
        max-w-[160px]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white
        md:hidden
      "
    >
      <span className="text-center">
        Need Help?
        <br />
        <strong>Take our Shampoo Quiz</strong>
      </span>
    </Link>
  );
}
