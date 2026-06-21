import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import { subjectMap } from "../content/subjects.config";

/** 笔记条目类型 */
export type Note = CollectionEntry<"notes">;

/** 按章节分组后的结构 */
export interface ChapterGroup {
  chapter: string;
  notes: Note[];
}

/**
 * 获取所有非草稿笔记
 */
export async function getAllNotes(): Promise<Note[]> {
  const notes = await getCollection("notes", ({ data }) => !data.draft);
  return notes.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );
}

/**
 * 按学科筛选笔记
 */
export function filterBySubject(notes: Note[], subject: string): Note[] {
  return notes.filter((n) => n.data.subject === subject);
}

/**
 * 按章节分组并排序
 * - 章节按首次出现的 order 排（如有），否则按章节名
 * - 章节内笔记按 order 升序，无 order 按 pubDate 倒序
 */
export function groupByChapter(notes: Note[]): ChapterGroup[] {
  const map = new Map<string, Note[]>();
  const chapterOrder = new Map<string, number>();
  let orderIdx = 0;

  for (const note of notes) {
    const ch = note.data.chapter;
    if (!map.has(ch)) {
      map.set(ch, []);
      chapterOrder.set(ch, note.data.order ?? orderIdx++);
    }
    map.get(ch)!.push(note);
  }

  // 章节内排序
  for (const list of map.values()) {
    list.sort((a, b) => {
      if (a.data.order !== undefined && b.data.order !== undefined) {
        return a.data.order - b.data.order;
      }
      if (a.data.order !== undefined) return -1;
      if (b.data.order !== undefined) return 1;
      return b.data.pubDate.getTime() - a.data.pubDate.getTime();
    });
  }

  // 章节排序
  const chapters = [...map.entries()].sort((a, b) => {
    const oa = chapterOrder.get(a[0]) ?? 0;
    const ob = chapterOrder.get(b[0]) ?? 0;
    return oa - ob;
  });

  return chapters.map(([chapter, notes]) => ({ chapter, notes }));
}

/**
 * 获取最近 N 篇笔记
 */
export function getRecentNotes(notes: Note[], count: number): Note[] {
  return [...notes]
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
    .slice(0, count);
}

/**
 * 获取某学科下的笔记，按章节分组
 */
export async function getSubjectNotesGrouped(
  subject: string
): Promise<ChapterGroup[]> {
  const all = await getAllNotes();
  const filtered = filterBySubject(all, subject);
  return groupByChapter(filtered);
}

/**
 * 获取笔记的上下篇（同学科内）
 */
export function getPrevNext(
  notes: Note[],
  currentSlug: string
): { prev: Note | null; next: Note | null } {
  const idx = notes.findIndex((n) => n.id === currentSlug);
  return {
    prev: idx > 0 ? notes[idx - 1] : null,
    next: idx < notes.length - 1 ? notes[idx + 1] : null,
  };
}

/**
 * 获取学科显示名
 */
export function getSubjectName(slug: string): string {
  return subjectMap[slug]?.name ?? slug;
}

/**
 * 获取学科图标
 */
export function getSubjectIcon(slug: string): string {
  return subjectMap[slug]?.icon ?? "·";
}

/**
 * 统计某学科下的笔记数
 */
export function countBySubject(notes: Note[], subject: string): number {
  return notes.filter((n) => n.data.subject === subject).length;
}