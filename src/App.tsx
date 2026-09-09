import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Users,
  Building2,
  Scale,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { LanguageCode, ChatMessage } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { ChatInterface } from './components/ChatInterface';
import { SchemesDashboard } from './components/SchemesDashboard';
import { PACSExplorer } from './components/PACSExplorer';
import { LegalGuidance } from './components/LegalGuidance';
import { KnowledgeBase } from './components/KnowledgeBase';
import { UserDashboard } from './components/UserDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { TechArchitecture } from './components/TechArchitecture';
import { Roadmap } from './components/Roadmap';
import { ImpactSection } from './components/ImpactSection';
import { VoiceModal } from './components/VoiceModal';
import { EscalationModal } from './components/EscalationModal';
import { DocumentViewerModal } from './components/DocumentViewerModal';
import { SihModal } from './components/SihModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [language, setLanguage] = useState<LanguageCode>('hi');
  const [simpleMode, setSimpleMode] = useState<boolean>(false);

  // Modals state
  const [isVoiceOpen, setIsVoiceOpen] = useState<boolean>(false);
  const [isEscalationOpen, setIsEscalationOpen] = useState<boolean>(false);
  const [isSihModalOpen, setIsSihModalOpen] = useState<boolean>(false);
  const [viewingDocTitle, setViewingDocTitle] = useState<string | null>(null);

  // Cross-component question dispatching to Chat
  const [initialQuestion, setInitialQuestion] = useState<string | null>(null);

  // Saved answers bookmarks
  const [savedAnswers, setSavedAnswers] = useState<ChatMessage[]>([]);

  const handleAskQuestion = (questionText: string) => {
    setInitialQuestion(questionText);
    setActiveTab('chat');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSaveAnswer = (msg: ChatMessage) => {
    setSavedAnswers((prev) => {
      const exists = prev.some((item) => item.id === msg.id);
      if (exists) {
        return prev.filter((item) => item.id !== msg.id);
      } else {
        return [msg, ...prev];
      }
    });
  };

  const handleVoiceTranscript = (spokenText: string) => {
    handleAskQuestion(spokenText);
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-slate-100/50 text-slate-900 font-sans transition-all ${
        simpleMode ? 'text-lg leading-relaxed antialiased' : 'text-sm'
      }`}
    >
      {/* Sticky Global Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
        onOpenVoice={() => setIsVoiceOpen(true)}
        simpleMode={simpleMode}
        setSimpleMode={setSimpleMode}
        onOpenProfile={() => setActiveTab('profile')}
        onOpenSihInfo={() => setIsSihModalOpen(true)}
      />

      {/* Main App Body */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div className="space-y-12 pb-16">
            {/* Hero Section */}
            <Hero
              language={language}
              onAskQuestion={handleAskQuestion}
              onOpenVoice={() => setIsVoiceOpen(true)}
              onNavigate={setActiveTab}
              onViewDoc={(title) => setViewingDocTitle(title)}
            />

            {/* Visual 5-Step Process */}
            <HowItWorks />

            {/* Core Feature Highlights / Pillar Cards */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="text-center space-y-2 max-w-2xl mx-auto">
                <span className="text-xs uppercase font-extrabold tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Government-Tech Standard
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
                  Engineered for Trust, Simplicity &amp; Rural Impact
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Connecting citizens to certified agricultural schemes without middlemen or confusion.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Strict Source Grounding &amp; Citations
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Zero hallucinations. Every factual claim links to official Ministry of Cooperation
                    gazettes, Model PACS Bye-Laws, or PMFBY circulars with verified clause references.
                  </p>
                  <button
                    onClick={() => setActiveTab('resources')}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-800 hover:text-blue-950 pt-1 cursor-pointer"
                  >
                    <span>Inspect Knowledge Base</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Card 2 */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    PACS Computerization &amp; Member Rights
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Demystifying Class A voting membership, credit limits up to ₹3 Lakhs, custom hiring
                    equipment tariffs, and Common Services Centers (CSC) in your village.
                  </p>
                  <button
                    onClick={() => setActiveTab('pacs')}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 pt-1 cursor-pointer"
                  >
                    <span>Explore PACS Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Card 3 */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-800 flex items-center justify-center">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Legal &amp; Dispute Assistance
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Actionable procedural guidance on Section 84 statutory arbitration, AGM delay remedies,
                    and Cooperative Ombudsman complaint escalations.
                  </p>
                  <button
                    onClick={() => setActiveTab('legal')}
                    className="inline-flex items-center gap-1 text-xs font-bold text-purple-800 hover:text-purple-950 pt-1 cursor-pointer"
                  >
                    <span>Read Legal Guidance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </section>

            {/* Quick Interactive CTA Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-emerald-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl text-center md:text-left">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-orange-400 font-bold">
                    Interactive Multilingual Voice Assistant
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Have a question about your crop loan or PACS?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Speak or type in Hindi, Bengali, Marathi, Tamil, Telugu, Gujarati, Kannada, or English.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setIsVoiceOpen(true)}
                    className="px-5 py-3 rounded-2xl bg-white text-blue-950 text-xs font-bold hover:bg-slate-100 transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>🎙 Speak Your Question</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('chat')}
                    className="px-5 py-3 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Open AI Chat</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Tab: Chat Interface */}
        {activeTab === 'chat' && (
          <ChatInterface
            language={language}
            setLanguage={setLanguage}
            onOpenVoice={() => setIsVoiceOpen(true)}
            onViewDoc={(title) => setViewingDocTitle(title)}
            onEscalate={() => setIsEscalationOpen(true)}
            initialQuestion={initialQuestion}
            onClearInitialQuestion={() => setInitialQuestion(null)}
            savedAnswers={savedAnswers}
            onToggleSaveAnswer={handleToggleSaveAnswer}
          />
        )}

        {/* Tab: Schemes */}
        {activeTab === 'schemes' && (
          <SchemesDashboard
            onAskSchemeAI={handleAskQuestion}
            onViewDoc={(title) => setViewingDocTitle(title)}
          />
        )}

        {/* Tab: PACS Explorer */}
        {activeTab === 'pacs' && (
          <PACSExplorer
            onAskAI={handleAskQuestion}
            onViewDoc={(title) => setViewingDocTitle(title)}
          />
        )}

        {/* Tab: Legal Guidance */}
        {activeTab === 'legal' && (
          <LegalGuidance
            onAskAI={handleAskQuestion}
            onViewDoc={(title) => setViewingDocTitle(title)}
            onEscalate={() => setIsEscalationOpen(true)}
          />
        )}

        {/* Tab: Knowledge Base & Catalog */}
        {activeTab === 'resources' && (
          <KnowledgeBase
            onViewDoc={(title) => setViewingDocTitle(title)}
            onAskAI={handleAskQuestion}
          />
        )}

        {/* Tab: Citizen User Profile Workspace */}
        {activeTab === 'profile' && (
          <UserDashboard
            language={language}
            setLanguage={setLanguage}
            simpleMode={simpleMode}
            setSimpleMode={setSimpleMode}
            onAskAI={handleAskQuestion}
            savedAnswers={savedAnswers}
            onNavigate={setActiveTab}
            onViewDoc={(title) => setViewingDocTitle(title)}
          />
        )}

        {/* Tab: Admin & Telemetry */}
        {activeTab === 'admin' && <AdminDashboard />}

        {/* Tab: Technical Architecture */}
        {activeTab === 'tech' && <TechArchitecture />}

        {/* Tab: Implementation Roadmap */}
        {activeTab === 'roadmap' && <Roadmap />}

        {/* Tab: Impact & Benefits */}
        {activeTab === 'impact' && <ImpactSection />}
      </main>

      {/* Global Modals */}
      <VoiceModal
        isOpen={isVoiceOpen}
        onClose={() => setIsVoiceOpen(false)}
        language={language}
        onTranscriptSubmitted={handleVoiceTranscript}
      />

      <EscalationModal
        isOpen={isEscalationOpen}
        onClose={() => setIsEscalationOpen(false)}
        defaultQuestion={initialQuestion || ''}
        language={language}
      />

      <DocumentViewerModal
        documentTitle={viewingDocTitle}
        onClose={() => setViewingDocTitle(null)}
      />

      <SihModal
        isOpen={isSihModalOpen}
        onClose={() => setIsSihModalOpen(false)}
      />

      {/* Footer */}
      <Footer
        language={language}
        setLanguage={setLanguage}
        onNavigate={setActiveTab}
        onOpenSihInfo={() => setIsSihModalOpen(true)}
      />
    </div>
  );
}
