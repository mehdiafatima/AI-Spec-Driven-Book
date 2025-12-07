// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'A comprehensive guide to physical AI and humanoid robotics, built with Docusaurus.',
  favicon: 'img/favicon.ico',

  url: 'https://physical-ai-book.vercel.ap',
  baseUrl: '/',

  organizationName: 'your-username',
  projectName: 'physical-ai-book',

  onBrokenLinks: 'throw',

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
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/your-username/physical-ai-book/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          editUrl: 'https://github.com/your-username/physical-ai-book/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: { respectPrefersColorScheme: true },
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Book Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'textbookSidebar', // ✅ updated
            position: 'left',
            label: 'Book', // optional, previously Tutorial
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/your-username/physical-ai-book',
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
                label: 'Introduction', // Changed label
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
              { label: 'X', href: 'https://x.com/docusaurus' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'GitHub', href: 'https://github.com/physical-ai-book/physical-ai-book' }, // Updated GitHub link
            ],
          },
        ],
        copyright: `© 2025 Physical AI & Humanoid Robotics. Built with Docusaurus.`, // Updated copyright
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
