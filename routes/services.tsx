import PageHero from "@/components/PageHero.tsx";
import PageSeo from "@/components/PageSeo.tsx";
import { services, workflow } from "@/data/site.ts";
import { define } from "@/utils.ts";

export default define.page(function Services() {
  return (
    <>
      <PageSeo
        title="Our services"
        description="Services offered by Dunsworth, Mann, & Associates, LLC for 9-1-1 analytics, data science, governance, and executive communication."
        pagePath="/services"
      />
      <main id="main-content">
        <PageHero
          eyebrow="Our services"
          title="Services that turn emergency communications data into usable guidance."
          description="The company’s work is organized into a small set of clear service lines so the site remains easy to edit, and so future offerings can be added without rebuilding the design."
        >
          <a
            href="/contact"
            class="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-950/15 transition hover:bg-sky-800 visited:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Request a conversation
          </a>
        </PageHero>

        <section class="bg-white">
          <div class="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div class="grid gap-6">
              {services.map((service) => (
                <article
                  key={service.title}
                  class="rounded-[2rem] border border-slate-200 bg-slate-50 p-8"
                >
                  <div class="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    <div>
                      <h2 class="text-2xl font-semibold text-slate-950">
                        {service.title}
                      </h2>
                      <p class="mt-4 leading-7 text-slate-700">
                        {service.summary}
                      </p>
                    </div>
                    <ul class="grid gap-4 sm:grid-cols-2">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          class="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section class="border-y border-slate-200 bg-slate-100">
          <div class="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div class="max-w-3xl space-y-4">
              <p class="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                Delivery model
              </p>
              <h2 class="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Engagements can stay focused, phased, and easy to understand.
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
      </main>
    </>
  );
});
