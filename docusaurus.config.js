// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "REST API Docs",
  tagline: "REST API Documentation",
  url: process.env.URL || "https://github.microstrategy.com/",
  baseUrl: process.env.BASE_URL || "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  // we will use `undefined` to be intuitive for our case
  trailingSlash: undefined,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: process.env.ORGANIZATION_NAME, // Usually your GitHub org/user name.
  projectName: `${process.env.REPO_NAME}`, // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        gtag: {
          trackingID: process.env.GTAG_TRACKING_ID,
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://${process.env.GITHUB_HOST}/${process.env.ORGANIZATION_NAME}/${process.env.REPO_NAME}/tree/${process.env.BRANCH_NAME}`,
          // includeCurrentVersion: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "MicroStrategy Developer",
          src: "img/dev-docs-logo.png",
          href: "https://microstrategy.github.io/",
        },
        items: [
          {
            href: "https://github.com/MicroStrategy/rest-api-playground",
            label: "Playground",
            position: "left",
          },
          {
            type: "dropdown",
            label: "Version 2021",
            position: "right",
            items: [
              {
                label: "Version 2020",
                href: "https://www2.microstrategy.com/producthelp/2020/RESTSDK/Content/topics/REST_API/REST_API.htm",
              },
            ],
          },
          {
            href: "https://www.microstrategy.com/en/support?now=expert",
            label: "Talk to an Expert",
            position: "right",
          },
          {
            href: `https://${process.env.GITHUB_HOST}/${process.env.ORGANIZATION_NAME}/${process.env.REPO_NAME}/`,
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        copyright: `Copyright © ${new Date().getFullYear()} MICROSTRATEGY INCORPORATED. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
};

module.exports = config;
