# 个人笔记

以学业笔记为核心的个人知识站点。笔记按「学科 → 章节 → 笔记」三级组织，支持数学公式、代码高亮与 Wiki 风格链接。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建（含 Pagefind 搜索索引）
npm run build

# 预览构建结果
npm run preview
```

## 写作流程

### 添加笔记

在 `src/content/notes/` 下新建 Markdown 文件，文件名建议格式 `YYYY-MM-DD-slug.md`：

```markdown
---
title: 笔记标题
subject: advanced-math        # 学科 slug，对应 subjects.config.ts
chapter: 第一章 极限与连续     # 章节名
order: 1                      # 章节内排序（可选）
pubDate: 2026-03-01
description: 一句话描述
tags: [标签1, 标签2]
---

正文内容...
```

### 添加随笔

在 `src/content/essays/` 下新建 Markdown 文件。

### 添加作品

在 `src/content/projects/` 下新建 Markdown 文件。

### 添加学科

编辑 `src/content/subjects.config.ts`，在数组中加一项：

```ts
{ slug: "new-subject", name: "新学科", icon: "◇", order: 4 },
```

## Markdown 扩展

- **行内公式**：`$E = mc^2$`
- **块级公式**：`$$\lim_{n \to \infty} a_n = A$$`
- **Wiki 链接**：`[[笔记标题]]` 会链接到搜索页
- **代码高亮**：Shiki 双主题（浅色 github-light / 深色 github-dark-dimmed）

## 技术栈

| 层 | 选型 |
|----|------|
| 框架 | Astro 6 |
| 样式 | Tailwind CSS 4.2.1 |
| 公式 | remark-math + rehype-katex + KaTeX |
| 搜索 | Pagefind |
| SEO | @astrojs/sitemap + @astrojs/rss |
| 部署 | Vercel |

## Vercel 部署

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 中导入该仓库
3. 构建命令：`npm run build`
4. 输出目录：`dist`
5. Vercel 会自动识别 Astro 项目并配置

推送后 Vercel 自动部署，预览分支也会生成预览链接。