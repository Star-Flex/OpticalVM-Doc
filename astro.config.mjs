// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import starlightScrollToTop from "starlight-scroll-to-top";
import starlightLlmsTxt from "starlight-llms-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.opticalvm.com",
  integrations: [
    starlight({
      title: "Opticalvm Docs",
      logo: {
        src: "./src/assets/icon.svg",
      },
      plugins: [
        starlightImageZoom(),
        starlightLlmsTxt(),
        starlightScrollToTop({
          smoothScroll: true,
          // showProgressRing: true,
          borderRadius: "50",
        }),
      ],
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
          label: "OpticalVM 文档",
          slug: "index",
        },
        {
          label: "云服务器",
          items: [
            { label: "选型指南", slug: "ecs/select" },
            { label: "远程连接", slug: "ecs/connect" },
            {
              label: "基础操作",
              autogenerate: { directory: "ecs/control" },
            },
          ],
        },
        {
          label: "用户中心",
          autogenerate: { directory: "user" },
        },
        {
          label: "代理返利",
          autogenerate: { directory: "rebate" },
        },
        {
          label: "财务管理",
          autogenerate: { directory: "finance" },
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
