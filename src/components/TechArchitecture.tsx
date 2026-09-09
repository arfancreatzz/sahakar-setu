import React, { useState } from 'react';
import {
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Database,
  Globe,
  Mic,
  ArrowRight,
  GitMerge,
  FileCheck,
  Server,
  Code
} from 'lucide-react';

export const TechArchitecture: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3);

  const pipelineSteps = [
    {
      step: 1,
      title: 'Multimodal Input (Voice / Text)',
      sub: 'Web Speech API & Indic Audio Ingestion',
      icon: <Mic className="w-5 h-5 text-blue-600" />,
      detail:
        'Captures voice or text input across 8 Indic languages and rural dialects. Browser speech recognition or Whisper Indic models perform acoustic speech-to-text tokenization.',
    },
    {
      step: 2,
      title: 'Language Detection & Normalization',
      sub: 'Bhashini / IndicTrans2 Alignment',
      icon: <Globe className="w-5 h-5 text-emerald-600" />,
      detail:
        'Detects script and spoken language, normalizes agricultural idioms (e.g. "Jamabandi", "Khasra-Khatauni", "Boro Dhan"), and extracts core user intent.',
    },
    {
      step: 3,
      title: 'Cooperative Domain Query Classifier',
      sub: 'PACS vs PMFBY vs Legal Intent Routing',
      icon: <Layers className="w-5 h-5 text-purple-600" />,
      detail:
        'Classifies query into statutory silos (PACS Membership, PMFBY Claim, KCC Credit Limit, Dispute Resolution under Section 84) to focus the vector search partition.',
    },
    {
      step: 4,
      title: 'RAG Knowledge Retrieval Engine',
      sub: 'Hybrid Vector Search + BM25 Lexical Matching',
      icon: <Database className="w-5 h-5 text-orange-600" />,
      detail:
        'Searches audited vector embeddings of Ministry of Cooperation gazettes, Model PACS Bye-Laws, and PMFBY operational guidelines. If confidence is <0.40, triggers Safe Abstention.',
    },
    {
      step: 5,
      title: 'Source-Grounded Response Generator',
      sub: 'Gemini 3.8 Flash (Server-Side) with Schema',
      icon: <Cpu className="w-5 h-5 text-blue-800" />,
      detail:
        'Synthesizes plain-language response with strict structured output schema (Summary, Eligibility, Documents, Process, Important Dates, Next Action). Strictly prevents hallucination.',
    },
    {
      step: 6,
      title: 'Citation & Verification Engine',
      sub: 'Ministry Gazette & Section Cross-Check',
      icon: <FileCheck className="w-5 h-5 text-emerald-700" />,
      detail:
        'Appends authoritative citation: Ministry name, Document title, Clause/Section reference, and Last Updated audit date. Attaches "Verified Government Source" badge.',
    },
    {
      step: 7,
      title: 'Text-to-Speech & Accessible Output',
      sub: 'Indic Voice Synthesis & UI Rendering',
      icon: <ShieldCheck className="w-5 h-5 text-cyan-600" />,
      detail:
        'Renders structured card with high contrast, accessibility toggles, and synthesizes audio speech in the user’s native language for low-literacy citizens.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-semibold">
          <Cpu className="w-3.5 h-3.5 text-blue-700" />
          <span>System Specification</span>
          <span>•</span>
          <span>SIH 2026 Problem ID 26088</span>
        </div>
        <h1 className="text-3xl font-extrabold text-blue-950 tracking-tight">
          Technical Architecture &amp; RAG State Machine
        </h1>
        <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
          The end-to-end engineering pipeline converting conversational Indic voice queries into
          verifiable, hallucination-free cooperative governance guidance grounded in official gazettes.
        </p>
      </div>

      {/* Interactive Pipeline Diagram */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-blue-950">
            Interactive 7-Step Grounding Pipeline
          </h2>
          <span className="text-xs text-slate-500 font-mono">
            Click any step to inspect system telemetry
          </span>
        </div>

        {/* Step Buttons Horizontal Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {pipelineSteps.map((item, idx) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                activeStep === idx
                  ? 'bg-blue-900 text-white border-blue-950 shadow-md scale-102 ring-2 ring-blue-400/40'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`w-5 h-5 rounded-full text-[10px] font-bold font-mono flex items-center justify-center ${
                    activeStep === idx ? 'bg-white text-blue-950' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {item.step}
                </span>
                <div className={activeStep === idx ? 'text-white' : ''}>{item.icon}</div>
              </div>
              <div>
                <div className="font-bold text-xs leading-snug">{item.title}</div>
                <div
                  className={`text-[10px] mt-0.5 ${
                    activeStep === idx ? 'text-blue-200' : 'text-slate-500'
                  }`}
                >
                  {item.sub}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Deep Dive Box */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider">
              Step {pipelineSteps[activeStep].step} Deep Dive &amp; Guardrails
            </span>
            <span className="text-xs text-emerald-400 font-mono">
              Status: Verified Deterministic Output
            </span>
          </div>
          <h3 className="text-lg font-bold text-white">
            {pipelineSteps[activeStep].title}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed max-w-4xl">
            {pipelineSteps[activeStep].detail}
          </p>
        </div>
      </div>

      {/* Tech Stack & Trust Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Proposed Tech Stack */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Server className="w-4 h-4 text-blue-700" />
            <span>Production Tech Stack Specification</span>
          </h3>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
              <span className="font-semibold text-slate-800">Frontend Client:</span>
              <span className="font-mono text-slate-600">React 18 + TypeScript + Tailwind CSS</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
              <span className="font-semibold text-slate-800">Server &amp; API Layer:</span>
              <span className="font-mono text-slate-600">Node.js Express (Port 3000)</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
              <span className="font-semibold text-slate-800">Generative Reasoning Model:</span>
              <span className="font-mono text-slate-600">Gemini 3.8 Flash (@google/genai SDK)</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
              <span className="font-semibold text-slate-800">Vector Embeddings &amp; RAG:</span>
              <span className="font-mono text-slate-600">IndicBERT / Text-Embedding-004 + FAISS</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
              <span className="font-semibold text-slate-800">Voice Pipeline:</span>
              <span className="font-mono text-slate-600">Web Speech API + Bhashini AI4Bharat</span>
            </div>
          </div>
        </div>

        {/* Trust & Safety Guardrails */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Trust, Safety &amp; Non-Hallucination Framework</span>
          </h3>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-1">
              <span className="font-bold text-emerald-950 block">1. Safe Abstention Threshold:</span>
              <p className="text-emerald-900 leading-relaxed">
                If the maximum vector similarity score between citizen query and official gazettes is below 0.40, the assistant abstains immediately rather than improvising.
              </p>
            </div>
            <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200 space-y-1">
              <span className="font-bold text-blue-950 block">2. Mandatory Citation Binding:</span>
              <p className="text-blue-900 leading-relaxed">
                Every factual claim regarding subsidy, deadline, or eligibility must link to a verified gazette section before being rendered in the UI.
              </p>
            </div>
            <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-200 space-y-1">
              <span className="font-bold text-purple-950 block">3. Human Officer Fallback:</span>
              <p className="text-purple-900 leading-relaxed">
                Whenever citizen guidance is disputed or unverified, one-click escalation creates a tracking ticket for the District Central Cooperative Bank.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
