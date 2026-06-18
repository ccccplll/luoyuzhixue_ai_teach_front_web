import { type ReactElement, useMemo, useState } from 'react';
import { AlertTriangle, BookOpen, HeartPulse, Leaf, MessageCircle, Orbit, PawPrint, Rocket, ShieldCheck, Sparkles, SunMedium, TestTube2, WandSparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import type { StudentWork } from '../data/works';

type Panel = 'abilities' | 'seed' | 'letter';

type PreviewTheme = {
  frame: string;
  surface: string;
  text: string;
  muted: string;
  scene: string;
  icon: ReactElement;
  motif: string;
};

function getPreviewTheme(work: StudentWork): PreviewTheme {
  const themes: Record<string, PreviewTheme> = {
    guardian: {
      frame: 'border-[#d7ad5c]/35 bg-[#d49a36]/70',
      surface: 'bg-white/72 border-[#d7ad5c]/28',
      text: 'text-[#0b2d73]',
      muted: 'text-[#38517e]',
      scene: `radial-gradient(circle at 50% 18%, ${work.themeColor}44, transparent 24%), radial-gradient(circle at 18% 20%, ${work.accentColor}22, transparent 28%), linear-gradient(135deg,#fff8ec,#eef5ff 58%,#fff2cf)`,
      icon: <Sparkles className="h-6 w-6" />,
      motif: '守护光芒',
    },
    explorer: {
      frame: 'border-[#d7ad5c]/35 bg-[#d49a36]/70',
      surface: 'bg-white/72 border-[#d7ad5c]/28',
      text: 'text-[#0b2d73]',
      muted: 'text-[#38517e]',
      scene: `radial-gradient(circle at 72% 20%, ${work.accentColor}55, transparent 22%), radial-gradient(circle at 28% 34%, ${work.themeColor}44, transparent 26%), linear-gradient(135deg,#f6f0ff,#eaf4ff 55%,#fff8ec)`,
      icon: <Orbit className="h-6 w-6" />,
      motif: '星球轨道',
    },
    inventor: {
      frame: 'border-[#d7ad5c]/35 bg-[#d49a36]/70',
      surface: 'bg-white/72 border-[#d7ad5c]/28',
      text: 'text-[#0b2d73]',
      muted: 'text-[#38517e]',
      scene: `radial-gradient(circle at 24% 18%, ${work.themeColor}45, transparent 24%), linear-gradient(90deg, rgba(34,211,238,.08) 1px, transparent 1px), linear-gradient(0deg, rgba(34,211,238,.08) 1px, transparent 1px), linear-gradient(135deg,#e9fbff,#eef7ff 58%,#fff8ec)`,
      icon: <TestTube2 className="h-6 w-6" />,
      motif: '未来实验室',
    },
    doctor: {
      frame: 'border-[#d7ad5c]/35 bg-[#d49a36]/70',
      surface: 'bg-white/72 border-[#d7ad5c]/28',
      text: 'text-[#0b2d73]',
      muted: 'text-[#38517e]',
      scene: `radial-gradient(circle at 20% 18%, rgba(255,255,255,.92), transparent 24%), radial-gradient(circle at 82% 20%, ${work.accentColor}55, transparent 28%), linear-gradient(135deg,#eff6ff,#dbeafe 52%,#fff7ed)`,
      icon: <HeartPulse className="h-6 w-6" />,
      motif: '治愈诊室',
    },
    animal: {
      frame: 'border-[#d7ad5c]/35 bg-[#d49a36]/70',
      surface: 'bg-white/72 border-[#d7ad5c]/28',
      text: 'text-[#0b2d73]',
      muted: 'text-[#38517e]',
      scene: `radial-gradient(circle at 22% 12%, ${work.themeColor}45, transparent 24%), radial-gradient(circle at 80% 18%, ${work.accentColor}33, transparent 28%), linear-gradient(135deg,#effdf5,#e7f8dc 52%,#fff8ec)`,
      icon: <Leaf className="h-6 w-6" />,
      motif: '两只猫的温暖小家',
    },
    storyteller: {
      frame: 'border-[#d7ad5c]/35 bg-[#d49a36]/70',
      surface: 'bg-white/72 border-[#d7ad5c]/28',
      text: 'text-[#0b2d73]',
      muted: 'text-[#38517e]',
      scene: `radial-gradient(circle at 50% 16%, ${work.accentColor}33, transparent 24%), radial-gradient(circle at 22% 28%, ${work.themeColor}45, transparent 28%), linear-gradient(135deg,#f6f0ff,#efe7ff 52%,#fff8ec)`,
      icon: <BookOpen className="h-6 w-6" />,
      motif: '魔法书页',
    },
  };
  return themes[work.id] ?? themes.guardian;
}

export function InteractiveWorkPreview({ work }: { work: StudentWork }) {
  const [panel, setPanel] = useState<Panel>('abilities');
  const [activeCat, setActiveCat] = useState<'sun' | 'flash'>('sun');
  const [catClicks, setCatClicks] = useState(0);
  const theme = useMemo(() => getPreviewTheme(work), [work]);

  if (work.id === 'animal') {
    return <CatDreamWebsite work={work} />;
  }
  const panelMap = {
    abilities: {
      title: '已点亮的闪光能力',
      icon: <Sparkles className="h-5 w-5" />,
      content: work.abilities,
    },
    seed: {
      title: '梦想种子计划',
      icon: <Rocket className="h-5 w-5" />,
      content: work.seedPlan,
    },
    letter: {
      title: '收到星光来信',
      icon: <MessageCircle className="h-5 w-5" />,
      content: [work.letter],
    },
  } satisfies Record<Panel, { title: string; icon: ReactElement; content: string[] }>;

  return (
    <section className={`rounded-[2.6rem] border ${theme.frame} p-3 shadow-[0_34px_140px_rgba(14,165,233,.16)] backdrop-blur-xl md:p-5`}>
      <div className="overflow-hidden rounded-[2.25rem] border border-[#d7ad5c]/35 bg-white shadow-[0_24px_90px_rgba(11,45,115,.14)]">
        <div className="flex items-center gap-2 border-b border-[#d7ad5c]/28 bg-[#fff8ec]/85 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-300" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-300" />
          <span className="ml-3 truncate text-xs text-[#38517e]">student-dream-work/{work.id}/published</span>
          <span className="ml-auto hidden rounded-full bg-[#fff2cf] px-3 py-1 text-xs text-[#0b2d73] sm:inline">已发布预览</span>
        </div>

        <div className="relative overflow-hidden bg-[size:52px_52px] px-5 py-8 md:px-8 md:py-10" style={{ background: theme.scene }}>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(11,45,115,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(212,154,54,.065)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
          <ThemeScene id={work.id} color={work.themeColor} accent={work.accentColor} />
          {work.id === 'animal' && <FloatingCatPair activeCat={activeCat} onCatClick={(cat) => { setActiveCat(cat); setCatClicks((value) => value + 1); }} />}
          {[...Array(42)].map((_, index) => (
            <motion.span
              key={index}
              className="absolute h-1 w-1 rounded-full bg-[#d49a36]/70"
              animate={{ opacity: [0.35, 1, 0.45], scale: [0.8, 1.25, 0.9] }}
              transition={{ duration: 2.5 + (index % 5) * 0.4, repeat: Infinity, delay: index * 0.05 }}
              style={{ left: `${(index * 17) % 97}%`, top: `${(index * 31) % 92}%`, boxShadow: `0 0 18px ${index % 2 ? work.accentColor : work.themeColor}` }}
            />
          ))}

          <div className="relative mx-auto max-w-6xl">
            <div className="mb-8 grid gap-6 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
                <span className={`mb-4 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-4 py-2 text-sm backdrop-blur ${theme.text}`}>
                  <span style={{ color: work.themeColor }}>{theme.icon}</span>{theme.motif} · {work.grade}
                </span>
                <h2 className={`text-3xl font-bold tracking-tight md:text-5xl ${theme.text}`}>{work.title}</h2>
                <p className={`mt-4 max-w-2xl text-base leading-8 md:text-lg ${theme.muted}`}>{work.heroText}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <PreviewButton active={panel === 'abilities'} onClick={() => setPanel('abilities')} color={work.themeColor}>点亮闪光能力</PreviewButton>
                  <PreviewButton active={panel === 'seed'} onClick={() => setPanel('seed')} color={work.accentColor}>查看梦想种子</PreviewButton>
                  <PreviewButton active={panel === 'letter'} onClick={() => setPanel('letter')} color={work.themeColor}>收到星光来信</PreviewButton>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }} className={`rounded-[2rem] border p-5 shadow-[0_20px_90px_rgba(2,6,23,.24)] backdrop-blur-md ${theme.surface}`}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl text-3xl shadow-[0_0_34px_rgba(255,255,255,.15)]" style={{ backgroundColor: `${work.themeColor}24`, color: work.themeColor }}>{work.icon}</span>
                  <div>
                    <p className={`text-sm ${theme.muted}`}>我的梦想身份</p>
                    <h3 className={`text-2xl font-semibold ${theme.text}`}>{work.identity}</h3>
                  </div>
                </div>
                <div className="grid gap-3">
                  {work.abilities.map((ability, index) => (
                    <div key={ability} className="rounded-2xl border border-white/12 bg-white/[0.10] p-3">
                      <div className={`mb-2 flex justify-between text-sm ${theme.text}`}><span>{ability}</span><span>{84 + index * 3}%</span></div>
                      <div className="h-2 rounded-full bg-white/18"><motion.div initial={{ width: 0 }} animate={{ width: `${84 + index * 3}%` }} transition={{ duration: 0.7, delay: index * 0.08 }} className="h-2 rounded-full shadow-[0_0_22px_currentColor]" style={{ background: `linear-gradient(90deg, ${work.themeColor}, ${work.accentColor})`, color: work.themeColor }} /></div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <InfoModule title="我的梦想身份" items={[work.identity, ...work.tags.slice(0, 2)]} color={work.themeColor} theme={theme} />
              <InfoModule title="未来的一天" items={work.futureDay.slice(0, 3)} color={work.accentColor} theme={theme} />
              <InfoModule title="成长关键词" items={work.abilities.slice(0, 3)} color={work.themeColor} theme={theme} />
            </div>

            {work.id === 'animal' && <AnimalMeaningBlock activeCat={activeCat} setActiveCat={(cat) => { setActiveCat(cat); setCatClicks((value) => value + 1); }} catClicks={catClicks} />}

            <motion.div key={panel} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }} className={`mt-5 rounded-[1.8rem] border p-5 shadow-[0_18px_80px_rgba(2,6,23,.18)] backdrop-blur-md ${theme.surface}`}>
              <div className={`mb-4 flex items-center gap-3 ${theme.text}`}>
                <span className="grid h-11 w-11 place-items-center rounded-2xl" style={{ backgroundColor: `${work.themeColor}22`, color: work.themeColor }}>{panelMap[panel].icon}</span>
                <h3 className="text-xl font-semibold">{panelMap[panel].title}</h3>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {panelMap[panel].content.map((item) => (
                  <div key={item} className={`rounded-2xl border border-white/12 bg-white/[0.10] p-4 text-sm leading-7 ${theme.text}`}>
                    <SunMedium className="mb-2 h-4 w-4" style={{ color: work.themeColor }} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewButton({ active, onClick, color, children }: { active: boolean; onClick: () => void; color: string; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={`rounded-full border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${active ? 'border-white/20 text-[#0b2d73] shadow-[0_16px_50px_rgba(255,255,255,.12)]' : 'border-[#d7ad5c]/35 bg-white/55 text-[#0b2d73] hover:bg-white/80'}`} style={active ? { backgroundColor: color } : undefined}>
      {children}
    </button>
  );
}

function InfoModule({ title, items, color, theme }: { title: string; items: string[]; color: string; theme: PreviewTheme }) {
  return (
    <div className={`rounded-[1.5rem] border p-5 backdrop-blur-md ${theme.surface}`}>
      <h4 className={`mb-4 font-semibold ${theme.text}`}>{title}</h4>
      <div className="grid gap-2">
        {items.map((item) => (
          <span key={item} className={`rounded-xl border border-white/12 bg-white/[0.10] px-3 py-2 text-sm ${theme.text}`}>
            <span className="mr-2" style={{ color }}>●</span>{item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ThemeScene({ id, color, accent }: { id: string; color: string; accent: string }) {
  if (id === 'explorer') {
    return <><span className="absolute right-[12%] top-[16%] h-28 w-28 rounded-full border border-white/25" style={{ boxShadow: `0 0 55px ${accent}66, inset 0 0 35px ${color}33` }} /><span className="absolute right-[8%] top-[23%] h-16 w-52 rotate-[-18deg] rounded-[100%] border border-white/18" /><span className="absolute left-[10%] bottom-[18%] h-14 w-14 rounded-full" style={{ background: `radial-gradient(circle, ${color}, transparent 68%)` }} /></>;
  }
  if (id === 'inventor') {
    return <><div className="absolute right-8 top-12 grid grid-cols-8 gap-1 opacity-35">{[...Array(56)].map((_, index) => <span key={index} className="h-2 w-2 rounded-sm" style={{ backgroundColor: index % 3 ? color : accent }} />)}</div><span className="absolute bottom-8 left-8 h-28 w-28 rounded-3xl border border-cyan-200/20 bg-cyan-300/10" /></>;
  }
  if (id === 'doctor') {
    return <><span className="absolute right-[12%] top-[20%] h-24 w-7 rounded-full bg-white/45" /><span className="absolute right-[8%] top-[27%] h-7 w-24 rounded-full bg-white/45" /><span className="absolute left-[8%] bottom-[12%] h-20 w-20 rounded-full bg-rose-200/30 blur-xl" /></>;
  }
  if (id === 'animal') {
    return <div className="absolute bottom-0 right-0 flex items-end gap-2 opacity-45">{[80, 130, 105, 160, 120, 92].map((height, index) => <span key={index} className="w-14 rounded-t-full" style={{ height, backgroundColor: index % 2 ? accent : color }} />)}</div>;
  }
  if (id === 'storyteller') {
    return <><div className="absolute bottom-10 right-[10%] h-32 w-48 rotate-[-7deg] rounded-xl border border-amber-200/25 bg-white/10 shadow-[0_0_60px_rgba(250,204,21,.18)]" /><WandSparkles className="absolute right-[18%] top-[18%] h-12 w-12 text-amber-200/60" /></>;
  }
  return <><span className="absolute right-[13%] top-[18%] h-36 w-36 rounded-full border border-amber-200/25" style={{ boxShadow: `0 0 80px ${color}66, inset 0 0 45px ${accent}33` }} /><span className="absolute right-[17%] top-[25%] h-20 w-20 rounded-full" style={{ background: `radial-gradient(circle, ${color}55, transparent 70%)` }} /></>;
}



function AnimalMeaningBlock({ activeCat, setActiveCat, catClicks }: { activeCat: 'sun' | 'flash'; setActiveCat: (cat: 'sun' | 'flash') => void; catClicks: number }) {
  const catMood = activeCat === 'sun' ? { name: '栗子', mood: '英短金渐层｜正在撒娇晒太阳', line: catClicks > 0 ? '喵～你点到我啦！我想蹭蹭手，再继续晒太阳。' : '我是栗子，喜欢窗边暖暖的光，尾巴卷起来像一个小问号。', emoji: '☀️' } : { name: '闪闪', mood: '狸花猫｜纸箱冒险启动', line: catClicks > 0 ? '喵呜！闪闪出现！我要把纸箱变成秘密城堡。' : '我是闪闪，跑得很快，钻进纸箱就是我的秘密基地。', emoji: '⚡' };
  const sections = [
    {
      title: '两只猫档案',
      icon: <PawPrint className="h-5 w-5" />,
      items: ['栗子：英短金渐层，安静，喜欢趴在窗边晒太阳', '闪闪：狸花猫，调皮，最喜欢钻进纸箱里', '共同点：听到脚步声会跑来门口看看'],
    },
    {
      title: '猫咪小房间',
      icon: <ShieldCheck className="h-5 w-5" />,
      items: ['给栗子准备一块暖暖的云朵垫子', '给闪闪设计一个纸箱秘密基地', '放一个会亮的小星星按钮，点一下就说“晚安”'],
    },
    {
      title: '我的网页互动',
      icon: <Sparkles className="h-5 w-5" />,
      items: ['点击按钮切换两只猫的心情', '用卡片记录猫咪今天的小动作', '写一句我想对猫咪说的话'],
    },
  ];
  return (
    <div className="mt-5 rounded-[1.8rem] border border-emerald-300/35 bg-white/72 p-5 shadow-[0_18px_70px_rgba(16,97,64,.12)] backdrop-blur-md">
      <div className="mb-4 flex items-center gap-3 text-[#0b2d73]">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-100 text-emerald-700"><Leaf className="h-5 w-5" /></span>
        <div>
          <h3 className="text-xl font-bold">欢迎来到我的猫咪小家</h3>
          <p className="text-sm text-[#38517e]">这里住着我家的两只猫：英短金渐层栗子和狸花猫闪闪。</p>
        </div>
      </div>
      <div className="mb-4 grid gap-3 md:grid-cols-[1fr_.9fr]">
        <div className="rounded-2xl border border-amber-200/70 bg-[#fff8e7]/80 p-4">
          <p className="text-sm font-bold text-[#76531d]">现在被点亮的猫咪</p>
          <h4 className="mt-1 text-2xl font-bold text-[#0b2d73]">{catMood.emoji} {catMood.name}</h4>
          <p className="mt-2 text-sm font-bold text-emerald-700">{catMood.mood}</p>
          <motion.p key={catMood.line} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-2 text-sm leading-6 text-[#38517e]">{catMood.line}</motion.p>
          {catClicks > 0 && <motion.div key={catClicks} initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mt-3 inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-600">+1 次喵喵回应 ♡</motion.div>}
        </div>
        <div className="grid gap-3 rounded-2xl border border-emerald-200/70 bg-[#f0fff7]/80 p-4">
          <button onClick={() => setActiveCat('sun')} className={`rounded-2xl px-4 py-3 text-left text-sm font-bold transition hover:-translate-y-0.5 ${activeCat === 'sun' ? 'bg-[#fff2cf] text-[#76531d] shadow-md' : 'bg-white/70 text-[#0b2d73]'}`}>☀️ 点点栗子</button>
          <button onClick={() => setActiveCat('flash')} className={`rounded-2xl px-4 py-3 text-left text-sm font-bold transition hover:-translate-y-0.5 ${activeCat === 'flash' ? 'bg-emerald-100 text-emerald-800 shadow-md' : 'bg-white/70 text-[#0b2d73]'}`}>⚡ 点点闪闪</button>
          <p className="text-xs leading-5 text-[#5f7195]">点击不同猫咪，网页会切换它的小心情。</p>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {sections.map((section) => (
          <div key={section.title} className="rounded-2xl border border-emerald-200/70 bg-[#f0fff7]/75 p-4">
            <div className="mb-3 flex items-center gap-2 font-bold text-emerald-800">{section.icon}{section.title}</div>
            <div className="grid gap-2 text-sm leading-6 text-[#38517e]">
              {section.items.map((item) => <p key={item}>• {item}</p>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


function CatDreamWebsite({ work }: { work: StudentWork }) {
  const [activeCat, setActiveCat] = useState<'sun' | 'flash'>('sun');
  const [message, setMessage] = useState('栗子、闪闪，欢迎来到我给你们做的魔法小家。');
  const active = activeCat === 'sun'
    ? { name: '栗子', breed: '英短金渐层', role: '阳光毯子管理员', text: '负责把窗边的阳光踩得软软的，再把温暖分给大家。', color: '#f4c56a', emoji: '☀️' }
    : { name: '闪闪', breed: '狸花猫', role: '纸箱城堡探险家', text: '负责检查每一个纸箱洞口，看看里面有没有秘密通道。', color: '#9ca3af', emoji: '⚡' };

  const wishes = ['希望你们每天都有小鱼干梦', '希望窗边永远有太阳', '希望纸箱城堡不会倒', '希望你们听懂我说喜欢你'];

  return (
    <section className="overflow-hidden rounded-[2.6rem] border border-emerald-200/70 bg-[#f4fff7] p-3 shadow-[0_30px_110px_rgba(16,97,64,.14)] md:p-5">
      <div className="relative overflow-hidden rounded-[2.2rem] border border-white/80 bg-[linear-gradient(135deg,#f2fff7,#fff8dc_55%,#e8f6ff)] px-5 py-8 md:px-8 md:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(52,211,153,.22),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(253,230,138,.34),transparent_28%)]" />
        {[...Array(24)].map((_, index) => <span key={index} className="absolute text-lg opacity-60" style={{ left: `${(index * 31) % 96}%`, top: `${(index * 43) % 88}%` }}>{index % 3 === 0 ? '✦' : index % 3 === 1 ? '♡' : '🐾'}</span>)}

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-emerald-200 bg-white/75 px-4 py-2 text-sm font-bold text-emerald-800">我的梦想网页 · 猫猫童话小屋</span>
              <h2 className="mt-5 text-4xl font-black text-[#0b2d73] md:text-6xl">两只猫的温暖小家</h2>
              <p className="mt-5 max-w-2xl text-lg leading-9 text-[#38517e]">我想成为两只猫的小小记录员。我的工作是观察栗子和闪闪每天的小表情，给它们设计小房间，也把想对它们说的话藏进网页里。</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CatChoice active={activeCat === 'sun'} onClick={() => setActiveCat('sun')}>☀️ 看栗子</CatChoice>
                <CatChoice active={activeCat === 'flash'} onClick={() => setActiveCat('flash')}>⚡ 看闪闪</CatChoice>
                <button onClick={() => setMessage(wishes[Math.floor(Math.random() * wishes.length)])} className="rounded-full border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-bold text-rose-600 transition hover:-translate-y-1">送一句悄悄话</button>
              </div>
            </div>

            <div className="relative min-h-[340px] rounded-[2rem] border border-emerald-200/70 bg-white/72 p-6 shadow-[0_20px_80px_rgba(16,97,64,.12)]">
              <motion.div className="absolute left-8 top-10" animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <BigCuteCat tone="sun" active={activeCat === 'sun'} onClick={() => setActiveCat('sun')} name="栗子" breed="英短金渐层" />
              </motion.div>
              <motion.div className="absolute bottom-8 right-8" animate={{ y: [0, 9, 0], rotate: [0, -2, 0] }} transition={{ duration: 2.4, repeat: Infinity }}>
                <BigCuteCat tone="flash" active={activeCat === 'flash'} onClick={() => setActiveCat('flash')} name="闪闪" breed="狸花猫" />
              </motion.div>
              <motion.div key={message} initial={{ opacity: 0, y: 10, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="absolute left-1/2 top-5 max-w-[230px] -translate-x-1/2 rounded-[1.4rem] border border-[#d7ad5c]/35 bg-[#fff8e7]/90 px-4 py-3 text-center text-sm font-bold leading-6 text-[#76531d] shadow-lg">
                {message}
              </motion.div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <DreamCard title="我的梦想身份" items={['两只猫的小小记录员', '猫猫心情翻译官', '小屋设计师']} />
            <DreamCard title="我想象的工作" items={['记录栗子晒太阳的样子', '检查闪闪的纸箱城堡', '给猫猫写晚安悄悄话']} />
            <DreamCard title="我想对猫猫说" items={['栗子，你像一块暖暖的小面包', '闪闪，你跑起来像一阵风', '你们要一直住在我的故事里']} />
          </div>

          <div className="mt-6 rounded-[2rem] border border-emerald-200/70 bg-white/76 p-5">
            <h3 className="text-2xl font-black text-[#0b2d73]">今天的猫猫童话</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-[.8fr_1.2fr]">
              <div className="rounded-2xl bg-[#fff8e7] p-4">
                <p className="text-sm font-bold text-[#76531d]">现在出场：{active.emoji} {active.name}</p>
                <p className="mt-1 text-xs text-[#5f7195]">{active.breed}</p>
                <h4 className="mt-3 text-xl font-black text-[#0b2d73]">{active.role}</h4>
              </div>
              <motion.p key={active.text} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} className="rounded-2xl bg-[#f0fff7] p-4 text-base leading-8 text-[#38517e]">{active.text}</motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CatChoice({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return <button onClick={onClick} className={`rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-1 ${active ? 'bg-[#0b2d73] text-[#fff4d8] shadow-lg' : 'border border-emerald-200 bg-white/75 text-[#0b2d73]'}`}>{children}</button>;
}

function DreamCard({ title, items }: { title: string; items: string[] }) {
  return <div className="rounded-[1.5rem] border border-emerald-200/70 bg-white/72 p-5 shadow-[0_14px_45px_rgba(16,97,64,.08)]"><h3 className="text-lg font-black text-[#0b2d73]">{title}</h3><div className="mt-3 grid gap-2 text-sm leading-6 text-[#38517e]">{items.map((item) => <p key={item}>♡ {item}</p>)}</div></div>;
}

function BigCuteCat({ tone, active, onClick, name, breed }: { tone: 'sun' | 'flash'; active: boolean; onClick: () => void; name: string; breed: string }) {
  const main = tone === 'sun' ? '#f5c56b' : '#9ca3af';
  const ear = tone === 'sun' ? '#d99a32' : '#6b7280';
  return (
    <button onClick={onClick} className={`relative rounded-[1.7rem] bg-white/80 p-3 shadow-xl transition hover:scale-105 ${active ? 'ring-4 ring-rose-200' : ''}`}>
      <motion.span className="absolute -right-3 -top-3 text-2xl" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.1, repeat: Infinity }}>♡</motion.span>
      <div className="relative h-28 w-28">
        <motion.span className="absolute -right-3 bottom-5 h-6 w-16 origin-left rounded-full" style={{ backgroundColor: main }} animate={{ rotate: [18, 45, 18] }} transition={{ duration: 1, repeat: Infinity }} />
        <span className="absolute left-4 top-2 h-10 w-10 rotate-[-18deg] rounded-tl-3xl border-2 border-white" style={{ backgroundColor: ear }} />
        <span className="absolute right-4 top-2 h-10 w-10 rotate-[18deg] rounded-tr-3xl border-2 border-white" style={{ backgroundColor: ear }} />
        <span className="absolute bottom-2 left-4 h-22 w-22 rounded-[46%] border-2 border-white shadow-inner" style={{ backgroundColor: main }} />
        <span className="cat-eye absolute bottom-16 left-10 h-3 w-3 rounded-full bg-[#0b2d73]" />
        <span className="cat-eye absolute bottom-16 right-10 h-3 w-3 rounded-full bg-[#0b2d73]" />
        <span className="absolute bottom-12 left-[52px] h-3 w-3 rounded-full bg-rose-400" />
        <span className="absolute bottom-9 left-[42px] h-[2px] w-8 rounded-full bg-[#0b2d73]/55" />
        <span className="absolute bottom-12 left-3 h-[1.5px] w-8 rotate-[10deg] bg-[#0b2d73]/35" />
        <span className="absolute bottom-12 right-3 h-[1.5px] w-8 rotate-[-10deg] bg-[#0b2d73]/35" />
      </div>
      <p className="text-sm font-black text-[#0b2d73]">{name}</p>
      <p className="text-[10px] font-bold text-[#76531d]">{breed}</p>
    </button>
  );
}function FloatingCatPair({ activeCat, onCatClick }: { activeCat: 'sun' | 'flash'; onCatClick: (cat: 'sun' | 'flash') => void }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <CartoonCat
        name="栗子"
        breed="英短金渐层"
        tone="sun"
        active={activeCat === 'sun'}
        speech="喵～晒太阳好舒服"
        className="pointer-events-auto absolute left-[3%] top-[12%] hidden md:block"
        onClick={() => onCatClick('sun')}
      />
      <CartoonCat
        name="闪闪"
        breed="狸花猫"
        tone="flash"
        active={activeCat === 'flash'}
        speech="快看我的纸箱城堡！"
        className="pointer-events-auto absolute right-[4%] bottom-[12%] hidden md:block"
        onClick={() => onCatClick('flash')}
      />
    </div>
  );
}

function CartoonCat({ name, breed, tone, active, speech, className, onClick }: { name: string; breed: string; tone: 'sun' | 'flash'; active: boolean; speech: string; className: string; onClick: () => void }) {
  const main = tone === 'sun' ? '#f5c56b' : '#9ca3af';
  const ear = tone === 'sun' ? '#d99a32' : '#6b7280';
  const cheek = tone === 'sun' ? '#ffd6a5' : '#dbeafe';
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`${className} group rounded-[1.6rem] border border-white/80 bg-white/82 p-3 shadow-[0_18px_52px_rgba(11,45,115,.16)] backdrop-blur-md transition ${active ? 'ring-4 ring-rose-200/80' : ''}`}
      animate={{ y: [0, -10, 0], rotate: tone === 'sun' ? [0, 2, 0] : [0, -2, 0] }}
      transition={{ duration: tone === 'sun' ? 3 : 2.35, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.9, rotate: 0 }}
      aria-label={`点击${name}`}
    >
      <motion.div className="absolute -top-9 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#0b2d73] shadow-md group-hover:block" initial={{ opacity: 0, y: 4 }} whileHover={{ opacity: 1, y: 0 }}>
        {speech}
      </motion.div>
      <motion.span className="absolute -right-2 -top-2 text-xl" animate={{ scale: active ? [1, 1.3, 1] : [0.9, 1.05, 0.9], rotate: [0, 10, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>♡</motion.span>
      <div className="relative mx-auto h-24 w-24">
        <motion.span className="absolute -right-2 bottom-4 h-5 w-12 origin-left rounded-full" style={{ backgroundColor: main }} animate={{ rotate: [18, 42, 18] }} transition={{ duration: 1.1, repeat: Infinity }} />
        <span className="absolute left-3 top-2 h-9 w-9 rotate-[-18deg] rounded-tl-3xl border-2 border-white/70" style={{ backgroundColor: ear }} />
        <span className="absolute right-3 top-2 h-9 w-9 rotate-[18deg] rounded-tr-3xl border-2 border-white/70" style={{ backgroundColor: ear }} />
        <span className="absolute bottom-2 left-3 h-[72px] w-[72px] rounded-[46%] border-2 border-white/90 shadow-inner" style={{ backgroundColor: main }} />
        <span className="absolute left-2 top-12 h-5 w-7 rounded-full" style={{ backgroundColor: cheek }} />
        <span className="absolute right-2 top-12 h-5 w-7 rounded-full" style={{ backgroundColor: cheek }} />
        <span className="cat-eye absolute bottom-12 left-8 h-3 w-3 rounded-full bg-[#0b2d73]" />
        <span className="cat-eye absolute bottom-12 right-8 h-3 w-3 rounded-full bg-[#0b2d73]" />
        <span className="absolute bottom-9 left-[43px] h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="absolute bottom-7 left-[34px] h-[2px] w-7 rounded-full bg-[#0b2d73]/55" />
        <span className="absolute bottom-8 left-3 h-[1.5px] w-7 rotate-[8deg] rounded-full bg-[#0b2d73]/35" />
        <span className="absolute bottom-8 right-3 h-[1.5px] w-7 rotate-[-8deg] rounded-full bg-[#0b2d73]/35" />
        <motion.span className="absolute -bottom-1 left-8 rounded-full bg-white/75 px-2 py-0.5 text-[10px] font-bold text-[#76531d]" animate={{ y: active ? [0, -3, 0] : 0 }} transition={{ duration: 0.8, repeat: active ? Infinity : 0 }}>喵～</motion.span>
      </div>
      <div className="mt-1 text-center text-sm font-black text-[#0b2d73]">{name}</div>
      <div className="text-center text-[10px] font-bold text-[#76531d]">{breed}</div>
      <div className="mt-1 text-center text-[10px] text-rose-500">点我撒娇</div>
    </motion.button>
  );
}




