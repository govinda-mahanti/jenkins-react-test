import { useState, useEffect } from "react";

const stages = [
  { label: "Checkout", status: "✓ Done", cls: "text-green-400 border-green-900 bg-green-950" },
  { label: "Build",    status: "✓ Done", cls: "text-green-400 border-green-900 bg-green-950" },
  { label: "Test",     status: "● Running", cls: "text-yellow-400 border-yellow-800 bg-yellow-950" },
  { label: "Scan",     status: "— Waiting", cls: "text-zinc-500 border-zinc-800" },
  { label: "Deploy",   status: "— Waiting", cls: "text-zinc-500 border-zinc-800" },
];

const features = [
  { icon: "⚙️", title: "Pipeline as Code",   desc: "Define build, test, and deploy steps in a Jenkinsfile using Groovy DSL — versioned alongside your source." },
  { icon: "🔌", title: "1,800+ Plugins",      desc: "Connect to Git, Docker, Kubernetes, AWS, Slack, and virtually every tool your team already uses." },
  { icon: "🌐", title: "Distributed Builds",  desc: "Scale with master/agent architecture. Run jobs in parallel across any OS, VM, or cloud provider." },
  { icon: "🔒", title: "Security Built-in",   desc: "Role-based access control, credential management, and audit logs keep your pipelines safe." },
  { icon: "📊", title: "Rich Observability",  desc: "Real-time logs, test reports, and build history graphs give full visibility into delivery." },
  { icon: "🐳", title: "Cloud Native Ready",  desc: "Spin up ephemeral Docker or Kubernetes agents on demand. Scale to zero when idle." },
];

const TICKER = Array(2).fill([
  "Automate Everything","·","Build","·","Test","·","Deploy","·",
  "Open Source","·","1800+ Plugins","·","CI/CD","·","Pipeline as Code","·",
]).flat();

const stats = [
  { num: "300K+", label: "Active Installations" },
  { num: "1,800+", label: "Plugins Available" },
  { num: "15+",   label: "Years in Production" },
];

export default function App() {
  const [typed, setTyped] = useState("");
  const full = "automation server.";

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i <= full.length) { setTyped(full.slice(0, i)); i++; }
      else clearInterval(id);
    }, 65);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-mono overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-4 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
        <div className="flex items-center gap-2 text-red-500 font-bold tracking-widest text-sm uppercase">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Jenkins
        </div>
        <ul className="hidden md:flex gap-8 text-xs text-zinc-500 uppercase tracking-widest">
          {["Docs","Plugins","Community","Blog"].map(l => (
            <li key={l}><a href="#" className="hover:text-zinc-100 transition-colors">{l}</a></li>
          ))}
        </ul>
        <button className="text-xs uppercase tracking-widest border border-red-600 text-red-500 px-4 py-2 hover:bg-red-600 hover:text-white transition-all">
          Download
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 pt-28 pb-24 border-b border-zinc-800">
        <p className="text-xs text-yellow-400 uppercase tracking-[0.2em] mb-4">// Open Source CI/CD</p>
        <h1 className="text-5xl md:text-8xl font-extrabold leading-none tracking-tight mb-6">
          The leading<br />
          open source<br />
          <span className="text-red-500">{typed}<span className="animate-pulse text-red-400">|</span></span>
        </h1>
        <p className="text-zinc-400 text-sm max-w-md leading-relaxed mb-8">
          Jenkins automates building, testing, and deploying software — so your team ships faster with total confidence.
        </p>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-red-600 hover:bg-red-700 text-white text-xs uppercase tracking-widest px-6 py-3 font-bold transition-all">
            Download 2.504
          </button>
          <button className="border border-zinc-700 hover:border-zinc-400 text-zinc-300 text-xs uppercase tracking-widest px-6 py-3 transition-all">
            Read the Docs →
          </button>
        </div>

        {/* Ticker */}
        <div className="absolute bottom-0 inset-x-0 border-t border-zinc-800 overflow-hidden py-2">
          <div className="flex gap-8 w-max text-[11px] uppercase tracking-widest text-zinc-600"
            style={{ animation: "ticker 22s linear infinite" }}>
            {TICKER.map((t, i) => (
              <span key={i} className={t === "·" ? "text-red-500" : ""}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="grid grid-cols-3 border-b border-zinc-800">
        {stats.map((s, i) => (
          <div key={i} className={`px-8 py-10 ${i < 2 ? "border-r border-zinc-800" : ""}`}>
            <div className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-100">
              {s.num}
            </div>
            <div className="text-[11px] text-zinc-500 uppercase tracking-widest mt-2">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── FEATURES ── */}
      <section className="px-8 md:px-16 py-20 border-b border-zinc-800">
        <p className="text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-10">// Core Capabilities</p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="p-8 border border-zinc-800 -mt-px -ml-px hover:bg-zinc-900 transition-colors cursor-default">
              <div className="text-2xl mb-4">{f.icon}</div>
              <div className="font-bold text-sm mb-2">{f.title}</div>
              <div className="text-xs text-zinc-500 leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PIPELINE DEMO ── */}
      <section className="px-8 md:px-16 py-20 border-b border-zinc-800 bg-zinc-900">
        <p className="text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-4">// Live Pipeline View</p>
        <h2 className="text-xl font-bold mb-8">
          main-branch › build <span className="text-red-500">#847</span>
        </h2>
        <div className="flex items-center overflow-x-auto pb-4 gap-0">
          {stages.map((s, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <div className={`border px-5 py-4 min-w-[120px] text-center ${s.cls}`}>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">{s.label}</div>
                <div className="text-xs font-semibold">{s.status}</div>
              </div>
              {i < stages.length - 1 && (
                <div className="flex items-center flex-shrink-0 w-8">
                  <div className="h-px flex-1 bg-zinc-700" />
                  <span className="text-zinc-600 text-xs">›</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-8 md:px-16 py-28 text-center border-b border-zinc-800"
        style={{ background: "radial-gradient(ellipse at top, rgba(127,29,29,0.15) 0%, transparent 70%)" }}>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Your pipeline,<br />your rules.
        </h2>
        <p className="text-zinc-500 text-sm mb-10">Free. Open source. Community-driven. No vendor lock-in.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-red-600 hover:bg-red-700 text-white text-xs uppercase tracking-widest px-8 py-3 font-bold transition-all">
            Start Automating
          </button>
          <button className="border border-zinc-700 hover:border-zinc-400 text-zinc-300 text-xs uppercase tracking-widest px-8 py-3 transition-all">
            Join the Community
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="flex flex-col md:flex-row items-center justify-between px-8 py-6 gap-4">
        <p className="text-xs text-zinc-600">© 2024 Jenkins Project · Apache License 2.0</p>
        <div className="flex gap-6">
          {["GitHub","Security","Changelog","Governance"].map(l => (
            <a key={l} href="#" className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors">{l}</a>
          ))}
        </div>
      </footer>

      <style>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}