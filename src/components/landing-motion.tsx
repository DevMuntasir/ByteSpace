"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function revealContent(root: HTMLElement, desktop: boolean) {
  const animations = new Map<HTMLElement, gsap.core.Tween>();
  const targets = root.querySelectorAll<HTMLElement>(
    "[data-reveal], [data-reveal-group] > *"
  );

  for (const target of targets) {
    // Keep the initial viewport and restored scroll positions immediately readable.
    if (target.getBoundingClientRect().top < window.innerHeight * 0.92) {
      continue;
    }

    const siblings = target.parentElement?.hasAttribute("data-reveal-group")
      ? Array.from(target.parentElement.children)
      : [];
    const column = Math.max(0, siblings.indexOf(target)) % (desktop ? 3 : 2);

    animations.set(
      target,
      gsap.from(target, {
        clearProps: "transform,opacity",
        delay: column * 0.07,
        duration: desktop ? 0.75 : 0.5,
        ease: "power2.out",
        opacity: 0,
        scrollTrigger: {
          once: true,
          start: "top 94%",
          trigger: target,
        },
        y: desktop ? 28 : 16,
      })
    );
  }

  // Keyboard navigation must never land on a link waiting for its reveal.
  const revealFocusedContent = (event: FocusEvent) => {
    if (!(event.target instanceof Node)) {
      return;
    }
    for (const [target, animation] of animations) {
      if (target.contains(event.target)) {
        animation.progress(1);
      }
    }
  };
  root.addEventListener("focusin", revealFocusedContent);
  return () => root.removeEventListener("focusin", revealFocusedContent);
}

function animateLayers(root: HTMLElement, desktop: boolean) {
  const originalStyles = new Map<HTMLElement, string>();
  for (const layer of root.querySelectorAll<HTMLElement>("[data-parallax]")) {
    const scene = layer.closest<HTMLElement>("[data-motion-scene]");
    if (!scene) {
      continue;
    }
    originalStyles.set(layer, layer.style.cssText);
    const hero = scene.dataset.motionScene === "hero";
    const distance = Number(layer.dataset.parallax) * (desktop ? 1 : 0.25);

    gsap.fromTo(
      layer,
      { y: hero ? 0 : -distance / 2 },
      {
        ease: "none",
        scrollTrigger: {
          end: "bottom top",
          invalidateOnRefresh: true,
          scrub: desktop ? 0.8 : 0.4,
          start: hero ? "top top" : "top bottom",
          trigger: scene,
        },
        y: hero ? distance : distance / 2,
      }
    );
  }
  return () => {
    // GSAP normalizes CSS individual transforms; restore the Tailwind originals too.
    for (const [layer, style] of originalStyles) {
      layer.style.cssText = style;
    }
  };
}

export function LandingMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const media = gsap.matchMedia();
    media.add(
      {
        desktop: "(min-width: 1024px)",
        mobile: "(max-width: 1023px)",
        reducedMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        if (context.conditions?.reducedMotion) {
          return;
        }
        const desktop = Boolean(context.conditions?.desktop);
        const cleanUpReveals = revealContent(root, desktop);
        const cleanUpLayers = animateLayers(root, desktop);
        return () => {
          cleanUpReveals();
          cleanUpLayers();
        };
      },
      root
    );

    // Font swaps and lazy images can change the sections' trigger positions.
    let disposed = false;
    let refreshFrame = 0;
    const refresh = () => {
      if (disposed) {
        return;
      }
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    const resizeObserver = new ResizeObserver(refresh);
    resizeObserver.observe(root);
    root.addEventListener("load", refresh, true);
    document.fonts.ready.then(refresh);

    return () => {
      disposed = true;
      cancelAnimationFrame(refreshFrame);
      resizeObserver.disconnect();
      root.removeEventListener("load", refresh, true);
      media.revert();
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col" ref={rootRef}>
      {children}
    </main>
  );
}
