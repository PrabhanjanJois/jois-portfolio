export const profile = {
  name: "Jois Prabhanjan",
  title: "Software Development Engineer – 2",
  roles: ["Full Stack Developer", "AI Integration Engineer", "Building AlgoTrade"],
  tagline:
    "Full Stack Developer crafting engaging user experiences with cutting-edge technologies — now building AI integrations and an algorithmic trading platform.",
  email: "jois.prabhanjan@gmail.com",
  phone: "+91 8310821422",
  linkedin: "https://linkedin.com/in/prabhanjanjois",
  github: "https://github.com/PrabhanjanJois", // TODO: confirm
  resume: "/PrabhanjanJois_Resume.pdf",
};

export const stats = [
  { value: 4, suffix: "+", label: "Years experience" },
  { value: 2, suffix: "", label: "Companies" },
  { value: 30, suffix: "+", label: "Technologies" },
  { value: 1, suffix: "", label: "Product in build" },
];

export const algotrade = {
  url: "https://algotrade.co.in",
  domain: "algotrade.co.in",
  since: "Aug 2026",
  oneLiner:
    "An algorithmic trading platform where users automate their trades using our exclusive strategy logic — no manual screen-watching, just rules that execute.",
  features: [
    { icon: "Bot", title: "Strategy Automation", text: "Turn proven trading logic into bots that run on their own." },
    { icon: "Workflow", title: "Rule-based Execution", text: "Entries, exits and position sizing driven by clear rules." },
    { icon: "Activity", title: "Real-time Market Data", text: "Live feeds power decisions the moment the market moves." },
    { icon: "ShieldCheck", title: "Risk Controls", text: "Stop-losses and exposure limits baked into every strategy." },
    { icon: "LineChart", title: "Performance Dashboard", text: "Track P&L, win rate and drawdown at a glance." },
    { icon: "PlugZap", title: "Broker Integration", text: "Connect your broker and let orders flow automatically." },
  ],
  stack: ["Next.js", "Node.js", "PostgreSQL", "Redis"], // TODO: confirm
};

export const experience = [
  {
    company: "MediaTek",
    role: "Full Stack Developer",
    period: "12/2025 — Present",
    current: true,
    points: [
      "Working on the 3D IC platform — development, integration and continuous enhancements.",
      "Building and maintaining backend services with Payload CMS and Express.js.",
      "Implementing cron-based scheduled tasks and background jobs for automation and reliability.",
      "Developing MCP-based AI integrations using RAG and LangChain so LLMs can securely leverage proprietary data.",
      "Building modern, responsive UI components with Mantine.",
      "Integrating LLM features and improving response quality through prompt tuning and optimization.",
    ],
    tags: ["Payload CMS", "Express", "MCP", "RAG", "LangChain", "Mantine", "Cron"],
  },
  {
    company: "Cognitive Clouds",
    role: "Software Developer",
    period: "05/2022 — 11/2025",
    current: false,
    points: [
      "Integrated multiple applications into a unified platform with admin controls to manage and monitor all connected systems.",
      "Coordinated with cross-functional teams to streamline integration into a central ecosystem.",
      "Designed and built new features and resolved issues across learning and coaching modules.",
      "Improved application scalability and performance for faster load times.",
    ],
    growth: [
      { role: "Associate Trainee", text: "App development & testing; passed Builder.ai assessments." },
      { role: "Associate Software Developer", text: "Centralized client platform; implemented Single Sign-On (SSO)." },
      { role: "Software Developer", text: "Unified platform integration, admin controls, performance." },
    ],
    tags: ["React", "Next.js", "Node.js", "SSO", "Micro Frontend", "Redux Toolkit"],
  },
];

export const skills = [
  {
    group: "AI & Architecture",
    featured: true,
    items: ["MCP", "LLM Integration", "Prompt Engineering", "RAG", "LangChain", "Microservices", "SSO", "Scalable System Design", "Clean Architecture", "Cron / Background Jobs"],
  },
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI", "Ant Design", "Redux Toolkit", "Micro Frontend", "Mantine"],
  },
  { group: "Backend", items: ["Node.js", "Express.js", "Django", "REST APIs", "Payload CMS", "AuthN / AuthZ"] },
  { group: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
  { group: "Testing", items: ["Jest", "React Testing Library"] },
  { group: "Tools", items: ["Git", "GitHub", "Docker", "Postman", "VS Code", "GitHub Actions", "Linux"] },
];

export const education = [
  {
    degree: "M.Tech, Artificial Intelligence & Data Science",
    school: "Indian Institute of Technology, Patna (Hybrid)",
    period: "2026 — 2028",
    inProgress: true,
  },
  {
    degree: "B.E., Computer Science & Engineering",
    school: "SDM Institute of Technology, Ujire",
    period: "2018 — 2022",
    note: "GPA 8.15",
  },
];

export const certifications = [
  { title: "Gold Badge Certified React Developer", by: "Builder.ai" },
  { title: "2nd Place — Hackathon", by: "SDM" },
  { title: "JavaScript Level-1", by: "Cambridge Certification Authority" },
  { title: "Soft Skills & IT Foundation", by: "TCS ION" },
  { title: "Outstanding Performer — Machine Learning", by: "Verzeo" },
];

export const ticker = ["REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "LANGCHAIN", "MCP", "RAG", "PAYLOAD", "POSTGRES", "MONGODB", "REDIS", "DOCKER", "MANTINE", "DJANGO", "ALGOTRADE"];

export const nav = [
  { id: "algotrade", label: "AlgoTrade" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
