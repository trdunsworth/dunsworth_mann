import PageSeo from "@/components/PageSeo.tsx";
import { define } from "@/utils.ts";

export const handler = define.handlers({
  GET(ctx) {
    return ctx.render(null, { status: 404 });
  },
  HEAD(ctx) {
    return ctx.render(null, { status: 404 });
  },
});

export default define.page(function NotFound() {
  return (
    <>
      <PageSeo
        title="Page not found"
        description="The page you requested could not be found."
      />
      <main
        id="main-content"
        class="mx-auto flex max-w-4xl flex-col items-start gap-6 px-6 py-24 sm:px-8 lg:px-12"
      >
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
          404
        </p>
        <h1 class="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          We apologize, statistically you should not have arrived here, but you
          have.
        </h1>
        <p class="max-w-2xl text-lg leading-8 text-slate-700">
          The link may be out of date, or the page may have moved while the site
          was being expanded.
        </p>
        <div class="flex flex-wrap gap-3">
          <a
            href="/"
            class="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-950/15 transition hover:bg-sky-800 visited:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Return home
          </a>
          <a
            href="/contact"
            class="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Contact us
          </a>
        </div>
      </main>
    </>
  );
});
