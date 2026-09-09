import React, { useState } from 'react';
import {
  Sparkles,
  Globe,
  Mic,
  Eye,
  User,
  Menu,
  X,
  ShieldCheck,
  ChevronDown,
  Layers,
  Award
} from 'lucide-react';
import { LanguageCode } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  onOpenVoice: () => void;
  simpleMode: boolean;
  setSimpleMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenProfile: () => void;
  onOpenSihInfo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  language,
  setLanguage,
  onOpenVoice,
  simpleMode,
  setSimpleMode,
  onOpenProfile,
  onOpenSihInfo,
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.hi;
  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'chat', label: t.navChat },
    { id: 'schemes', label: t.navSchemes },
    { id: 'pacs', label: t.navPacs },
    { id: 'legal', label: t.navLegal },
    { id: 'resources', label: t.navResources },
    { id: 'impact', label: 'Impact' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'tech', label: 'Architecture' },
    { id: 'admin', label: 'Admin/Metrics' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      {/* Top Ministry / SIH 2026 Strip */}
      <div className="bg-slate-900 text-slate-300 text-[11px] px-4 py-1.5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="font-medium text-slate-200">Government of India • Ministry of Cooperation Alignment</span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">National PACS Computerization &amp; Multilingual Governance Initiative</span>
          </div>
          <button
            onClick={onOpenSihInfo}
            className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
          >
            <Award className="w-3.5 h-3.5 text-orange-400" />
            <span>SIH 2026: PS 26088 (Team: Silent Echo)</span>
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <div
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-900 via-blue-800 to-emerald-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold text-blue-950 tracking-tight">
                  SAHAKARSETU
                </span>
                <span className="px-1.5 py-0.5 rounded-md bg-orange-500 text-white text-[10px] font-black tracking-wider uppercase">
                  AI
                </span>
              </div>
              <p className="text-[10px] font-medium text-slate-500 tracking-tight line-clamp-1 max-w-[210px] sm:max-w-none">
                Cooperative Governance &amp; Rural Services Gateway
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'text-blue-900 bg-blue-50/90 font-bold'
                      : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all cursor-pointer shadow-2xs"
                title="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-blue-700" />
                <span className="hidden sm:inline">{currentLang.nativeLabel}</span>
                <span className="sm:hidden">{currentLang.flag}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white border border-slate-200 shadow-xl py-1 z-50 text-xs animate-in fade-in">
                  <div className="px-3 py-1.5 font-bold text-slate-400 text-[10px] uppercase tracking-wider border-b border-slate-100">
                    Phase-1 Languages (8)
                  </div>
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-left hover:bg-slate-50 cursor-pointer ${
                        language === lang.code ? 'bg-blue-50 font-bold text-blue-900' : 'text-slate-700'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.nativeLabel}</span>
                      </span>
                      <span className="text-[10px] text-slate-400">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Voice Interaction Button */}
            <button
              type="button"
              onClick={onOpenVoice}
              className="p-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 border border-slate-200 transition-colors cursor-pointer"
              title="Voice AI - Speak in your language"
            >
              <Mic className="w-4 h-4 text-emerald-600" />
            </button>

            {/* Accessibility / Simple Mode Toggle */}
            <button
              type="button"
              onClick={() => setSimpleMode((prev) => !prev)}
              className={`p-2 rounded-lg border transition-all cursor-pointer ${
                simpleMode
                  ? 'bg-amber-500 text-white border-amber-600 ring-2 ring-amber-300'
                  : 'text-slate-700 hover:text-blue-900 hover:bg-blue-50 border-slate-200'
              }`}
              title={simpleMode ? 'Simple Mode Enabled (Large fonts & high contrast)' : 'Enable Simple Mode for Rural Accessibility'}
            >
              <Eye className="w-4 h-4" />
            </button>

            {/* Citizen Profile Button */}
            <button
              type="button"
              onClick={onOpenProfile}
              className="p-2 rounded-lg text-slate-700 hover:text-blue-900 hover:bg-blue-50 border border-slate-200 transition-colors cursor-pointer"
              title="Citizen Profile & Saved Queries"
            >
              <User className="w-4 h-4 text-blue-700" />
            </button>

            {/* Primary CTA */}
            <button
              type="button"
              onClick={() => setActiveTab('chat')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold rounded-xl shadow-xs transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>{t.navAskBtn}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-5 space-y-1 animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-900 font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setActiveTab('chat');
                setIsMobileOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-900 text-white font-bold rounded-xl text-sm"
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>{t.navAskBtn}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
