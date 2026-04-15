import { type ComponentChildren } from "preact";
import { company, navigation } from "@/data/site.ts";

interface SiteLayoutProps {
  children: ComponentChildren;
  currentPath?: string;
}

function isCurrentPath(currentPath: string | undefined, href: string) {
  if (!currentPath) return false;
  return href === "/" ? currentPath === href : currentPath.startsWith(href);
}

export default function SiteLayout(
  { children, currentPath }: SiteLayoutProps,
) {
  return (
    <>
      <a
        class="skip-link rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg"
        href="#main-content"
      >
        Skip to main content
      </a>
      <div class="min-h-screen bg-slate-50 text-slate-900">
        <header class="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div class="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:px-8 lg:px-12">
            <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <a class="flex items-center gap-4" href="/">
                <img
                  src="/company-logo.jpg"
                  alt="Dunsworth, Mann, & Associates logo with a multicolor circular chart"
                  class="h-14 w-14 rounded-2xl border border-slate-200 bg-white object-cover shadow-sm"
                  width="56"
                  height="56"
                />
                <div class="space-y-1">
                  <p class="text-base font-semibold leading-tight text-slate-950">
                    {company.name}
                  </p>
                  <p class="text-sm leading-6 text-slate-600">
                    {company.tagline}
                  </p>
                </div>
              </a>
              <a
                class="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-950/15 transition hover:bg-sky-800 visited:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                href="/contact"
              >
                Start a conversation
              </a>
            </div>
            <nav aria-label="Primary navigation">
              <ul class="flex flex-wrap gap-2 text-sm font-medium text-slate-700">
                {navigation.map((item) => {
                  const current = isCurrentPath(currentPath, item.href);

                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        aria-current={current ? "page" : undefined}
                        class={`inline-flex rounded-full px-4 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 ${
                          current
                            ? "bg-sky-700 text-white shadow-sm shadow-sky-950/15 visited:text-white hover:bg-sky-800"
                            : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer class="border-t border-slate-200 bg-white">
          <div class="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
            <div class="space-y-4">
              <h2 class="text-lg font-semibold text-slate-950">
                {company.name}
              </h2>
              <p class="max-w-2xl leading-7 text-slate-700">
                {company.footerSummary}
              </p>
              <div class="space-y-2 text-sm leading-6 text-slate-600">
                <p>{company.address.street}</p>
                <p>
                  {company.address.city}, {company.address.region}{" "}
                  {company.address.postalCode} {company.address.country}
                </p>
                <p>
                  <a
                    class="font-medium text-sky-700 hover:text-sky-900"
                    href={company.phoneHref}
                  >
                    {company.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>
            <div class="grid gap-8 sm:grid-cols-2">
              <div>
                <h2 class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Explore
                </h2>
                <ul class="mt-4 space-y-3 text-sm text-slate-700">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <a
                        class="hover:text-slate-950"
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Leadership
                </h2>
                <ul class="mt-4 space-y-3 text-sm text-slate-700">
                  {company.principals.map((principal) => (
                    <li key={principal.name}>
                      <p class="font-medium text-slate-950">{principal.name}</p>
                      <p>{principal.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
