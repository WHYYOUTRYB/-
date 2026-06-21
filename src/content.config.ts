import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { validSubjectSlugs } from "./content/subjects.config.ts";

/**
 * 学业笔记集合 —— 站点核心内容
 * 三级层级：学科(subject) → 章节(chapter) → 笔记
 */
const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    /** 学科 slug，必须对应 subjects.config.ts 中已定义的学科 */
    subject: z.enum(validSubjectSlugs as [string, ...string[]]),
    /** 章节名（自由文本），学科页据此动态分组 */
    chapter: z.string(),
    /** 章节内排序，可选；缺省按 pubDate 倒序 */
    order: z.number().optional(),
    pubDate: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/**
 * 随笔集合 —— 次要内容，时间流式
 */
const essays = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/essays" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/**
 * 作品集集合 —— 次要内容
 */
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    stack: z.array(z.string()).default([]),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes, essays, projects };
