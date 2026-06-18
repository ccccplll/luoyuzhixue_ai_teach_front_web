import { useMemo, useState } from 'react';
import { categories, featuredFirstWorks, works, type WorkCategory } from '../data/works';
import { PageTransition } from '../components/PageTransition';
import { WorkCard } from '../components/WorkCard';

type GalleryFilter = WorkCategory | '优秀作品';
const galleryFilters: GalleryFilter[] = ['优秀作品', ...categories];

export function WorksPage() {
  const [active, setActive] = useState<GalleryFilter>('优秀作品');
  const filteredWorks = useMemo(() => {
    if (active === '优秀作品') return featuredFirstWorks.filter((work) => work.isFeatured);
    if (active === '全部') return featuredFirstWorks;
    return works.filter((work) => work.category === active).sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured));
  }, [active]);

  return (
    <PageTransition>
      <section className="relative overflow-hidden px-5 py-16 lg:px-8 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_0%,rgba(246,201,112,.34),transparent_34%),radial-gradient(circle_at_82%_14%,rgba(19,76,157,.16),transparent_28%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[.26em] text-[#b27922]">VC-L1 Works Gallery</p>
            <h1 className="text-4xl font-bold text-[#0b2d73] md:text-6xl">VC-L1 课堂作品展厅</h1>
          </div>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {galleryFilters.map((category) => (
              <button key={category} onClick={() => setActive(category)} className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${active === category ? 'border-[#0b2d73] bg-[#0b2d73] text-[#fff4d8]' : 'border-[#d7ad5c]/35 bg-white/75 text-[#0b2d73] hover:border-[#b27922]/50'}`}>
                {category}
              </button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredWorks.map((work) => <WorkCard key={work.id} work={work} featured={work.isFeatured} />)}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}


