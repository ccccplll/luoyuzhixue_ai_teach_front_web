import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, CheckCircle2, ClipboardList, Layers3, Milestone, PackageCheck, Sparkles, Target, Users } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { courses, progression } from '../data/courses';

const overview = ['5 个进阶阶段', '34 次项目课', '线上 / 线下双模式', '每阶段都有明确交付物'];

export function CoursePage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden px-5 py-16 lg:px-8 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(246,201,112,.48),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(19,76,157,.2),transparent_32%),linear-gradient(135deg,#fffaf2,#f9ecd1_45%,#e7f2ff)]" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[.24em] text-[#b27922]">Course System</p>
            <h1 className="text-4xl font-bold text-[#0b2d73] md:text-7xl">VibeCoding 五级课程体系</h1>
            <p className="mt-6 text-lg leading-9 text-[#38517e] md:text-xl">从逻辑启蒙到 AI 小应用开发，帮助孩子逐步建立 AI 时代的项目创造能力。</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {overview.map((item) => <div key={item} className="rounded-[1.5rem] border border-[#d7ad5c]/35 bg-white/78 p-5 text-center font-bold text-[#0b2d73] shadow-[0_18px_60px_rgba(11,45,115,.08)]">{item}</div>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#d7ad5c]/35 bg-white/78 p-8 shadow-[0_20px_70px_rgba(11,45,115,.08)]">
            <div className="mb-5 flex items-center gap-3"><BrainCircuit className="h-7 w-7 text-[#b27922]" /><h2 className="text-3xl font-bold text-[#0b2d73]">VibeCoding 是什么？</h2></div>
            <p className="text-base leading-9 text-[#38517e]">VibeCoding 的本质不是传统少儿编程，也不是直接教代码语法，而是让孩子用自然语言、AI 和基础技术理解，完成网页、小游戏、小工具、AI 小应用的项目创造。</p>
          </div>
          <div className="rounded-[2rem] border border-[#d7ad5c]/35 bg-gradient-to-br from-[#fff2cf] to-white p-8 shadow-[0_20px_70px_rgba(11,45,115,.08)]">
            <div className="mb-5 flex items-center gap-3"><Layers3 className="h-7 w-7 text-[#b27922]" /><h2 className="text-3xl font-bold text-[#0b2d73]">和传统编程的区别</h2></div>
            <div className="grid gap-3 text-sm leading-7 text-[#38517e]">
              <p>传统课程常从语法和题目开始，孩子容易觉得抽象。</p>
              <p>VibeCoding 从“我想做什么”开始，用项目目标带动表达、逻辑、技术和审美理解。</p>
              <p>孩子不是只完成练习，而是逐步拥有能展示、能讲述、能迭代的数字作品。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[.22em] text-[#b27922]">Progression</p>
            <h2 className="text-3xl font-bold text-[#0b2d73] md:text-5xl">能力递进路径</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-6">
            {progression.map((item, index) => <div key={item} className="rounded-2xl border border-[#d7ad5c]/35 bg-white/78 p-5 text-center shadow-[0_16px_50px_rgba(11,45,115,.07)]"><Milestone className="mx-auto mb-3 h-6 w-6 text-[#b27922]" /><p className="font-bold text-[#0b2d73]">{item}</p>{index < progression.length - 1 && <p className="mt-2 text-[#b27922]">→</p>}</div>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[.22em] text-[#b27922]">Details</p>
            <h2 className="text-3xl font-bold text-[#0b2d73] md:text-5xl">分阶段课程详情</h2>
            <p className="mt-4 text-base leading-8 text-[#38517e] md:text-lg">每一级都围绕清晰目标、项目过程和作品交付设计，帮助家长了解孩子的项目成长路径。</p>
          </div>
          <div className="grid gap-8">
            {courses.map((course) => <CourseDetailCard key={course.level} course={course} />)}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-[#d7ad5c]/35 bg-gradient-to-br from-[#fff2cf] via-white to-[#e7f2ff] p-9 text-center shadow-[0_30px_120px_rgba(11,45,115,.12)] md:p-14">
          <Sparkles className="mx-auto mb-5 h-10 w-10 text-[#b27922]" />
          <h2 className="text-3xl font-bold text-[#0b2d73] md:text-5xl">想了解孩子从哪一级开始？</h2>
          <p className="mt-4 text-lg leading-8 text-[#38517e]">老师会结合表达习惯、兴趣主题和项目基础，给出更合适的课程建议。</p>
          <Link to="/booking" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b2d73] px-7 py-4 font-semibold text-[#fff4d8] transition hover:-translate-y-1">预约一次体验评估 <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </PageTransition>
  );
}

function CourseDetailCard({ course }: { course: import('../data/courses').VibeCourse }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[#d7ad5c]/35 bg-white/82 shadow-[0_24px_90px_rgba(11,45,115,.1)]">
      <div className="grid gap-6 bg-gradient-to-r from-[#0b2d73] to-[#174c9d] p-7 text-[#fff4d8] lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-sm font-bold text-[#f4d58c]">{course.level}</p>
          <h3 className="mt-2 text-3xl font-bold">{course.title}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#fff4d8]/86">{course.positioning}</p>
        </div>
        <div className="rounded-2xl border border-[#f4d58c]/35 bg-white/10 p-4 text-sm leading-7">
          <p>线下：<strong>{course.offlinePrice}</strong>（{course.hourlyPriceOffline}）</p>
          <p>线上：<strong>{course.onlinePrice}</strong>（{course.hourlyPriceOnline}）</p>
        </div>
      </div>
      <div className="grid gap-6 p-7 lg:grid-cols-3">
        <Info title="学习画像" icon={<Users />} items={course.suitableStudents} />
        <Info title="周期与目标" icon={<Target />} items={[course.cycle, course.goal]} />
        <Info title="交付物" icon={<PackageCheck />} items={course.deliverables} />
      </div>
      <div className="grid gap-6 border-t border-[#d7ad5c]/25 p-7 lg:grid-cols-2">
        <Info title="课程内容" icon={<ClipboardList />} items={course.lessons} />
        <Info title="代表项目" icon={<CheckCircle2 />} items={course.projects} />
      </div>
    </article>
  );
}

function Info({ title, icon, items }: { title: string; icon: React.ReactNode; items: string[] }) {
  return (
    <section className="rounded-[1.5rem] border border-[#d7ad5c]/25 bg-[#fff8ec]/75 p-5">
      <div className="mb-4 flex items-center gap-2 text-[#0b2d73]"><span className="text-[#b27922]">{icon}</span><h4 className="font-bold">{title}</h4></div>
      <div className="grid gap-2 text-sm leading-7 text-[#38517e]">
        {items.map((item) => <p key={item}>• {item}</p>)}
      </div>
    </section>
  );
}

