export interface PacsService {
  id: string;
  title: string;
  category: string;
  iconName: string;
  description: string;
  keyBenefits: string[];
  documentsNeeded: string[];
}

export const PACS_SERVICES: PacsService[] = [
  {
    id: 'short-term-credit',
    title: 'Short-Term Crop Credit (ST-SAO)',
    category: 'Credit & Finance',
    iconName: 'Coins',
    description: 'Providing timely seasonal agricultural operations loan up to ₹3.00 Lakhs at subsidized 4% net interest rate via Kisan Credit Card (KCC).',
    keyBenefits: [
      'Zero collateral requirement up to ₹1.60 Lakhs',
      '3% interest subvention for prompt repayment',
      'Direct disbursement in RuPay Kisan Card'
    ],
    documentsNeeded: ['Aadhaar Card', 'Land Record (Khatauni)', 'Sowing Intimation', 'Bank Passbook']
  },
  {
    id: 'fertilizer-inputs',
    title: 'Subsidized Fertilizers & Quality Seeds',
    category: 'Agri Inputs',
    iconName: 'Sprout',
    description: 'Official distribution of Urea, DAP, NPK, certified HYV seeds, and bio-fertilizers at government controlled Maximum Retail Prices (MRP).',
    keyBenefits: [
      'Guaranteed authenticity avoiding adulterated inputs',
      'Doorstep village availability during peak sowing windows',
      'Credit purchase options for active members'
    ],
    documentsNeeded: ['PACS Member ID / Passbook', 'Aadhaar Card for POS thumb verification']
  },
  {
    id: 'custom-hiring',
    title: 'Custom Hiring Centers (CHC) for Machinery',
    category: 'Mechanization',
    iconName: 'Tractor',
    description: 'Affordable rental of tractors, rotavators, laser land levelers, seed drills, and harvesting combines for small & marginal farmers.',
    keyBenefits: [
      'Eliminates need for heavy capital expenditure',
      'Subsidized hourly / per-acre rental tariffs',
      'Trained operators available through the society'
    ],
    documentsNeeded: ['Member registration card', 'Village residential proof', 'Booking advance receipt']
  },
  {
    id: 'csc-services',
    title: 'Common Services Center (CSC) Kiosks',
    category: 'Digital Public Services',
    iconName: 'Laptop',
    description: 'Transformed PACS deliver 300+ e-governance services including Aadhaar updation, utility bill payments, insurance enrollment, and certificates.',
    keyBenefits: [
      'No need to travel 15-20 km to tehsil/district centers',
      'Transparent government-regulated service fee',
      'Assisted digital service for low-literacy citizens'
    ],
    documentsNeeded: ['Relevant identity or certificate application requirements']
  },
  {
    id: 'storage-warehousing',
    title: 'Decentralized Warehousing & Storage',
    category: 'Post-Harvest Logistics',
    iconName: 'Warehouse',
    description: 'Modern godowns and scientific storage at the panchayat level allowing farmers to avoid distress sales and obtain negotiable warehouse receipts.',
    keyBenefits: [
      'Protects produce against moisture, rodents and pest infestation',
      'Eligible for pledge finance up to 75% of stored crop value',
      'Integration with e-NAM national trading portal'
    ],
    documentsNeeded: ['Crop quality grading sheet', 'PACS storage voucher', 'Member ID']
  },
  {
    id: 'dairy-allied',
    title: 'Dairy & Fisheries Multipurpose Activities',
    category: 'Rural Livelihood',
    iconName: 'Fish',
    description: 'Under the new Model Bye-Laws, PACS can run automatic milk collection centers (AMCU), bulk milk coolers, fish feed supply, and fingerling nurseries.',
    keyBenefits: [
      'Fat and SNF based instant electronic milk payment',
      'Veterinary input and subsidized cattle feed supply',
      'Direct tie-up with district cooperative milk unions'
    ],
    documentsNeeded: ['Dairy animal ownership declaration', 'Bank account details']
  }
];

export const PACS_WORKFLOW_STEPS = [
  {
    step: 1,
    title: 'Citizen Inquiry & Application',
    desc: 'Farmer approaches village PACS or submits voice/text query via SAHAKARSETU AI.',
    badge: 'Step 1'
  },
  {
    step: 2,
    title: 'PACS Desk Verification',
    desc: 'PACS Secretary / Operator verifies landholding, KYC and member eligibility on National ERP.',
    badge: 'Step 2'
  },
  {
    step: 3,
    title: 'Service & Credit Appraisal',
    desc: 'Scale of finance calculated, input indent created, or scheme request generated.',
    badge: 'Step 3'
  },
  {
    step: 4,
    title: 'System & Bank Integration',
    desc: 'Cloud ERP syncs with DCCB / NABARD / State Agriculture portal for automated clearance.',
    badge: 'Step 4'
  },
  {
    step: 5,
    title: 'Benefit / Credit Disbursal',
    desc: 'RuPay card loaded, subsidized input handed over, or scheme certificate generated with SMS alert.',
    badge: 'Step 5'
  }
];

export const PACS_MEMBERSHIP_INFO = {
  regular: {
    name: 'Regular Member (Class A)',
    description: 'Full voting member with ownership rights in the cooperative.',
    eligibility: 'Resident farmer, agricultural landowner or rural producer within the PACS jurisdiction.',
    shareCapital: 'Subscription to at least 1 share (nominal ₹100 - ₹500 based on State bye-laws).',
    rights: [
      'Right to vote in the Annual General Meeting (AGM) — One Member, One Vote principle',
      'Eligible to contest elections for the PACS Managing Committee / Board of Directors',
      'Right to receive patronage dividends and annual profit distributions',
      'Priority access to subsidized crop credit and storage allocations',
      'Right to inspect audited balance sheet, ledger, and bye-laws'
    ]
  },
  nominal: {
    name: 'Nominal / Associate Member (Class B)',
    description: 'Non-voting member enrolled for specific transactional services.',
    eligibility: 'Non-cultivating rural resident or commercial borrower seeking specific services.',
    shareCapital: 'Nominal entrance fee (typically ₹10 - ₹25) without equity ownership.',
    rights: [
      'Access to CSC services, input purchases, or rental facilities',
      'No voting rights in general body meetings',
      'Cannot contest elections for Managing Committee'
    ]
  }
};
