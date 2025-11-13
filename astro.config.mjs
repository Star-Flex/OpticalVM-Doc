// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.opticalvm.com",
  integrations: [
    starlight({
      title: "Opticalvm Docs",
      logo: {
        src: "./src/assets/icon.svg",
      },
      components: {
        // 使用自定义社交图标组件
        SocialIcons: "./src/components/CustomSocialIcons.astro",
      },
      locales: {
        root: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      customCss: [
        // 自定义 CSS 文件路径
        "./src/styles/custom.css",
      ],
      editLink: {
        baseUrl: "https://github.com/Star-Flex/OpticalVM-Doc/edit/main/",
      },
      lastUpdated: true,
      sidebar: [
        {
          label: "云服务器",
          slug: "index",
        },
        {
          label: "云服务器 ",
          // items: [{ label: "选型指南", slug: "ecs/type-selection" }],
          autogenerate: { directory: "ecs" },
        },
        // {
        //   label: "Guides",
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: "Example Guide", slug: "guides/example" },
        //   ],
        // },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
    }),
  ],
});
