import { FOOTER_COLUMNS } from "../../data";

const A = "/assets";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-bg">
      <div className="h-px w-full bg-brand-border" />
      <div className="mx-auto flex max-w-[1248px] flex-col gap-12 px-4 py-12 sm:px-6 lg:gap-24 lg:py-[71px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex min-w-0 flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img
                  alt=""
                  className="h-[31.5px] w-[28.875px]"
                  src={`${A}/icon.svg`}
                />
                <span className="font-bold font-brand-display text-brand-text text-brand-xl leading-normal">
                  ByteSpace
                </span>
              </div>
              <p className="max-w-[528px] font-brand-primary text-brand-sm text-brand-text leading-[1.6]">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  aria-label="Email address for newsletter"
                  className="h-[52px] w-full min-w-0 rounded-brand-pill border border-brand-border bg-brand-bg px-6 font-brand-primary text-brand-base text-brand-text leading-[1.6] outline-none transition-colors focus:border-brand-primary sm:flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <button className="cursor-pointer whitespace-nowrap rounded-brand-lg bg-brand-secondary px-6 py-3 font-brand-primary font-medium text-brand-md text-brand-text leading-[1.2] transition-colors hover:bg-brand-secondary-hover">
                  Subscribe
                </button>
              </div>
              <p className="max-w-[504px] font-brand-primary text-brand-text text-brand-xs leading-[1.6]">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((col, i) => (
              <div className="flex min-w-0 flex-col gap-6" key={i}>
                {col.title && (
                  <p className="font-brand-primary font-semibold text-brand-base text-brand-text leading-6">
                    {col.title}
                  </p>
                )}
                <div className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <a
                      className="inline-flex min-h-11 items-center font-brand-primary text-brand-sm text-brand-text leading-[1.6] transition-colors hover:text-brand-primary"
                      href={link.href}
                      key={link.label}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-4">
          <div className="h-px w-full bg-brand-border" />
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-brand-primary text-brand-text text-brand-xs leading-[1.6]">
              @ 2023 ByteSpace. All rights reserved.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(
                (item) => (
                  <a
                    className="inline-flex min-h-11 items-center whitespace-nowrap font-brand-primary text-brand-text text-brand-xs leading-[1.6] transition-colors hover:text-brand-primary"
                    href="#"
                    key={item}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
