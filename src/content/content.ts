export type WorkLink = {
  label: string;
  href: string;
};

export type WorkItem = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  links?: WorkLink[];
};

export type Highlight = {
  title: string;
  description: string;
  links?: WorkLink[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  dates?: string;
  location?: string;
  bullets: string[];
};

export const site = {
  name: "Prateek Porwal",
  roleLine:
    "Senior Backend Engineer — Node.js, AWS, serverless & distributed systems",
  email: "porwalp25@gmail.com",
  phone: "9079803233",
  phoneDisplay: "+91 90798 03233",
  linkedin: "https://www.linkedin.com/in/prateek-porwal-0342b8121/",
  github: "https://github.com/pratty1802/",
  about:
    "Senior Backend Engineer with 8.5+ years building scalable cloud-native backends—Node.js, AWS Serverless, Docker/ECS Fargate, DynamoDB, REST APIs—plus event-driven systems, multi-tenant SaaS, and AI/LLM integration. Also mentored and code-reviewed students in Udacity’s Front-End Developer Nanodegree.",
  education:
    "Bangalore Institute of Technology — B.E. Information Science (2013–2017)",
};

export const work: WorkItem[] = [
  {
    title: "Legal discovery SaaS backends",
    subtitle: "eGain Communications",
    description:
      "Designed multi-tenant SaaS backends and REST APIs for an enterprise legal discovery platform. Built event-driven pipelines processing 400+ GB of data daily with idempotency, retries, and fault-tolerant SQS FIFO workflows.",
    tags: [
      "Node.js",
      "AWS Lambda",
      "API Gateway",
      "PostgreSQL",
      "DynamoDB",
      "SQS FIFO",
    ],
  },
  {
    title: "Courier Integration Platform",
    subtitle: "Personal · Live",
    description:
      "Courier-agnostic logistics API with pluggable adapters, bulk order processing, API-key auth, rate limiting, and an Ops UI. Express + TypeScript + Prisma, deployed on Render and Vercel.",
    tags: ["Express", "TypeScript", "Prisma", "Postgres", "Redis", "BullMQ"],
    links: [
      { label: "Live demo", href: "https://courier-ops.vercel.app" },
      {
        label: "GitHub",
        href: "https://github.com/pratty1802/courier-integration",
      },
    ],
  },
  {
    title: "DocAgent",
    subtitle: "Personal · Multi-agent RAG",
    description:
      "Production-ready agentic document Q&A: upload PDFs, ask questions, get grounded answers with citations. LangGraph.js critique loop, Gemini, Supabase pgvector, hybrid retrieval, and SSE streaming of agent traces.",
    tags: [
      "LangGraph.js",
      "Gemini",
      "Supabase",
      "pgvector",
      "SSE",
      "React",
    ],
    links: [
      { label: "Live demo", href: "https://docagent-web.vercel.app" },
      { label: "GitHub", href: "https://github.com/pratty1802/docagent" },
    ],
  },
];

export const highlights: Highlight[] = [
  {
    title: "Jira MCP Server",
    description:
      "Enterprise MCP server with 37 AI-enabled developer tools for ticket search, sprint management, and PR linking—built at eGain to improve engineering workflows.",
  },
  {
    title: "Rate Limit API",
    description:
      "Custom rate limiting with token bucket and fixed-window algorithms, memory or SQLite storage, and a live Fly.io deployment.",
    links: [
      { label: "Live API", href: "https://rate-limit-api.fly.dev/health" },
      {
        label: "GitHub",
        href: "https://github.com/pratty1802/rate-limit-api",
      },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "eGain Communications",
    role: "Senior Application Software Engineer II (Backend)",
    dates: "Mar 2020 – Jun 2026",
    location: "Pune",
    bullets: [
      "Built event-driven pipelines processing 400+ GB/day with idempotency and fault tolerance.",
      "Shipped ECS Fargate workloads with Vertex AI–assisted analysis, cutting manual content authoring effort by 3×.",
      "Mentored engineers on AWS serverless, distributed systems, and API design; provisioned infra with CloudFormation.",
    ],
  },
  {
    company: "Infosys Ltd.",
    role: "Senior Systems Engineer",
    dates: "Nov 2017 – Mar 2020",
    location: "Pune / Trivandrum",
    bullets: [
      "Built Angular apps and REST integrations for American Airlines baggage tracking workflows.",
      "Delivered data-intensive forecasting and reporting for Bank of America (Angular, NgRx, Ag-Grid, Highcharts).",
    ],
  },
  {
    company: "Udacity",
    role: "Mentor & Project Code Reviewer — Front-End Developer Nanodegree",
    bullets: [
      "Mentored students through the Nanodegree curriculum and reviewed submissions against project rubrics.",
      "Gave actionable feedback on HTML/CSS/JS and frontend engineering quality; maintained an average student feedback rating of 4.8/5.",
    ],
  },
];
