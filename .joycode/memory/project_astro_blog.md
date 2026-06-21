---
name: Astro 个人博客项目
description: 基于 Astro 6 的学业笔记个人站点，按学科→章节→笔记三级组织
type: project
---

已完成全站搭建（阶段1-7），技术栈：Astro 6 + Tailwind CSS 4.2.1 + KaTeX + Pagefind + @astrojs/sitemap + @astrojs/rss。
- Astro 6 中 `render()` 是从 `astro:content` 导入的独立函数，不是条目方法
- Pagefind 需通过 `is:inline` 脚本动态加载，不能用 ES import（构建时文件不存在）
- BaseLayout 原有重复 HTML 结构已修复
- 构建 + Pagefind 索引合并为一个命令：`npm run build`