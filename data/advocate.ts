export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  subAreas: string[];
  keyHighlights: string[];
}

export interface Testimonial {
  quote: string;
  client: string;
  matter: string;
  location: string;
}

export const ADVOCATE_DATA = {
  name: "Adv. K.B. Kagathara",
  formalName: "K.B. Kagathara",
  title: "Advocate & Solicitor",
  associateName: "Adv. Jagdish Kagathara",
  associateTitle: "Associate Advocate",
  barCouncil: "Gujarat State Bar Council",
  enrollmentNo: "488/2004",
  enrollmentYear: 2004,
  experienceYears: "22+",
  experienceSince: "2004",
  casesHandled: "500+",
  location: "Dhrol, Gujarat",
  officeAddress: "Laxminarayan Complex, Near Government Hospital, Dhrol, Gujarat - 361210",
  
  phones: {
    primary: "+91 96383 12551",
    secondary: "+91 99242 63454",
    primaryRaw: "+919638312551",
    secondaryRaw: "+919924263454",
    emergency: "+91 96383 12551",
  },
  
  emails: {
    primary: "kbk.advocatedhrol@gmail.com",
    secondary: "jbk1630@gmail.com",
  },

  officeHours: [
    { days: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { days: "Saturday", time: "10:00 AM – 4:00 PM" },
    { days: "Sunday", time: "By Appointment Only" },
    { days: "Emergency Legal Counsel", time: "24/7 Immediate Availability" },
  ],

  practiceAreas: [
    {
      id: "criminal-defense",
      number: "01",
      title: "Criminal Defense",
      tagline: "Rigorous trial advocacy and courtroom defense for complex penal matters.",
      description: "Comprehensive legal representation across trial courts and appellate jurisdictions. Providing strategic defense in penal litigation, anticipatory and regular bail applications, cross-examination, and complex white-collar inquiries with unrelenting dedication to constitutional protections.",
      subAreas: [
        "Trial Court Advocacy & Defense",
        "Anticipatory & Regular Bail Applications",
        "Criminal Appeals & Revision Petitions",
        "White Collar & Financial Inquiries",
      ],
      keyHighlights: [
        "22+ years of procedural trial defense",
        "Strategic evidence evaluation and witness cross-examination",
        "High-stakes bail defense in Session and High Court jurisdictions",
      ],
    },
    {
      id: "civil-litigation",
      number: "02",
      title: "Civil Litigation",
      tagline: "Strategic dispute resolution, contract enforcement, and civil suits.",
      description: "Structured legal advocacy in civil proceedings, property title disputes, contractual breaches, specific performance petitions, summary suits, and commercial litigation, safeguarding our clients' assets and contractual entitlements through meticulous pleadings.",
      subAreas: [
        "Contractual & Commercial Disputes",
        "Property Law & Injunction Suits",
        "Tort, Recovery & Specific Relief Actions",
        "Commercial & Execution Litigation",
      ],
      keyHighlights: [
        "In-depth statutory interpretation under Indian Contract & Civil Procedure laws",
        "Aggressive interim relief and injunction securing",
        "Settlement structuring and alternative dispute advocacy",
      ],
    },
    {
      id: "family-divorce",
      number: "03",
      title: "Family & Divorce Law",
      tagline: "Empathetic, discreet counsel for matrimonial and custody proceedings.",
      description: "Delicate yet resolute representation in matrimonial disputes, mutual consent divorces, contested separations, child custody contests, permanent alimony, maintenance petitions, and ancestral partition claims, with absolute discretion and dignity.",
      subAreas: [
        "Divorce & Judicial Separation Proceedings",
        "Child Custody & Guardianship Petitions",
        "Alimony & Maintenance Claims",
        "Matrimonial Property & Settlement Division",
      ],
      keyHighlights: [
        "Confidential mediation and out-of-court dispute settlement",
        "Prioritization of child welfare and financial safeguards",
        "Structured litigation under personal law and special marriage acts",
      ],
    },
    {
      id: "property-real-estate",
      number: "04",
      title: "Property & Real Estate",
      tagline: "Comprehensive title search, conveyance, and immovable property law.",
      description: "Thorough legal scrutiny of agricultural and non-agricultural land titles, encumbrance verification, deed drafting, conveyance agreements, tenancy litigations, revenue tribunal hearings, and boundary disputes across Saurashtra and Gujarat.",
      subAreas: [
        "Title Search & Due Diligence Reports",
        "Land Revenue & Mutation Proceedings",
        "Agricultural & NA Title Regularization",
        "Tenancy Disputes & Possession Suits",
      ],
      keyHighlights: [
        "Detailed historical search of land records and revenue registers",
        "Clearance certificates for institutional and private transactions",
        "Representation before Mamlatdar, Prant Officer, and Revenue Tribunals",
      ],
    },
    {
      id: "corporate-business",
      number: "05",
      title: "Corporate & Business Law",
      tagline: "Sound legal governance, contractual structuring, and compliance.",
      description: "Practical legal advisory for partnerships, MSMEs, manufacturing entities, and commercial enterprises. Drafting watertight commercial agreements, regulatory filings, employment covenants, and dispute management strategies to prevent costly legal exposure.",
      subAreas: [
        "Commercial Contracts & NDAs",
        "Partnership Deeds & Corporate Governance",
        "Regulatory Compliance & Licensing",
        "Commercial Arbitrations & Disputes",
      ],
      keyHighlights: [
        "Preventative legal structuring to eliminate liability risks",
        "Tailored contracts for Saurashtra's industrial and trading sectors",
        "Effective dispute escalation and settlement negotiation",
      ],
    },
    {
      id: "employment-law",
      number: "06",
      title: "Employment Law",
      tagline: "Workplace compliance, termination disputes, and labor advisory.",
      description: "Counseling employers and professionals on service conditions, wrongful termination disputes, employment agreements, non-compete enforcement, statutory labor compliance, and conciliation proceedings before competent labor authorities.",
      subAreas: [
        "Employment Agreements & Severance Structuring",
        "Workplace Dispute Resolution & Grievance Hearings",
        "Statutory Labor Act Compliance",
        "Non-Compete & Trade Secret Protection",
      ],
      keyHighlights: [
        "Balanced counsel safeguarding organizational integrity and worker rights",
        "Resolution of industrial and service disputes",
        "Drafting enforceable workplace policies and human resource frameworks",
      ],
    },
  ] as PracticeArea[],

  testimonials: [
    {
      quote: "Adv. K.B. Kagathara handled my complex property dispute with exceptional professionalism and expertise. His strategic approach helped me secure a favorable outcome.",
      client: "Rajesh Patel",
      matter: "Property Dispute Resolution",
      location: "Dhrol",
    },
    {
      quote: "During the most difficult period of my life, Adv. K.B. Kagathara provided not just legal expertise but also emotional support throughout the proceedings.",
      client: "Priya Shah",
      matter: "Divorce & Child Custody",
      location: "Jamnagar",
    },
    {
      quote: "We've been working with Adv. K.B. Kagathara for our company's legal needs. His business law expertise has been invaluable for our growth.",
      client: "Vikram Industries",
      matter: "Corporate Legal Advisory",
      location: "Rajkot",
    },
  ] as Testimonial[],

  whyChooseUs: [
    {
      number: "01",
      title: "22+ Years of Active Trial Experience",
      text: "Continuous legal practice since enrollment in 2004 before Gujarat State Bar Council, cultivating deep procedural command in Indian penal, civil, and revenue law.",
    },
    {
      number: "02",
      title: "Direct Advocate Counsel",
      text: "Clients interact directly with senior advocates. Every petition, cross-examination strategy, and settlement framework receives personal craftsmanship and scrutiny.",
    },
    {
      number: "03",
      title: "Uncompromising Ethical Standards",
      text: "Grounding every legal strategy in professional integrity, realistic assessments, and transparent advice without unwarranted promises or exaggerated guarantees.",
    },
    {
      number: "04",
      title: "Strategic Courtroom Representation",
      text: "Rigorous research, precision legal drafting, and authoritative oral arguments designed to secure tangible remedies before judicial and quasi-judicial benches.",
    },
    {
      number: "05",
      title: "24/7 Urgent Legal Defense Hotline",
      text: "Immediate procedural counsel during emergencies including arrests, search actions, urgent stay motions, and bail applications across Dhrol, Jamnagar, and Rajkot regions.",
    },
    {
      number: "06",
      title: "Deep Regional & Statutory Nuance",
      text: "Extensive familiarity with local revenue machinery, regional land records, session courts, and procedural customs governing Saurashtra and Gujarat.",
    },
  ],

  faqs: [
    {
      question: "How do I schedule a legal consultation?",
      answer: "You can book an appointment using our online consultation form on this website, call directly at +91 96383 12551 / +91 99242 63454, or send an email to kbk.advocatedhrol@gmail.com. We schedule appointments Monday through Saturday at our Dhrol office.",
    },
    {
      question: "What documents should I bring to our first consultation?",
      answer: "Please bring all documents relevant to your legal matter: FIR copies, notices, summons, property title deeds, contracts, correspondence, and any prior court orders. Clear documentation enables an immediate, accurate assessment of your legal position.",
    },
    {
      question: "Do you provide emergency bail assistance?",
      answer: "Yes. For urgent criminal matters such as detention, anticipatory bail, or urgent remand hearings, our emergency legal line (+91 96383 12551) is accessible 24/7.",
    },
    {
      question: "Which courts and jurisdictions do you practice in?",
      answer: "We regularly represent clients before Civil and Sessions Courts in Dhrol, Jamnagar, and Rajkot, revenue tribunals, appellate authorities, and coordinate matters before the High Court of Gujarat.",
    },
    {
      question: "Are consultations strictly confidential?",
      answer: "Yes. In accordance with the Advocates Act and Bar Council of India professional standards, all communications and documents shared during consultations are held under strict professional privilege and confidentiality.",
    },
  ],
};
