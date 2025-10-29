/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.kodomogakuen.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/test', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/test', '/api'],
      },
    ],
  },
}
