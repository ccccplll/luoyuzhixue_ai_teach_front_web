import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, Code2, Compass, FileCode2, Gamepad2, Globe2, Lightbulb, MousePointerClick, PackageCheck, PlayCircle, Sparkles, WandSparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { featuredFirstWorks, works } from '../data/works';
import { courses, progression, vibeKeywords } from '../data/courses';
import { PageTransition } from '../components/PageTransition';
import { WorkCard, WorkMiniature } from '../components/WorkCard';

const levelIcons = [BrainCircuit, Globe2, Gamepad2, PackageCheck, Sparkles];
const stageOutputs = [
  ['VC-L0', '流程图、小游戏规则图、简单互动作品'],
  ['VC-L1', 'AI 梦想星光馆、兴趣主题展馆、个人作品集网站'],
  ['VC-L2', '记忆翻牌、迷宫寻宝、打地鼠、学习闯关游戏'],
  ['VC-L3', '打卡工具、报名工具、预算助手、知识卡片库'],
  ['VC-L4', 'AI 学习助手、AI 知识库问答、AI 活动策划器'],
];

export function HomePage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden px-5 py-16 lg:px-8 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_16%,rgba(20,78,158,.28),transparent_30%),radial-gradient(circle_at_18%_8%,rgba(246,201,112,.54),transparent_28%),linear-gradient(135deg,#fffaf2,#f7ead0_42%,#dceeff)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(11,45,115,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(201,131,30,.08)_1px,transparent_1px)] bg-[size:84px_84px] opacity-35" />
        {[...Array(36)].map((_, index) => <span key={index} className="absolute h-1 w-1 animate-twinkle rounded-full bg-[#d49a36]/80" style={{ left: `${(index * 23) % 96}%`, top: `${(index * 37) % 88}%`, animationDelay: `${index * 0.08}s`, boxShadow: '0 0 18px rgba(212,154,54,.75)' }} />)}

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="relative z-10">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d7ad5c]/45 bg-white/70 px-4 py-2 text-sm font-semibold text-[#76531d] shadow-[0_0_40px_rgba(212,154,54,.16)] backdrop-blur-md">
              <Sparkles className="h-4 w-4" /> 珞喻智学 VibeCoding 五级成长体系
            </motion.span>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-[#0b2d73] md:text-7xl">
              孩子用 AI 做项目
              <span className="mt-3 block bg-gradient-to-r from-[#0b2d73] via-[#174c9d] to-[#b27922] bg-clip-text text-3xl text-transparent md:text-5xl">从网页作品到 AI 小应用</span>
            </h1>
            <p className="mt-6 text-2xl font-semibold text-[#b27922] md:text-3xl">这是一个循序渐进的 AI 项目创造课程体系。</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#38517e] md:text-lg">孩子不是只听课，也不是死记代码语法；他们会把自己的想法做成网页、小游戏、小工具和 AI 小应用，每一级都有能打开、能体验、能展示的作品。</p>

            <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                ['孩子说想法', '自然语言表达'],
                ['AI 生成初稿', '老师引导修改'],
                ['做成作品', '网页 / 游戏 / 工具'],
              ].map(([title, text], index) => (
                <motion.div key={title} className="rounded-2xl border border-[#d7ad5c]/35 bg-white/78 p-4 shadow-[0_14px_42px_rgba(11,45,115,.08)]" animate={{ y: [0, -6, 0] }} transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.25 }}>
                  <p className="text-sm font-bold text-[#0b2d73]">{index + 1}. {title}</p>
                  <p className="mt-1 text-xs text-[#76531d]">{text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.4rem] border border-[#d7ad5c]/40 bg-white/75 p-4 text-sm font-semibold leading-7 text-[#0b2d73] shadow-[0_16px_50px_rgba(11,45,115,.08)]">
              VC-L0-L4 五级体系｜线上线下双模式｜每阶段都有作品交付
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/course" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0b2d73] to-[#225fb7] px-7 py-4 font-semibold text-[#fff4d8] shadow-[0_20px_70px_rgba(11,45,115,.24)] transition hover:-translate-y-1">查看五级课程体系 <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/works" className="inline-flex items-center justify-center rounded-full border border-[#0b2d73]/15 bg-white/75 px-7 py-4 font-semibold text-[#0b2d73] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white">参观学生作品</Link>
            </div>
          </div>

          <motion.div className="relative" initial={{ opacity: 0, scale: 0.96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <motion.div className="absolute -left-6 top-10 z-10 hidden rounded-2xl border border-[#d7ad5c]/35 bg-white/85 p-4 text-sm text-[#0b2d73] shadow-[0_20px_70px_rgba(14,65,140,.16)] backdrop-blur-xl md:block" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}><MousePointerClick className="mb-2 h-5 w-5 text-[#b27922]" />项目作品驱动</motion.div>
            <motion.div className="absolute -right-4 bottom-12 z-10 hidden rounded-2xl border border-[#0b2d73]/15 bg-white/90 p-4 text-sm text-[#0b2d73] shadow-[0_20px_70px_rgba(212,154,54,.14)] backdrop-blur-xl md:block" animate={{ y: [0, 10, 0] }} transition={{ duration: 3.4, repeat: Infinity }}><Sparkles className="mb-2 h-5 w-5 text-[#b27922]" />AI 辅助创造</motion.div>
            <motion.div className="absolute right-[18%] top-[-18px] z-10 hidden rounded-full bg-[#0b2d73] px-4 py-2 text-sm font-bold text-[#fff4d8] shadow-[0_18px_50px_rgba(11,45,115,.22)] md:inline-flex" animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 1.8, repeat: Infinity }}><PlayCircle className="mr-2 h-4 w-4" />点击作品可互动</motion.div>
            <WorkMiniature work={works.find((work) => work.id === 'animal') ?? works[0]} large />
          </motion.div>
        </div>
      </section>

      <Section eyebrow="VibeCoding" title="什么是 VibeCoding？" subtitle="它是一种 AI 时代的项目创造方式：孩子先说清楚想法，再用 AI 和基础技术，把想法做成网页、小游戏、小工具和 AI 小应用。">
        <div className="grid gap-4 md:grid-cols-4">
          {vibeKeywords.map((keyword, index) => {
            const Icon = [Lightbulb, Sparkles, Code2, PackageCheck][index];
            return <motion.div key={keyword} className="rounded-[1.7rem] border border-[#d7ad5c]/30 bg-white/75 p-6 shadow-[0_18px_60px_rgba(11,45,115,.08)]" whileHover={{ y: -8, scale: 1.02 }}><Icon className="mb-5 h-8 w-8 text-[#b27922]" /><h3 className="text-lg font-bold text-[#0b2d73]">{keyword}</h3></motion.div>;
          })}
        </div>
      </Section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[.22em] text-[#b27922]">Learning Path</p>
            <h2 className="text-4xl font-bold text-[#0b2d73] md:text-6xl">五级进阶课程体系</h2>
            <p className="mt-4 text-base leading-8 text-[#38517e] md:text-lg">从逻辑启蒙，到 AI 小应用开发，孩子每一步都有作品产出。</p>
          </div>
          <div className="mb-10 grid gap-3 md:grid-cols-6">
            {progression.map((item, index) => <div key={item} className="course-flow-card rounded-2xl border border-[#d7ad5c]/30 bg-white/70 p-4 text-center text-sm font-semibold text-[#0b2d73]" style={{ animationDelay: `${index * 0.15}s` }}>{item}{index < progression.length - 1 && <span className="hidden md:block text-[#b27922]">→</span>}</div>)}
          </div>
          <div className="grid gap-5 lg:grid-cols-5">
            {courses.map((course, index) => {
              const Icon = levelIcons[index];
              return (
                <motion.article key={course.level} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.08 }} className="flex flex-col rounded-[1.8rem] border border-[#d7ad5c]/35 bg-white/78 p-5 shadow-[0_20px_70px_rgba(11,45,115,.09)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(11,45,115,.14)]">
                  <Icon className="mb-4 h-8 w-8 text-[#b27922]" />
                  <p className="text-sm font-bold text-[#b27922]">{course.level}</p>
                  <h3 className="mt-1 text-xl font-bold text-[#0b2d73]">{course.shortTitle}</h3>
                  <p className="mt-2 text-sm text-[#38517e]">{course.cycle}</p>
                  <p className="mt-2 text-sm font-semibold text-[#0b2d73]">线下 {course.offlinePrice}｜线上 {course.onlinePrice}</p>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#38517e]">{course.goal}</p>
                  <div className="mt-4 grid gap-1 text-xs text-[#76531d]">{course.deliverables.slice(0, 3).map((item) => <span key={item}>• {item}</span>)}</div>
                  <Link to="/course" className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#0b2d73] px-4 py-2.5 text-sm font-semibold text-[#fff4d8]">查看详情 <ArrowRight className="h-4 w-4" /></Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <Section eyebrow="Price" title="课程周期与价格" subtitle="清晰了解每一级的学习周期、价格与核心产出。">
        <div className="overflow-hidden rounded-[1.7rem] border border-[#d7ad5c]/35 bg-white/82 shadow-[0_20px_70px_rgba(11,45,115,.08)]">
          <div className="hidden grid-cols-[.7fr_1fr_.8fr_.8fr_1.4fr] gap-4 bg-[#0b2d73] px-5 py-4 text-sm font-bold text-[#fff4d8] lg:grid"><span>阶段</span><span>周期</span><span>线下价格</span><span>线上价格</span><span>核心产出</span></div>
          {courses.map((course) => <div key={course.level} className="grid gap-3 border-t border-[#d7ad5c]/25 px-5 py-5 text-sm text-[#12346e] lg:grid-cols-[.7fr_1fr_.8fr_.8fr_1.4fr]"><strong>{course.level}</strong><span>{course.cycle.replace('，每次 ', '×')}</span><span>{course.offlinePrice}</span><span>{course.onlinePrice}</span><span>{course.coreOutput}</span></div>)}
        </div>
      </Section>

      <Section eyebrow="Outputs" title="孩子每个阶段会做出什么？" subtitle="每一级都围绕项目交付设计，让家长看得见孩子的表达、逻辑与创造力成长。">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {stageOutputs.map(([level, output]) => <motion.div key={level} className="rounded-[1.7rem] border border-[#d7ad5c]/30 bg-white/76 p-6 shadow-[0_18px_60px_rgba(11,45,115,.08)]" whileHover={{ y: -8 }}><p className="text-sm font-bold text-[#b27922]">{level}</p><p className="mt-3 text-lg font-bold text-[#0b2d73]">{output}</p></motion.div>)}
        </div>
      </Section>

      <section className="relative overflow-hidden px-5 py-16 lg:px-8 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(212,154,54,.16),transparent_30%),radial-gradient(circle_at_15%_35%,rgba(14,65,140,.13),transparent_28%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[.22em] text-[#b27922]">Student Works</p>
              <h2 className="text-4xl font-bold text-[#0b2d73] md:text-6xl">点击参观孩子做出的网页作品</h2>
              <p className="mt-4 text-base leading-8 text-[#38517e] md:text-lg">这些不是宣传海报，而是 VC-L1 网页启蒙阶段孩子可以完成的互动作品。比如赵X安把家里的两只猫做成了一个会动的小网页。</p>
            </div>
            <Link to="/works" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d7ad5c]/45 bg-[#fff2cf] px-6 py-3 font-semibold text-[#0b2d73] transition hover:-translate-y-1">进入作品展厅 <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{featuredFirstWorks.map((work) => <WorkCard key={work.id} work={work} featured={work.isFeatured} />)}</div>
        </div>
      </section>

      <Section eyebrow="Learning Journey" title="一节体验课孩子会经历什么" subtitle="从一句想法，到一个可点击、可讲述、可展示的作品雏形。">
        <div className="grid gap-4 md:grid-cols-4">{['说出想法', 'AI 辅助生成', '老师引导修改', '做出作品'].map((step, index) => <motion.div key={step} className="rounded-[1.5rem] border border-[#d7ad5c]/30 bg-white/76 p-6" whileHover={{ y: -8 }}><Compass className="mb-5 h-7 w-7 text-[#b27922]" /><p className="text-sm text-[#5f7195]">Step {index + 1}</p><h3 className="mt-1 text-xl font-bold text-[#0b2d73]">{step}</h3></motion.div>)}</div>
      </Section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-[#d7ad5c]/35 bg-gradient-to-br from-[#fff2cf] via-white to-[#e7f2ff] p-9 text-center shadow-[0_30px_120px_rgba(11,45,115,.12)] md:p-14">
          <WandSparkles className="mx-auto mb-5 h-10 w-10 text-[#b27922]" />
          <h2 className="text-3xl font-bold text-[#0b2d73] md:text-5xl">想了解孩子从哪一级开始？</h2>
          <Link to="/booking" className="mt-8 inline-flex rounded-full bg-[#0b2d73] px-7 py-4 font-semibold text-[#fff4d8] transition hover:-translate-y-1">预约一次体验评估</Link>
        </div>
      </section>
    </PageTransition>
  );
}

function Section({ eyebrow, title, subtitle, children }: { eyebrow: string; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section className="px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[.22em] text-[#b27922]">{eyebrow}</p>
          <h2 className="text-3xl font-bold text-[#0b2d73] md:text-5xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-[#38517e] md:text-lg">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
}


