// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Newcoin Docs',
  tagline: 'Documentation to the Design Aware blockchain Newcoin',
  url: 'https://docs.new.foundation',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/nco-logo-square.ico',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Newcoin-Foundation', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: "gh-pages",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Newcoin-Foundation/docs/tree/main/packages/',
          routeBasePath: '/',
        },
        blog:false,
        //blog: {
          //showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/Newcoin-Foundation/docs/tree/main/packages/',
        //},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-141789564-1',
          anonymizeIP: true,
        },
      }),
      
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Newcoin',
        logo: {
          alt: 'Newcoin Docs Logo',
          src: 'img/nco-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Overview/Why',
            position: 'left',
            label: 'Overview',
          },
          {
            type: 'doc',
            docId: 'Guides/Your first project',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'doc',
            docId: 'Contracts/intro',
            position: 'left',
            label: 'Contracts',
          },
          {
            type: 'doc',
            docId: 'Block production/General',
            position: 'left',
            label: 'Block Production',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Newcoin-Foundation/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: 'docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/newcoin',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/2K8tvVh8tM',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/piffie',
              },
            ],
          },
          {
            title: 'More',
            items: [
              //{
              // label: 'Blog',
              //  to: '/blog',
              //},
              {
                label: 'GitHub',
                href: 'https://github.com/Newcoin-Foundation/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} New Foundation, Inc. Built with meaning in mind.`,
      },
      prism: {
        theme:  lightCodeTheme, //        require('prism-react-renderer/themes/dracula'),
        darkTheme: darkCodeTheme,
        additionalLanguages: ['typescript'], //if you want to add languanges, here are the codes: https://prismjs.com/#supported-languages
      },
    }),
};

module.exports = config;
