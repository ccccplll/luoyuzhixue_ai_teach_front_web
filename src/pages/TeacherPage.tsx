import { Link } from 'react-router-dom';
import { BarChart3, BookOpenCheck, CalendarDays, CheckCircle2, ClipboardList, Eye, FileCode2, GraduationCap, LockKeyhole, Search, Sparkles, UsersRound } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { works } from '../data/works';

const classStats = [
  { label: 'Lv0 作业主题', value: '6', note: '梦想网页作品', icon: FileCode2 },
  { label: '项目主题', value: '12+', note: '可选创作方向', icon: GraduationCap },
  { label: '课堂产出率', value: '96%', note: '可完成作品雏形', icon: CheckCircle2 },
  { label: '待点评作品', value: '12', note: '本周教师看板', icon: ClipboardList },
];

const assignments = works.map((work, index) => ({
  ...work,
  lesson: `Lv0-${String(index + 1).padStart(2, '0')}`,
  status: index < 4 ? '已发布' : '备课中',
  completion: [92, 88, 84, 79, 73, 68][index],
  teacherNote: ['可作为第一节课展示样例', '引导好奇心强的孩子', '支持页面结构升级', '表达温暖主题', '自然科普延展', '故事互动分支'][index],
}));

const recentReviews = [
  ['王同学', '光之守护者梦想馆', '已完成二次修改，按钮反馈更清楚。'],
  ['陈同学', '星际探险家梦想馆', '建议补充任务卡的路线说明。'],
  ['林同学', '魔法故事设计师梦想馆', '角色设定完整，可继续增加分支结局。'],
];

export function TeacherPage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden px-5 py-8 lg:px-8 lg:py-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_0%,rgba(246,201,112,.34),transparent_34%),radial-gradient(circle_at_82%_10%,rgba(19,76,157,.16),transparent_30%),linear-gradient(135deg,#fffaf2,#f9ecd1_52%,#e7f2ff)]" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-4 rounded-[2rem] border border-[#d7ad5c]/30 bg-white/75 p-5 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-amber-200/30 bg-amber-200/10 text-[#76531d]">
                <LockKeyhole className="h-7 w-7" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[.22em] text-[#b27922]/80">Teacher Console</p>
                <h1 className="text-2xl font-bold text-[#0b2d73] md:text-4xl">AI编程课教师管理页面</h1>
                <p className="mt-1 text-sm text-[#38517e]">VibeCoding-入门课（Lv0）的作业合集 · 课堂作品管理看板</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-emerald-300/25 bg-emerald-100 px-4 py-2 text-emerald-800">教师管理台</span>
              <span className="rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-[#0b2d73]">Lv0 作业合集</span>
            </div>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {classStats.map((stat) => (
              <div key={stat.label} className="rounded-[1.6rem] border border-[#d7ad5c]/30 bg-[#fff8eb]/70 p-5 shadow-[0_18px_70px_rgba(2,6,23,.25)]">
                <div className="mb-5 flex items-center justify-between">
                  <stat.icon className="h-7 w-7 text-[#174c9d]" />
                  <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-[#38517e]">Lv0</span>
                </div>
                <p className="text-sm text-[#5f7195]">{stat.label}</p>
                <p className="mt-1 text-3xl font-bold text-[#0b2d73]">{stat.value}</p>
                <p className="mt-2 text-sm text-[#76531d]/80">{stat.note}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
            <section className="rounded-[2rem] border border-[#d7ad5c]/30 bg-white/75 p-5 backdrop-blur-xl md:p-6">
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-[#76531d]"><BookOpenCheck className="h-5 w-5" /><span className="text-sm font-semibold">作业合集</span></div>
                  <h2 className="text-2xl font-bold text-[#0b2d73]">VibeCoding-入门课（Lv0）课堂作业</h2>
                  <p className="mt-2 text-sm leading-7 text-[#38517e]">教师可用于备课展示、课堂点评、学生作品入口管理与家长沟通说明。</p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-[#d7ad5c]/30 bg-[#fff8eb]/80 px-4 py-2 text-[#5f7195]">
                  <Search className="h-4 w-4" />
                  <span className="text-sm">按主题 / 标签筛选</span>
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-[#d7ad5c]/30">
                <div className="hidden grid-cols-[1.1fr_.85fr_.7fr_.7fr_.6fr] gap-4 bg-white/75 px-5 py-4 text-xs font-semibold uppercase tracking-[.14em] text-[#5f7195] lg:grid">
                  <span>作业主题</span>
                  <span>训练目标</span>
                  <span>发布状态</span>
                  <span>完成度</span>
                  <span>操作</span>
                </div>
                <div className="divide-y divide-white/10">
                  {assignments.map((item) => (
                    <article key={item.id} className="grid gap-4 px-5 py-5 transition hover:bg-white/[0.04] lg:grid-cols-[1.1fr_.85fr_.7fr_.7fr_.6fr] lg:items-center">
                      <div className="flex items-center gap-4">
                        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-xl" style={{ backgroundColor: `${item.themeColor}22`, color: item.themeColor }}>{item.icon}</span>
                        <div>
                          <div className="mb-1 flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-sky-300/10 px-2.5 py-1 text-xs text-[#0b2d73]">{item.lesson}</span>
                            <span className="text-xs text-[#5f7195]">{item.grade}</span>
                          </div>
                          <h3 className="font-semibold text-[#0b2d73]">{item.title}</h3>
                          <p className="mt-1 text-xs text-[#5f7195]">{item.tags.join('｜')}</p>
                        </div>
                      </div>
                      <p className="text-sm leading-7 text-[#38517e]">{item.teacherNote}</p>
                      <div>
                        <span className={`rounded-full px-3 py-1.5 text-xs ${item.status === '已发布' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-300/10 text-[#76531d]'}`}>{item.status}</span>
                      </div>
                      <div>
                        <div className="mb-2 flex justify-between text-xs text-[#5f7195]"><span>课堂完成</span><span>{item.completion}%</span></div>
                        <div className="h-2 rounded-full bg-white/10"><div className="h-2 rounded-full" style={{ width: `${item.completion}%`, background: `linear-gradient(90deg, ${item.themeColor}, ${item.accentColor})` }} /></div>
                      </div>
                      <Link to={`/works/${item.id}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d7ad5c]/30 bg-white/8 px-4 py-2 text-sm font-semibold text-[#0b2d73] transition hover:border-amber-200/40 hover:text-[#76531d]">
                        <Eye className="h-4 w-4" /> 预览
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <aside className="grid gap-6">
              <section className="rounded-[2rem] border border-[#d7ad5c]/30 bg-white/75 p-6 backdrop-blur-xl">
                <div className="mb-5 flex items-center gap-3 text-[#0b2d73]"><CalendarDays className="h-6 w-6 text-[#b27922]" /><h2 className="text-xl font-bold">本周教学安排</h2></div>
                <div className="grid gap-3 text-sm">
                  <Plan day="周三" title="Lv0-01 梦想身份卡" text="完成梦想主题访谈与 AI 内容初稿。" />
                  <Plan day="周五" title="Lv0-02 闪光能力页" text="训练卡片布局、能力条和视觉层级。" />
                  <Plan day="周六" title="作品开放日" text="家长可查看孩子作品预览与老师点评。" />
                </div>
              </section>

              <section className="rounded-[2rem] border border-[#d7ad5c]/30 bg-white/75 p-6 backdrop-blur-xl">
                <div className="mb-5 flex items-center gap-3 text-[#0b2d73]"><UsersRound className="h-6 w-6 text-[#174c9d]" /><h2 className="text-xl font-bold">最近点评</h2></div>
                <div className="grid gap-3">
                  {recentReviews.map(([name, title, text]) => (
                    <div key={name} className="rounded-2xl border border-[#d7ad5c]/30 bg-[#fff8eb]/70 p-4">
                      <p className="text-sm font-semibold text-[#0b2d73]">{name} · {title}</p>
                      <p className="mt-2 text-xs leading-6 text-[#5f7195]">{text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[2rem] border border-amber-200/20 bg-gradient-to-br from-amber-200/12 to-sky-300/10 p-6">
                <Sparkles className="mb-4 h-8 w-8 text-[#b27922]" />
                <h2 className="text-xl font-bold text-[#0b2d73]">教师提示</h2>
                <p className="mt-3 text-sm leading-7 text-[#38517e]">Lv0 的重点不是复杂代码，而是帮助孩子把想法转成网页结构：标题、卡片、按钮、反馈和作品讲述。</p>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function Plan({ day, title, text }: { day: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-[#d7ad5c]/30 bg-[#fff8eb]/70 p-4">
      <div className="mb-2 flex items-center gap-2">
        <span className="rounded-full bg-[#fff2cf] px-2.5 py-1 text-xs font-bold text-[#0b2d73]">{day}</span>
        <span className="font-semibold text-[#0b2d73]">{title}</span>
      </div>
      <p className="leading-6 text-[#5f7195]">{text}</p>
    </div>
  );
}







