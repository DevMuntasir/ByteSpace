"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;

    const updateScrolling = () => {
      lenis?.destroy();
      lenis = undefined;

      if (!reducedMotion.matches) {
        lenis = new Lenis({
          anchors: true,
          autoRaf: true,
        });
      }
    };

    updateScrolling();
    reducedMotion.addEventListener("change", updateScrolling);

    return () => {
      reducedMotion.removeEventListener("change", updateScrolling);
      lenis?.destroy();
    };
  }, []);

  return null;
}
