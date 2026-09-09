import React from 'react';
import {
  Milestone,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Target,
  ShieldCheck,
  Award
} from 'lucide-react';

export const Roadmap: React.FC = () => {
  const phases = [
    {
      phase: 'Phase 01',
      title: 'MVP & Core Knowledge Grounding',
      timeline: 'Months 1 - 3 (Current Prototype)',
      status: 'Completed / Active',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      highlights: [
        '8 Phase-1 Indic languages supported (Hindi, English, Bengali, Marathi, Tamil, Telugu, Gujarati, Kannada)',
        'Ministry of Cooperation, Model PACS Bye-Laws & PMFBY gazettes indexed',
        'Conversational structured RAG chatbot with deterministic schema',
        'Mandatory citation binding & safe abstention guardrail',
        'Human escalation ticket logging system'
      ],
    },
    {
      phase: 'Phase 02',
      title: 'Voice & Vernacular Dialect Expansion',
      timeline: 'Months 4 - 6',
      status: 'Next Milestone',
      statusColor: 'bg-blue-100 text-blue-800 border-blue-300',
      highlights: [
        'End-to-end Bhashini / IndicTrans2 speech synthesis pipeline',
        'Acoustic adaptation for agricultural idioms & village dialects',
        'WhatsApp & Telegram conversational bot integrations',
        'Low-bandwidth offline mode for remote panchayats'
      ],
    },
    {
      phase: 'Phase 03',
      title: 'Field Integration & PACS Pilots',
      timeline: 'Months 7 - 12',
      status: 'Planned Pilot',
      statusColor: 'bg-amber-100 text-amber-800 border-amber-300',
      highlights: [
        'Kiosk deployment in 500+ pilot computerized PACS across 5 States',
        'Integration with National PACS Cloud ERP & member ledger',
        'Assisted self-service CSC enrollment terminals',
        'District Central Cooperative Bank (DCCB) escalation workflow'
      ],
    },
    {
      phase: 'Phase 04',
      title: 'National Scale & Enterprise Federation',
      timeline: 'Year 2 Onwards',
      status: 'Vision Scale',
      statusColor: 'bg-purple-100 text-purple-800 border-purple-300',
      highlights: [
        'Expansion to all 22 Eighth Schedule Indian constitutional languages',
        'Direct API handshake with PM-KISAN, e-NAM and State Land Records',
        'Voice-first IVR telephone helpline (toll-free integration)',
        'Automated proactive scheme eligibility notification for farmers'
      ],
    },
  ];

  const metrics = [
    {
      metric: 'Answer Grounding Quality',
      target: '≥ 99.0%',
      desc: 'Zero hallucinated schemes or incorrect statutory legal clauses.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    },
    {
      metric: 'Citation Accuracy',
      target: '100%',
      desc: 'All government claims must cite official ministry gazette and section.',
      icon: <CheckCircle2 className="w-5 h-5 text-blue-600" />,
    },
    {
      metric: 'Multilingual Latency',
      target: '< 600 ms',
      desc: 'Instant interactive response time even on 3G/4G rural mobile networks.',
      icon: <Clock className="w-5 h-5 text-purple-600" />,
    },
    {
      metric: 'Safe Abstention Compliance',
      target: '100%',
      desc: 'Clear refusal and human escalation when verified evidence is absent.',
      icon: <Target className="w-5 h-5 text-orange-600" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-semibold">
          <Milestone className="w-3.5 h-3.5 text-blue-700" />
          <span>Strategic Execution Strategy</span>
          <span>•</span>
          <span>Smart India Hackathon 2026</span>
        </div>
        <h1 className="text-3xl font-extrabold text-blue-950 tracking-tight">
          Implementation Roadmap &amp; Success Metrics
        </h1>
        <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
          Phased trajectory from current Smart India Hackathon prototype to nationwide field deployment
          across 63,000+ computerized Primary Agricultural Credit Societies.
        </p>
      </div>

      {/* 4-Phase Roadmap Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phases.map((p, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-blue-900">{p.phase}</span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${p.statusColor}`}
                >
                  {p.status}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {p.title}
              </h3>

              <div className="text-xs text-slate-400 font-medium">{p.timeline}</div>

              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                {p.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold shrink-0">•</span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Evaluation Framework & Success Metrics */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <h2 className="text-xl font-bold tracking-tight">
              Evaluation Framework &amp; Benchmark Criteria
            </h2>
            <p className="text-xs text-slate-400">
              Measurable Key Performance Indicators (KPIs) defining pilot readiness
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
            <Award className="w-3.5 h-3.5" /> SIH 2026 Evaluation Matrix
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-800/70 border border-slate-700/80 space-y-2"
            >
              <div className="w-8 h-8 rounded-xl bg-slate-700/70 flex items-center justify-center">
                {m.icon}
              </div>
              <div className="text-2xl font-black text-white">{m.target}</div>
              <div className="text-xs font-bold text-slate-200">{m.metric}</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
