import type { Metadata } from "next";
import { SITE_VERIFICATION } from "@/lib/site-verification";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { GA_MEASUREMENT_ID, GTM_CONTAINER_ID } from "@/components/google-analytics";
import esMessages from "@/messages/es.json";

// Search engines verify ownership and audit the bare domain, which redirects to /es/.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({
    locale: "es",
    path: "",
    title: esMessages.Metadata.home.title,
    description: esMessages.Metadata.home.description,
    absoluteTitle: true,
  }),
  verification: SITE_VERIFICATION,
};

export default function Home() {
  return (
    <html lang="es">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{transport_type:'beacon'});`,
          }}
        />
        <meta httpEquiv="refresh" content="0;url=/es/" />
      </head>
      <body>
        <main className="sr-only">
          <h1>{esMessages.Metadata.home.title}</h1>
          <p>{esMessages.Metadata.home.description}</p>
          <a href="/es/">Ir a Allée France (Español)</a>
        </main>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace("/es/" + window.location.search + window.location.hash);`,
          }}
        />
      </body>
    </html>
  );
}
