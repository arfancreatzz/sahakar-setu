import React from 'react';
import {
  User,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Bookmark,
  Sparkles,
  Settings,
  Globe,
  Mic,
  Eye,
  Download,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { LanguageCode, ChatMessage } from '../types';
import { LANGUAGES } from '../data/languages';

interface UserDashboardProps {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  simpleMode: boolean;
  setSimpleMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onAskAI: (prompt: string) => void;
  savedAnswers: ChatMessage[];
  onNavigate: (tab: string) => void;
  onViewDoc: (title: string) => void;
}

export const UserDashboard: React.FC<UserDashboardProps> = ({
  language,
  setLanguage,
  simpleMode,
  setSimpleMode,
  onAskAI,
  savedAnswers,
  onNavigate,
  onViewDoc,
}) => {
  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  const quickActions = [
    {
      title: 'Check PMFBY Status',
      desc: 'Verify crop insurance enrollment & survey acknowledgment',
      prompt: 'How to check my PMFBY Kharif 2026 crop insurance application status?',
      color: 'bg-emerald-50 text-emerald-900 border-emerald-200',
    },
    {
      title: 'Apply for PACS Membership',
      desc: 'Step-by-step Class A voting member registration',
      prompt: 'PACS mein member kaise bane aur Form 1 kaise bhare?',
      color: 'bg-blue-50 text-blue-900 border-blue-200',
    },
    {
      title: 'Download Application Forms',
      desc: 'Form 1, KCC loan requisition & nominee slips',
      docName: 'Model Bye-Laws for PACS',
      color: 'bg-purple-50 text-purple-900 border-purple-200',
    },
    {
      title: 'Ask AI Any Question',
      desc: 'Multilingual cooperative law and grievance navigation',
      action: () => onNavigate('chat'),
      color: 'bg-orange-50 text-orange-900 border-orange-200',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Citizen ID Header Card */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-emerald-500 text-white flex items-center justify-center font-bold text-2xl shadow-md">
            RK
          </div>
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified PACS Shareholder
            </div>
            <h1 className="text-2xl font-bold tracking-tight">
              Welcome back, Rajesh Kumar
            </h1>
            <p className="text-xs text-slate-300 font-mono">
              Kisan ID: PB-PACS-8821 • Sangrur Central Cooperative Bank Affiliation
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          <div className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-slate-200">
            <span className="text-slate-400 block text-[10px]">PACS Shareholding</span>
            <span className="font-bold text-white">10 Shares (₹1,000)</span>
          </div>
          <div className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-slate-200">
            <span className="text-slate-400 block text-[10px]">KCC Credit Limit</span>
            <span className="font-bold text-emerald-400">₹1,60,000 Active</span>
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-blue-950">Quick Citizen Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border ${action.color} flex flex-col justify-between space-y-3 shadow-2xs hover:shadow-md transition-all`}
            >
              <div>
                <h3 className="text-sm font-bold">{action.title}</h3>
                <p className="text-xs opacity-80 mt-1 leading-relaxed">{action.desc}</p>
              </div>

              {action.prompt ? (
                <button
                  type="button"
                  onClick={() => onAskAI(action.prompt)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold underline cursor-pointer"
                >
                  <span>Trigger Guidance</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : action.docName ? (
                <button
                  type="button"
                  onClick={() => onViewDoc(action.docName!)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold underline cursor-pointer"
                >
                  <span>View Forms</span>
                  <FileText className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={action.action}
                  className="inline-flex items-center gap-1.5 text-xs font-bold underline cursor-pointer"
                >
                  <span>Open AI Chat</span>
                  <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Saved Documents & Bookmarked Guidance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Saved Answers */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-amber-600" />
              <span>Saved Answers &amp; Guidance ({savedAnswers.length})</span>
            </h3>
            <button
              type="button"
              onClick={() => onNavigate('chat')}
              className="text-xs text-blue-700 hover:underline font-semibold"
            >
              Go to Chat
            </button>
          </div>

          {savedAnswers.length === 0 ? (
            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-500 space-y-2">
              <p>You have not bookmarked any answers yet.</p>
              <p className="text-[11px] text-slate-400">
                Click the bookmark icon on any AI response in the chat to save it for offline review.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {savedAnswers.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1"
                >
                  <div className="font-semibold text-slate-900">
                    {item.structuredData?.summary || item.text}
                  </div>
                  {item.citation && (
                    <div className="text-[11px] text-emerald-800 flex items-center gap-1 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{item.citation.documentTitle}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Preferences & Accessibility Panel */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-5">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Settings className="w-4 h-4 text-slate-700" />
            <span>Workspace Accessibility &amp; Language Settings</span>
          </h3>

          <div className="space-y-4 text-xs">
            {/* Language Selector */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="space-y-0.5">
                <span className="font-bold text-slate-800 block">Primary Spoken &amp; Reading Language</span>
                <span className="text-slate-500 text-[11px]">Currently set to: {currentLang.nativeLabel}</span>
              </div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as LanguageCode)}
                className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white font-semibold text-xs focus:outline-hidden"
              >
                {LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.flag} {l.nativeLabel} ({l.label})
                  </option>
                ))}
              </select>
            </div>

            {/* Simple Mode Toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="space-y-0.5">
                <span className="font-bold text-slate-800 block">Simple Mode (High Contrast &amp; Large Touch Targets)</span>
                <span className="text-slate-500 text-[11px]">Recommended for rural kiosk touchscreens and senior farmers</span>
              </div>
              <button
                type="button"
                onClick={() => setSimpleMode((prev) => !prev)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  simpleMode
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {simpleMode ? 'Enabled' : 'Disabled'}
              </button>
            </div>

            {/* Helpline Contacts */}
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-950 space-y-1">
              <span className="font-bold block">Need In-Person Support?</span>
              <p className="text-[11px] leading-relaxed">
                Visit Sangrur PACS Sub-Office, Sector 4, or dial Toll-Free 1800-180-1551 for assisted telephone enrollment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
