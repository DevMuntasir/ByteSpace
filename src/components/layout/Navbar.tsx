"use client";

import { useState } from "react";
import { NAV_LINKS } from "../../data";
import styles from "./Navbar.module.css";

const A = "/assets";

export function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#">
          <img
            alt="ByteSpace logo"
            className={styles.brandIcon}
            src={`${A}/icon.svg`}
          />
          <span className={styles.brandText}>ByteSpace</span>
        </a>

        <nav aria-label="Main navigation" className={styles.links}>
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

        <div className={styles.actions}>
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
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
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
