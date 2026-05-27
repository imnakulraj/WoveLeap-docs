// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WoveLeap Help Center',
  tagline: 'Commission management made simple',
  favicon: 'img/favicon.ico',
  url: 'https://help.woveleap.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'WoveLeap',
        logo: { alt: 'WoveLeap Logo', src: 'img/logo.svg' },
        items: [
          {
            href: 'https://app.woveleap.com',
            label: 'Go to App',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'WoveLeap App',
            href: 'https://app.woveleap.com',
          },
          {
            label: 'Contact Support',
            href: 'mailto:support@woveleap.com',
          },
        ],
        copyright: `© ${new Date().getFullYear()} WoveLeap. All rights reserved.`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;
