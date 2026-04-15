import { Head } from "fresh/runtime";
import { company } from "@/data/site.ts";

interface PageSeoProps {
  title: string;
  description: string;
}

export default function PageSeo({ title, description }: PageSeoProps) {
  const fullTitle = `${title} | ${company.name}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/company-logo.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/company-logo.jpg" />
    </Head>
  );
}
