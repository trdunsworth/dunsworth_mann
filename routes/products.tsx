import PageHero from "@/components/PageHero.tsx";
import PageSeo from "@/components/PageSeo.tsx";
import { company, products } from "@/data/site.ts";
import { define } from "@/utils.ts";

export default define.page(function Products() {
  return (
    <>
      <PageSeo
        title="Our products"
        description="SynthCCD synthetic 9-1-1 data generator and the coming DMA Reporting Engine from Dunsworth, Mann, & Associates, LLC."
        pagePath="/products"
      />
      <main id="main-content">
        <PageHero
          eyebrow="Our products"
          title="Purpose-built tools for 9-1-1 data, testing, and reporting."
          description="From safe synthetic data you can share freely to audience-ready performance reporting, our products extend the consulting work into software centers can use every day."
        >
          <a
            href="/contact"
            class="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-950/15 transition hover:bg-sky-800 visited:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Ask about licensing
          </a>
        </PageHero>

        <section class="bg-white">
          <div class="mx-auto grid max-w-6xl gap-6 px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
            {products.map((product) => (
              <article
                key={product.name}
                class="rounded-[2rem] border border-slate-200 bg-slate-50 p-8"
              >
                <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                  <div>
                    <p class="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                      {product.status}
                    </p>
                    <h2 class="mt-2 text-2xl font-semibold text-slate-950">
                      {product.name}
                    </h2>
                    <p class="mt-2 text-base font-medium text-slate-800">
                      {product.tagline}
                    </p>
                    <p class="mt-4 leading-7 text-slate-700">
                      {product.description}
                    </p>
                    {product.cta
                      ? (
                        <p class="mt-6">
                          <a
                            href={product.cta.href}
                            class="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-950/15 transition hover:bg-sky-800 visited:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                          >
                            {product.cta.label}
                          </a>
                        </p>
                      )
                      : null}
                  </div>
                  <ul class="grid gap-4 sm:grid-cols-2">
                    {product.bullets.map((bullet) => (
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

            <article class="rounded-[2rem] border border-sky-700/30 bg-sky-50 p-8">
              <div class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <h2 class="text-2xl font-semibold text-slate-950">
                    Questions about licensing SynthCCD?
                  </h2>
                  <p class="mt-3 leading-7 text-slate-700">
                    For licensing, pilots, or a walkthrough of either product,
                    reach the firm directly. Mention which product you are
                    asking about so the right principal can respond.
                  </p>
                </div>
                <div class="space-y-3 text-base">
                  <p>
                    <a
                      class="font-semibold text-sky-700 hover:text-sky-900"
                      href={company.phoneHref}
                    >
                      {company.phoneDisplay}
                    </a>
                  </p>
                  <p>
                    <a
                      class="break-words font-semibold text-sky-700 hover:text-sky-900"
                      href={company.emailHref}
                    >
                      {company.emailDisplay}
                    </a>
                  </p>
                  <p>
                    <a
                      class="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-950/15 transition hover:bg-sky-800 visited:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                      href="/contact"
                    >
                      Go to the contact page
                    </a>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
});
