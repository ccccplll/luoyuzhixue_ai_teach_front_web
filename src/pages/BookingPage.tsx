import { FormEvent, useState } from 'react';
import { CheckCircle2, Clock, MessageSquareText, ShieldCheck } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export function BookingPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
    window.setTimeout(() => setSubmitted(false), 4200);
  }

  return (
    <PageTransition>
      <section className="relative overflow-hidden px-5 py-16 lg:px-8 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(14,165,233,.24),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(251,191,36,.16),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[.24em] text-[#b27922]/80">Booking</p>
            <h1 className="text-4xl font-bold text-[#0b2d73] md:text-6xl">预约 AI 梦想体验课</h1>
            <p className="mt-6 text-lg leading-9 text-[#38517e]">提交信息后，老师会根据孩子兴趣方向与表达习惯，沟通体验时间与课堂作品主题。</p>
            <div className="mt-9 grid gap-4">
              <Info icon={<ShieldCheck />} title="预约说明" text="提交后老师会根据孩子情况沟通体验课安排。" />
              <Info icon={<Clock />} title="体验安排" text="建议预留 60-90 分钟，让孩子完整经历从想法到作品的过程。" />
              <Info icon={<MessageSquareText />} title="沟通重点" text="老师会了解孩子兴趣、表达习惯与是否接触过编程。" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2.3rem] border border-[#d7ad5c]/30 bg-white/75 p-6 shadow-[0_30px_120px_rgba(14,165,233,.15)] backdrop-blur-xl md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="家长称呼" name="parent" placeholder="例如：李女士" required />
              <Field label="孩子兴趣方向" name="interest" placeholder="例如：动物、游戏、故事、机器人" required />
              <Field label="联系方式" name="contact" placeholder="手机号 / 微信号" required />
              <Field label="希望体验时间" name="time" placeholder="例如：周六下午" required />
              <label className="grid gap-2 md:col-span-2">
                <span className="text-sm font-semibold text-[#0b2d73]">孩子是否有编程基础</span>
                <select name="foundation" className="rounded-2xl border border-[#d7ad5c]/30 bg-[#fff8eb]/80 px-4 py-3 text-[#0b2d73] outline-none transition focus:border-amber-200/60">
                  <option>没有基础，首次体验</option>
                  <option>接触过 Scratch / 图形化编程</option>
                  <option>接触过 Python / Web 入门</option>
                  <option>不确定，希望老师判断</option>
                </select>
              </label>
              <label className="grid gap-2 md:col-span-2">
                <span className="text-sm font-semibold text-[#0b2d73]">备注</span>
                <textarea name="note" rows={5} placeholder="可以简单写写孩子喜欢的主题，例如宇宙、动物、故事、机器人……" className="resize-none rounded-2xl border border-[#d7ad5c]/30 bg-[#fff8eb]/80 px-4 py-3 text-[#0b2d73] outline-none transition placeholder:text-slate-500 focus:border-amber-200/60" />
              </label>
            </div>
            <button className="mt-7 w-full rounded-full bg-gradient-to-r from-[#fff2cf] to-[#f4d58c] px-7 py-4 font-semibold text-[#0b2d73] shadow-[0_18px_60px_rgba(251,191,36,.22)] transition hover:-translate-y-0.5">提交预约信息</button>
            {submitted && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-300/30 bg-emerald-100 p-4 text-emerald-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                <p>预约信息已提交，老师会尽快联系您确认体验课安排。</p>
              </div>
            )}
          </form>
        </div>
      </section>
    </PageTransition>
  );
}

function Field({ label, name, placeholder, required }: { label: string; name: string; placeholder: string; required?: boolean }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-[#0b2d73]">{label}</span>
      <input name={name} placeholder={placeholder} required={required} className="rounded-2xl border border-[#d7ad5c]/30 bg-[#fff8eb]/80 px-4 py-3 text-[#0b2d73] outline-none transition placeholder:text-slate-500 focus:border-amber-200/60" />
    </label>
  );
}

function Info({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex gap-4 rounded-[1.5rem] border border-[#d7ad5c]/30 bg-white/75 p-5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-300/10 text-[#0b2d73]">{icon}</span>
      <div>
        <h3 className="font-semibold text-[#0b2d73]">{title}</h3>
        <p className="mt-1 text-sm leading-7 text-[#38517e]">{text}</p>
      </div>
    </div>
  );
}





