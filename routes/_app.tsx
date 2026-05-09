import SiteLayout from "@/components/SiteLayout.tsx";
import { company } from "@/data/site.ts";
import { define } from "../utils.ts";

export default define.page(function App({ Component, url }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0f172a" />
        <meta key="description" name="description" content={company.mission} />
        <title key="title">{company.name}</title>
      </head>
      <body>
        <SiteLayout currentPath={url.pathname}>
          <Component />
        </SiteLayout>
      </body>
    </html>
  );
});
