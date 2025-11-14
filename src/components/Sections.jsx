import { Code2, Rocket, Sparkles, Github, Linkedin, Mail, Globe } from 'lucide-react';

export default function Sections() {
  return (
    <>
      <section id="about" className="relative py-24">
        <div className="absolute inset-0 -z-0">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-indigo-50 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-indigo-600">
                <Sparkles className="h-4 w-4" /> About me
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Passionate about building delightful products</h2>
              <p className="text-slate-600 leading-relaxed">
                I’m a web developer focused on turning complex problems into intuitive, beautiful interfaces. I care about accessibility, performance, and the details that make products feel alive.
              </p>
              <div className="flex gap-3 pt-2">
                <a href="#contact" className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm">Hire me</a>
                <a href="#projects" className="rounded-full ring-1 ring-slate-900/10 px-4 py-2 text-sm">See work</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["React","TypeScript","Tailwind","Framer Motion"].map((skill) => (
                <div key={skill} className="rounded-xl border bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400" />
                    <div className="font-medium text-slate-800">{skill}</div>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">Production experience delivering polished UI.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-indigo-600">
                <Rocket className="h-4 w-4" /> Featured projects
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Things I’ve built</h2>
            </div>
            <a href="#contact" className="hidden sm:inline-flex rounded-full ring-1 ring-slate-900/10 px-4 py-2 text-sm">Request portfolio</a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <a key={i} href="#" className="group rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-100 to-slate-200" />
                <div className="mt-3">
                  <div className="flex items-center gap-2 text-sm text-slate-500"><Globe className="h-4 w-4" /> Website</div>
                  <h3 className="mt-1 font-semibold text-slate-900 group-hover:text-indigo-600">
                    Project Title {i}
                  </h3>
                  <p className="text-sm text-slate-600">Short description of the project, stack, and result.</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['React','Tailwind','API'].map(t => (
                    <span key={t} className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-1 text-xs text-slate-700 ring-1 ring-slate-900/5">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative py-24 bg-gradient-to-b from-transparent via-sky-50 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-indigo-600">
              <Code2 className="h-4 w-4" /> Skills
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">What I use daily</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {title:'Frontend', items:['React','Next.js','Vite','Tailwind CSS','Framer Motion']},
              {title:'Backend', items:['Node','Express','FastAPI','MongoDB']},
              {title:'Testing & QA', items:['Jest','Playwright','Vitest']},
              {title:'Tools', items:['Git','Figma','Vercel','Docker']},
            ].map((card) => (
              <div key={card.title} className="rounded-xl border bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">{card.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {card.items.map((it) => (
                    <span key={it} className="rounded-md bg-slate-50 px-2 py-1 text-xs ring-1 ring-slate-900/5">{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Let’s build something great</h2>
          <p className="mt-3 text-slate-600">Have a question or a project in mind? I’d love to hear about it.</p>
          <form className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
            <input className="w-full rounded-lg border px-4 py-3 ring-1 ring-slate-900/10 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Name" />
            <input className="w-full rounded-lg border px-4 py-3 ring-1 ring-slate-900/10 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email" />
            <textarea className="sm:col-span-2 w-full rounded-lg border px-4 py-3 ring-1 ring-slate-900/10 focus:outline-none focus:ring-2 focus:ring-indigo-500" rows="5" placeholder="Tell me about your project" />
            <button type="button" className="sm:col-span-2 rounded-full bg-slate-900 text-white px-5 py-3 hover:bg-slate-800 transition">Send message</button>
          </form>
          <div className="mt-6 flex items-center justify-center gap-5 text-slate-600">
            <a aria-label="GitHub" href="#" className="hover:text-slate-900"><Github /></a>
            <a aria-label="LinkedIn" href="#" className="hover:text-slate-900"><Linkedin /></a>
            <a aria-label="Email" href="#" className="hover:text-slate-900"><Mail /></a>
          </div>
        </div>
      </section>
    </>
  );
}
