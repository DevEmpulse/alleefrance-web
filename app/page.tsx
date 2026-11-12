import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SITE_VERIFICATION } from "@/lib/site-verification";

// Search engines verify ownership on the bare domain, which only redirects to /es.
export const metadata: Metadata = {
  verification: SITE_VERIFICATION,
};

export default function Home() {
  redirect("/es");
}
