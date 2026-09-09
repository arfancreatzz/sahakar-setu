import React from 'react';
import {
  TrendingUp,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Globe,
  Database,
  Cpu,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { OFFICIAL_DOCUMENTS } from '../data/knowledgeData';

export const AdminDashboard: React.FC = () => {
  const languageDistribution = [
    { lang: 'Hindi (हिन्दी)', share: '46%', queries: '1,42,800' },
    { lang: 'Bengali (বাংলা)', share: '16%', queries: '49,600' },
    { lang: 'Marathi (मराठी)', share: '14%', queries: '43,400' },
    { lang: 'Telugu (తెలుగు)', share: '8%', queries: '24,800' },
    { lang: 'Tamil (தமிழ்)', share: '6%', queries: '18,600' },
    { lang: 'Gujarati (ગુજરાતી)', share: '5%', queries: '15,500' },
    { lang: 'Kannada (ಕನ್ನಡ)', share: '3%', queries: '9,300' },
    { lang: 'English', share: '2%', queries: '6,200' },
  ];

  const categoryBreakdown = [
    { category: 'PACS Membership & Governance', pct: 34, color: 'bg-blue-600' },
    { category: 'PMFBY Crop Insurance & Claims', pct: 28, color: 'bg-emerald-600' },
    { category: 'Kisan Credit Card (KCC) & Loans', pct: 18, color: 'bg-amber-500' },
    { category: 'Fertilizer & Agri-Machinery', pct: 12, color: 'bg-purple-600' },
    { category: 'Cooperative Ombudsman & Legal', pct: 8, color: 'bg-red-500' },
  ];

  const recentTelemetryLogs = [
    {
      time: '2 mins ago',
      query: 'मेरी फसल का बीमा कैसे होगा?',
      lang: 'Hindi',
      source: 'PMFBY Operational Guidelines 2026',
      status: 'Grounded (0.98)',
    },
    {
      time: '6 mins ago',
      query: 'PACS mein member kaise bane?',
      lang: 'Hindi',
      source: 'Model Bye-Laws for PACS, Cl. 5',
      status: 'Grounded (0.96)',
    },
    {
      time: '11 mins ago',
      query: 'শিলাবৃষ্টিতে বোরো ধানের ক্ষতি হয়েছে, ৭২ ঘণ্টার মধ্যে কীভাবে ক্লেইম করব?',
      lang: 'Bengali',
      source: 'PMFBY Operational Guidelines 2026',
      status: 'Grounded (0.97)',
    },
    {
      time: '18 mins ago',
      query: 'Arbitrary PACS membership denial appeal to ARCS',
      lang: 'English',
      source: 'State Cooperative Societies Act & MSCS 2023',
      status: 'Grounded (0.94)',
    },
    {
      time: '24 mins ago',
      query: 'What is the maximum limit for KCC collateral free loan?',
      lang: 'English',
      source: 'RBI/NABARD KCC Master Circular',
      status: 'Grounded (0.99)',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold">
          <Database className="w-3.5 h-3.5 text-blue-700" />
          <span>National Cooperative Analytics Engine</span>
          <span>•</span>
          <span>Ministry of Cooperation Integration</span>
        </div>
        <h1 className="text-3xl font-extrabold text-blue-950 tracking-tight">
          System Analytics &amp; PACS Telemetry Dashboard
        </h1>
        <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
          National deployment benchmarks, RAG retrieval audit trails, verified citation metrics,
          and multilingual query volume across 8 Phase-1 constitutional languages.
        </p>
      </div>

      {/* Official Project Reference Metrics (from Prompt Specifications) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Approved PACS Computerization
          </div>
          <div className="text-3xl font-black text-blue-950">79,630</div>
          <div className="text-xs text-emerald-700 font-medium flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> Approved across States &amp; UTs
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            PACS ERP Onboarded
          </div>
          <div className="text-3xl font-black text-emerald-800">63,686+</div>
          <div className="text-xs text-slate-500">
            Live on Unified National Cloud ERP
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Project Financial Outlay
          </div>
          <div className="text-3xl font-black text-orange-950">₹2,925.39 Cr</div>
          <div className="text-xs text-slate-500">
            Centrally Sponsored Scheme Outlay
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Grounding Verification Rate
          </div>
          <div className="text-3xl font-black text-blue-900">99.4%</div>
          <div className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Zero Hallucination Guardrail
          </div>
        </div>
      </div>

      {/* Breakdown Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Category Breakdown Bar Stack */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">
              Query Category Distribution
            </h3>
            <span className="text-xs text-slate-400 font-mono">Last 30 Days</span>
          </div>

          <div className="space-y-3.5">
            {categoryBreakdown.map((cat, idx) => (
              <div key={idx} className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-slate-700 font-medium">
                  <span>{cat.category}</span>
                  <span className="font-bold">{cat.pct}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full ${cat.color} rounded-full transition-all duration-500`}
                    style={{ width: `${cat.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Multilingual Query Distribution */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-700" />
              <span>Phase-1 Multilingual Penetration</span>
            </h3>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
              8 Languages Active
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {languageDistribution.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-0.5"
              >
                <div className="font-bold text-blue-950 truncate">{item.lang}</div>
                <div className="text-lg font-extrabold text-blue-900">{item.share}</div>
                <div className="text-[10px] text-slate-400">{item.queries} queries</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Telemetry Retrieval Logs */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Real-Time Grounding &amp; Retrieval Audit Trail
            </h3>
            <p className="text-xs text-slate-500">
              Verified queries processed with instant citation attachment
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" /> RAG State Machine Live
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase tracking-wider font-semibold">
                <th className="pb-3 pl-2">Time</th>
                <th className="pb-3">Citizen Query</th>
                <th className="pb-3">Language</th>
                <th className="pb-3">Verified Official Source</th>
                <th className="pb-3 pr-2 text-right">Grounding Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentTelemetryLogs.map((log, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 pl-2 text-slate-400 font-mono text-[11px] whitespace-nowrap">
                    {log.time}
                  </td>
                  <td className="py-3 font-medium text-slate-900 max-w-xs truncate">
                    “{log.query}”
                  </td>
                  <td className="py-3 text-slate-600">{log.lang}</td>
                  <td className="py-3 text-blue-950 font-medium">{log.source}</td>
                  <td className="py-3 pr-2 text-right">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono text-[11px] font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
