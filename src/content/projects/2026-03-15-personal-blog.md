---
name: 个人笔记站点
description: 基于 Astro 的学业笔记博客，按学科组织
pubDate: 2026-03-15
stack: [Astro, Tailwind CSS, KaTeX, Pagefind]
url: https://example.com
repo: https://github.com/example/blog
featured: true
---

## 项目简介

一个以学业笔记为核心的个人知识站点。笔记按"学科 → 章节 → 笔记"三级组织，支持数学公式（KaTeX）、代码高亮、Obsidian 风格 Wiki 链接。

## 技术特点

- **静态生成**：Astro 构建，默认零 JS，加载极快
- **学科配置驱动**：加学科只需改一行配置
- **极简阅读优先**：衬线字体、680px 阅读宽度、克制的色彩
- **站内搜索**：Pagefind 静态索引，无需后端
