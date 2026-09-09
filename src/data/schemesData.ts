import { SchemeItem } from '../types';

export const SCHEMES_LIST: SchemeItem[] = [
  {
    id: 'pmfby',
    name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    shortDesc: 'Comprehensive crop insurance coverage against non-preventable natural risks from pre-sowing to post-harvest.',
    category: 'Insurance',
    ministry: 'Ministry of Agriculture & Farmers Welfare, GoI',
    beneficiary: 'All loanee and non-loanee farmers growing notified crops',
    eligibility: [
      'Farmers cultivating notified crops in defined insurance units',
      'Sharecroppers and tenant farmers with valid cultivation agreements',
      'Both irrigated and rainfed crop growers'
    ],
    documents: [
      'Aadhaar Card or Photo ID',
      'Land Records (RoR / Jamabandi / Khasra-Khatauni)',
      'Bank Passbook with clear IFSC code',
      'Sowing Certificate / Self-Declaration of crop sown'
    ],
    process: [
      'Enroll via local PACS, Commercial Bank branch, CSC, or directly on pmfby.gov.in',
      'Pay farmer premium share (2% Kharif, 1.5% Rabi, 5% Commercial/Horticulture)',
      'Obtain official insurance policy certificate / acknowledgement receipt',
      'Report any localized disaster within 72 hours via Crop Insurance App'
    ],
    officialSource: 'PMFBY Operational Guidelines 2026, MoA&FW',
    lastUpdated: '10 August 2026',
    portalUrl: 'https://pmfby.gov.in',
    samplePrompt: 'मेरी फसल का बीमा कैसे होगा?',
    statusBadge: 'Active & Nationwide'
  },
  {
    id: 'pacs-computerization',
    name: 'Centrally Sponsored Scheme for Computerization of PACS',
    shortDesc: 'Digitizing 63,000+ functional PACS onto a cloud-based National ERP to enhance transparency, financial viability, and multipurpose service delivery.',
    category: 'Cooperative',
    ministry: 'Ministry of Cooperation, GoI',
    beneficiary: 'Primary Agricultural Credit Societies (PACS) and their 13+ Crore rural members',
    eligibility: [
      'All registered and operational PACS across States and Union Territories',
      'Societies adopting the Common Accounting System (CAS)',
      'Commitment to onboard onto the National Unified ERP platform'
    ],
    documents: [
      'PACS Registration Certificate',
      'Resolution of PACS Managing Committee',
      'Audit reports and legacy member accounts registry',
      'Bank tie-up with District Central Cooperative Bank (DCCB)'
    ],
    process: [
      'State Cooperative Department forwards PACS roster to National Level Monitoring Committee',
      'Deployment of enterprise hardware (servers, terminals, VPN, UPS)',
      'Data migration of legacy member ledger into cloud ERP',
      'Go-live for computerized loan disbursements and CSC e-services'
    ],
    officialSource: 'Project Guidelines for PACS Computerization (Outlay ₹2,925.39 Cr)',
    lastUpdated: '15 July 2026',
    portalUrl: 'https://cooperation.gov.in/pacs-computerization',
    samplePrompt: 'What is the National PACS Computerization ERP project?',
    statusBadge: '63,686+ ERP Onboarded'
  },
  {
    id: 'pm-kisan',
    name: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    shortDesc: 'Direct income support of ₹6,000 per year transferred in three equal quarterly installments of ₹2,000 directly into the bank accounts of farmer families.',
    category: 'Agriculture',
    ministry: 'Ministry of Agriculture & Farmers Welfare, GoI',
    beneficiary: 'Small and marginal landholder farmer families',
    eligibility: [
      'Landholding farmer families with cultivable land parcels in their names',
      'Subject to exclusion criteria (institutional landholders, tax-paying professionals)',
      'Mandatory e-KYC and Aadhaar-seeded bank account'
    ],
    documents: [
      'Aadhaar Card linked with active mobile number',
      'Land Ownership document / Mutation record',
      'Bank Account details with NPCI Aadhaar seeding'
    ],
    process: [
      'Self-registration on PM-KISAN Portal or through Village CSC / PACS',
      'Verification of land record by District Agriculture / Revenue Authority',
      'e-KYC completion through biometric or OTP / Face Authentication app',
      'Direct Benefit Transfer (DBT) credit notification via SMS'
    ],
    officialSource: 'PM-KISAN Scheme Guidelines, MoA&FW',
    lastUpdated: '01 June 2026',
    portalUrl: 'https://pmkisan.gov.in',
    samplePrompt: 'How can I check PM-KISAN 17th/18th installment eligibility?',
    statusBadge: 'Active DBT'
  },
  {
    id: 'kcc-scheme',
    name: 'Kisan Credit Card (KCC) & Interest Subvention Scheme',
    shortDesc: 'Adequate and timely credit support from the banking system under single window with flexible repayment and 3% Prompt Repayment Incentive (PRI).',
    category: 'Credit',
    ministry: 'Ministry of Finance & NABARD, GoI',
    beneficiary: 'Individual/joint borrowers, tenant farmers, SHGs, Dairy & Fisheries farmers',
    eligibility: [
      'Owner cultivators, tenant farmers, oral lessees & share croppers',
      'Animal Husbandry, Poultry, and Inland/Marine Fishery practitioners',
      'Clean credit history or first-time credit borrowers'
    ],
    documents: [
      'Duly completed KCC Application Form',
      'Proof of Identity and Address (Aadhaar / Voter ID)',
      'Land holding records certified by local revenue officer',
      'Crop pattern & proposed cropping plan'
    ],
    process: [
      'Submit KCC form at your affiliated PACS or Cooperative Bank branch',
      'Branch verifies scale of finance based on District Level Technical Committee (DLTC) limits',
      'Sanction of revolving cash credit limit valid for 5 years',
      'Issue of RuPay Kisan Card for ATM and PoS transactions'
    ],
    officialSource: 'RBI & NABARD Master Circular on Kisan Credit Card',
    lastUpdated: '18 May 2026',
    portalUrl: 'https://nabard.org',
    samplePrompt: 'What is the interest rate and limit under Kisan Credit Card?',
    statusBadge: 'Collateral-free up to ₹1.60L'
  },
  {
    id: 'aif-scheme',
    name: 'Agriculture Infrastructure Fund (AIF)',
    shortDesc: 'Financing facility for viable projects for post-harvest management infrastructure and community farming assets through 3% interest subvention.',
    category: 'Rural Development',
    ministry: 'Department of Agriculture & Farmers Welfare, GoI',
    beneficiary: 'PACS, FPOs, Agri-entrepreneurs, SHGs, Joint Liability Groups',
    eligibility: [
      'PACS establishing warehouses, silos, cold storage, or sorting/grading units',
      'Primary processing centers and custom hiring service centers',
      'Loan facility up to ₹2.00 Crore per project eligible for interest subvention'
    ],
    documents: [
      'Detailed Project Report (DPR)',
      'Land ownership or long-term lease deed (minimum 10 years)',
      'PACS Board Resolution and audited financial statements for last 2 years',
      'Statutory clearances (if applicable)'
    ],
    process: [
      'Register on AIF online portal (agriinfra.dac.gov.in)',
      'Upload project proposal and select financing cooperative/commercial bank',
      'Project appraisal by National Project Management Unit (PMU)',
      'Loan sanction and automatic quarterly interest subvention credit'
    ],
    officialSource: 'Operational Guidelines of AIF Financing Facility',
    lastUpdated: '04 July 2026',
    portalUrl: 'https://agriinfra.dac.gov.in',
    samplePrompt: 'Can our PACS apply for warehouse construction grant under AIF?',
    statusBadge: '₹1 Lakh Cr Facility'
  },
  {
    id: 'fpo-promotion',
    name: 'Formation and Promotion of 10,000 Farmer Producer Organizations (FPOs)',
    shortDesc: 'Dedicated support for small and marginal farmers to build collective bargaining power, scale economies, and direct market access.',
    category: 'Cooperative',
    ministry: 'Ministry of Agriculture & Farmers Welfare, GoI',
    beneficiary: 'Small and marginal farmer collectives, women farmers, tribal cultivators',
    eligibility: [
      'Minimum 300 farmer members in plains and 100 members in hilly/NE regions',
      'Registered under Cooperative Societies Act or Companies Act',
      'Active business plan in agricultural or allied commodities'
    ],
    documents: [
      'Registration Certificate & Articles of Association',
      'Member Share Capital Registry with KYC',
      'Audited Balance Sheet or Project Feasibility Study',
      'Bank Account in the name of the FPO'
    ],
    process: [
      'Cluster-Based Business Organization (CBBO) handholds farmers for mobilization',
      'Registration of FPO and appointment of Board of Directors',
      'Equity Grant matching contribution up to ₹15 Lakhs per FPO',
      'Credit Guarantee Cover up to ₹2 Crores with NABARD/NCDC'
    ],
    officialSource: 'Operational Guidelines for Formation of 10,000 FPOs',
    lastUpdated: '12 January 2026',
    portalUrl: 'https://enam.gov.in',
    samplePrompt: 'How to form a Farmer Producer Organization with PACS?',
    statusBadge: '₹6,865 Cr Allocation'
  }
];
