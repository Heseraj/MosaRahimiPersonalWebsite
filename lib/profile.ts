export type CareerEntry = {
  period: string;
  organization: string;
  role: string;
  location: string;
  summary: string;
  highlights?: string[];
  tone?: "current" | "education" | "service";
};

export const impact = [
  { value: "364K", label: "units stowed", note: "A non-peak Amazon record" },
  { value: "70+", label: "programs coordinated", note: "Across all 34 Afghan provinces" },
  { value: "12K", label: "person border force", note: "Scaled from 5,000 personnel" },
  { value: "40%+", label: "faster reporting", note: "Through operational systems design" },
];

export const career: CareerEntry[] = [
  {
    period: "2025 — Present",
    organization: "Amazon",
    role: "AMZ Leo Decks — Coordination Supervisor",
    location: "Redmond, Washington",
    summary:
      "Coordinating production at the frontier of advanced manufacturing, translating complex systems into dependable human-scale execution.",
    tone: "current",
  },
  {
    period: "2024 — 2025",
    organization: "Amazon",
    role: "SSD DC Area Manager II",
    location: "Philadelphia, Pennsylvania",
    summary:
      "Led high-volume inbound and outbound operations while building confidence, capability, and data fluency across frontline teams.",
    highlights: [
      "Raised a non-peak inbound record from 350K to 364K units—more than 40% above daily goal.",
      "Turned outbound palletize into one of the network’s most consistent operations.",
      "Built an hourly Excel performance tool and developed four process assistants.",
    ],
    tone: "current",
  },
  {
    period: "2019 — 2025",
    organization: "Dastranj",
    role: "Founder",
    location: "Philadelphia, Pennsylvania",
    summary:
      "A learning venture at the intersection of business and technology, grounded in a long-held ambition to apply AI, machine learning, and computer vision to consequential problems.",
  },
  {
    period: "2021 — 2022",
    organization: "Harvard Kennedy School",
    role: "Belfer Young Leader Fellow · Machine Learning Teaching Assistant",
    location: "Cambridge, Massachusetts",
    summary:
      "Researched international security and science policy while helping students connect machine-learning theory to working code and final projects.",
    tone: "education",
  },
  {
    period: "2019 — 2021",
    organization: "Team Afghan Power · Refugee Investment Network",
    role: "Strategy & Development",
    location: "Philadelphia · Washington, D.C.",
    summary:
      "Helped shape a five-year micro-grid and internet expansion strategy and supported capital access for refugee entrepreneurs.",
  },
  {
    period: "2016 — 2018",
    organization: "CyraCom",
    role: "Farsi–Dari Interpreter",
    location: "New York City",
    summary:
      "Served as the center’s sole in-house Farsi–Dari interpreter across law, finance, medicine, and emergency response; evaluated 100+ applicants and eliminated outsourcing costs.",
  },
  {
    period: "2015 — 2016",
    organization: "A new beginning",
    role: "Bank teller · Translator · Warehouse worker · Cashier",
    location: "New York",
    summary:
      "The transition period: rebuilding from the ground up in America while staying focused on education and the long horizon.",
    tone: "service",
  },
  {
    period: "2010 — 2014",
    organization: "DOJ / ICITAP",
    role: "Adviser & Senior Program Assistant",
    location: "Kabul, Afghanistan",
    summary:
      "Coordinated more than 70 capacity-building programs across 34 provinces and aligned 30+ government, diplomatic, and civil-society stakeholders.",
    highlights: [
      "Reduced bureaucracy and overlapping projects by 20%.",
      "Cut provincial reporting time by more than 40%.",
      "Helped design strategic planning, international relations, and monitoring units.",
    ],
    tone: "service",
  },
  {
    period: "2008 — 2010",
    organization: "U.S. Army Central Command",
    role: "Cultural Adviser & Interpreter",
    location: "Kabul, Afghanistan",
    summary:
      "Advised senior leaders on culture, law, and policy; interpreted daily for high-level delegations and taught leadership, anti-corruption, English, and technology.",
    tone: "service",
  },
  {
    period: "2004 — 2008",
    organization: "Afghan Border Police",
    role: "Aide-de-Camp · Chief of Staff",
    location: "Kabul, Afghanistan",
    summary:
      "Supported the Director General as the force grew from 5,000 to 12,000 personnel across 19 provinces, 14 crossings, and four international airports.",
    tone: "service",
  },
];

export const education = [
  {
    school: "The Wharton School",
    degree: "MBA",
    focus: "Finance · Business Analytics · Management",
    years: "2019 — 2022",
    mark: "W",
  },
  {
    school: "Harvard Kennedy School",
    degree: "MPA",
    focus: "Public leadership · Policy · Technology",
    years: "2019 — 2022",
    mark: "H",
  },
  {
    school: "American University of Afghanistan",
    degree: "BBA",
    focus: "Finance",
    years: "2009 — 2013",
    mark: "A",
  },
  {
    school: "Kabul National Police Academy",
    degree: "Police Sergeant",
    focus: "Border Police",
    years: "2003",
    mark: "K",
  },
];

export const credentials = [
  "What is Data Science?",
  "Creating Interactive Presentations with Shiny and R",
  "Advance Your Skills as an R Expert",
  "Programming Foundations: Fundamentals",
  "Business Analytics: Data Reduction with Excel and R",
];
