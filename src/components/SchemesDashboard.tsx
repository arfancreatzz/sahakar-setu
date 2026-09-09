import React, { useState } from 'react';
import {
  Sparkles,
  ExternalLink,
  CheckCircle2,
  FileText,
  HelpCircle,
  Filter,
  Calendar,
  Building2,
  ArrowUpRight
} from 'lucide-react';
import { SchemeItem } from '../types';
import { SCHEMES_LIST } from '../data/schemesData';

interface SchemesDashboardProps {
  onAskSchemeAI: (promptText: string) => void;
  onViewDoc: (docTitle: string) => void;
}

export const SchemesDashboard: React.FC<SchemesDashboardProps> = ({
  onAskSchemeAI,
  onViewDoc,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchKeyword, setSearchKeyword] = useState('');

  const categories = ['All', 'Agriculture', 'Insurance', 'Cooperative', 'Credit', 'Rural Development'];

  const filteredSchemes = SCHEMES_LIST.filter((scheme) => {
    const matchesCategory = selectedFilter === 'All' || scheme.category === selectedFilter;
    const matchesSearch =
      scheme.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      scheme.shortDesc.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      scheme.ministry.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
          <span>National Welfare Catalog</span>
          <span>•</span>
          <span>Government of India Schemes</span>
        </div>
        <h1 className="text-3xl font-extrabold text-blue-950 tracking-tight">
          Government Schemes Dashboard
        </h1>
        <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
          Comprehensive, authoritative overview of Central Sector and Centrally Sponsored schemes
          for farmers, primary agricultural credit societies (PACS), and rural cooperative enterprises.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Keyword Search */}
        <div className="w-full sm:w-72">
          <input
            type="text"
            placeholder="Search schemes by name or ministry..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:outline-hidden focus:ring-2 focus:ring-blue-600/30"
          />
        </div>
      </div>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSchemes.map((scheme) => (
          <div
            key={scheme.id}
            className="rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between space-y-5"
          >
            {/* Top metadata */}
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200">
                      {scheme.category}
                    </span>
                    <span className="text-xs font-mono text-emerald-700 font-semibold">
                      {scheme.statusBadge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {scheme.name}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {scheme.shortDesc}
              </p>

              <div className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                <span>{scheme.ministry}</span>
              </div>
            </div>

            {/* Scheme Details accordion / highlights */}
            <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
              {/* Eligibility */}
              <div className="space-y-1">
                <span className="font-bold text-slate-800 text-[11px] uppercase tracking-wider block">
                  Eligibility Criteria:
                </span>
                <ul className="space-y-1 text-slate-600 pl-1">
                  {scheme.eligibility.map((el, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold shrink-0">✓</span>
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documents */}
              <div className="space-y-1">
                <span className="font-bold text-slate-800 text-[11px] uppercase tracking-wider block">
                  Required Documents:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {scheme.documents.map((doc, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px]"
                    >
                      {doc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Source link */}
              <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Source: {scheme.officialSource}</span>
                <a
                  href={scheme.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 font-semibold"
                >
                  <span>Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => onViewDoc(scheme.name)}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 py-2 px-3 rounded-xl hover:bg-slate-100 transition-colors"
              >
                View Guidelines
              </button>

              <button
                type="button"
                onClick={() => onAskSchemeAI(scheme.samplePrompt)}
                className="py-2.5 px-4 rounded-xl bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-2 hover:scale-[1.02] cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>Ask SAHAKARSETU AI</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
