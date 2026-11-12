export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}

// The structured data lives in each page: this layout wraps both the landing and the
// country pages, which show different content.
export default function WorkingHolidayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
