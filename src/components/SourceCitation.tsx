import React from 'react';
import { ShieldCheck, FileText, Calendar, ExternalLink, AlertTriangle } from 'lucide-react';
import { CitationData } from '../types';

interface SourceCitationProps {
  citation?: CitationData;
  onViewDoc?: (docTitle: string) => void;
  isAbstained?: boolean;
  onEscalate?: () => void;
  onSearchDocs?: () => void;
}

export const SourceCitation: React.FC<SourceCitationProps> = ({
  citation,
  onViewDoc,
  isAbstained = false,
  onEscalate,
  onSearchDocs,
}) => {
  if (isAbstained) {
    return (
      <div id="citation-abstained-box" className="mt-4 p-4 rounded-xl bg-amber-50/90 border border-amber-200 text-amber-900 text-sm">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="flex-1 space-y-2">
            <div className="font-semibold text-amber-950">Verified Evidence Not Found (Safe Abstention)</div>
            <p className="text-xs text-amber-800 leading-relaxed">
              SAHAKARSETU AI follows strict official safety guardrails: when official government circulars or verified acts do not contain clear evidence, we refrain from guessing or inventing rules.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {onSearchDocs && (
                <button
                  type="button"
                  onClick={onSearchDocs}
                  className="px-3 py-1.5 text-xs font-medium bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" /> Search Official Sources
                </button>
              )}
              {onEscalate && (
                <button
                  type="button"
                  onClick={onEscalate}
                  className="px-3 py-1.5 text-xs font-medium bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors shadow-xs"
                >
                  Escalate to Human Officer
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!citation) return null;

  return (
    <div id={`citation-${citation.docCategory}`} className="mt-4 rounded-xl bg-slate-50 border border-slate-200/90 p-3.5 text-xs text-slate-700">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-200/80">
        <div className="flex items-center gap-1.5 font-semibold text-slate-900 uppercase tracking-wider text-[11px]">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Verified Government Source</span>
        </div>
        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium text-[10px]">
          ✓ Official Source
        </div>
      </div>

      <div className="space-y-1.5 text-slate-600">
        <div>
          <span className="font-medium text-slate-800">Department / Ministry: </span>
          <span>{citation.source}</span>
        </div>
        <div>
          <span className="font-medium text-slate-800">Official Document: </span>
          <span className="font-medium text-slate-900">“{citation.documentTitle}”</span>
        </div>
        {citation.section && (
          <div>
            <span className="font-medium text-slate-800">Clause / Section: </span>
            <span className="text-slate-700 font-mono text-[11px]">{citation.section}</span>
          </div>
        )}
        <div className="flex items-center gap-4 text-slate-500 pt-1">
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            Last Updated: {citation.lastUpdated}
          </span>
          {citation.sourceUrl && (
            <a
              href={citation.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-800 hover:underline font-medium"
            >
              <span>Government Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      <div className="mt-2.5 pt-2 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2">
        <p className="text-[11px] text-slate-500 italic">
          AI-generated explanation. Government documents remain the authoritative source.
        </p>
        {onViewDoc && (
          <button
            type="button"
            onClick={() => onViewDoc(citation.documentTitle)}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-blue-700 hover:text-blue-800 bg-white hover:bg-blue-50 border border-slate-200 rounded-md transition-colors"
          >
            <FileText className="w-3.5 h-3.5" /> View Official Source
          </button>
        )}
      </div>
    </div>
  );
};
