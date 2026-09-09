export interface LegalTopic {
  id: string;
  category: string;
  title: string;
  officialRuleRef: string;
  actName: string;
  summary: string;
  practicalGuidance: string[];
  documentsNeeded: string[];
  remedyAction: string;
}

export const LEGAL_CATEGORIES = [
  'All Guidance',
  'Cooperative Rules',
  'Membership Rights',
  'PACS Governance',
  'Complaints & Grievances',
  'Application Procedures',
  'Document Requirements'
];

export const LEGAL_TOPICS: LegalTopic[] = [
  {
    id: 'legal-membership-refusal',
    category: 'Membership Rights',
    title: 'Arbitrary Rejection or Delay of PACS Membership Application',
    officialRuleRef: 'Model Bye-Laws 2026, Clause 5.4 & State Cooperative Societies Act, Section 19',
    actName: 'State Cooperative Societies Act / Model PACS Bye-Laws',
    summary: 'A primary cooperative society cannot unjustifiably deny membership to an eligible rural cultivator who resides within its area of operation and meets statutory criteria.',
    practicalGuidance: [
      'The PACS Managing Committee must communicate decision on membership within 30 days of receiving the application.',
      'If no decision is conveyed within the statutory period, it is deemed deemed accepted in several states or subject to immediate revision.',
      'Written grounds for refusal must be communicated to the applicant with an official acknowledgment.'
    ],
    documentsNeeded: ['Application acknowledgment slip', 'Copy of submitted Form-1 with land record', 'Voter/Aadhaar identity copy'],
    remedyAction: 'File an appeal before the Deputy Registrar / Assistant Registrar of Cooperative Societies (ARCS) of your subdivision within 60 days.'
  },
  {
    id: 'legal-agm-election',
    category: 'PACS Governance',
    title: 'Failure to Convene Annual General Meeting (AGM) or Delay in Elections',
    officialRuleRef: 'MSCS Act Section 39 & State Cooperative Societies Act (Democratic Control Clauses)',
    actName: 'Multi-State Cooperative Societies Act / State Acts',
    summary: 'Every cooperative society must hold its Annual General Meeting within six months of the close of each financial year (typically by September 30).',
    practicalGuidance: [
      'The Board must present audited financial statements, budget for next year, and statutory compliance report before members.',
      'If the Board fails to convene the AGM, the Registrar of Cooperative Societies has statutory powers to summon a special general meeting.',
      'Elections must be conducted strictly under the auspices of the State Cooperative Election Authority.'
    ],
    documentsNeeded: ['Written petition signed by at least 1/5th of voting members', 'Certified copy of society bye-laws'],
    remedyAction: 'Submit a requisition letter to the District Registrar of Cooperative Societies (RCS) seeking appointment of an Administrator or Special Officer.'
  },
  {
    id: 'legal-dispute-section84',
    category: 'Cooperative Rules',
    title: 'Dispute Resolution & Arbitration under Cooperative Laws',
    officialRuleRef: 'Section 84 of MSCS Act & Section 90 of State Cooperative Societies Acts',
    actName: 'Statutory Arbitration under Cooperative Jurisdiction',
    summary: 'Civil courts are barred from taking cognizance of disputes touching the constitution, management, or business of a cooperative society. Such disputes must be referred to arbitration.',
    practicalGuidance: [
      'Disputes among members, past members, committee members, or between society and agents must be submitted to the Registrar.',
      'The Registrar may decide the dispute personally or refer it to an appointed Arbitrator.',
      'Arbitral awards passed under cooperative acts have the force of a civil court decree.'
    ],
    documentsNeeded: ['Statement of Claim with chronological facts', 'Receipt of arbitration filing fee', 'Affidavit in support of petition'],
    remedyAction: 'Draft and submit a formal reference under Section 84 to the Registrar / Cooperative Court.'
  },
  {
    id: 'legal-grievance-ombudsman',
    category: 'Complaints & Grievances',
    title: 'Filing Grievance Against Mismanagement, Embezzlement, or Harassment',
    officialRuleRef: 'Section 85-A of MSCS Act & State Vigilance Directives',
    actName: 'Cooperative Ombudsman Scheme & Registrar Inquiry Mechanism',
    summary: 'Citizens and members can trigger statutory inspections or lodge formal complaints if PACS funds, fertilizer allocation, or loan disbursements are mismanaged.',
    practicalGuidance: [
      'First approach the PACS Secretary and Chairman in writing with a registered grievance.',
      'If unanswered within 15 days, lodge an online grievance via CPGRAMS or the State Cooperative Grievance Portal.',
      'Under statutory inquiry provisions, an inspection can be ordered upon application by 1/3rd of committee members or 1/10th of total members.'
    ],
    documentsNeeded: ['Copy of previous complaint to PACS', 'Evidence/documents (fake passbook entry, overcharging receipt)', 'Aadhaar identity'],
    remedyAction: 'Escalate to the State Cooperative Ombudsman or District Collector Grievance Redressal Cell.'
  },
  {
    id: 'legal-inspection-rti',
    category: 'Document Requirements',
    title: 'Member Right to Inspect Records, Balance Sheets, and Audit Reports',
    officialRuleRef: 'Model Bye-Laws Clause 38 & Right to Information (Applicability Rules)',
    actName: 'Cooperative Transparency & Member Inspection Rights',
    summary: 'Every regular member is entitled to inspect the books of accounts, register of members, minutes of general meetings, and annual audit reports at the registered office during business hours.',
    practicalGuidance: [
      'A formal written request specifying the records sought must be delivered to the Chief Executive Officer / Secretary.',
      'The society may charge nominal inspection or photocopy fees as sanctioned in the bye-laws.',
      'Denial of access without lawful reason constitutes a punishable irregularity under cooperative inspection laws.'
    ],
    documentsNeeded: ['Member passbook / Membership number proof', 'Inspection request letter specifying documents sought'],
    remedyAction: 'Apply to the Assistant Registrar (Audit) if the society persistently withholds statutory records.'
  }
];

export const MANDATORY_LEGAL_DISCLAIMER =
  'Informational guidance only. For legally binding decisions, consult the relevant authority or qualified legal professional.';
