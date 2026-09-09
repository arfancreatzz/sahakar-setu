import React from 'react';
import {
  ShieldCheck,
  ExternalLink,
  PhoneCall,
  Globe,
  Award,
  Heart
} from 'lucide-react';
import { LanguageCode } from '../types';
import { LANGUAGES } from '../data/languages';

interface FooterProps {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  onNavigate: (tab: string) => void;
  onOpenSihInfo: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  setLanguage,
  onNavigate,
  onOpenSihInfo,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Helpline banner strip */}
      <div className="bg-slate-900 border-b border-slate-800/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-200 block text-xs">
                Government Helplines &amp; Citizen Support
              </span>
              <span className="text-[11px] text-slate-400">
                Toll-free telephone assistance across Indian regional languages
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">Kisan Call Centre:</span>
              <span className="font-bold text-emerald-400 font-mono">1800-180-1551</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">PMFBY Claim Grievance:</span>
              <span className="font-bold text-emerald-400 font-mono">14447</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Links Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand & SIH */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-700 flex items-center justify-center text-white font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                SAHAKARSETU AI
              </span>
              <span className="px-1.5 py-0.5 rounded-md bg-orange-500 text-white text-[10px] font-black uppercase">
                v1.0
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your Multilingual Gateway to Cooperative Governance &amp; Rural Services. Designed for
              Smart India Hackathon 2026, Problem Statement 26088 by Team Silent Echo.
            </p>

            <button
              onClick={onOpenSihInfo}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            >
              <Award className="w-4 h-4 text-orange-400" />
              <span>SIH 2026: Team Silent Echo</span>
            </button>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home Gateway
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('chat')} className="hover:text-white transition-colors cursor-pointer">
                  Ask SAHAKARSETU AI
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('schemes')} className="hover:text-white transition-colors cursor-pointer">
                  Government Schemes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pacs')} className="hover:text-white transition-colors cursor-pointer">
                  PACS &amp; Cooperative Desk
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('legal')} className="hover:text-white transition-colors cursor-pointer">
                  Legal &amp; Bye-Laws Help
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Official Government Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://cooperation.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Ministry of Cooperation</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://pmfby.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>PMFBY Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://nabard.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>NABARD Credit Refinance</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://agriwelfare.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>MoA &amp; Farmers Welfare</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Multilingual Selector */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>Language Preference</span>
            </h4>
            <div className="space-y-2">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as LanguageCode)}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 text-xs focus:outline-hidden focus:ring-1 focus:ring-blue-500"
              >
                {LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.flag} {l.nativeLabel} ({l.label})
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-500 leading-snug">
                Supports 8 constitutional languages with voice-synthesis.
              </p>
            </div>
          </div>
        </div>

        {/* Mandatory Legal & Authoritative Source Disclaimer */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 space-y-3 text-[11px] text-slate-500">
          <p className="leading-relaxed">
            <strong className="text-slate-400">Statutory Notice: </strong>
            SAHAKARSETU AI is an informational conversational assistive gateway developed for Smart India
            Hackathon 2026. The responses generated by this system are grounded in official public
            documents, Model Bye-Laws, and gazette notifications. However, this system does not provide
            legally binding legal advice or replace the statutory authority of the Registrar of
            Cooperative Societies, Ministry officials, or designated arbitral tribunals. For disputes,
            refer to the printed gazette or relevant appellate authority.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2">
            <div>
              © 2026 SAHAKARSETU AI • Built for Smart India Hackathon 2026 (Problem Statement 26088)
            </div>
            <div className="text-slate-400">
              Team: <span className="font-semibold text-white">Silent Echo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
