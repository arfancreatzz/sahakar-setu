import React from 'react';
import {
  Mic,
  Brain,
  Database,
  Sparkles,
  CheckSquare,
  ArrowRight
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'SPEAK / ASK',
      desc: 'Citizen asks in their native language or rural dialect using natural voice or text.',
      icon: <Mic className="w-5 h-5 text-blue-600" />,
      tag: 'Multilingual Ingestion',
    },
    {
      number: '02',
      title: 'UNDERSTAND',
      desc: 'System detects script, normalizes rural terminology, and maps legal intent.',
      icon: <Brain className="w-5 h-5 text-purple-600" />,
      tag: 'Intent Classifier',
    },
    {
      number: '03',
      title: 'RETRIEVE',
      desc: 'RAG searches audited gazettes, Model PACS Bye-Laws, and Ministry of Cooperation circulars.',
      icon: <Database className="w-5 h-5 text-orange-600" />,
      tag: 'Hybrid Vector Search',
    },
    {
      number: '04',
      title: 'EXPLAIN',
      desc: 'Synthesizes plain-language guidance with structured eligibility, documents, and timelines.',
      icon: <Sparkles className="w-5 h-5 text-emerald-600" />,
      tag: 'Grounded Output',
    },
    {
      number: '05',
      title: 'NEXT STEP',
      desc: 'Delivers an actionable checklist, official source citations, and human escalation path.',
      icon: <CheckSquare className="w-5 h-5 text-blue-800" />,
      tag: 'Citizen Fulfillment',
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            System Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
            How SAHAKARSETU AI Works
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            From raw conversational voice input to audited, source-grounded government guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3 hover:border-blue-300 hover:bg-blue-50/30 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-slate-400 group-hover:text-blue-700 transition-colors">
                    {s.number}
                  </span>
                  <div className="p-2 rounded-xl bg-white shadow-2xs border border-slate-200">
                    {s.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-black tracking-wider text-slate-900 uppercase">
                    {s.title}
                  </h3>
                  <span className="text-[10px] font-semibold text-blue-700 block mt-0.5">
                    {s.tag}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
