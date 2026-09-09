import React from 'react';
import { X, FileText, CheckCircle2, Download, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { OFFICIAL_DOCUMENTS } from '../data/knowledgeData';

interface DocumentViewerModalProps {
  documentTitle: string | null;
  onClose: () => void;
}

export const DocumentViewerModal: React.FC<DocumentViewerModalProps> = ({
  documentTitle,
  onClose,
}) => {
  if (!documentTitle) return null;

  const doc =
    OFFICIAL_DOCUMENTS.find(
      (d) =>
        d.title.toLowerCase().includes(documentTitle.toLowerCase()) ||
        documentTitle.toLowerCase().includes(d.title.toLowerCase())
    ) || OFFICIAL_DOCUMENTS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-600/30 rounded-lg text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Official Government Gazette / Document
              </div>
              <h3 className="text-base font-semibold text-white truncate max-w-md">
                {doc.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          <div className="flex flex-wrap gap-2 items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 text-slate-700">
              <Building2 className="w-4 h-4 text-slate-500" />
              <span className="font-medium">{doc.department}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Verified Record
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                <Calendar className="w-3.5 h-3.5" /> {doc.lastUpdated}
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-2">
              Executive Summary & Scope
            </h4>
            <p className="text-slate-700 leading-relaxed bg-slate-50/70 p-4 rounded-xl border border-slate-100">
              {doc.summary}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-2">
              Statutory Clauses & Operational Mandates
            </h4>
            <ul className="space-y-2.5">
              {doc.keyClauses.map((clause, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-blue-50/50 border border-blue-100 text-slate-800 text-xs"
                >
                  <span className="font-semibold text-blue-700 shrink-0">§ {idx + 1}.</span>
                  <span className="leading-relaxed">{clause}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <span className="font-bold">Notice:</span>
            <span>
              This document is indexed in the SAHAKARSETU AI RAG vector store. In case of legal
              proceedings, refer to the printed official gazette of the Ministry of Cooperation or
              Department of Agriculture.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">Format: {doc.fileSize}</span>
          <div className="flex gap-2">
            <button
              onClick={() => alert(`Downloading verified copy of "${doc.title}"...`)}
              className="px-3 py-1.5 text-xs font-medium bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-slate-700 transition-colors inline-flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Download Gazette Copy
            </button>
            <a
              href={doc.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-xs"
            >
              <span>Open Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
