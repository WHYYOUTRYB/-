import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getAllNotes, getSubjectName } from "../lib/notes";

export async function GET(context: APIContext) {
  const notes = await getAllNotes();

  return rss({
    title: "个人笔记",
    description: "以学业笔记为核心的个人知识站点",
    site: context.site ?? "https://example.com",
    items: notes.map((note) => ({
      title: note.data.title,
      pubDate: note.data.pubDate,
      description: note.data.description,
      link: `/notes/${note.data.subject}/${note.id}`,
      categories: [getSubjectName(note.data.subject), ...note.data.tags],
    })),
    customData: `<language>zh-CN</language>`,
  });
}