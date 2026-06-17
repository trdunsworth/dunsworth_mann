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
    region: "VA",
    postalCode: "22436",
    country: "USA",
  },
  principals: [
    {
      name: "Ellen Dunsworth",
      title: "President",
      bio:
        "Leads company strategy, client relationships, and the clear communication needed to make analytic work useful for decision-makers.",
    },
    {
      name: "Tony Dunsworth, PhD",
      title: "Principal Data Scientist",
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
      "Report development that is targeted to the operations level needing the report",
    ],
  },
  {
    title: "Data quality, governance, and cleanup",
    summary:
      "Improve trust in the data before it reaches a dashboard, board packet, or strategic plan.",
    bullets: [
      "Source review across CAD, telephony, QA, and supporting data systems",
      "Improve data literacy and documentation to support data quality",
      "Practical management and governance recommendations that can be sustained",
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
      "Our goal is insight people can act on, not just more charts or more data extracts.",
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
    title: "Recent Presentations",
    description:
      "The following is a list of presentations that we have given in the past. We update this page regularly to share new topics and formats as they are delivered.",
    items: [
      {
        title:
          "Decoding the Noise: Turning CAD Data into Trusted Operational Insights",
        audience: "Executives, managers, and data analysts",
        date: "May 2026",
        description:
          "In conjunction with 1Spatial, this webinar discussed the expansion of their 1Integrate product to include CAD data, ensuring cleaned and validated data for accurate reporting and analysis.",
      },
      {
        title: "It's About Time",
        audience:
          "CAD Analysts, Database Administrators, Data Scientists, and CAD Administrators",
        date: "April 2026",
        description:
          "Delivered at CentralSquare's annual Engage conference for product users, this presentation discussed the use and challenges of the timestamps recorded in the Enterprise CAD product, and how to use them effectively for operational insights.",
      },
      {
        title: "From Math to Meaning",
        audience: "Operations managers and quality leaders",
        date: "January 2026",
        description:
          "Delivered at NENA's Standards and Best Practices conference, this presentation discussed how to use data analysis to support quality assurance programs with a focus on using both to support telecommunicators.",
      },
      {
        title:
          "Data Collection Needs for Call Processing and Staffing Guidelines",
        audience: "9-1-1 leaders and data analysts",
        date: "October 2025",
        description:
          "Delivered at the NENA's Joint Committee Meeting, this presentation discussed the current efforts of two working groups to collect PSAP census data to address research needs for both working groups.",
      },
      {
        title: "Do You Speak Statistics",
        audience: "Operations managers, data analysts, and Floor supervisors",
        date: "July 2025",
        description:
          "Delivered at NENA's Annual Conference, this presentation outlined uses for data analyses in PSAP operations, and how to use them effectively for operational insights.",
      },
      {
        title: "Applying Analytics to 9-1-1",
        audience: "9-1-1 leaders and data analysts",
        date: "April 2025",
        description:
          "Delivered at the Virginia Conference on Innovation in Public Safety, this presentation outlined the use of data analytics to support operational and strategic decision-making in 9-1-1 centers.",
      },
      {
        "title": "9-1-1 Data Analytics",
        "audience": "9-1-1 data professionals",
        "date": "April 2023",
        "description": "Delivered at the Virginia APCO/NENA Joint Conference, this presentation discussed the use of analytics in 9-1-1 centers to improve operational performance and measure community impact.",
      },
      {
        "title": "PSAP Scheduling",
        "audience": "9-1-1 Futurists",
        "date": "November 2022",
        "description": "Delivered at the Northcentral Texas 9-1-1 Early Adopters Summit, this presentation diiscussed the first stages of building a new staffing algorithm to replace Erlang C and Erlang A. This preliminary talk focused on finding better methods to forecast 9-1 inbound call volumes to better inform staffing decisions and improve service levels.",
      }
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
