import React, { useState } from 'react';
import {
  Scale,
  AlertTriangle,
  FileCheck,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  ExternalLink,
  BookOpen,
  Filter,
  CheckCircle2,
  Info
} from 'lucide-react';
import { LEGAL_TOPICS, LEGAL_CATEGORIES, MANDATORY_LEGAL_DISCLAIMER } from '../data/legalData';

interface LegalGuidanceProps {
  onAskAI: (prompt: string) => void;
  onViewDoc: (title: string) => void;
  onEscalate: () => void;
}

export const LegalGuidance: React.FC<LegalGuidanceProps> = ({
  onAskAI,
  onViewDoc,
  onEscalate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All Guidance');

  const filteredTopics = LEGAL_TOPICS.filter((topic) => {
    if (selectedCategory === 'All Guidance') return true;
    return topic.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-900 border border-purple-200 text-xs font-semibold">
          <Scale className="w-3.5 h-3.5 text-purple-700" />
          <span>Statutory Cooperative Law &amp; Citizen Guidance</span>
        </div>
        <h1 className="text-3xl font-extrabold text-blue-950 tracking-tight">
          Legal &amp; Cooperative Governance Guidance
        </h1>
        <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
          Plain-language summaries of member rights, election procedures, dispute resolution
          mechanisms under Section 84 of the MSCS Act, and statutory remedies for arbitrary denial of services.
        </p>
      </div>

      {/* Mandatory Prominent Legal Disclaimer */}
      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs flex items-start gap-3 shadow-xs">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-bold text-amber-950 uppercase tracking-wider text-[11px]">
            Official Compliance &amp; Non-Legal Counsel Disclaimer
          </div>
          <p className="text-amber-900 leading-relaxed font-medium">
            “{MANDATORY_LEGAL_DISCLAIMER}”
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap items-center gap-1.5 p-2 bg-white rounded-2xl border border-slate-200 shadow-xs">
        {LEGAL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-blue-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Legal Topics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTopics.map((topic) => (
          <div
            key={topic.id}
            className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                  {topic.category}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {topic.actName}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {topic.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                {topic.summary}
              </p>

              {/* Statutory Reference Rule */}
              <div className="text-xs text-blue-900 font-medium bg-blue-50/60 p-2.5 rounded-lg border border-blue-100">
                <span className="font-bold">Official Statutory Rule: </span>
                <span>{topic.officialRuleRef}</span>
              </div>

              {/* Practical Guidance */}
              <div className="space-y-1.5 pt-1 text-xs">
                <span className="font-bold text-slate-800 uppercase tracking-wider text-[10px] block">
                  Actionable Guidance &amp; Citizen Protections:
                </span>
                <ul className="space-y-1 text-slate-600 pl-1">
                  {topic.practicalGuidance.map((guide, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold shrink-0">✓</span>
                      <span>{guide}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Statutory Remedy */}
              <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 text-xs text-emerald-950">
                <strong className="font-bold text-emerald-900 block mb-0.5">Statutory Remedy / Escalation Path:</strong>
                <span>{topic.remedyAction}</span>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onViewDoc(topic.actName)}
                  className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  Find Official Rule
                </button>
                <button
                  type="button"
                  onClick={onEscalate}
                  className="px-3 py-1.5 text-xs font-medium text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200 transition-colors cursor-pointer"
                >
                  Escalate
                </button>
              </div>

              <button
                type="button"
                onClick={() => onAskAI(`What is the legal process and rights regarding: ${topic.title}?`)}
                className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>Ask AI</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
