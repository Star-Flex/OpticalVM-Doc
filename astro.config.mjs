// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Opticalvm Docs",
      logo: {
        src: "./src/assets/icon.svg",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Star-Flex/Opticalvm-Doc",
        },
      ],
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
      // sidebar: [
      //   {
      //     label: "Guides",
      //     items: [
      //       // Each item here is one entry in the navigation menu.
      //       { label: "Example Guide", slug: "guides/example" },
      //     ],
      //   },
      //   {
      //     label: "Reference",
      //     autogenerate: { directory: "reference" },
      //   },
      // ],
    }),
  ],
});
