import PageSeo from "@/components/PageSeo.tsx";
import {
  company,
  heroHighlights,
  impactAreas,
  presentationCollections,
  services,
  workflow,
} from "@/data/site.ts";
import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <>
      <PageSeo
        title="9-1-1 Data Analytics and Data Science Consulting"
        description={company.mission}
        pagePath="/"
      />
      <main id="main-content">
        <section class="brand-panel text-white">
          <div class="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-24">
            <div class="space-y-8">
              <div class="space-y-5">
                <p class="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
                  Data analytics and data science for 9-1-1
                </p>
                <h1 class="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  Practical insight for public safety leaders who need more from
                  their data.
                </h1>
                <p class="max-w-2xl text-lg leading-8 text-slate-200">
                  {company.shortName}{" "}
                  helps emergency communications centers uncover patterns,
                  improve reporting, and communicate complex findings with
                  clarity.
                </p>
              </div>
              <div class="flex flex-wrap gap-3">
                <a
                  href="/services"
                  class="hero-primary-link inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm shadow-slate-950/15 transition hover:bg-slate-100 active:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Explore services
                </a>
                <a
                  href="/contact"
                  class="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contact the team
                </a>
              </div>
              <ul class="grid gap-4 sm:grid-cols-3">
                {impactAreas.map((item) => (
                  <li
                    key={item.title}
                    class="rounded-3xl border border-white/15 bg-white/10 p-5"
                  >
                    <h2 class="text-base font-semibold">{item.title}</h2>
                    <p class="mt-2 text-sm leading-6 text-slate-200">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <aside class="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div class="flex items-center gap-4">
                <img
                  src="/company-logo.jpg"
                  alt="Dunsworth, Mann, & Associates logo with a multicolor circular chart"
                  class="h-20 w-20 rounded-3xl border border-white/20 bg-white/90 object-cover shadow-lg"
                  width="80"
                  height="80"
                />
                <div>
                  <p class="text-lg font-semibold text-white">
                    {company.name}
                  </p>
                  <p class="mt-1 text-sm leading-6 text-slate-200">
                    {company.tagline}
                  </p>
                </div>
              </div>
              <div class="mt-8 space-y-4">
                <h2 class="text-xl font-semibold text-white">
                  Built for organizations that need insight they can use.
                </h2>
                <ul class="space-y-3 text-sm leading-7 text-slate-200">
                  {heroHighlights.map((highlight) => (
                    <li key={highlight} class="flex gap-3">
                      <span aria-hidden="true" class="pt-1 text-sky-300">
                        ●
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="mt-8 rounded-3xl bg-slate-950/35 p-5">
                <p class="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
                  Reach us
                </p>
                <p class="mt-3 text-sm leading-7 text-slate-100">
                  <a class="font-semibold text-white" href={company.phoneHref}>
                    {company.phoneDisplay}
                  </a>
                  <br />
                  {company.address.street}
                  <br />
                  {company.address.city}, {company.address.region}{" "}
                  {company.address.postalCode}
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section class="bg-white">
          <div class="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div class="max-w-3xl space-y-4">
              <p class="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                What we do
              </p>
              <h2 class="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Focused consulting for the questions that shape 9-1-1
                operations.
              </h2>
              <p class="text-lg leading-8 text-slate-700">
                As a smaller company, we're able to be more. flexible in our approach to your center's needs. We can also customize our solutions more easily to suit your needs.
              </p>
            </div>
            <div class="mt-10 grid gap-6 lg:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  class="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm"
                >
                  <h3 class="text-2xl font-semibold text-slate-950">
                    {service.title}
                  </h3>
                  <p class="mt-4 leading-7 text-slate-700">{service.summary}</p>
                  <ul class="mt-6 space-y-3 text-sm leading-6 text-slate-600">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} class="flex gap-3">
                        <span aria-hidden="true" class="pt-1 text-sky-700">
                          ●
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section class="border-y border-slate-200 bg-slate-100">
          <div class="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div class="max-w-3xl space-y-4">
              <p class="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                How we work
              </p>
              <h2 class="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                A practical workflow from the first question to the final
                presentation.
              </h2>
            </div>
            <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {workflow.map((item) => (
                <article
                  key={item.step}
                  class="rounded-[2rem] border border-slate-200 bg-white p-6"
                >
                  <h3 class="text-lg font-semibold text-slate-950">
                    {item.step}
                  </h3>
                  <p class="mt-3 text-sm leading-7 text-slate-700">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section class="bg-white">
          <div class="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div class="space-y-4">
                <p class="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                  Presentations
                </p>
                <h2 class="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Speaking and briefing topics designed for both current
                  questions and enduring operational needs.
                </h2>
                <p class="text-lg leading-8 text-slate-700">
                  Presentation offerings are already organized in a reusable
                  data structure so this site can grow into a future blog or
                  insights section without changing the overall architecture.
                </p>
                <a
                  href="/presentations"
                  class="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-950/15 transition hover:bg-sky-800 visited:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  View presentation topics
                </a>
              </div>
              <div class="grid gap-6">
                {presentationCollections.map((collection) => (
                  <article
                    key={collection.title}
                    class="rounded-[2rem] border border-slate-200 bg-slate-50 p-8"
                  >
                    <h3 class="text-2xl font-semibold text-slate-950">
                      {collection.title}
                    </h3>
                    <p class="mt-3 leading-7 text-slate-700">
                      {collection.description}
                    </p>
                    <ul class="mt-6 grid gap-4">
                      {collection.items.slice(0, 2).map((item) => (
                        <li
                          key={item.title}
                          class="rounded-2xl border border-slate-200 bg-white p-5"
                        >
                          <p class="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                            {item.audience}
                          </p>
                          <h4 class="mt-2 text-lg font-semibold text-slate-950">
                            {item.title}
                          </h4>
                          <p class="mt-2 text-sm leading-6 text-slate-700">
                            {item.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
});
