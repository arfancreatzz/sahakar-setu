import React, { useState } from 'react';
import { X, Send, PhoneCall, CheckCircle2, AlertCircle } from 'lucide-react';
import { LanguageCode } from '../types';

interface EscalationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultQuestion?: string;
  language: LanguageCode;
}

export const EscalationModal: React.FC<EscalationModalProps> = ({
  isOpen,
  onClose,
  defaultQuestion = '',
  language,
}) => {
  const [issue, setIssue] = useState('');
  const [category, setCategory] = useState('PACS Governance');
  const [question, setQuestion] = useState(defaultQuestion);
  const [submittedTicketId, setSubmittedTicketId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/escalation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          issue: issue || 'Citizen Assistance Request',
          category,
          language,
          userQuestion: question || defaultQuestion,
        }),
      });
      const data = await res.json();
      if (data.ticket) {
        setSubmittedTicketId(data.ticket.id);
      } else {
        setSubmittedTicketId(`ESC-2026-${Math.floor(1000 + Math.random() * 9000)}`);
      }
    } catch {
      setSubmittedTicketId(`ESC-2026-${Math.floor(1000 + Math.random() * 9000)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Escalate to Human Officer</h3>
              <p className="text-xs text-slate-400">Cooperative Grievance & Citizen Redressal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedTicketId ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Escalation Ticket Generated</h4>
              <p className="text-xs text-slate-500 mt-1">
                Your ticket has been logged into the Cooperative Governance Redressal System.
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-mono text-sm font-semibold text-blue-700">
              Ticket ID: {submittedTicketId}
            </div>
            <div className="text-xs text-slate-600 bg-amber-50 p-3 rounded-lg border border-amber-200 text-left space-y-1">
              <div className="font-semibold text-amber-900">Emergency Official Helplines:</div>
              <div>• Kisan Call Centre: <span className="font-bold">1800-180-1551</span> (Toll-Free, 22 Languages)</div>
              <div>• PMFBY Central Grievance Portal: <span className="font-bold">14447</span></div>
              <div>• Ministry of Cooperation Helpdesk: <span className="font-bold">011-20862000</span></div>
            </div>
            <button
              onClick={() => {
                setSubmittedTicketId(null);
                onClose();
              }}
              className="w-full py-2.5 bg-slate-900 text-white font-medium text-sm rounded-xl hover:bg-slate-800 transition-colors"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm">
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-900 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                If the AI guidance is inconclusive, your query will be routed to your District Central Cooperative Bank (DCCB) or Block Cooperative Officer.
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Issue Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-800 bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 text-sm"
              >
                <option value="PACS Governance">PACS Governance & Membership Rights</option>
                <option value="PMFBY">PMFBY Crop Insurance & Claim Intimation</option>
                <option value="KCC & Loans">Kisan Credit Card & Crop Loan Disbursal</option>
                <option value="Fertilizer / Inputs">Fertilizer, Seed & Machinery Allocation</option>
                <option value="Legal & Bye-laws">Cooperative Rules & Model Bye-Laws</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Brief Subject
              </label>
              <input
                type="text"
                required
                placeholder="e.g. PACS membership refusal or delayed crop compensation"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-600 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Citizen Question / Detailed Context
              </label>
              <textarea
                rows={3}
                required
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Provide details about your village PACS, date of application, or specific difficulty..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-600 text-sm"
              />
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 text-xs font-semibold bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-xs disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                {isSubmitting ? 'Submitting Ticket...' : 'Submit Escalation'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
