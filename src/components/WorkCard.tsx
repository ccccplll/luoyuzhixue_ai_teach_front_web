import { ArrowRight, Award, BadgeCheck, Star, WandSparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { StudentWork } from '../data/works';

function getThemeTexture(id: string, themeColor: string, accentColor: string) {
  const common = `radial-gradient(circle at 18% 10%, ${themeColor}36, transparent 28%), radial-gradient(circle at 82% 16%, ${accentColor}30, transparent 30%)`;
  const textures: Record<string, string> = {
    guardian: `${common}, linear-gradient(135deg, #fff8ec 0%, #eef5ff 52%, #fff2cf 100%)`,
    explorer: `${common}, linear-gradient(135deg, #f4f0ff 0%, #eaf4ff 52%, #fff8ec 100%)`,
    inventor: `${common}, linear-gradient(135deg, #e9fbff 0%, #eef7ff 55%, #fff8ec 100%)`,
    doctor: `radial-gradient(circle at 15% 12%, rgba(255,255,255,.92), transparent 24%), radial-gradient(circle at 85% 18%, ${accentColor}42, transparent 30%), linear-gradient(135deg, #ffffff 0%, #eaf4ff 48%, #fff7ed 100%)`,
    animal: `${common}, linear-gradient(135deg, #effdf5 0%, #e7f8dc 50%, #fff8ec 100%)`,
    storyteller: `${common}, radial-gradient(circle at 50% 85%, rgba(250,204,21,.18), transparent 30%), linear-gradient(135deg, #f6f0ff 0%, #efe7ff 48%, #fff8ec 100%)`,
  };
  return textures[id] ?? `${common}, linear-gradient(135deg,#fff8ec,#eaf4ff)`;
}

export function WorkMiniature({ work, large = false }: { work: StudentWork; large?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-[1.9rem] border border-[#d7ad5c]/35 p-4 shadow-[0_22px_70px_rgba(11,45,115,.12)] ${large ? 'min-h-[420px]' : 'min-h-[250px]'}`} style={{ background: getThemeTexture(work.id, work.themeColor, work.accentColor) }}>
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,.58)_44%,transparent_54%)] opacity-55 transition duration-700 group-hover:translate-x-6" />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl" style={{ backgroundColor: `${work.themeColor}38` }} />
      <div className="absolute -bottom-20 left-10 h-48 w-48 rounded-full blur-3xl" style={{ backgroundColor: `${work.accentColor}2f` }} />
      <div className="relative rounded-[1.45rem] border border-white/80 bg-white/72 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,.85)] backdrop-blur-md">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <span className="ml-auto rounded-full bg-[#fff2cf] px-2.5 py-1 text-[10px] font-bold text-[#76531d]">{work.isFeatured ? '优秀作品' : '课堂作品'}</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-[1fr_1.05fr]">
          <div className="rounded-2xl border border-[#d7ad5c]/28 bg-white/78 p-4 text-[#0b2d73]">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl text-xl shadow-[0_0_30px_rgba(212,154,54,.18)]" style={{ backgroundColor: `${work.themeColor}26`, color: work.themeColor }}>{work.icon}</span>
              <div>
                <p className="text-[10px] uppercase tracking-[.18em] text-[#76531d]">Dream ID</p>
                <h4 className="text-sm font-bold">{work.identity}</h4>
              </div>
            </div>
            <p className="text-xs leading-6 text-[#38517e]">{work.heroText}</p>
            <div className="mt-4 flex items-center gap-2">
              <button className="rounded-full px-3 py-1.5 text-xs font-bold text-[#0b2d73] shadow-lg" style={{ background: `linear-gradient(90deg, ${work.themeColor}88, ${work.accentColor}88)` }}>点亮作品</button>
              <span className="text-[10px] text-[#5f7195]">AI + Web</span>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-2xl border border-[#d7ad5c]/28 bg-white/68 p-3">
              <div className="mb-3 flex items-center justify-between text-xs text-[#38517e]"><span>闪光能力面板</span><Star className="h-3.5 w-3.5 text-[#b27922]" /></div>
              {work.abilities.slice(0, 3).map((ability, index) => (
                <div key={ability} className="mb-2.5 last:mb-0">
                  <div className="mb-1 text-[10px] text-[#5f7195]">{ability}</div>
                  <div className="h-1.5 rounded-full bg-[#0b2d73]/10"><div className="h-1.5 rounded-full shadow-[0_0_14px_currentColor]" style={{ width: `${76 + index * 7}%`, backgroundColor: index % 2 ? work.accentColor : work.themeColor, color: index % 2 ? work.accentColor : work.themeColor }} /></div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {work.tags.slice(0, 4).map((tag) => <span key={tag} className="rounded-xl border border-[#d7ad5c]/28 bg-white/65 px-2 py-2 text-center text-[10px] font-medium text-[#12346e] backdrop-blur">{tag}</span>)}
            </div>
          </div>
        </div>
      </div>
      <ThemeDecoration id={work.id} color={work.themeColor} accent={work.accentColor} />
      {[...Array(20)].map((_, index) => <span key={index} className="absolute h-1 w-1 rounded-full bg-[#d49a36]/70" style={{ left: `${(index * 29) % 94}%`, top: `${(index * 41) % 88}%`, boxShadow: `0 0 12px ${index % 2 ? work.accentColor : work.themeColor}` }} />)}
    </div>
  );
}

export function WorkCard({ work, featured = false }: { work: StudentWork; featured?: boolean }) {
  return (
    <motion.article whileHover={{ y: -10, scale: 1.01 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }} className="group h-full">
      <Link to={`/works/${work.id}`} className={`relative flex h-full flex-col overflow-hidden rounded-[2.15rem] border border-[#d7ad5c]/35 bg-white/82 p-3 shadow-[0_24px_90px_rgba(11,45,115,.12)] backdrop-blur-xl transition duration-300 hover:bg-white ${featured ? 'hover:border-[#d49a36]/70' : 'hover:border-[#174c9d]/35'}`}>
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(circle at 50% 0%, ${work.themeColor}24, transparent 42%)` }} />
        <WorkMiniature work={work} />
        <div className="relative flex flex-1 flex-col p-4">
          {work.isFeatured && <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#d49a36]/45 bg-[#fff2cf] px-3 py-1.5 text-xs font-bold text-[#76531d] shadow-[0_8px_24px_rgba(212,154,54,.16)]"><Award className="h-3.5 w-3.5" />{work.honorTitle}</div>}
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0b2d73]/8 px-3 py-1 text-xs font-semibold text-[#0b2d73]"><BadgeCheck className="h-3.5 w-3.5" />{work.studentName}小朋友</span>
            <span className="rounded-full bg-[#fff2cf] px-3 py-1 text-xs font-semibold text-[#76531d]">{work.grade}</span>
          </div>
          <h3 className="text-xl font-bold text-[#0b2d73]">{work.title}</h3>
          <p className="mt-2 text-sm font-semibold text-[#b27922]">VC-L1 网页启蒙课 · 课堂作品档案</p>
          <p className="mt-2 flex-1 text-sm leading-7 text-[#38517e]">{work.summary}</p>
          <p className="mt-4 text-xs text-[#5f7195]">作品标签：{work.tags.join('｜')}</p>
          <span className="mt-5 inline-flex items-center justify-between rounded-full border border-[#d7ad5c]/35 bg-[#fff8ec]/80 px-4 py-3 text-sm font-bold text-[#0b2d73] transition group-hover:border-[#d49a36]/60 group-hover:bg-[#fff2cf]">
            查看 {work.studentName} 的完整作品 <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

function ThemeDecoration({ id, color, accent }: { id: string; color: string; accent: string }) {
  if (id === 'explorer') return <><span className="absolute right-8 top-20 h-24 w-24 rounded-full border border-[#174c9d]/20" style={{ boxShadow: `0 0 40px ${accent}45` }} /><span className="absolute right-3 top-28 h-12 w-36 rotate-[-18deg] rounded-[100%] border border-[#174c9d]/18" /></>;
  if (id === 'inventor') return <div className="absolute bottom-5 right-5 grid grid-cols-4 gap-1 opacity-45">{[...Array(16)].map((_, index) => <span key={index} className="h-2 w-2 rounded-sm" style={{ backgroundColor: index % 3 ? color : accent }} />)}</div>;
  if (id === 'doctor') return <><span className="absolute right-8 top-24 h-16 w-5 rounded-full bg-sky-200/55" /><span className="absolute right-2 top-29 h-5 w-16 rounded-full bg-sky-200/55" /></>;
  if (id === 'animal') return <div className="absolute bottom-0 right-0 flex items-end gap-1 opacity-45">{[18, 28, 22, 34, 26].map((height, index) => <span key={index} className="w-8 rounded-t-full" style={{ height, backgroundColor: index % 2 ? accent : color }} />)}</div>;
  if (id === 'storyteller') return <div className="absolute bottom-6 right-7 h-20 w-28 rotate-[-8deg] rounded-lg border border-[#d49a36]/30 bg-white/45 shadow-[0_0_35px_rgba(212,154,54,.18)]"><WandSparkles className="mx-auto mt-6 h-7 w-7 text-[#b27922]" /></div>;
  return <span className="absolute right-8 top-24 h-24 w-24 rounded-full border border-[#d49a36]/25" style={{ boxShadow: `0 0 45px ${color}35, inset 0 0 30px ${accent}24` }} />;
}


