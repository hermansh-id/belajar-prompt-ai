import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  transform(content, { route }) {
    if (route.startsWith('/docs/advanced/more/tree/two')) {
      return `
${content}
export function getStaticProps() {
  return {
    props: {
      foo: 'from nextra config'
    }
  }
}`
    }
    return content
  },
  latex: true
})

/**
 * @type {import('next').NextConfig}
 */
export default withNextra({
  i18n: {
    locales: ['id'],
    defaultLocale: 'id'
  },
  distDir: './.next', // Nextra supports custom `nextConfig.distDir`
  redirects: () => [
    {
      source: '/docs/',
      destination: '/docs/introduction/basics',
      statusCode: 301
    },
    {
      source: '/docs.([a-zA-Z-]+)',
      destination: '/docs/introduction/basics',
      statusCode: 302
    },
    {
      source: '/docs',
      destination: '/docs/introduction/basics',
      statusCode: 302
    }
  ],
  reactStrictMode: true
})
