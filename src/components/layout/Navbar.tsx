"use client";

import { useState } from "react";
import { NAV_LINKS } from "../../data";

const A = "/assets";
const NAV_ITEM_CLASS =
  "whitespace-nowrap font-brand-primary text-[1.1111cqw] text-brand-text-light transition-opacity max-md:text-xs";

export function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <header className="absolute inset-x-0 top-0 z-5 h-[8.3333cqw] max-md:h-[110px]">
      <div className="flex h-full items-center justify-between px-[8.3333cqw] max-md:flex-wrap max-md:content-center max-md:gap-3.5 max-md:px-5 max-md:py-3 max-[359px]:px-3.5">
        <a
          className="flex shrink-0 items-center gap-[0.5556cqw] max-md:gap-1.5"
          href="#"
        >
          <img
            alt="ByteSpace logo"
            className="h-[2.1875cqw] w-[2.0052cqw] max-md:h-[26px] max-md:w-[23px]"
            src={`${A}/icon.svg`}
          />
          <span className="font-bold font-brand-display text-[1.6667cqw] text-white max-md:text-xl max-[359px]:text-lg">
            ByteSpace
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-[1.6667cqw] max-md:order-3 max-md:w-full max-md:justify-center max-md:gap-7"
        >
          {NAV_LINKS.map((link, index) => (
            <a
              className={`${NAV_ITEM_CLASS} inline-flex max-md:min-h-8 max-md:items-center ${activeIndex === index ? "font-medium leading-[1.2]" : "font-normal leading-[1.6] opacity-80 hover:opacity-100"}`}
              href={link.href}
              key={link.label}
              onClick={() => setActiveIndex(index)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[1.6667cqw] max-md:gap-3 max-[359px]:gap-2">
          <a
            className={`${NAV_ITEM_CLASS} font-normal leading-6 hover:opacity-80`}
            href="#"
          >
            Sign In
          </a>
          <a
            className={`${NAV_ITEM_CLASS} font-normal leading-6 hover:opacity-80`}
            href="#"
          >
            Join Us
          </a>
          <button
            aria-label="Cart"
            className="cursor-pointer text-brand-text-light transition-opacity hover:opacity-80"
            type="button"
          >
            <svg
              aria-hidden="true"
              className="h-[1.6667cqw] w-[1.6667cqw] max-md:h-[18px] max-md:w-[18px]"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 7h14v14H5zM9 10V5a3 3 0 0 1 6 0v5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
