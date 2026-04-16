import PageHero from "@/components/PageHero.tsx";
import PageSeo from "@/components/PageSeo.tsx";
import { company, contactChecklist } from "@/data/site.ts";
import { define } from "@/utils.ts";

export default define.page(function Contact() {
  return (
    <>
      <PageSeo
        title="Contact us"
        description="Contact Dunsworth, Mann, & Associates, LLC for 9-1-1 analytics, data science, and presentation support."
      />
      <main id="main-content">
        <PageHero
          eyebrow="Contact us"
          title="Start with the question you need answered."
          description="Whether you need a focused analysis, a longer engagement, or presentation support, the fastest way to begin is with a short conversation about your decision, your data, and your timeline."
        >
          <a
            href={company.phoneHref}
            class="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-950/15 transition hover:bg-sky-800 visited:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Call {company.phoneDisplay}
          </a>
        </PageHero>

        <section class="bg-white">
          <div class="mx-auto grid max-w-6xl gap-6 px-6 py-16 sm:px-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-12 lg:py-20">
            <article class="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <p class="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                Telephone
              </p>
              <h2 class="mt-3 text-2xl font-semibold text-slate-950">
                Speak directly with the firm
              </h2>
              <p class="mt-4 leading-7 text-slate-700">
                <a
                  class="font-semibold text-sky-700 hover:text-sky-900"
                  href={company.phoneHref}
                >
                  {company.phoneDisplay}
                </a>
              </p>
            </article>
            <article class="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <p class="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                Email
              </p>
              <h2 class="mt-3 text-2xl font-semibold text-slate-950">
                Send a message
              </h2>
              <p class="mt-4 leading-7 text-slate-700">
                <a
                  class="break-all font-semibold text-sky-700 hover:text-sky-900"
                  href={company.emailHref}
                >
                  {company.emailDisplay}
                </a>
              </p>
            </article>
            <article class="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <p class="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                Mailing address
              </p>
              <h2 class="mt-3 text-2xl font-semibold text-slate-950">
                Correspondence
              </h2>
              <address class="mt-4 not-italic leading-7 text-slate-700">
                {company.address.street}
                <br />
                {company.address.city}, {company.address.region}{" "}
                {company.address.postalCode}
                <br />
                {company.address.country}
              </address>
            </article>
            <article class="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <p class="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                Leadership
              </p>
              <h2 class="mt-3 text-2xl font-semibold text-slate-950">
                Principals
              </h2>
              <ul class="mt-4 space-y-4 text-sm leading-6 text-slate-700">
                {company.principals.map((principal) => (
                  <li key={principal.name}>
                    <p class="font-semibold text-slate-950">{principal.name}</p>
                    <p>{principal.title}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section class="border-y border-slate-200 bg-slate-100">
          <div class="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12 lg:py-20">
            <div class="space-y-4">
              <p class="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                Before we talk
              </p>
              <h2 class="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                A short list helps make the first conversation more productive.
              </h2>
              <p class="text-lg leading-8 text-slate-700">
                You do not need every answer in place. Even a rough outline of
                the challenge is enough to start.
              </p>
            </div>
            <div class="rounded-[2rem] border border-slate-200 bg-white p-8">
              <ul class="space-y-4 text-base leading-7 text-slate-700">
                {contactChecklist.map((item) => (
                  <li key={item} class="flex gap-3">
                    <span aria-hidden="true" class="pt-1 text-sky-700">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
});
