import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Award } from 'lucide-react';
import { getWorkById, works } from '../data/works';
import { PageTransition } from '../components/PageTransition';
import { InteractiveWorkPreview } from '../components/InteractiveWorkPreview';
import { WorkCard } from '../components/WorkCard';

export function WorkDetailPage({ forcedId }: { forcedId?: string }) {
  const { id } = useParams();
  const work = getWorkById(forcedId ?? id);

  useEffect(() => {
    if (work) {
      document.title = `${work.title}｜珞喻智学课堂作品`;
    }
  }, [work]);

  if (!work) return <Navigate to="/works" replace />;

  const recommendations = works.filter((item) => item.id !== work.id && item.isFeatured).slice(0, 3);

  return (
    <PageTransition>
      <section className="px-5 py-8 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-4 rounded-[1.8rem] border border-[#d7ad5c]/30 bg-white/78 p-5 shadow-[0_18px_60px_rgba(11,45,115,.08)] backdrop-blur-md lg:flex-row lg:items-center lg:justify-between">
            <div>
              <Link to="/works" className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#174c9d] hover:text-[#b27922]"><ArrowLeft className="h-4 w-4" /> 返回作品展厅</Link>
              <div className="flex flex-wrap items-center gap-2">
                {work.isFeatured && <span className="inline-flex items-center gap-2 rounded-full border border-[#d49a36]/45 bg-[#fff2cf] px-3 py-1.5 text-xs font-bold text-[#76531d]"><Award className="h-3.5 w-3.5" />{work.honorTitle}</span>}
                <span className="rounded-full bg-[#0b2d73]/8 px-3 py-1.5 text-xs font-bold text-[#0b2d73]">这位小朋友 · {work.grade}</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-800">{work.type}</span>
              </div>
            </div>
            <div className="text-left lg:text-right">
              <p className="text-sm font-semibold text-[#76531d]">正在参观小朋友完成的网页作品</p>
              <h1 className="mt-1 text-2xl font-bold text-[#0b2d73] md:text-3xl">{work.title}</h1>
            </div>
          </div>

          <InteractiveWorkPreview work={work} />

          <section className="mt-12">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[.22em] text-[#b27922]">More Works</p>
                <h2 className="mt-2 text-2xl font-bold text-[#0b2d73] md:text-3xl">继续参观其他小朋友作品</h2>
              </div>
              <Link to="/works" className="hidden rounded-full border border-[#d7ad5c]/35 bg-white/75 px-5 py-2.5 text-sm font-bold text-[#0b2d73] md:inline-flex">回到作品展厅</Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {recommendations.map((item) => <WorkCard key={item.id} work={item} featured={item.isFeatured} />)}
            </div>
          </section>
        </div>
      </section>
    </PageTransition>
  );
}
