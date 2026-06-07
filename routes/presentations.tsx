import PageHero from "@/components/PageHero.tsx";
import PageSeo from "@/components/PageSeo.tsx";
import {
  company,
  presentationCollections,
  presentationFormats,
} from "@/data/site.ts";
import { define } from "@/utils.ts";

export default define.page(function Presentations() {
  return (
    <>
      <PageSeo
        title="Presentations past and present"
        description="Presentation topics and formats from Dunsworth, Mann, & Associates, LLC for 9-1-1 leaders, boards, and public safety stakeholders."
        pagePath="/presentations"
      />
      <main id="main-content">
        <PageHero
          eyebrow="Presentations"
          title="These are some of the topics and formats we've presented on recently."
          description="We give presentations regionally and nationally on topics related to 9-1-1 data, analytics, and decision support. Contact us if you would like us to speak at your next conference, workshop, or leadership briefing."
        >
          <a
            href="/contact"
            class="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-950/15 transition hover:bg-sky-800 visited:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Discuss a presentation
          </a>
        </PageHero>

        <section class="bg-white">
          <div class="w-full px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div class="grid gap-8">
              {presentationCollections.map((collection) => (
                <article
                  key={collection.title}
                  class="rounded-[2rem] border border-slate-200 bg-slate-50 p-8"
                >
                  <h2 class="text-3xl font-semibold tracking-tight text-slate-950">
                    {collection.title}
                  </h2>
                  <p class="mt-4 text-lg leading-8 text-slate-700">
                    {collection.description}
                  </p>
                  <div class="mt-8 grid gap-4">
                    {collection.items.map((item) => (
                      <article
                        key={item.title}
                        class="rounded-2xl border border-slate-200 bg-white p-6"
                      >
                        <div class="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                          <p>{item.audience}</p>
                          <span class="text-slate-400" aria-hidden="true">
                            |
                          </span>
                          <p>{item.date}</p>
                        </div>
                        <h3 class="mt-2 text-xl font-semibold text-slate-950">
                          {item.title}
                        </h3>
                        <p class="mt-3 leading-7 text-slate-700">
                          {item.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section class="border-y border-slate-200 bg-slate-100">
          <div class="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-20">
            <div class="space-y-4">
              <p class="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                Formats
              </p>
              <h2 class="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Speaking options sized for conferences, workshops, leadership
                briefings, and internal strategy sessions.
              </h2>
              <p class="text-lg leading-8 text-slate-700">
                {company.shortName}{" "}
                can shape the same core analysis for different audiences,
                whether the goal is education, discussion, or direct decision
                support.
              </p>
            </div>
            <div class="grid gap-6 sm:grid-cols-2">
              {presentationFormats.map((format) => (
                <article
                  key={format.title}
                  class="rounded-[2rem] border border-slate-200 bg-white p-6"
                >
                  <h3 class="text-xl font-semibold text-slate-950">
                    {format.title}
                  </h3>
                  <p class="mt-3 text-sm leading-7 text-slate-700">
                    {format.description}
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
