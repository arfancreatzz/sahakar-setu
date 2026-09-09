/**
 * SAHAKARSETU AI - Core Types
 * Smart India Hackathon 2026 - Problem 26088
 */

export type LanguageCode = 'hi' | 'en' | 'bn' | 'mr' | 'ta' | 'te' | 'gu' | 'kn';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  flag: string;
  speechCode: string;
}

export interface CitationData {
  source: string;
  documentTitle: string;
  section?: string;
  lastUpdated: string;
  officialStatus: boolean;
  docCategory: string;
  sourceUrl?: string;
  ministry?: string;
}

export interface StructuredAnswer {
  summary: string;
  eligibility?: string[];
  documents?: string[];
  process?: string[];
  importantDates?: string[];
  nextAction?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  detectedLanguage?: string;
  answerLanguage?: string;
  structuredData?: StructuredAnswer;
  citation?: CitationData;
  isAbstained?: boolean;
  ragTrace?: {
    sourceFound: boolean;
    relevantSectionRetrieved: boolean;
    answerGrounded: boolean;
    citationAdded: boolean;
    confidenceScore: number;
    latencyMs: number;
  };
}

export interface SchemeItem {
  id: string;
  name: string;
  shortDesc: string;
  category: 'Agriculture' | 'Insurance' | 'Cooperative' | 'Credit' | 'Rural Development';
  ministry: string;
  beneficiary: string;
  eligibility: string[];
  documents: string[];
  process: string[];
  officialSource: string;
  lastUpdated: string;
  portalUrl: string;
  samplePrompt: string;
  statusBadge: string;
}

export interface KnowledgeDoc {
  id: string;
  title: string;
  department: string;
  documentType: string;
  category: string;
  lastUpdated: string;
  verified: boolean;
  summary: string;
  keyClauses: string[];
  fileSize: string;
  officialUrl: string;
}

export interface EscalationTicket {
  id: string;
  timestamp: string;
  issue: string;
  category: string;
  language: string;
  userQuestion: string;
  status: 'Pending' | 'In Review' | 'Resolved';
  assignedTo?: string;
  notes?: string;
}

export interface UserProfile {
  name: string;
  kisanId: string;
  state: string;
  district: string;
  pacsName: string;
  landHolding: string;
  preferredLanguage: LanguageCode;
  voiceEnabled: boolean;
  simpleMode: boolean;
}
