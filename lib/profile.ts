export type CareerEntry = {
  period: string;
  organization: string;
  role: string;
  location: string;
  summary: string;
  highlights?: string[];
  tone?: "current" | "education" | "service";
};

export type Artifact = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export const impact = [
  { value: "364K", label: "units stowed", note: "A non-peak inbound stow record" },
  { value: "70+", label: "programs coordinated", note: "Within a unit spanning 34 Afghan provinces" },
  { value: "12K", label: "person border force", note: "Scaled from 5,000 personnel" },
  { value: "40%+", label: "faster reporting", note: "Through operational systems design" },
];

export const career: CareerEntry[] = [
  {
    period: "Dec 2025 — Present",
    organization: "Amazon Leo (Project Kuiper)",
    role: "Coordination Supervisor",
    location: "Redmond, Washington",
    summary:
      "Coordinate satellite-manufacturing execution across the OTAC and Decks & Panels value streams, aligning production, quality, engineering, and shift handoffs in a cleanroom aerospace environment.",
    highlights: [
      "Built operational tracking tools for labor contribution, MES analytics, and handoff continuity that remain in use across shifts.",
      "Support production-readiness and NPI builds for satellite-constellation manufacturing.",
      "Establish a dependable operating cadence that translates complex production requirements into clear, human-scale execution.",
    ],
    tone: "current",
  },
  {
    period: "May 2025 — Dec 2025",
    organization: "Amazon Leo (Project Kuiper)",
    role: "Production Supervisor",
    location: "Redmond, Washington",
    summary:
      "Led back-half-night production across two facilities, transforming the department's lowest-performing shift into its strongest within five months.",
    highlights: [
      "Increased SSL and Zenith throughput by 10–15%, delivering 15–20 additional OTACs per cycle.",
      "Reached production parity with 20–25% less headcount than peer shifts, saving 30–40 labor hours weekly.",
      "Sustained the department's highest productivity ratio (0.7+) and onboarded 25+ manufacturing technicians.",
      "Developed a leadership pipeline that resulted in a lead promotion and a technician-to-lead conversion.",
    ],
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
    period: "Sept 2023 — Mar 2024",
    organization: "IncQuery",
    role: "Survey Director",
    location: "Philadelphia, Pennsylvania",
    summary: "Directed survey research design and administration.",
  },
  {
    period: "2019 — 2025",
    organization: "Dastranj",
    role: "Founder",
    location: "Philadelphia, Pennsylvania",
    summary:
      "Built an end-to-end supply-chain venture connecting craft producers with global demand—an applied exploration of technology, computer vision, and demand forecasting in artisan markets. Paused the venture to focus fully on aerospace manufacturing.",
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
    period: "May 2020 — Aug 2021",
    organization: "Team Afghan Power",
    role: "Development & Outreach MBA Intern",
    location: "Philadelphia, Pennsylvania",
    summary:
      "Helped shape a five-year micro-grid and internet expansion strategy for Afghanistan.",
  },
  {
    period: "May 2019 — Jul 2019",
    organization: "Refugee Investment Network",
    role: "Summer Intern",
    location: "Washington, D.C.",
    summary: "Supported capital access initiatives for refugee entrepreneurs.",
  },
  {
    period: "2016 — 2018",
    organization: "CyraCom",
    role: "Farsi–Dari Interpreter",
    location: "New York City",
    summary:
      "Served as the center’s sole in-house Farsi–Dari interpreter across law, finance, medicine, and emergency response; evaluated 100+ applicants, eliminated outsourcing costs, and supervised and mentored five new interpreters.",
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
      "Served within the central unit that coordinated more than 70 capacity-building programs across 34 provinces and aligned 30+ government, diplomatic, and civil-society stakeholders.",
    highlights: [
      "Advised on efforts that reduced bureaucracy and overlapping projects by 20%.",
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

export const artifacts: Artifact[] = [
  {
    title: "BuildingANN",
    description:
      "Jupyter notebook building neural network fundamentals from scratch—part of a deliberate move from operations into machine learning.",
    href: "https://github.com/Heseraj/BuildingANN",
    label: "Notebook · GitHub",
  },
  {
    title: "FinRiskManagement",
    description:
      "R-based financial risk modeling—connecting Wharton analytics training to code you can inspect and run.",
    href: "https://github.com/Heseraj/FinRiskManagement",
    label: "Code · GitHub",
  },
  {
    title: "AI at work — the jagged frontier",
    description:
      "Published analysis on how AI reshapes organizations, drawing on Harvard D³ research and Lakhani et al.",
    href: "https://www.linkedin.com/posts/mosa-rahimi_back-to-the-beginnings-of-ai-at-work-harvard-activity-7454690983734083584-GQFV",
    label: "Analysis · LinkedIn",
  },
  {
    title: "GitHub profile",
    description:
      "The full set of notebooks, repos, and ongoing technical work—start here if you want to evaluate how I build.",
    href: "https://github.com/Heseraj",
    label: "All projects",
  },
];
