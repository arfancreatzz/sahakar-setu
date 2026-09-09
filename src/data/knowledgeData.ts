import { KnowledgeDoc, ChatMessage } from '../types';

export const OFFICIAL_DOCUMENTS: KnowledgeDoc[] = [
  {
    id: 'doc-mocs-pacs-01',
    title: 'Computerization of Primary Agricultural Credit Societies (PACS) — Operational & Implementation Guidelines',
    department: 'Ministry of Cooperation, Government of India',
    documentType: 'Centrally Sponsored Scheme Guidelines',
    category: 'PACS',
    lastUpdated: '15 July 2026',
    verified: true,
    fileSize: '4.2 MB PDF',
    officialUrl: 'https://cooperation.gov.in/pacs-computerization',
    summary: 'Master operational blueprint detailing national ERP rollout across 63,686+ onboarded PACS, common accounting system (CAS), hardware procurement subsidies, and state cooperative bank integration.',
    keyClauses: [
      'Section 3.2: Universal ERP adoption for transparent bookkeeping and direct audit trail',
      'Section 4.1: Financial allocation of ₹2,925.39 Crores total outlay with Central:State cost sharing',
      'Section 7.4: Digitization of legacy land records and automated credit disbursement via KCC'
    ]
  },
  {
    id: 'doc-mocs-byelaws-02',
    title: 'Model Bye-Laws for Primary Agricultural Credit Societies (PACS) — Governance & Multipurpose Activities',
    department: 'Ministry of Cooperation, Government of India',
    documentType: 'Statutory Model Bye-Laws',
    category: 'Cooperative Acts',
    lastUpdated: '02 June 2026',
    verified: true,
    fileSize: '2.8 MB PDF',
    officialUrl: 'https://cooperation.gov.in/model-bye-laws-pacs',
    summary: 'Empowers PACS to diversify into 25+ business activities including dairy, fisheries, CSCs, custom hiring centers, LPG/petrol distribution, and fair price shops.',
    keyClauses: [
      'Clause 5: Criteria for Regular (Class-A) Membership vs Nominal (Class-B) Membership',
      'Clause 14: Democratic governance, annual general meeting (AGM) mandates, and board composition',
      'Clause 22: Maximum borrowing power and dividend distribution thresholds for members'
    ]
  },
  {
    id: 'doc-pmfby-guidelines-03',
    title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY) — Revised Operational Guidelines 2026',
    department: 'Ministry of Agriculture & Farmers Welfare, Government of India',
    documentType: 'Operational Guidelines',
    category: 'PMFBY',
    lastUpdated: '10 August 2026',
    verified: true,
    fileSize: '6.5 MB PDF',
    officialUrl: 'https://pmfby.gov.in/guidelines',
    summary: 'Comprehensive yield loss, localized calamity, mid-season adversity, and post-harvest risk coverage rules for loanee and non-loanee farmers.',
    keyClauses: [
      'Chapter II, Clause 2.1: Uniform nominal premium of 2.0% for Kharif, 1.5% for Rabi, and 5.0% for Annual Commercial/Horticultural crops',
      'Chapter IV, Clause 4.3: Mandatory 72-hour crop damage intimation window via Crop Insurance App / Toll-free portal',
      'Chapter VII, Clause 7.2: Claim settlement directly to bank accounts through National Crop Insurance Portal (NCIP)'
    ]
  },
  {
    id: 'doc-mscs-act-04',
    title: 'Multi-State Cooperative Societies (Amendment) Act & Rules 2023-2026',
    department: 'Central Registrar of Cooperative Societies (CRCS)',
    documentType: 'Parliamentary Act & Statutory Rules',
    category: 'Rules & Regulations',
    lastUpdated: '28 April 2026',
    verified: true,
    fileSize: '3.4 MB PDF',
    officialUrl: 'https://crcs.gov.in/acts-rules',
    summary: 'Legal framework establishing the Cooperative Election Authority, Cooperative Ombudsman for member grievances, and mandatory concurrent auditing.',
    keyClauses: [
      'Section 45: Establishment of Cooperative Election Authority for fair electoral roll management',
      'Section 84: Statutory dispute resolution mechanism and arbitration procedures',
      'Section 85-A: Cooperative Ombudsman appointment for expeditious redressal of citizen complaints'
    ]
  },
  {
    id: 'doc-kcc-guidelines-05',
    title: 'Kisan Credit Card (KCC) Scheme with Interest Subvention Scheme (ISS)',
    department: 'NABARD & Reserve Bank of India (RBI)',
    documentType: 'Master Circular',
    category: 'Agricultural Schemes',
    lastUpdated: '18 May 2026',
    verified: true,
    fileSize: '1.9 MB PDF',
    officialUrl: 'https://nabard.org/kcc-scheme',
    summary: 'Guidelines for revolving cash credit up to ₹3.00 Lakhs at an effective 4% interest rate (after 3% Prompt Repayment Incentive) disbursed through PACS and RRBs.',
    keyClauses: [
      'Para 2.1: Credit assessment based on scale of finance, crop acreage, and post-harvest maintenance',
      'Para 4.2: Collateral-free limit extended up to ₹1.60 Lakhs (and up to ₹3 Lakhs under tie-up arrangements)',
      'Para 6.0: KCC coverage for Allied activities (Dairy, Fishery, Animal Husbandry)'
    ]
  },
  {
    id: 'doc-aif-guidelines-06',
    title: 'Agriculture Infrastructure Fund (AIF) — PACS Convergence Guidelines',
    department: 'Department of Agriculture & Farmers Welfare, GoI',
    documentType: 'Financing Facility Scheme',
    category: 'Government Circulars',
    lastUpdated: '04 July 2026',
    verified: true,
    fileSize: '3.1 MB PDF',
    officialUrl: 'https://agriinfra.dac.gov.in',
    summary: 'Medium-long term debt financing for post-harvest management infrastructure with 3% interest subvention and CGTMSE credit guarantee for PACS.',
    keyClauses: [
      'Clause 3.1: Special 1% interest subvention top-up for PACS building cold storages & sorting units',
      'Clause 5.2: 100% credit guarantee fee borne by National Government under CGTMSE fund',
      'Clause 8.0: Integration with e-NAM mandis and NABARD cooperative development funds'
    ]
  }
];

export interface PreloadedAnswer {
  id: string;
  triggerKeywords: string[];
  languages: Record<string, {
    query: string;
    summary: string;
    eligibility: string[];
    documents: string[];
    process: string[];
    importantDates: string[];
    nextAction: string;
    citation: {
      source: string;
      documentTitle: string;
      section: string;
      lastUpdated: string;
      docCategory: string;
      sourceUrl: string;
    };
  }>;
}

export const PRELOADED_KNOWLEDGE_BASE: PreloadedAnswer[] = [
  {
    id: 'pmfby-crop-insurance',
    triggerKeywords: ['फसल', 'बीमा', 'pmfby', 'crop insurance', 'বীমা', 'விதை', 'పంట', 'વિમો'],
    languages: {
      hi: {
        query: 'मेरी फसल का बीमा कैसे होगा?',
        summary: 'आप प्रधानमंत्री फसल बीमा योजना (PMFBY) के अंतर्गत अधिसूचित फसलों के लिए अपने स्थानीय पैक्स (PACS), बैंक शाखा या राष्ट्रीय फसल बीमा पोर्टल (NCIP) के माध्यम से अपनी फसल का बीमा करवा सकते हैं।',
        eligibility: [
          'अधिसूचित क्षेत्रों में अधिसूचित फसल उगाने वाले सभी किसान (भू-स्वामी और बटाईदार/काश्तकार किसान दोनों पात्र हैं)',
          'ऋणी किसान (जिन्होंने केसीसी/फसल ऋण लिया है) और गैर-ऋणी किसान दोनों नामांकन करा सकते हैं',
          'बुआई से लेकर कटाई उपरांत 14 दिनों तक चक्रवात, बेमौसम बारिश आदि जोखिमों का सुरक्षा कवच'
        ],
        documents: [
          'आधार कार्ड (Aadhaar Card) अथवा अधिकृत पहचान पत्र',
          'भू-स्वामित्व अभिलेख (खतौनी / जमाबंदी / भू-अभिलेख की प्रति)',
          'सक्रिय बैंक खाता विवरण (आईएफएससी कोड सहित पासबुक प्रति)',
          'फसल बुआई स्व-घोषणा पत्र अथवा पटवारी/ग्राम सेवक द्वारा जारी बुआई प्रमाण पत्र',
          'बटाईदार किसानों हेतु सहमति/काश्तकारी शपथ पत्र (यदि लागू हो)'
        ],
        process: [
          'चरण 1: अपने स्थानीय पैक्स (PACS) या बैंक जहां आपका बचत/ऋण खाता है, वहां संपर्क करें।',
          'चरण 2: संबंधित मौसम (खरीफ या रबी) हेतु फसल बीमा आवेदन प्रपत्र भरें।',
          'चरण 3: निर्धारित किसान प्रीमियम का भुगतान करें (खरीफ: 2%, रबी: 1.5%, बागवानी/वाणिज्यिक: 5%)। शेष प्रीमियम केंद्र व राज्य सरकार द्वारा वहन किया जाता है।',
          'चरण 4: प्रीमियम भुगतान के उपरांत बैंक या पैक्स से बीमा पावती रसीद व आवेदन संख्या अवश्य प्राप्त करें।',
          'चरण 5: किसी प्राकृतिक आपदा के समय 72 घंटे के भीतर "Crop Insurance App" या टोल-फ्री 14447 पर क्षति की सूचना दर्ज करें।'
        ],
        importantDates: [
          'खरीफ सीजन नामांकन की अंतिम तिथि: प्रतिवर्ष 31 जुलाई',
          'रबी सीजन नामांकन की अंतिम तिथि: प्रतिवर्ष 31 दिसंबर',
          'स्थानीय आपदा क्षति सूचना समयसीमा: घटना के 72 घंटे के भीतर'
        ],
        nextAction: 'अपने निकटतम प्राथमिक कृषि ऋण समिति (PACS) कार्यालय जाएं अथवा pmfby.gov.in पर सीधे ऑनलाइन आवेदन करें।',
        citation: {
          source: 'कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार',
          documentTitle: 'प्रधानमंत्री फसल बीमा योजना (PMFBY) — संशोधित परिचालन दिशानिर्देश 2026',
          section: 'अध्याय II (प्रीमियम दरें) एवं अध्याय IV (क्षति आकलन व दावा प्रक्रिया)',
          lastUpdated: '10 अगस्त 2026',
          docCategory: 'PMFBY',
          sourceUrl: 'https://pmfby.gov.in'
        }
      },
      en: {
        query: 'How can I insure my crop under PMFBY?',
        summary: 'You can enroll under the Pradhan Mantri Fasal Bima Yojana (PMFBY) for notified crops in notified areas through your local Primary Agricultural Credit Society (PACS), bank branch, or online via the National Crop Insurance Portal (NCIP).',
        eligibility: [
          'All farmers including sharecroppers and tenant farmers growing notified crops in notified areas',
          'Both loanee farmers (holding KCC/crop loans) and non-loanee farmers are fully eligible',
          'Coverage spans prevented sowing, standing crop damage (drought, flood, pests), and post-harvest losses up to 14 days'
        ],
        documents: [
          'Aadhaar Card / Government-approved Photo Identity Proof',
          'Land Ownership Records (RoR / Jamabandi / Khasra / Khatauni copy)',
          'Active Bank Account Passbook with clear IFSC code',
          'Crop Sowing Certificate / Self-declaration certified by Village Revenue Officer/Patwari',
          'Tenancy Agreement or Declaration form in case of tenant farmers'
        ],
        process: [
          'Step 1: Approach your village PACS secretary or the bank branch where your account is held.',
          'Step 2: Submit the PMFBY declaration form specifying the survey number, crop type, and acreage.',
          'Step 3: Pay the affordable farmer share of premium (2% for Kharif crops, 1.5% for Rabi foodgrains/oilseeds, 5% for commercial/horticulture).',
          'Step 4: Collect the official Insurance Acknowledgement Receipt containing the policy reference ID.',
          'Step 5: In case of localized crop loss, report within 72 hours via the Crop Insurance App or Kisan Call Centre (1800-180-1551).'
        ],
        importantDates: [
          'Kharif Season Enrollment Cut-off: 31st July annually',
          'Rabi Season Enrollment Cut-off: 31st December annually',
          'Localized Damage Intimation: Within 72 hours of calamity'
        ],
        nextAction: 'Contact your Village PACS Secretary or visit the official PMFBY portal at pmfby.gov.in.',
        citation: {
          source: 'Ministry of Agriculture & Farmers Welfare, Government of India',
          documentTitle: 'Pradhan Mantri Fasal Bima Yojana (PMFBY) — Revised Operational Guidelines',
          section: 'Chapter II, Clause 2.1 & Chapter IV, Clause 4.3',
          lastUpdated: '10 August 2026',
          docCategory: 'PMFBY',
          sourceUrl: 'https://pmfby.gov.in'
        }
      },
      bn: {
        query: 'আমার ফসলের বীমা কীভাবে হবে?',
        summary: 'আপনি প্রধানমন্ত্রী ফসল বিমা যোজনার (PMFBY) আওতায় আপনার স্থানীয় প্যাকস (PACS) বা অনুমোদিত ব্যাংকের মাধ্যমে বিজ্ঞাপিত ফসলের সুরক্ষা পেতে পারেন।',
        eligibility: [
          'বিজ্ঞাপিত অঞ্চলের সকল প্রকৃত কৃষক ও ভাগচাষী',
          'ঋণী এবং অ-ঋণী উভয় শ্রেণির কৃষকই বীমার জন্য সম্পূর্ণ উপযুক্ত',
          'অনাবৃষ্টি, অতিবৃষ্টি, পোকার আক্রমণ এবং ফসল কাটার পর ১৪ দিন পর্যন্ত ক্ষয়ক্ষতি অন্তর্ভুক্ত'
        ],
        documents: [
          'আধার কার্ড ও সচিত্র পরিচয়পত্র',
          'জমির খতিয়ান / পরচা / স্বত্ব সংক্রান্ত রেকর্ড',
          'ব্যাংক পাসবই (IFSC কোড সহ)',
          'ফসল রোপণ শংসাপত্র (কৃষি আধিকারিক বা পঞ্চায়েত প্রধান দ্বারা প্রত্যায়িত)'
        ],
        process: [
          'ধাপ ১: আপনার গ্রাম পঞ্চায়েতের আওতাভুক্ত প্যাকস (PACS) অফিসে উপস্থিত হন।',
          'ধাপ ২: আবেদনপত্রে জমির দাগ নম্বর ও ফসলের বিবরণ উল্লেখ করে জমা দিন।',
          'ধাপ ৩: নামমাত্র প্রিমিয়াম জমা দিন (খরিফ ২%, রবি ১.৫%)।',
          'ধাপ ৪: বীমার রসিদ এবং ট্র্যাকিং নম্বর সংগ্রহ করুন।'
        ],
        importantDates: [
          'খরিফ আবেদন শেষ সময়সীমা: ৩১ জুলাই',
          'রবি আবেদন শেষ সময়সীমা: ৩১ ডিসেম্বর'
        ],
        nextAction: 'স্থানীয় প্যাকস (PACS) সচিবের সঙ্গে যোগাযোগ করুন অথবা pmfby.gov.in পোর্টালে যান।',
        citation: {
          source: 'কৃষি ও কৃষক কল্যাণ মন্ত্রক, ভারত সরকার',
          documentTitle: 'PMFBY সংশোধিত নির্দেশিকা ২০২৬',
          section: 'অধ্যায় ২ ও ৪',
          lastUpdated: '১০ আগস্ট ২০২৬',
          docCategory: 'PMFBY',
          sourceUrl: 'https://pmfby.gov.in'
        }
      },
      ta: {
        query: 'PMFBY திட்டத்திற்கு நான் தகுதியானவரா?',
        summary: 'ஆம்! அறிவிக்கப்பட்ட பகுதிகளில் பயிர் செய்யும் அனைத்து விவசாயிகளும் மற்றும் குத்தகைதாரர்களும் பிரதமரின் பயிர் காப்பீட்டுத் திட்டம் (PMFBY) மூலம் தகுதி பெறுகின்றனர்.',
        eligibility: [
          'அறிவிக்கப்பட்ட பயிர்களை பயிரிடும் நில உரிமையாளர்கள் மற்றும் குத்தகை விவசாயிகள்',
          'பயிர் கடன் பெற்ற மற்றும் கடன் பெறாத இருதரப்பு விவசாயிகளும் விண்ணப்பிக்கலாம்',
          'விதைப்பு முதல் அறுவடைக்கு பிந்தைய 14 நாட்கள் வரை பேரிடர் பாதுகாப்பு'
        ],
        documents: [
          'ஆதார் அட்டை நகல்',
          'பட்டா / சிட்டா / நில உரிமை சான்றுகள்',
          'வங்கி சேமிப்பு கணக்கு புத்தக நகல் (IFSC குறியீட்டுடன்)',
          'பயிர் சாகுபடி சான்று (VAO சான்றளித்தது)'
        ],
        process: [
          'படி 1: உங்கள் கிராம தொடக்க வேளாண்மை கூட்டுறவு கடன் சங்கத்தை (PACS) அணுகவும்.',
          'படி 2: சாகுபடி விவரங்களுடன் விண்ணப்ப படிவத்தை சமர்ப்பிக்கவும்.',
          'படி 3: குறைந்தபட்ச விவசாயி பிரீமியம் தொகையை செலுத்தவும் (காரிப் 2%, ரபி 1.5%).',
          'படி 4: ஒப்புகை சீட்டை பெற்றுக்கொண்டு பாதுகாக்கவும்.'
        ],
        importantDates: [
          'காரிப் பயிர் கடைசி தேதி: ஜூலை 31',
          'ரபி பயிர் கடைசி தேதி: டிசம்பர் 31'
        ],
        nextAction: 'உங்கள் கிராம PACS சங்கத்தை தொடர்பு கொள்ளவும் அல்லது pmfby.gov.in இணையதளத்தை பார்க்கவும்.',
        citation: {
          source: 'வேளாண்மை மற்றும் விவசாயிகள் நலத்துறை அமைச்சகம், இந்திய அரசு',
          documentTitle: 'PMFBY வழிகாட்டு நெறிமுறைகள் 2026',
          section: 'பிரிவு 2 மற்றும் 4',
          lastUpdated: '10 ஆகஸ்ட் 2026',
          docCategory: 'PMFBY',
          sourceUrl: 'https://pmfby.gov.in'
        }
      }
    }
  },
  {
    id: 'pacs-membership',
    triggerKeywords: ['pacs', 'सदस्य', 'member', 'membership', 'पैक्स', 'সমিতি', 'உறுப்பினர்', 'సభ్యత్వం'],
    languages: {
      hi: {
        query: 'PACS में सदस्य कैसे बनें?',
        summary: 'प्राथमिक कृषि ऋण समिति (PACS) में सदस्य बनने के लिए आपको अपने कार्यक्षेत्र (ग्राम पंचायत) के अंतर्गत मॉडल उपनियमों के अनुसार साधारण (क्लास-ए) सदस्यता के लिए आवेदन करना होता है।',
        eligibility: [
          'आवेदक संबंधित पैक्स (PACS) के अधिकार क्षेत्र का स्थायी निवासी या भूमिधारक/कृषक होना चाहिए',
          'आयु न्यूनतम 18 वर्ष पूर्ण होनी चाहिए एवं कानूनी रूप से अनुबंध करने में सक्षम हो',
          'आवेदक किसी अन्य प्रतिस्पर्धी प्राथमिक ऋण सहकारी समिति का ऋण डिफ़ॉल्टर न हो'
        ],
        documents: [
          'आधार कार्ड / मतदाता पहचान पत्र (निवास प्रमाण पत्र)',
          'भू-राजस्व रसीद / खतौनी / कृषि भूमि स्वामित्व प्रमाण',
          'नवीनतम पासपोर्ट साइज फोटोग्राफ (2 प्रतियां)',
          'बैंक खाता विवरणी व पैन कार्ड (अथवा फॉर्म 60)'
        ],
        process: [
          'चरण 1: अपने ग्राम पंचायत के पैक्स (PACS) कार्यालय से "सदस्यता आवेदन पत्र (फॉर्म-1)" प्राप्त करें।',
          'चरण 2: आवेदन में वांछित भूमि व व्यक्तिगत जानकारी भरकर आवश्यक दस्तावेज संलग्न करें।',
          'चरण 3: निर्धारित प्रवेश शुल्क (आमतौर पर ₹10 से ₹50) एवं कम से कम 1 न्यूनतम शेयर पूंजी राशि (मॉडल बाय-लॉज अनुसार) जमा करें।',
          'चरण 4: पैक्स की प्रबंध समिति (Managing Committee) 30 दिनों के भीतर आवेदन पर निर्णय लेती है।',
          'चरण 5: अनुमोदन के उपरांत आपको सदस्य पासबुक व विशिष्ट सदस्य संख्या (Member ID) आवंटित की जाती है।'
        ],
        importantDates: [
          'आवेदन निपटान समयसीमा: प्राप्ति से अधिकतम 30 कार्यदिवस',
          'अस्वीकृति की स्थिति में निबंधक (RCS) के समक्ष अपील: 60 दिनों के भीतर'
        ],
        nextAction: 'अपने ग्राम पैक्स के मुख्य कार्यकारी अधिकारी / सचिव से मिलें और सदस्यता आवेदन पत्र प्राप्त करें।',
        citation: {
          source: 'सहकारिता मंत्रालय, भारत सरकार',
          documentTitle: 'प्राथमिक कृषि ऋण समितियों (PACS) के लिए मॉडल उपनियम (Model Bye-Laws)',
          section: 'उपनियम खंड 5 (सदस्यता शर्तें) एवं खंड 6 (शेयर पूंजी व मतदान अधिकार)',
          lastUpdated: '02 जून 2026',
          docCategory: 'PACS',
          sourceUrl: 'https://cooperation.gov.in/model-bye-laws-pacs'
        }
      },
      en: {
        query: 'How can I become a PACS member?',
        summary: 'To become a member of a Primary Agricultural Credit Society (PACS), you must apply for Class-A (Regular) membership as per the Model Bye-Laws issued by the Ministry of Cooperation, GoI.',
        eligibility: [
          'Resident within the operational jurisdiction of the specific PACS',
          'Cultivator, agricultural landowner, or rural allied artisan aged 18 years and above',
          'Must not be an un-discharged insolvent or convicted of cooperative offenses'
        ],
        documents: [
          'Aadhaar Card or Valid Voter ID (Proof of Identity and Local Residence)',
          'Land Title Document (Khatauni / Patta / Revenue Record of Agri Land)',
          'Passport sized photographs (2 copies)',
          'Bank Account details for Direct Benefit Transfer integration'
        ],
        process: [
          'Step 1: Collect Membership Application Form (Form A) from your village PACS office.',
          'Step 2: Fill in landholding details, family particulars, and declare non-default status.',
          'Step 3: Pay the nominal admission fee (₹10-50) and subscribe to at least one share capital unit.',
          'Step 4: The Managing Committee reviews and approves applications within 30 days.',
          'Step 5: Receive your Member Passbook with voting rights in the Annual General Body.'
        ],
        importantDates: [
          'Application Resolution Window: Maximum 30 days',
          'Appeal against unjust rejection: Within 60 days to the Registrar of Cooperative Societies (RCS)'
        ],
        nextAction: 'Visit your Village PACS office or submit an inquiry to the PACS Secretary.',
        citation: {
          source: 'Ministry of Cooperation, Government of India',
          documentTitle: 'Model Bye-Laws for Primary Agricultural Credit Societies (PACS)',
          section: 'Clause 5 (Membership Eligibility) & Clause 7 (Rights of Members)',
          lastUpdated: '02 June 2026',
          docCategory: 'PACS',
          sourceUrl: 'https://cooperation.gov.in/model-bye-laws-pacs'
        }
      },
      bn: {
        query: 'PACS থেকে কী কী পরিষেবা পাওয়া যায়?',
        summary: 'প্যাকস (PACS) গ্রামীণ নাগরিকদের স্বল্পমেয়াদী কৃষি ঋণ, সার-বীজ বিতরণ, কাস্টম হায়ারিং সেন্টার, জনসেবা কেন্দ্র (CSC) এবং খাদ্যশস্য সংগ্রহ পরিষেবা প্রদান করে।',
        eligibility: [
          'প্যাকসের আওতাভুক্ত এলাকার কৃষক ও স্থানীয় বাসিন্দা',
          'নিয়মিত সদস্যগণ ভোটাধিকার এবং স্বল্প সুদে ঋণ সুবিধা পান'
        ],
        documents: [
          'আধার কার্ড',
          'জমির পরচা',
          'সদস্য পাসবই'
        ],
        process: [
          'ধাপ ১: সদস্যপদ গ্রহণ করে পাসবই সংগ্রহ করুন।',
          'ধাপ ২: কিষাণ ক্রেডিট কার্ড (KCC) ঋণের আবেদন করুন।',
          'ধাপ ৩: ভর্তুকিযুক্ত সার, উন্নত বীজ এবং কৃষি যন্ত্রপাতির সুবিধা গ্রহণ করুন।'
        ],
        importantDates: [
          'কার্যকর সময়: সারা বছর ব্যাপী'
        ],
        nextAction: 'নিকটবর্তী প্যাকস সচিবালয়ে যোগাযোগ করুন।',
        citation: {
          source: 'সমবায় মন্ত্রক, ভারত সরকার',
          documentTitle: 'কম্পিউটারাইজড প্যাকস বাস্তবায়ন নির্দেশিকা',
          section: 'অধ্যায় ৩',
          lastUpdated: '১৫ জুলাই ২০২৬',
          docCategory: 'PACS',
          sourceUrl: 'https://cooperation.gov.in'
        }
      }
    }
  }
];

export const RETRIEVAL_SIMULATOR = {
  findBestMatch(query: string, lang: string = 'hi') {
    const qLower = query.toLowerCase();
    
    // Check in preloaded DB
    for (const item of PRELOADED_KNOWLEDGE_BASE) {
      for (const kw of item.triggerKeywords) {
        if (qLower.includes(kw.toLowerCase())) {
          const langData = item.languages[lang] || item.languages['hi'] || item.languages['en'];
          return {
            found: true,
            data: langData,
            confidence: 0.96,
            docRef: OFFICIAL_DOCUMENTS.find(d => d.category === langData.citation.docCategory) || OFFICIAL_DOCUMENTS[0]
          };
        }
      }
    }

    // Default grounded search across official documents
    const docMatch = OFFICIAL_DOCUMENTS.find(doc => 
      doc.title.toLowerCase().includes(qLower) || 
      doc.summary.toLowerCase().includes(qLower) ||
      doc.category.toLowerCase().includes(qLower)
    );

    if (docMatch) {
      return {
        found: true,
        data: {
          query,
          summary: `आधिकारिक अभिलेख "${docMatch.title}" के अनुसार: ${docMatch.summary}`,
          eligibility: [
            'संबंधित योजना या नियम के अधिसूचित क्षेत्राधिकार में आने वाले नागरिक/कृषक',
            'सत्यापित पहचान प्रमाण व प्राथमिक कृषि सहकारी समिति (PACS) से संबद्धता'
          ],
          documents: [
            'आधार कार्ड / आधिकारिक सरकारी पहचान पत्र',
            'भू-अभिलेख / बैंक खाता विवरण'
          ],
          process: [
            '1. अपने स्थानीय पैक्स (PACS) अथवा जिला सहकारी बैंक (DCCB) में अधिकृत फॉर्म प्राप्त करें।',
            '2. आवश्यक दस्तावेजों की स्व-प्रमाणित प्रति संलग्न करें।',
            '3. समिति या सक्षम प्राधिकारी द्वारा सत्यापन उपरांत लाभ स्वीकृत किया जाएगा।'
          ],
          importantDates: ['विस्तृत समय सारणी के लिए आधिकारिक सरकारी पोर्टल देखें'],
          nextAction: 'अपने स्थानीय पैक्स सचिव अथवा जिला सहकारिता निबंधक (RCS) कार्यालय से परामर्श करें।',
          citation: {
            source: docMatch.department,
            documentTitle: docMatch.title,
            section: docMatch.keyClauses[0],
            lastUpdated: docMatch.lastUpdated,
            docCategory: docMatch.category,
            sourceUrl: docMatch.officialUrl
          }
        },
        confidence: 0.88,
        docRef: docMatch
      };
    }

    return {
      found: false,
      confidence: 0.25
    };
  }
};
