import React, { useState } from 'react';
import {
  BookOpen,
  FileCheck,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building2,
  Download,
  Search,
  Filter,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { OFFICIAL_DOCUMENTS } from '../data/knowledgeData';

interface KnowledgeBaseProps {
  onViewDoc: (title: string) => void;
  onAskAI: (prompt: string) => void;
}

export const KnowledgeBase: React.FC<KnowledgeBaseProps> = ({
  onViewDoc,
  onAskAI,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Ministry of Cooperation',
    'PACS',
    'PMFBY',
    'Agricultural Schemes',
    'Cooperative Acts',
    'Rules & Regulations',
    'Government Circulars',
  ];

  const filteredDocs = OFFICIAL_DOCUMENTS.filter((doc) => {
    const matchesCat = selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesQuery =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5 text-blue-700" />
          <span>Authoritative Source Repository</span>
          <span>•</span>
          <span>RAG Vector Ingestion Hub</span>
        </div>
        <h1 className="text-3xl font-extrabold text-blue-950 tracking-tight">
          Official Cooperative &amp; Agricultural Knowledge Base
        </h1>
        <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
          The verified semantic corpus ingested by SAHAKARSETU AI. Every prompt answered by the chatbot
          is grounded strictly in these audited gazettes, circulars, and statutory operational guidelines.
        </p>
      </div>

      {/* RAG System Trust Indicator Banner */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-lg border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Answer Grounding Status Engine
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Continuous Vector Ingestion &amp; Audit Trail
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" /> All 4 Verification Gates Active
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-2.5 text-xs text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-medium">1. Source Found</span>
          </div>
          <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-2.5 text-xs text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-medium">2. Relevant Section Retrieved</span>
          </div>
          <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-2.5 text-xs text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-medium">3. Answer Grounded</span>
          </div>
          <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-2.5 text-xs text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-medium">4. Citation Added</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="w-full sm:w-72">
          <input
            type="text"
            placeholder="Search indexed gazettes & circulars..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:outline-hidden focus:ring-2 focus:ring-blue-600/30"
          />
        </div>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocs.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200">
                  {doc.documentType}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3" /> Verified Gazette
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {doc.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {doc.summary}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{doc.department}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Last Audited: {doc.lastUpdated}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => onViewDoc(doc.title)}
                className="px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors cursor-pointer"
              >
                View Document
              </button>

              <button
                type="button"
                onClick={() => onAskAI(`What are the key rules in ${doc.title}?`)}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3 h-3 text-orange-500" />
                <span>Ask AI</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
