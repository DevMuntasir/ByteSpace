"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    const tick = (time: number) => lenis?.raf(time * 1000);

    const updateScrolling = () => {
      gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = undefined;

      if (!reducedMotion.matches) {
        lenis = new Lenis({
          anchors: true,
          autoRaf: false,
        });
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
      }
    };

    updateScrolling();
    reducedMotion.addEventListener("change", updateScrolling);

    return () => {
      reducedMotion.removeEventListener("change", updateScrolling);
      gsap.ticker.remove(tick);
      lenis?.destroy();
    };
  }, []);

  return null;
}
