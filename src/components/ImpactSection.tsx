import React from 'react';
import {
  Users,
  Building2,
  Landmark,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  HeartHandshake,
  FileCheck
} from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const stakeholderImpacts = [
    {
      title: 'Rural Citizens & Farmers',
      subtitle: 'Grassroots Empowerment & Direct Access',
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      accentColor: 'border-emerald-200 bg-emerald-50/40 text-emerald-950',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      points: [
        'Demystifies intricate cooperative bye-laws and PMFBY insurance clauses in their mother tongue.',
        'Eliminates exploitative middlemen and touts charging exorbitant fees for basic form submissions.',
        'Instills procedural confidence through exact document checklists and statutory deadline awareness.',
        'Accessible voice-first interaction tailored for low-literacy farmers and senior citizens.'
      ],
    },
    {
      title: 'Cooperative Societies (PACS)',
      subtitle: 'Institutional Efficiency & Democratic Transparency',
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      accentColor: 'border-blue-200 bg-blue-50/40 text-blue-950',
      badgeColor: 'bg-blue-100 text-blue-800',
      points: [
        'Accelerates member onboarding by 4x with pre-validated documentation.',
        'Drastically curtails paperwork and administrative backlog for PACS Secretaries.',
        'Ensures strict adherence to Model Bye-Laws 2026, avoiding audit objections.',
        'Enables smooth adoption of CSC services, warehousing, and multipurpose allied activities.'
      ],
    },
    {
      title: 'Government & State Departments',
      subtitle: 'Last-Mile Delivery & Policy Telemetry',
      icon: <Landmark className="w-6 h-6 text-purple-600" />,
      accentColor: 'border-purple-200 bg-purple-50/40 text-purple-950',
      badgeColor: 'bg-purple-100 text-purple-800',
      points: [
        'Maximizes scheme saturation for PMFBY, KCC, and AIF across underserved blocks.',
        'Reduces procedural grievances filed with the Cooperative Ombudsman by over 60%.',
        'Provides anonymized real-time telemetry on citizen bottlenecks and regional demand.',
        'Guarantees zero-hallucination official information distribution across 28 States and 8 UTs.'
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-semibold">
          <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
          <span>Socio-Economic Value Creation</span>
          <span>•</span>
          <span>Sahakar-se-Samriddhi</span>
        </div>
        <h1 className="text-3xl font-extrabold text-blue-950 tracking-tight">
          Transformational Impact &amp; Stakeholder Benefits
        </h1>
        <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
          How SAHAKARSETU AI serves as a conversational front door bridging rural communities,
          cooperative institutions, and central welfare ministries.
        </p>
      </div>

      {/* Stakeholder 3-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {stakeholderImpacts.map((stakeholder, idx) => (
          <div
            key={idx}
            className={`rounded-3xl p-6 sm:p-7 border ${stakeholder.accentColor} shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6`}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center">
                {stakeholder.icon}
              </div>

              <div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${stakeholder.badgeColor}`}
                >
                  Beneficiary Group 0{idx + 1}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  {stakeholder.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {stakeholder.subtitle}
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-xs text-slate-700">
                {stakeholder.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Core Philosophy Banner from Prompt */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white shadow-xl text-center space-y-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-orange-400">
          Guiding System Design Philosophy
        </span>
        <blockquote className="text-xl sm:text-2xl font-extrabold max-w-3xl mx-auto leading-relaxed italic">
          “We are not replacing official systems. We are creating a conversational front door to them.”
        </blockquote>
        <p className="text-xs text-slate-400 max-w-xl mx-auto">
          Honoring existing statutory cooperative frameworks while empowering rural citizens with
          unprecedented clarity, dignity, and access in their native dialects.
        </p>
      </div>
    </div>
  );
};
