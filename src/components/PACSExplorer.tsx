import React, { useState } from 'react';
import {
  Building2,
  Coins,
  Sprout,
  Tractor,
  Laptop,
  Warehouse,
  Fish,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  FileText,
  Users,
  Vote,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { PACS_SERVICES, PACS_WORKFLOW_STEPS, PACS_MEMBERSHIP_INFO } from '../data/pacsData';

interface PACSExplorerProps {
  onAskAI: (prompt: string) => void;
  onViewDoc: (title: string) => void;
}

export const PACSExplorer: React.FC<PACSExplorerProps> = ({ onAskAI, onViewDoc }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'membership' | 'digital'>('overview');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coins':
        return <Coins className="w-5 h-5 text-amber-600" />;
      case 'Sprout':
        return <Sprout className="w-5 h-5 text-emerald-600" />;
      case 'Tractor':
        return <Tractor className="w-5 h-5 text-blue-600" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-purple-600" />;
      case 'Warehouse':
        return <Warehouse className="w-5 h-5 text-orange-600" />;
      case 'Fish':
        return <Fish className="w-5 h-5 text-cyan-600" />;
      default:
        return <Building2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-emerald-950 text-white p-8 rounded-3xl shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/60 border border-blue-700 text-xs font-semibold text-blue-200">
              <Building2 className="w-3.5 h-3.5 text-orange-400" />
              <span>National Cooperative Movement • Ministry of Cooperation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Primary Agricultural Credit Societies (PACS)
            </h1>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              The grassroot village level cooperative building block connecting 13+ Crore rural citizens
              with credit, subsidized inputs, digital public services, and democratic governance.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => onAskAI('PACS mein member kaise bane aur kya documents chahiye?')}
              className="px-4 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ask about PACS</span>
            </button>
            <button
              onClick={() => onAskAI('What are the statutory voting and inspection rights of a PACS member?')}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition-colors cursor-pointer"
            >
              Understand My Rights
            </button>
          </div>
        </div>

        {/* Sub-tab navigation */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10 text-xs font-semibold">
          {[
            { id: 'overview', label: 'What is PACS?' },
            { id: 'services', label: 'PACS Multipurpose Services' },
            { id: 'membership', label: 'PACS Membership & Rights' },
            { id: 'digital', label: 'Digital PACS & National ERP' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-blue-950 font-bold shadow-xs'
                  : 'text-slate-300 hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Workflow Flowchart */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-blue-950">
              Cooperative Service Delivery Flowchart
            </h2>
            <p className="text-xs text-slate-500">
              End-to-end digital lifecycle from citizen query to benefit realization
            </p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" /> 100% Computerized ERP Workflow
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {PACS_WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-3 relative group hover:border-blue-300 hover:bg-blue-50/40 transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-full bg-blue-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-blue-700 tracking-wider">
                    {step.badge}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  {step.title}
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < PACS_WORKFLOW_STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
            <h3 className="text-xl font-bold text-blue-950">
              Understanding Primary Agricultural Credit Societies
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A Primary Agricultural Credit Society (PACS) is the village-level democratic institution in India’s short-term cooperative credit structure. PACS are affiliated with District Central Cooperative Banks (DCCBs), which are in turn affiliated with State Cooperative Banks (StCBs) and refinanced by NABARD.
            </p>
            <div className="space-y-2 pt-2 text-xs">
              <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-blue-950">Democratic Control:</strong> Every regular member holds one vote regardless of the number of shares held ("One Member, One Vote").
                </div>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-950">Multipurpose Transformation:</strong> Under the Model Bye-Laws 2026, PACS can undertake 25+ activities including CSC centers, dairy, warehouses, and petrol pumps.
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Vote className="w-5 h-5 text-orange-400" />
              <span>Core Pillars of Cooperative Governance</span>
            </h3>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 font-bold">•</span>
                <span>
                  <strong>Annual General Meeting (AGM):</strong> The supreme body of the society consisting of all voting members to approve budgets and audits.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 font-bold">•</span>
                <span>
                  <strong>Managing Committee / Board:</strong> Elected by regular members for a statutory term of 5 years to guide day-to-day policy.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 font-bold">•</span>
                <span>
                  <strong>Independent Statutory Audit:</strong> Mandatory yearly inspection by Cooperative Department auditors with reports tabled at the AGM.
                </span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => onViewDoc('Model Bye-Laws for PACS')}
                className="text-xs font-semibold text-orange-400 hover:text-orange-300 underline cursor-pointer"
              >
                Read Model Bye-Laws Gazette &rarr;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Multipurpose Services */}
      {activeTab === 'services' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-blue-950">
              Modern Multipurpose Activities Delivered via PACS
            </h3>
            <span className="text-xs text-slate-500">
              Model Bye-Laws 2026 Compliant
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACS_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center">
                    {getIcon(srv.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                      {srv.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mt-1">
                      {srv.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                  <span className="font-bold text-slate-800 text-[11px] block">Key Citizen Benefits:</span>
                  <ul className="space-y-1 text-slate-600">
                    {srv.keyBenefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onAskAI(`What is the process to get ${srv.title} at my village PACS?`)}
                    className="w-full mt-2 py-2 text-xs font-semibold text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors cursor-pointer"
                  >
                    Ask AI about {srv.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Membership & Rights */}
      {activeTab === 'membership' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Class A */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-blue-950">
                {PACS_MEMBERSHIP_INFO.regular.name}
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                Full Voting Rights
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {PACS_MEMBERSHIP_INFO.regular.description}
            </p>
            <div className="text-xs space-y-2 pt-2 border-t border-slate-100">
              <div>
                <strong>Eligibility: </strong>
                <span className="text-slate-600">{PACS_MEMBERSHIP_INFO.regular.eligibility}</span>
              </div>
              <div>
                <strong>Share Capital: </strong>
                <span className="text-slate-600">{PACS_MEMBERSHIP_INFO.regular.shareCapital}</span>
              </div>
              <div className="pt-2">
                <strong className="block text-slate-800 mb-1">Guaranteed Member Rights:</strong>
                <ul className="space-y-1 text-slate-600 pl-1">
                  {PACS_MEMBERSHIP_INFO.regular.rights.map((r, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">✓</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Class B */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-800">
                {PACS_MEMBERSHIP_INFO.nominal.name}
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                Non-Voting Service User
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {PACS_MEMBERSHIP_INFO.nominal.description}
            </p>
            <div className="text-xs space-y-2 pt-2 border-t border-slate-100">
              <div>
                <strong>Eligibility: </strong>
                <span className="text-slate-600">{PACS_MEMBERSHIP_INFO.nominal.eligibility}</span>
              </div>
              <div>
                <strong>Share Capital: </strong>
                <span className="text-slate-600">{PACS_MEMBERSHIP_INFO.nominal.shareCapital}</span>
              </div>
              <div className="pt-2">
                <strong className="block text-slate-800 mb-1">Service Entitlements:</strong>
                <ul className="space-y-1 text-slate-600 pl-1">
                  {PACS_MEMBERSHIP_INFO.nominal.rights.map((r, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Digital PACS */}
      {activeTab === 'digital' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-2">
            <h3 className="text-xl font-bold text-blue-950">
              Centrally Sponsored Scheme for Computerization of PACS
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              With a total approved outlay of ₹2,925.39 Crores, the Ministry of Cooperation is onboarding
              63,000+ functional PACS onto a uniform National Cloud ERP.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="text-2xl font-black text-blue-950">79,630</div>
              <div className="text-xs text-slate-600 mt-1">PACS Approved Nationwide</div>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
              <div className="text-2xl font-black text-emerald-950">63,686+</div>
              <div className="text-xs text-slate-600 mt-1">ERP Cloud Onboarded</div>
            </div>
            <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100">
              <div className="text-2xl font-black text-orange-950">₹2,925 Cr</div>
              <div className="text-xs text-slate-600 mt-1">Total Project Outlay</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
