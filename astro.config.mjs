// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkWikiLink from "remark-wiki-link";

/**
 * Wiki 链接解析：[[标题]] -> 笔记搜索
 *
 * 笔记 URL 形如 /notes/<subject>/<slug>，而 wiki 链接只用标题。
 * 统一指向站内搜索页，由前端命中——链接不会因 slug 变化而失效。
 */
const wikiLinkPlugin = [
  remarkWikiLink,
  {
    permalinks: [],
    pageResolver: (name) => [{ slug: encodeURIComponent(String(name).trim()) }],
    hrefTemplate: (permalink) => `/search?q=${permalink}`,
    aliasDivider: "|",
  },
];

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    // Astro 6.4+ 新 API：用 unified() 配置 remark/rehype 管道
    processor: unified({
      remarkPlugins: [remarkMath, wikiLinkPlugin],
      rehypePlugins: [rehypeKatex],
    }),
    shikiConfig: {
      // 双主题：浅色用 github-light，深色用 github-dark-dimmed
      themes: {
        light: "github-light",
        dark: "github-dark-dimmed",
      },
      wrap: true,
    },
  },
});