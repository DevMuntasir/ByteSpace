"use client";

import { useState } from "react";
import { NAV_LINKS } from "../../data";

const A = "/assets";

export function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <header className="absolute top-0 right-0 left-0 z-50 h-[120px] overflow-hidden">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-[120px]">
        <a className="flex items-center gap-2" href="#">
          <img
            alt="ByteSpace logo"
            className="h-[31.5px] w-[28.875px]"
            src={`${A}/icon.svg`}
          />
          <span className="font-bold font-brand-display text-brand-text-light text-brand-xl leading-normal">
            ByteSpace
          </span>
        </a>

        <nav className="flex items-center gap-6">
          {NAV_LINKS.map((link, i) => (
            <a
              className={[
                "font-brand-primary text-brand-base text-brand-text-light transition-opacity",
                activeIndex === i
                  ? "font-medium leading-[1.2]"
                  : "font-normal leading-[1.6] opacity-80 hover:opacity-100",
              ].join(" ")}
              href={link.href}
              key={link.label}
              onClick={() => setActiveIndex(i)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a
            className="font-brand-primary font-normal text-brand-base text-brand-text-light leading-[24px] transition-opacity hover:opacity-80"
            href="#"
          >
            Sign In
          </a>
          <a
            className="font-brand-primary font-normal text-brand-base text-brand-text-light leading-[24px] transition-opacity hover:opacity-80"
            href="#"
          >
            Join Us
          </a>
          <button
            aria-label="Cart"
            className="text-brand-text-light transition-opacity hover:opacity-80"
          >
            <img alt="cart" className="h-6 w-6" src={`${A}/1e1d7.svg`} />
          </button>
        </div>
      </div>
    </header>
  );
}
