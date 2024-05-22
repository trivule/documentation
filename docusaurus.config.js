// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Trivule",
  tagline: "Your ally for effortless form validation",
  favicon: "img/favicon.ico",

  baseUrlIssueBanner: true,
  // Set the production url of your site here
  url: "https://trivule.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "trivule", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {property: 'og:type', content: 'website'},
        {property: 'og:locale', content: 'en_US'}, 
        {property: 'og:site_name', content: 'Trivule Documentation'},
      
        {property: 'og:title', content: 'Trivule - Dynamic Form Validation'},
        {property: 'og:description', content: 'Dynamic form validation without needing to write or know JavaScript, saving developers time and effort.'},
        {property: 'og:image', content: '/img/logo.png'},
        {property: 'og:url', content: 'https://trivule.com'},
      
        {property: 'twitter:card', content: 'summary_large_image'},
        {property: 'twitter:image', content: '/img/logo.png'},
      
        {property: 'og:image:width', content: '600'},
        {property: 'og:image:height', content: '600'},
        {property: 'twitter:site', content: '@trivule'},
      ],
      // Replace with your project's social card
      image: "img/logo.png",
      navbar: {
        logo: {
          alt: "Trivule Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            href: "/try-trivule",
            position: "left",
            label: "Try online",
          },
          {
            href: "https://github.com/trivule",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "http://trivule.com/docs/tuto",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/6xKyDWA8TQ",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/trivule",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Trivule`,
      },
      prism: {
        theme: prismThemes.oneDark,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    [
      "@docusaurus/plugin-google-tag-manager",
      {
        containerId: "GTM-WQCJ2KV8",
      },
    ],
  ],
};

export default config;
