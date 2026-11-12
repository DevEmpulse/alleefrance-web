import type { JsonLdNode } from "@/lib/schema";

/** Renders one JSON-LD block. `<` is escaped so no value can close the script tag. */
export function JsonLd({ data }: { data: JsonLdNode }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
