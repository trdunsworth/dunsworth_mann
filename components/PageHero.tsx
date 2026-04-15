import { type ComponentChildren } from "preact";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ComponentChildren;
}

export default function PageHero(
  { eyebrow, title, description, children }: PageHeroProps,
) {
  return (
    <section class="border-b border-slate-200 bg-white">
      <div class="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 sm:px-8 lg:px-12">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
          {eyebrow}
        </p>
        <div class="max-w-3xl space-y-4">
          <h1 class="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p class="text-lg leading-8 text-slate-700">
            {description}
          </p>
        </div>
        {children ? <div class="flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
