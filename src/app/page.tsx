'use client';
import Link from 'next/link';
import { Shield, TrendingUp, AlertTriangle, Zap, BarChart2, MessageSquare, FlaskConical, Bell, ArrowRight, CheckCircle2, Activity } from 'lucide-react';

const FEATURES = [
  { icon: AlertTriangle, color: 'text-red-400',    bg: 'bg-red-500/10',     border: 'border-red-500/20',     title: 'Anomaly Detection',       desc: 'ML-powered detection of unusual spending patterns with root-cause analysis.' },
  { icon: TrendingUp,    color: 'text-cyan-400',   bg: 'bg-cyan-500/10',    border: 'border-cyan-500/20',    title: 'Cost Forecasting',        desc: '30-day ahead predictions with confidence bands, updated daily.' },
  { icon: Zap,           color: 'text-amber-400',  bg: 'bg-amber-400/10',   border: 'border-amber-400/20',   title: 'Waste Detection',         desc: 'Identify idle instances, unused storage, and underutilized databases.' },
  { icon: BarChart2,     color: 'text-blue-400',   bg: 'bg-blue-500/10',    border: 'border-blue-500/20',    title: 'AI Recommendations',      desc: 'Actionable rightsizing, scheduling, and termination suggestions with savings estimates.' },
  { icon: FlaskConical,  color: 'text-purple-400', bg: 'bg-purple-500/10',  border: 'border-purple-500/20',  title: 'What-If Simulator',       desc: 'Test infrastructure changes and see their cost impact before committing.' },
  { icon: MessageSquare, color: 'text-emerald-400',bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', title: 'AI Cost Assistant',       desc: 'Ask natural-language questions and get instant cost intelligence answers.' },
];

const STATS = [
  { value: '₹11,180', label: 'Potential Monthly Savings', sub: 'Identified across 8 recommendations' },
  { value: '34.5%',   label: 'Cost Increase Detected',    sub: 'vs previous month baseline'           },
  { value: '4',       label: 'Active Anomalies',          sub: '2 Critical · 2 Warning'               },
  { value: '15',      label: 'Resources Monitored',       sub: 'EC2 · RDS · S3 · Lambda · More'       },
];

const FLOW = ['Cloud Infrastructure', 'Data Collection', 'AI Analytics Engine', 'Anomaly · Forecast · Waste', 'Root-Cause Analysis', 'Optimization Engine', 'AI Recommendations', 'Dashboard + Alerts'];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* ── Nav ────────────────────────────────────── */}
      <nav className="border-b border-slate-800/60 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center animate-pulse-glow">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-bold text-white text-lg leading-none">CloudGuard</span>
            <span className="gradient-text font-bold text-lg ml-1">AI</span>
          </div>
        </div>
        <Link href="/dashboard"
          className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-sm px-4 py-2 rounded-lg transition-colors">
          Open Dashboard <ArrowRight size={15} />
        </Link>
      </nav>

      {/* ── Hero ───────────────────────────────────── */}
      <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 text-center overflow-hidden">
        {/* Glow orb */}
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-in">
          <Activity size={12} className="dot-pulse" />
          Real-time Cloud Cost Intelligence · AWS
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 animate-slide-up">
          Intelligent Cloud Cost<br />
          <span className="gradient-text">Detection & Optimization</span>
        </h1>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 animate-fade-in">
          CloudGuard AI monitors your AWS spend 24/7, detects anomalies with ML, forecasts
          future costs, identifies wasted resources, and delivers AI-powered recommendations
          — all from a single intelligent dashboard.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in">
          <Link href="/dashboard"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-7 py-3 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all text-sm">
            <BarChart2 size={16} /> Open Dashboard
          </Link>
          <Link href="/assistant"
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold px-7 py-3 rounded-xl border border-slate-700 hover:border-slate-600 transition-all text-sm">
            <MessageSquare size={16} /> Try AI Assistant
          </Link>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto animate-slide-up">
          {STATS.map(s => (
            <div key={s.label} className="card p-4 text-center">
              <p className="text-2xl font-extrabold gradient-text">{s.value}</p>
              <p className="text-xs font-semibold text-slate-300 mt-1">{s.label}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Everything You Need to Control Cloud Costs</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">From raw AWS billing data to actionable intelligence — all in one platform.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(f => (
            <div key={f.title} className={`card card-hover p-6 border ${f.border}`}>
              <div className={`w-10 h-10 rounded-xl ${f.bg} border ${f.border} flex items-center justify-center mb-4`}>
                <f.icon className={`w-5 h-5 ${f.color}`} />
              </div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Architecture flow ──────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">System Architecture</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">A multi-layer intelligence pipeline from raw cloud data to actionable recommendations.</p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2">
          {FLOW.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className={`px-4 py-2.5 rounded-xl border text-xs font-semibold text-center min-w-[130px] transition-colors ${
                i === 0 ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300' :
                i === FLOW.length - 1 ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' :
                'border-slate-700 bg-slate-900 text-slate-300'
              }`}>
                {step}
              </div>
              {i < FLOW.length - 1 && (
                <ArrowRight size={14} className="text-slate-600 hidden sm:block shrink-0" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Technologies ──────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">Technology Stack</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {[
            ['Python', 'Backend / ML'],['FastAPI', 'REST API'],['React.js', 'Frontend'],
            ['Next.js', 'SSR/Export'],['PostgreSQL', 'Database'],['Scikit-learn', 'ML Engine'],
            ['XGBoost', 'Anomaly Detection'],['AWS CloudWatch', 'Monitoring'],
            ['LLM + RAG', 'AI Assistant'],['Docker', 'Containerization'],
            ['JWT', 'Authentication'],['Tailwind CSS', 'UI'],
          ].map(([name, role]) => (
            <div key={name} className="card p-3 flex items-center gap-3">
              <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-slate-200">{name}</p>
                <p className="text-[10px] text-slate-500">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="card border-gradient-cyan p-10 glow-cyan max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Guard Your Cloud?</h2>
          <p className="text-slate-400 mb-8 text-sm">See your simulated AWS cost intelligence dashboard — complete with anomalies, forecasts, and AI recommendations.</p>
          <Link href="/dashboard"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-8 py-3 rounded-xl shadow-lg transition-all text-sm">
            <Shield size={16} /> Enter CloudGuard Dashboard
          </Link>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────── */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>CloudGuard AI — Intelligent Cloud Cost Intelligence & Optimization Platform</p>
        <p className="mt-1">Built with React · Next.js · TypeScript · Tailwind CSS</p>
      </footer>
    </div>
  );
}
