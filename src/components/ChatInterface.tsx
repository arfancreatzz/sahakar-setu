import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Mic,
  Volume2,
  Bookmark,
  Share2,
  CheckCircle2,
  FileText,
  Calendar,
  Layers,
  Sparkles,
  ShieldCheck,
  PlusCircle,
  Clock,
  ExternalLink,
  Info,
  CornerDownRight,
  Globe,
  Loader2
} from 'lucide-react';
import { ChatMessage, LanguageCode } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { askSahakarsetuAI, speakText } from '../services/aiService';
import { SourceCitation } from './SourceCitation';

interface ChatInterfaceProps {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  onOpenVoice: () => void;
  onViewDoc: (docTitle: string) => void;
  onEscalate: () => void;
  initialQuestion?: string | null;
  onClearInitialQuestion?: () => void;
  savedAnswers: ChatMessage[];
  onToggleSaveAnswer: (msg: ChatMessage) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  language,
  setLanguage,
  onOpenVoice,
  onViewDoc,
  onEscalate,
  initialQuestion,
  onClearInitialQuestion,
  savedAnswers,
  onToggleSaveAnswer,
}) => {
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.hi;
  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  const [inputMessage, setInputMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: t.welcomeMessage,
      timestamp: 'Just now',
      detectedLanguage: language,
      answerLanguage: language,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const topics = [
    'All',
    'PACS',
    'PMFBY',
    'Cooperative Governance',
    'Agriculture',
    'Legal Assistance',
    'Government Schemes',
  ];

  const recentConversationPrompts = [
    'मेरी फसल का बीमा कैसे होगा?',
    'PACS में सदस्य कैसे बनें?',
    'How can I become a PACS member?',
    'আমার ফসলের বীমা কীভাবে হবে?',
    'PMFBY திட்டத்திற்கு நான் தகுதியானவரா?',
    'PACS audit and member voting rights',
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Handle incoming initialQuestion from Hero or Schemes
  useEffect(() => {
    if (initialQuestion && initialQuestion.trim().length > 0) {
      handleSendMessage(initialQuestion.trim());
      if (onClearInitialQuestion) {
        onClearInitialQuestion();
      }
    }
  }, [initialQuestion]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      detectedLanguage: language,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const responsePayload = await askSahakarsetuAI(textToSend, language, selectedTopic);
      setMessages((prev) => [...prev, responsePayload.message]);
    } catch (err) {
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputMessage);
  };

  const handleNewConversation = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'assistant',
        text: t.welcomeMessage,
        timestamp: 'Just now',
        detectedLanguage: language,
        answerLanguage: language,
      },
    ]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden min-h-[750px]">
        {/* Left Sidebar */}
        <aside className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/70 p-4 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            {/* New Conversation Button */}
            <button
              type="button"
              onClick={handleNewConversation}
              className="w-full py-2.5 px-3 bg-blue-900 hover:bg-blue-950 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 text-orange-400" />
              <span>{t.newChat}</span>
            </button>

            {/* Core Topics Filter */}
            <div>
              <div className="text-[11px] uppercase font-bold text-slate-400 tracking-wider mb-2 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" />
                <span>{t.topicsHeading}</span>
              </div>
              <div className="flex flex-wrap lg:flex-col gap-1">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium text-left transition-colors cursor-pointer ${
                      selectedTopic === topic
                        ? 'bg-blue-100/90 text-blue-950 font-bold border border-blue-200'
                        : 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Conversations */}
            <div>
              <div className="text-[11px] uppercase font-bold text-slate-400 tracking-wider mb-2 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{t.recentChats}</span>
              </div>
              <div className="space-y-1">
                {recentConversationPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(prompt)}
                    className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-colors truncate block"
                  >
                    • {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Saved Answers Count */}
            <div>
              <div className="text-[11px] uppercase font-bold text-slate-400 tracking-wider mb-1 flex items-center gap-1">
                <Bookmark className="w-3.5 h-3.5" />
                <span>{t.savedAnswers} ({savedAnswers.length})</span>
              </div>
              {savedAnswers.length === 0 ? (
                <p className="text-[11px] text-slate-400 italic">No saved answers yet.</p>
              ) : (
                <div className="space-y-1">
                  {savedAnswers.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="p-2 bg-white rounded-lg border border-slate-200 text-[11px] text-slate-700 truncate"
                    >
                      {item.structuredData?.summary || item.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Footer RAG Trust Note */}
          <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-200/80 text-[11px] text-emerald-950 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-emerald-900">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Strict Grounding Mode</span>
            </div>
            <p className="text-emerald-800 leading-snug">
              Every factual answer carries citations to official MoC &amp; MoA guidelines.
            </p>
          </div>
        </aside>

        {/* Main Chat Area */}
        <main className="lg:col-span-9 flex flex-col justify-between h-[750px]">
          {/* Top Chat Bar */}
          <div className="px-6 py-3.5 border-b border-slate-200 bg-white flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-900">
                <Sparkles className="w-4 h-4 text-blue-700" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <span>SAHAKARSETU AI Assistant</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                    Topic: {selectedTopic}
                  </span>
                </h2>
                <p className="text-[11px] text-slate-500">
                  Multilingual Cooperative Governance &amp; Scheme Navigator
                </p>
              </div>
            </div>

            {/* Language & Action Selector in Top Chat */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-700">
                <Globe className="w-3.5 h-3.5 text-blue-700" />
                <span>Language: {currentLang.nativeLabel}</span>
              </div>
              <button
                type="button"
                onClick={onEscalate}
                className="px-3 py-1 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                Human Escalation
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-slate-50/50">
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              const isSaved = savedAnswers.some((s) => s.id === msg.id);

              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="w-8 h-8 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-xs mt-1">
                      <ShieldCheck className="w-4 h-4 text-white" />
                    </div>
                  )}

                  <div
                    className={`max-w-2xl rounded-2xl p-4.5 space-y-3 transition-all ${
                      isUser
                        ? 'bg-blue-900 text-white shadow-md'
                        : 'bg-white text-slate-900 border border-slate-200 shadow-md'
                    }`}
                  >
                    {/* Header line for Assistant Answer */}
                    {!isUser && (
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-blue-950 text-xs">SAHAKARSETU AI</span>
                          {msg.detectedLanguage && (
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium">
                              Lang: {msg.detectedLanguage.toUpperCase()} 🇮🇳
                            </span>
                          )}
                          {msg.ragTrace?.confidenceScore && (
                            <span className="text-[10px] text-emerald-700 font-mono">
                              Grounding Confidence: {Math.round(msg.ragTrace.confidenceScore * 100)}%
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => speakText(msg.structuredData?.summary || msg.text, language)}
                            className="p-1 rounded-md text-slate-500 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                            title={t.listenAnswer}
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => onToggleSaveAnswer(msg)}
                            className={`p-1 rounded-md transition-colors ${
                              isSaved
                                ? 'text-amber-600 bg-amber-50'
                                : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                            }`}
                            title="Bookmark Answer"
                          >
                            <Bookmark className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Content Section */}
                    {msg.structuredData ? (
                      <div className="space-y-4 text-xs leading-relaxed">
                        {/* 1. Simple Explanation */}
                        <div className="text-sm font-medium text-slate-800 leading-relaxed bg-blue-50/40 p-3 rounded-xl border border-blue-100/60">
                          {msg.structuredData.summary}
                        </div>

                        {/* 2. Eligibility */}
                        {msg.structuredData.eligibility && msg.structuredData.eligibility.length > 0 && (
                          <div className="space-y-1.5">
                            <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1 text-blue-900">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{t.eligibilityTitle}</span>
                            </div>
                            <ul className="space-y-1 pl-1">
                              {msg.structuredData.eligibility.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-700">
                                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* 3. Required Documents */}
                        {msg.structuredData.documents && msg.structuredData.documents.length > 0 && (
                          <div className="space-y-1.5">
                            <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1 text-blue-900">
                              <FileText className="w-3.5 h-3.5 text-blue-600" />
                              <span>{t.documentsTitle}</span>
                            </div>
                            <ul className="space-y-1 pl-1">
                              {msg.structuredData.documents.map((doc, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-700">
                                  <span className="text-blue-600 font-bold shrink-0">✓</span>
                                  <span>{doc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* 4. Process */}
                        {msg.structuredData.process && msg.structuredData.process.length > 0 && (
                          <div className="space-y-1.5">
                            <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1 text-blue-900">
                              <CornerDownRight className="w-3.5 h-3.5 text-purple-600" />
                              <span>{t.processTitle}</span>
                            </div>
                            <ol className="space-y-1 pl-1">
                              {msg.structuredData.process.map((step, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-700">
                                  <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-700 font-semibold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                                    {idx + 1}
                                  </span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        )}

                        {/* 5. Important Dates */}
                        {msg.structuredData.importantDates && msg.structuredData.importantDates.length > 0 && (
                          <div className="space-y-1.5">
                            <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1 text-amber-900">
                              <Calendar className="w-3.5 h-3.5 text-amber-600" />
                              <span>{t.datesTitle}</span>
                            </div>
                            <ul className="space-y-1 pl-1">
                              {msg.structuredData.importantDates.map((d, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-700">
                                  <span className="text-amber-600 font-bold shrink-0">•</span>
                                  <span>{d}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* 6. Next Action */}
                        {msg.structuredData.nextAction && (
                          <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200/80 text-emerald-950 font-medium">
                            <div className="font-bold uppercase tracking-wider text-[10px] text-emerald-800 mb-0.5">
                              {t.nextStepTitle}:
                            </div>
                            <div>{msg.structuredData.nextAction}</div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    )}

                    {/* Citation Card / Abstention */}
                    {!isUser && (
                      <SourceCitation
                        citation={msg.citation}
                        isAbstained={msg.isAbstained}
                        onViewDoc={onViewDoc}
                        onEscalate={onEscalate}
                      />
                    )}

                    {/* Timestamp */}
                    <div className={`text-[10px] pt-1 ${isUser ? 'text-blue-200 text-right' : 'text-slate-400 text-left'}`}>
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-start gap-3 justify-start animate-in fade-in">
                <div className="w-8 h-8 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-900">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-700" />
                    <span>Retrieving official evidence &amp; verifying statutory rules...</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse delay-75" />
                    <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse delay-150" />
                    <span className="text-[11px] text-slate-500 ml-1">Analyzing Ministry Circulars...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Chat Input Form */}
          <div className="p-4 border-t border-slate-200 bg-white">
            <form onSubmit={handleFormSubmit} className="flex items-center gap-2">
              <button
                type="button"
                onClick={onOpenVoice}
                className="p-3 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl border border-slate-200 transition-colors cursor-pointer"
                title="Speak question via microphone"
              >
                <Mic className="w-5 h-5 text-emerald-600" />
              </button>

              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="flex-1 px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600/30 focus:border-blue-700"
              />

              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="px-5 py-3 bg-blue-900 hover:bg-blue-950 text-white rounded-xl text-sm font-bold flex items-center gap-1.5 transition-all shadow-xs disabled:opacity-40 cursor-pointer"
              >
                <span>Send</span>
                <Send className="w-4 h-4 text-orange-400" />
              </button>
            </form>
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 px-1">
              <span>{t.aiDisclaimer}</span>
              <span className="font-mono">SIH 2026 Prototype Engine</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
