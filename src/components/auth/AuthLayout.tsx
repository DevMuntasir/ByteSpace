import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SignupIllustration } from "./SignupIllustration";

interface AuthLayoutProps {
  children: ReactNode;
  description: string;
  title: string;
}

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <main className="min-h-svh bg-brand-primary font-brand-primary text-brand-text-white">
      <div className="mx-auto max-w-[1440px] [container-type:inline-size]">
        <div className="relative min-h-svh bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-brand-text-white)_12%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-brand-text-white)_12%,transparent)_1px,transparent_1px)] bg-[size:8.4cqw_8.4cqw] [background-position:8.05cqw_7.6cqw] max-sm:bg-[size:64px_64px]">
          <div className="relative mx-auto min-h-[69.73cqw] w-[83.65cqw] pb-[7.15cqw] max-sm:w-auto max-sm:px-6 max-sm:pb-10">
            <Link
              aria-label="ByteSpace home"
              className="absolute top-[1.8cqw] left-0 rounded-sm focus-visible:outline-2 focus-visible:outline-brand-secondary max-sm:top-6 max-sm:left-6"
              href="/"
            >
              <Image
                alt="ByteSpace"
                className="h-[2.2cqw] w-[2.02cqw] max-sm:h-8 max-sm:w-7"
                height={32}
                priority
                src="/assets/icon.svg"
                width={29}
              />
            </Link>
            <div className="grid grid-cols-[40.6%_48.4%] justify-between pt-[7.73cqw] max-sm:grid-cols-1 max-sm:gap-8 max-sm:pt-20">
              <section aria-labelledby="auth-intro" className="min-w-0">
                <div className="min-h-[13cqw] max-sm:min-h-0">
                  <h2
                    className="font-bold text-[1.53cqw] leading-[1.4] max-sm:text-brand-lg"
                    id="auth-intro"
                  >
                    {title}
                  </h2>
                  <p className="mt-[0.8cqw] text-[1.28cqw] leading-[1.6] max-sm:mt-3 max-sm:max-w-md max-sm:text-brand-sm">
                    {description}
                  </p>
                </div>
                <SignupIllustration />
              </section>
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
