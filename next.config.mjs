import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

// Blog articles dated after this day are left out of the build (lib/blog-posts.ts).
// Paris date, so a build early on publication day already includes that day's article.
const blogBuildDate =
  process.env.BLOG_BUILD_DATE ??
  new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris' }).format(new Date())

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BLOG_BUILD_DATE: blogBuildDate,
  },
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    qualities: [75, 85],
  },
}

export default withNextIntl(nextConfig)
