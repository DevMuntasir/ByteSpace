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
        <div className="relative min-h-svh bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-brand-text-white)_12%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-brand-text-white)_12%,transparent)_1px,transparent_1px)] bg-[size:8.4cqw_8.4cqw] [background-position:8.05cqw_7.6cqw] max-lg:bg-[size:64px_64px]">
          <div className="relative mx-auto min-h-[69.73cqw] w-[83.65cqw] pb-[7.15cqw] max-lg:w-full max-lg:max-w-[600px] max-lg:px-4 max-lg:pb-10 sm:max-lg:px-6">
            <Link
              aria-label="ByteSpace home"
              className="absolute top-[1.8cqw] left-0 rounded-sm focus-visible:outline-2 focus-visible:outline-brand-secondary max-lg:top-6 max-lg:left-6"
              href="/"
            >
              <Image
                alt="ByteSpace"
                className="h-[2.2cqw] w-[2.02cqw] max-lg:h-8 max-lg:w-7"
                height={32}
                priority
                src="/assets/icon.svg"
                width={29}
              />
            </Link>
            <div className="grid grid-cols-[40.6%_48.4%] justify-between pt-[7.73cqw] max-lg:grid-cols-1 max-lg:gap-8 max-lg:pt-20">
              <section aria-labelledby="auth-intro" className="min-w-0">
                <div className="min-h-[13cqw] max-lg:min-h-0">
                  <h2
                    className="font-bold text-[clamp(20px,1.53cqw,22px)] leading-[1.4] max-lg:text-brand-lg"
                    id="auth-intro"
                  >
                    {title}
                  </h2>
                  <p className="mt-[0.8cqw] text-[clamp(16px,1.28cqw,18px)] leading-[1.6] max-lg:mt-3 max-lg:max-w-md max-lg:text-brand-sm">
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
