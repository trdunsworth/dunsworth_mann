import PageHero from "@/components/PageHero.tsx";
import PageSeo from "@/components/PageSeo.tsx";
import { company, values, workflow } from "@/data/site.ts";
import { define } from "@/utils.ts";

export default define.page(function About() {
  return (
    <>
      <PageSeo
        title="About us"
        description="Learn about Dunsworth, Mann, & Associates, LLC and the leadership behind its 9-1-1 analytics and data science consulting work."
        pagePath="/about"
      />
      <main id="main-content">
        <PageHero
          eyebrow="About us"
          title="A focused consulting team for 9-1-1 organizations that want clear, actionable analysis."
          description={`${company.shortName} combines business leadership, technical strategy, and practical communication so analytic work stays useful from the first question to the final recommendation.`}
        >
          <a
            href="/contact"
            class="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-950/15 transition hover:bg-sky-800 visited:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Contact the team
          </a>
        </PageHero>

        <section class="bg-white">
          <div class="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-20">
            <div class="space-y-4">
              <p class="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                Our mission
              </p>
              <h2 class="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {company.mission}
              </h2>
            </div>
            <div class="space-y-6 text-lg leading-8 text-slate-700">
              <p>
                The firm is designed for organizations that need help making
                sense of operational data, forecasting change, or explaining
                technical findings to non-technical audiences.
              </p>
              <p>
                The work stays intentionally practical: define the decision,
                check the data, build the analysis, and communicate the result
                clearly. That keeps engagements small enough to manage and
                strong enough to support real operational choices.
              </p>
            </div>
          </div>
        </section>

        <section class="border-y border-slate-200 bg-slate-100">
          <div class="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div class="max-w-3xl space-y-4">
              <p class="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                Leadership
              </p>
              <h2 class="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Principals
              </h2>
            </div>
            <div class="mt-10 grid gap-6 lg:grid-cols-2">
              {company.principals.map((principal) => (
                <article
                  key={principal.name}
                  class="rounded-[2rem] border border-slate-200 bg-white p-8"
                >
                  <p class="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                    {principal.title}
                  </p>
                  <h3 class="mt-3 text-2xl font-semibold text-slate-950">
                    {principal.name}
                  </h3>
                  <p class="mt-4 leading-7 text-slate-700">{principal.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section class="bg-white">
          <div class="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div class="grid gap-6 lg:grid-cols-3">
              {values.map((value) => (
                <article
                  key={value.title}
                  class="rounded-[2rem] border border-slate-200 bg-slate-50 p-8"
                >
                  <h2 class="text-2xl font-semibold text-slate-950">
                    {value.title}
                  </h2>
                  <p class="mt-4 leading-7 text-slate-700">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section class="bg-slate-950 text-white">
          <div class="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div class="max-w-3xl space-y-4">
              <p class="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
                Engagement approach
              </p>
              <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">
                A simple working rhythm that keeps every engagement focused.
              </h2>
            </div>
            <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {workflow.map((item) => (
                <article
                  key={item.step}
                  class="rounded-[2rem] border border-white/10 bg-white/10 p-6"
                >
                  <h3 class="text-lg font-semibold">{item.step}</h3>
                  <p class="mt-3 text-sm leading-7 text-slate-200">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
});
