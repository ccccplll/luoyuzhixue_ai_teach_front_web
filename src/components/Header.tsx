import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { BrandMark } from './BrandMark';

const navItems = [
  { label: '首页', href: '/' },
  { label: '课程体系', href: '/course' },
  { label: '课堂作品', href: '/works' },
  { label: '教师管理', href: '/teacher' },
  { label: '预约体验', href: '/booking' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-[#0b2d73] text-[#f8d98a] shadow-[0_10px_28px_rgba(11,45,115,.18)]' : 'text-[#12346e] hover:bg-[#0b2d73]/8 hover:text-[#0b2d73]'}`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#d7ad5c]/30 bg-[#fff8eb]/86 shadow-[0_10px_40px_rgba(11,45,115,.08)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <BrandMark className="h-14 w-14" />
          <span>
            <span className="block text-xl font-bold tracking-wide text-[#0b2d73]">珞喻智学</span>
            <span className="block text-xs font-medium text-[#b27922]">AI科创成长营</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.href} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link to="/booking" className="rounded-full bg-gradient-to-r from-[#0b2d73] to-[#225fb7] px-5 py-2.5 text-sm font-semibold text-[#fff4d8] shadow-[0_14px_36px_rgba(11,45,115,.22)] transition hover:-translate-y-0.5">
            预约体验课
          </Link>
        </div>

        <button className="rounded-xl border border-[#0b2d73]/15 bg-white/60 p-2 text-[#0b2d73] xl:hidden" onClick={() => setOpen((value) => !value)} aria-label="切换导航">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-[#d7ad5c]/25 bg-[#fff8eb]/96 px-5 pb-5 xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 pt-3">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.href} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}


