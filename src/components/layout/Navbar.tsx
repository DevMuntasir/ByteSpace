"use client";

import { useState } from "react";
import { NAV_LINKS } from "../../data";

const A = "/assets";
const NAV_ITEM_CLASS =
  "whitespace-nowrap font-brand-primary text-[clamp(14px,1.1111cqw,16px)] text-brand-text-light transition-opacity max-lg:text-sm";

export function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <header className="absolute inset-x-0 top-0 z-5 h-[8.3333cqw] max-lg:h-[120px]">
      <div className="flex h-full items-center justify-between px-[8.3333cqw] max-lg:grid max-lg:grid-cols-[auto_1fr] max-lg:content-center max-lg:gap-x-1 max-lg:gap-y-0 max-lg:px-4 max-lg:py-3 max-[359px]:px-3.5">
        <a
          className="flex shrink-0 items-center gap-[0.5556cqw] max-lg:gap-1.5"
          href="#"
        >
          <img
            alt="ByteSpace logo"
            className="h-[2.1875cqw] w-[2.0052cqw] max-lg:h-[26px] max-lg:w-[23px]"
            src={`${A}/icon.svg`}
          />
          <span className="font-bold font-brand-display text-[1.6667cqw] text-white max-lg:text-lg max-[359px]:text-lg">
            ByteSpace
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-[1.6667cqw] max-lg:order-3 max-lg:col-span-2 max-lg:w-full max-lg:justify-center max-lg:gap-4 sm:max-lg:gap-7"
        >
          {NAV_LINKS.map((link, index) => (
            <a
              className={`${NAV_ITEM_CLASS} inline-flex max-lg:min-h-11 max-lg:items-center ${activeIndex === index ? "font-medium leading-[1.2]" : "font-normal leading-[1.6] opacity-80 hover:opacity-100"}`}
              href={link.href}
              key={link.label}
              onClick={() => setActiveIndex(index)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[1.6667cqw] max-lg:gap-2 max-lg:justify-self-end max-[359px]:gap-1">
          <a
            className={`${NAV_ITEM_CLASS} inline-flex min-h-11 items-center font-normal leading-6 hover:opacity-80`}
            href="/signin"
          >
            Sign In
          </a>
          <a
            className={`${NAV_ITEM_CLASS} inline-flex min-h-11 items-center font-normal leading-6 hover:opacity-80`}
            href="/signup"
          >
            Join Us
          </a>
          <button
            aria-label="Cart"
            className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center text-brand-text-light transition-opacity hover:opacity-80"
            type="button"
          >
            <svg
              aria-hidden="true"
              className="h-6 w-6 max-lg:h-[18px] max-lg:w-[18px]"
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
