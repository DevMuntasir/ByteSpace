"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";

const INPUT_CLASS =
  "mt-[0.45cqw] h-[3.7cqw] w-full rounded-[0.95cqw] border border-brand-border-subtle bg-brand-bg px-[1.6cqw] text-[1.28cqw] text-brand-text outline-none transition-colors placeholder:text-brand-text-muted focus:border-brand-border-focus focus:ring-2 focus:ring-brand-primary/15 max-sm:mt-2 max-sm:h-12 max-sm:rounded-brand-sm max-sm:px-4 max-sm:text-brand-base";
const LABEL_CLASS = "block text-[0.98cqw] leading-[1.5] max-sm:text-brand-sm";

export function SignupForm({ isLogin = false }: { isLogin?: boolean }) {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Account access is not available yet. Please try again later.");
  }

  return (
    <section
      aria-labelledby="account-title"
      className="flex min-h-[54.85cqw] flex-col rounded-[1.7cqw] bg-brand-card px-[4.4cqw] pt-[4.4cqw] pb-[3.6cqw] text-brand-text max-sm:min-h-[540px] max-sm:rounded-brand-lg max-sm:p-7"
    >
      <p className="text-[1.28cqw] text-brand-primary leading-[1.5] max-sm:text-brand-sm">
        {isLogin ? "Sign In" : "Create an Account"}
      </p>
      <h1
        className="mt-[0.25cqw] font-brand-heading font-semibold text-[3.06cqw] leading-[1.2] tracking-[-0.06cqw] max-sm:mt-1 max-sm:text-brand-2xl"
        id="account-title"
      >
        {isLogin ? (
          "Welcome Back"
        ) : (
          <>
            Welcome to
            <br />
            ByteSpace
          </>
        )}
      </h1>
      <form className="mt-[2.95cqw] max-sm:mt-8" onSubmit={handleSubmit}>
        <div className="space-y-[1.5cqw] max-sm:space-y-5">
          {!isLogin && (
            <label className={LABEL_CLASS} htmlFor="full-name">
              Full Name
              <input
                autoComplete="name"
                className={INPUT_CLASS}
                id="full-name"
                maxLength={100}
                name="name"
                pattern=".*\S.*"
                placeholder="Jamie Davis"
                required
                type="text"
              />
            </label>
          )}
          <label className={LABEL_CLASS} htmlFor="email">
            Email
            <input
              autoComplete="email"
              className={INPUT_CLASS}
              id="email"
              name="email"
              placeholder="designer@example.com"
              required
              type="email"
            />
          </label>
          <label className={LABEL_CLASS} htmlFor="password">
            Password
            <input
              autoComplete={isLogin ? "current-password" : "new-password"}
              className={INPUT_CLASS}
              id="password"
              minLength={isLogin ? undefined : 8}
              name="password"
              placeholder="********"
              required
              type="password"
            />
          </label>
        </div>
        <div className="mt-[1.65cqw] flex justify-end max-sm:mt-6">
          <button
            className="cursor-pointer rounded-brand-full bg-brand-secondary-hover px-[1.7cqw] py-[0.8cqw] text-[1.28cqw] leading-[1.3] transition-colors hover:bg-brand-secondary focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-4 max-sm:min-h-11 max-sm:px-6 max-sm:py-3 max-sm:text-brand-base"
            type="submit"
          >
            {isLogin ? "Sign In" : "Continue"}
          </button>
        </div>
        <p
          aria-live="polite"
          className="mt-3 text-[1.05cqw] text-brand-text-secondary empty:hidden max-sm:text-brand-xs"
        >
          {message}
        </p>
      </form>
      {isLogin && (
        <div className="mt-[4.5cqw] max-sm:mt-8">
          <div className="flex items-center gap-[0.85cqw] text-[1.1cqw] text-brand-text-muted max-sm:gap-3 max-sm:text-brand-sm">
            <span className="h-px flex-1 bg-brand-border" />
            <span>or</span>
            <span className="h-px flex-1 bg-brand-border" />
          </div>
          <div className="mt-[2.9cqw] flex justify-center gap-[1.1cqw] max-sm:mt-6 max-sm:gap-3">
            <button
              aria-label="Sign in with Facebook"
              className="flex h-[5cqw] w-[5cqw] cursor-pointer items-center justify-center rounded-[1.8cqw] border border-brand-border text-brand-dark transition-colors hover:bg-brand-bg-muted focus-visible:outline-2 focus-visible:outline-brand-primary max-sm:h-12 max-sm:w-12 max-sm:rounded-brand-md"
              onClick={() =>
                setMessage("Facebook sign-in is not available yet.")
              }
              type="button"
            >
              <svg
                aria-hidden="true"
                className="h-[2.6cqw] w-[2.6cqw] max-sm:h-6 max-sm:w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.026 4.388 11.021 10.125 11.927v-8.437H7.078v-3.49h3.047v-2.66c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.887v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
              </svg>
            </button>
            <button
              aria-label="Sign in with Google"
              className="flex h-[5cqw] w-[5cqw] cursor-pointer items-center justify-center rounded-[1.8cqw] border border-brand-border text-brand-dark transition-colors hover:bg-brand-bg-muted focus-visible:outline-2 focus-visible:outline-brand-primary max-sm:h-12 max-sm:w-12 max-sm:rounded-brand-md"
              onClick={() => setMessage("Google sign-in is not available yet.")}
              type="button"
            >
              <svg
                aria-hidden="true"
                className="h-[2.6cqw] w-[2.6cqw] max-sm:h-6 max-sm:w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.23c1.89-1.74 2.99-4.3 2.99-7.36ZM12 22c2.7 0 4.96-.9 6.61-2.41l-3.23-2.51c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.76-5.59-4.12H3.07v2.59A10 10 0 0 0 12 22ZM6.41 13.92A6 6 0 0 1 6.1 12c0-.67.11-1.32.31-1.92V7.49H3.07A10 10 0 0 0 2 12c0 1.61.38 3.14 1.07 4.51l3.34-2.59ZM12 5.96c1.47 0 2.79.51 3.82 1.51l2.86-2.86A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.93 5.49l3.34 2.59C7.2 7.72 9.4 5.96 12 5.96Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <p className="mt-auto pt-[3cqw] text-center text-[1.11cqw] text-brand-text-secondary max-sm:pt-10 max-sm:text-brand-sm">
        {isLogin ? "New user?" : "Already have an account?"}{" "}
        <Link
          className="text-brand-primary hover:underline focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-2"
          href={isLogin ? "/signup" : "/signin"}
        >
          {isLogin ? "Create an account" : "Login"}
        </Link>
      </p>
    </section>
  );
}
