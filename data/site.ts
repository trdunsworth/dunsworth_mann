export const company = {
  name: "Dunsworth, Mann, & Associates, LLC",
  shortName: "Dunsworth, Mann, & Associates",
  tagline: "Data analytics and data science consulting for the 9-1-1 industry.",
  mission:
    "Helping 9-1-1 leaders turn operational data into clear, practical decisions.",
  footerSummary:
    "A focused consulting practice for 9-1-1 organizations that need dependable analytics, data science support, and presentation-ready insights.",
  phoneDisplay: "+1 804-246-8797",
  phoneHref: "tel:+18042468797",
  emailDisplay: "info@dunsworth-mann.com",
  emailHref: "mailto:info@dunsworth-mann.com",
  address: {
    street: "P.O. Box 252",
    city: "Caret",
    region: "VA.",
    postalCode: "22436",
    country: "USA",
  },
  principals: [
    {
      name: "Ellen Dunsworth",
      title: "President and CEO",
      bio:
        "Leads company strategy, client relationships, and the clear communication needed to make analytic work useful for decision-makers.",
    },
    {
      name: "Tony Dunsworth, PhD",
      title: "CTO and Data Scientist",
      bio:
        "Leads technical strategy, analytics design, and data science work that helps public safety teams move from raw data to action.",
    },
  ],
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Our services" },
  { href: "/presentations", label: "Presentations" },
  { href: "/contact", label: "Contact us" },
] as const;

export const heroHighlights = [
  "Operational analytics that support planning, staffing, and performance review.",
  "Data science that helps leaders forecast demand and evaluate change with confidence.",
  "Clear communication for executives, boards, and partner agencies who need the story behind the numbers.",
] as const;

export const impactAreas = [
  {
    title: "Operational clarity",
    description:
      "Find the signals hidden inside CAD, call-handling, GIS, QA, and workflow data.",
  },
  {
    title: "Decision-ready analysis",
    description:
      "Translate technical findings into recommendations leaders can use immediately.",
  },
  {
    title: "9-1-1 focus",
    description:
      "Keep the work grounded in the realities of emergency communications and public safety operations.",
  },
];

export const services = [
  {
    title: "Operational analytics and KPI design",
    summary:
      "Build reporting that reflects how a center actually works, not just what a system can export.",
    bullets: [
      "Performance measure design for call answer, transfer, dispatch, and workflow review",
      "Dashboard planning for leadership teams and public-facing reporting",
      "Metric definitions that stay consistent across teams and reporting cycles",
    ],
  },
  {
    title: "Data quality, governance, and cleanup",
    summary:
      "Improve trust in the data before it reaches a dashboard, board packet, or strategic plan.",
    bullets: [
      "Source review across CAD, telephony, QA, and supporting data systems",
      "Gap analysis for missing, duplicated, or inconsistent records",
      "Practical cleanup and governance recommendations that can be sustained",
    ],
  },
  {
    title: "Forecasting and data science support",
    summary:
      "Use structured analysis and modeling to prepare for demand, staffing pressure, and operational change.",
    bullets: [
      "Trend analysis for call volume, workload, and service demand",
      "Scenario planning for staffing, growth, and process changes",
      "Modeling support that stays explainable for non-technical stakeholders",
    ],
  },
  {
    title: "Decision support and executive communication",
    summary:
      "Package technical work so leaders, boards, and partners can act on it quickly.",
    bullets: [
      "Executive briefings and board-ready summaries",
      "Presentation support for strategic initiatives and operational reviews",
      "Clear framing of tradeoffs, assumptions, and next steps",
    ],
  },
] as const;

export const workflow = [
  {
    step: "1. Clarify the decision",
    detail:
      "Start with the operational question, the audience, and what action the work should support.",
  },
  {
    step: "2. Assess the data",
    detail:
      "Review the available sources, quality issues, and reporting limits before deeper analysis begins.",
  },
  {
    step: "3. Build the analysis",
    detail:
      "Develop the reporting, modeling, or presentation material needed for the immediate engagement.",
  },
  {
    step: "4. Deliver usable guidance",
    detail:
      "Translate the findings into practical decisions, presentations, and a repeatable path forward.",
  },
] as const;

export const values = [
  {
    title: "Clarity over noise",
    description:
      "The goal is insight people can act on, not just more charts or more data extracts.",
  },
  {
    title: "Operational fit",
    description:
      "Recommendations should match the realities of 9-1-1 work, staffing, governance, and public accountability.",
  },
  {
    title: "Accessible communication",
    description:
      "Every page, graphic, and recommendation should be understandable to both technical and non-technical audiences.",
  },
] as const;

export const presentationCollections = [
  {
    title: "Current focus areas",
    description:
      "Topics aligned with the questions 9-1-1 leaders are facing right now.",
    items: [
      {
        title: "From raw call data to operational decisions",
        audience: "Leadership teams and executive stakeholders",
        description:
          "How to move from fragmented data exports to a decision-ready reporting rhythm.",
      },
      {
        title: "Forecasting workload without losing context",
        audience: "Center leaders, planners, and analysts",
        description:
          "Using practical data science methods to plan for demand, staffing pressure, and service change.",
      },
      {
        title: "Designing dashboards that answer real questions",
        audience: "Operations managers and quality leaders",
        description:
          "A framework for building reporting that supports action instead of producing clutter.",
      },
    ],
  },
  {
    title: "Enduring 9-1-1 presentation themes",
    description:
      "Foundational topics that remain useful as systems, governance, and performance expectations evolve.",
    items: [
      {
        title: "Building trust in public safety data",
        audience: "Executives, boards, and partner agencies",
        description:
          "What data quality, governance, and documentation need to look like when decisions carry operational consequences.",
      },
      {
        title: "Telling the performance story behind the numbers",
        audience: "Boards, community stakeholders, and internal leadership",
        description:
          "How to explain performance, tradeoffs, and risk with confidence and transparency.",
      },
      {
        title: "Using analytics to support continuous improvement",
        audience: "QA teams, supervisors, and operational leaders",
        description:
          "Ways to connect routine reporting with improvement work that teams can actually sustain.",
      },
    ],
  },
] as const;

export const presentationFormats = [
  {
    title: "Conference sessions",
    description:
      "Focused talks designed for broad public safety or 9-1-1 audiences.",
  },
  {
    title: "Executive briefings",
    description:
      "Shorter presentations tailored for leadership teams, boards, or partner agencies.",
  },
  {
    title: "Workshops",
    description:
      "Working sessions that move from concepts into practical planning, metric design, or analytic review.",
  },
  {
    title: "Internal strategy sessions",
    description:
      "Presentations built around a specific organizational challenge, initiative, or decision point.",
  },
] as const;

export const contactChecklist = [
  "The decision or challenge you are trying to support",
  "What data sources are already available",
  "Who needs the final analysis or presentation",
  "Any timelines, milestones, or public-facing deadlines",
] as const;
