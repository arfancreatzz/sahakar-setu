import React from 'react';
import { X, Award, ShieldCheck, CheckCircle2, Users, Cpu, FileText } from 'lucide-react';

interface SihModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SihModal: React.FC<SihModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden space-y-0">
        <div className="px-6 py-5 bg-gradient-to-r from-blue-950 to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-orange-500/20 text-orange-400 rounded-xl">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-orange-400">
                Smart India Hackathon 2026 Submission
              </div>
              <h3 className="text-base font-bold text-white">
                Problem Statement ID: 26088
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Team Name</span>
              <span className="font-bold text-sm text-blue-950">Silent Echo</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Theme</span>
              <span className="font-bold text-sm text-emerald-900">Agriculture &amp; Rural Development</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 text-slate-800 space-y-1">
            <span className="font-bold text-blue-950 block">Problem Title:</span>
            <p className="font-semibold text-blue-900 leading-snug">
              “Multilingual Cooperative Governance &amp; Legal Assistance Chatbot”
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-slate-900 uppercase tracking-wider text-[10px] block">
              Core Innovations Implemented in Prototype:
            </span>
            <ul className="space-y-1.5 text-slate-600 pl-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Strict Source-Grounded RAG:</strong> Every answer links to Ministry of Cooperation, Model PACS Bye-Laws, and PMFBY circulars.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Safe Abstention Protocol:</strong> Refuses to guess or fabricate deadlines when evidence is missing.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>8 Indic Languages Supported:</strong> Full script translation, dialect phonetic resilience, and speech synthesizer.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>PACS Computerization ERP Alignment:</strong> Mapped to India’s ₹2,925.39 Cr project onboarding 63,686+ PACS.
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors text-xs"
            >
              Close &amp; Explore Prototype
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
