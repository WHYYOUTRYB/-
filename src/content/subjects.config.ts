/**
 * 学科配置 —— 管理学科的唯一入口
 *
 * 添加学科：在下方数组加一项即可。
 * 删除学科：删掉对应项（不影响 notes/ 里的笔记文件本身）。
 * 笔记通过 frontmatter 的 `subject` 字段（值为 slug）归属到对应学科。
 */

export interface Subject {
  /** URL 用的标识，唯一且一旦确定不宜改动（会影响链接） */
  slug: string;
  /** 显示名 */
  name: string;
  /** 学科页的一句话介绍 */
  description?: string;
  /** 极简风格下用字符/符号代替图标 */
  icon?: string;
  /** 排序权重，数字越小越靠前 */
  order?: number;
}

export const subjects: Subject[] = [
  {
    slug: "advanced-math",
    name: "高等数学",
    description: "微积分、极限、级数与微分方程",
    icon: "∫",
    order: 1,
  },
  {
    slug: "data-structure",
    name: "数据结构",
    description: "线性表、树、图与算法基础",
    icon: "⌘",
    order: 2,
  },
  {
    slug: "operating-system",
    name: "操作系统",
    description: "进程、内存、文件与并发",
    icon: "❖",
    order: 3,
  },
  {
    slug: "laser-physics",
    name: "激光原理",
    description: "辐射理论、谱线增宽、谐振腔与激光形成条件",
    icon: "⚛",
    order: 4,
  },
];

/** slug -> Subject 的快速查找表 */
export const subjectMap: Record<string, Subject> = Object.fromEntries(
  subjects.map((s) => [s.slug, s]),
);

/** 取得合法的学科 slug 集合（用于 schema 校验） */
export const validSubjectSlugs = subjects.map((s) => s.slug);
