import { Link } from 'react-router-dom';
import { BrandMark } from './BrandMark';

export function Footer() {
  return (
    <footer className="border-t border-[#d7ad5c]/35 bg-[#fff4df] px-5 py-12 text-[#12346e] lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <BrandMark className="h-14 w-14" />
            <div>
              <p className="font-bold text-[#0b2d73]">珞喻智学｜AI科创成长营</p>
              <p className="text-sm text-[#76531d]">让孩子把想象力做成可展示的数字作品</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#38517e]">专注 AI 应用、创意编程、网页创作与作品表达，以温和专业的方式陪伴孩子建立面向未来的创造力。</p>
        </div>
        <div>
          <h3 className="mb-3 font-bold text-[#0b2d73]">课程方向</h3>
          <div className="grid gap-2 text-sm text-[#38517e]">
            <Link to="/course" className="hover:text-[#b27922]">VibeCoding 五级体系</Link>
            <Link to="/course#system" className="hover:text-[#b27922]">VC-L1 网页启蒙课</Link>
            <Link to="/works" className="hover:text-[#b27922]">课堂作品展厅</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-bold text-[#0b2d73]">联系方式</h3>
          <div className="grid gap-2 text-sm text-[#38517e]">
            <span>校区咨询：请添加课程顾问微信</span>
            <span>体验安排：工作日 10:00-20:00</span>
            <span>© 2026 珞喻智学</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


