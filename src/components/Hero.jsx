import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center py-28">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Available for freelance work
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            Hi, I’m <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">Your Name</span>.
            <br className="hidden sm:block" />
            I build modern web experiences.
          </h1>
          <p className="text-slate-600 text-lg max-w-xl">
            Frontend-focused developer crafting clean, accessible interfaces with React, TypeScript, and delightful micro-interactions.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#projects" className="inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm hover:bg-slate-800 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-white/80 px-5 py-3 text-sm text-slate-900 shadow-sm ring-1 ring-slate-900/10 hover:bg-white">Contact Me</a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-300/30 via-sky-300/20 to-indigo-300/30 blur-3xl pointer-events-none" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white" />
    </section>
  );
}
