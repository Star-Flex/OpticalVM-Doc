import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// 这在 Node.js 中运行 - 不要在此处使用客户端代码（浏览器 API、JSX...）

const config: Config = {
  title: 'Opticalvm 文档中心',
  tagline: '你想知道的都在这里',
  favicon: 'img/favicon.ico',

  // 在此处设置您网站的生产 URL
  url: 'https://doc.passnat.com',
  // 设置您的网站所在的 /<baseUrl>/ 路径
  // 对于 GitHub pages 部署，通常是 '/<projectName>/'
  baseUrl: '/',

  // GitHub pages 部署配置
  // 如果您不使用 GitHub pages，则不需要这些配置
  organizationName: 'facebook', // 通常是您的 GitHub 组织/用户名
  projectName: 'docusaurus', // 通常是您的仓库名称

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 即使您不使用国际化，也可以使用此字段设置
  // 有用的元数据，如 html lang。例如，如果您的网站是中文的，
  // 您可能想将 "en" 替换为 "zh-Hans"
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // 请更改为您的仓库
          // 删除此项以移除 "编辑此页面" 链接
          editUrl:
            'https://github.com/Star-Flex/PassNAT-Doc',
            routeBasePath: '/',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // 替换为您项目的社交卡片
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'OpticalVM',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://github.com/Star-Flex/PassNAT-Doc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: 'OpticalVM',
              to: '/',
            },
          ],
        },
        {
          title: "社区",
          items: [
            {
              label: "QQ 群",
              href: "https://qm.qq.com/q/2KNMIOn4UM"
            }
          ]
        },
        {
          title: '更多',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Star-Flex/PassNAT-Doc',
            },
          ],
        },
      ],
      copyright: `<div style="display: flex; flex-direction: column; align-items : center;">
        <div>Copyright © ${new Date().getFullYear()} PassNat, Inc. Built with Docusaurus.</div>
        <a href="https://beian.miit.gov.cn" target="_blank">浙 ICP 备2022019220号 -3</a>
      </div>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
