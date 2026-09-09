import React, { useState } from 'react';
import {
  Sparkles,
  Mic,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  BookOpen,
  HelpCircle,
  TrendingUp,
  Cpu,
  Layers
} from 'lucide-react';
import { LanguageCode } from '../types';
import { UI_TRANSLATIONS } from '../data/languages';

interface HeroProps {
  language: LanguageCode;
  onAskQuestion: (query: string) => void;
  onOpenVoice: () => void;
  onNavigate: (tab: string) => void;
  onViewDoc: (docTitle: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onAskQuestion,
  onOpenVoice,
  onNavigate,
  onViewDoc,
}) => {
  const [searchInput, setSearchInput] = useState('');
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.hi;

  const demoSuggestions = [
    'मेरी फसल का बीमा कैसे होगा?',
    'PACS में सदस्य कैसे बनें?',
    'PMFBY के लिए कौन eligible है?',
    'How can I access PACS services?',
    'আমার ফসলের বীমা কীভাবে হবে?',
    'PMFBY திட்டத்திற்கு நான் தகுதியானவரா?',
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onAskQuestion(searchInput.trim());
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-16 bg-gradient-to-b from-slate-100/80 via-white to-slate-50 border-b border-slate-200/80">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading, Search Box, Demo Prompts */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Smart India Hackathon 2026 • Problem ID 26088</span>
              <span className="text-slate-400">|</span>
              <span className="text-blue-700 font-bold">Theme: Agriculture &amp; Rural Development</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight leading-[1.15]">
              {t.heroHeading}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              {t.heroSubheading}
            </p>

            {/* Prominent Search/Chat Box */}
            <form
              onSubmit={handleSearchSubmit}
              className="relative p-2 rounded-2xl bg-white border border-slate-300 shadow-xl shadow-slate-200/60 focus-within:ring-3 focus-within:ring-blue-600/30 focus-within:border-blue-700 transition-all"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="flex-1 px-4 py-3 text-sm sm:text-base text-slate-800 placeholder:text-slate-400 focus:outline-hidden bg-transparent"
                />

                <div className="flex items-center gap-1.5 self-end sm:self-auto shrink-0">
                  <button
                    type="button"
                    onClick={onOpenVoice}
                    className="p-3 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl border border-slate-200 transition-all cursor-pointer"
                    title="Speak in your native dialect"
                  >
                    <Mic className="w-5 h-5 text-emerald-600" />
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-3 bg-blue-900 hover:bg-blue-950 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>{t.btnAskAi}</span>
                    <ArrowRight className="w-4 h-4 text-orange-400" />
                  </button>
                </div>
              </div>
            </form>

            {/* Example Suggestion Chips */}
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>Try Asking These Verified Questions:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {demoSuggestions.map((promptText, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => onAskQuestion(promptText)}
                    className="px-3 py-1.5 rounded-lg bg-white hover:bg-blue-50 border border-slate-200 text-xs font-medium text-slate-700 hover:text-blue-900 transition-all hover:border-blue-300 shadow-2xs text-left"
                  >
                    “{promptText}”
                  </button>
                ))}
              </div>
            </div>

            {/* Subtle Trust Statement */}
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t.trustStatement}</span>
            </div>
          </div>

          {/* Right Column: Visual AI Assistant Card & Live RAG Pipeline */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-900 text-white p-6 shadow-2xl border border-slate-800 overflow-hidden">
              {/* Top Card Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      RAG Architecture Pipeline
                    </h3>
                    <p className="text-[11px] text-slate-400 font-mono">
                      State-Machine Verification Engine
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3" /> Grounded Active
                </span>
              </div>

              {/* Sample Grounded Card */}
              <div className="space-y-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1.5">
                  <div className="text-[10px] uppercase font-bold text-orange-400 tracking-wider">
                    Query Context: PMFBY Crop Insurance
                  </div>
                  <div className="font-medium text-slate-200">
                    “मेरी फसल का बीमा कैसे होगा?”
                  </div>
                </div>

                {/* Verification Pipeline Steps */}
                <div className="space-y-2 py-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1 font-semibold uppercase tracking-wider">
                    <span>Retrieval &amp; Grounding Status</span>
                    <span className="text-emerald-400 font-mono">100% Audited</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Source Identified</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">MoA&amp;FW Circular 2026</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Statutory Clauses Retrieved</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">Chapter II &amp; IV</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Safe Verification Passed</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400">No Hallucination</span>
                    </div>
                  </div>
                </div>

                {/* Grounded Citation Preview */}
                <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-800/50 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-300 text-[11px]">Authoritative Citation:</span>
                    <button
                      onClick={() => onViewDoc('Pradhan Mantri Fasal Bima Yojana')}
                      className="text-[10px] text-blue-400 hover:text-blue-300 underline font-medium cursor-pointer"
                    >
                      View Source
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-300 italic">
                    “Computerization of Primary Agricultural Credit Societies &amp; PMFBY Operational Guidelines 2026”
                  </p>
                </div>

                {/* Quick Action Navigation */}
                <div className="pt-2 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onNavigate('schemes')}
                    className="py-2 px-3 text-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Explore Schemes
                  </button>
                  <button
                    onClick={() => onNavigate('pacs')}
                    className="py-2 px-3 text-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    PACS Guide &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
