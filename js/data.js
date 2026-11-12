/*
  ============================================================
  ALL SITE CONTENT LIVES IN THIS FILE.
  Edit the text below and both the website (index.html) and the
  printable resume (resume.html) update automatically.
  After editing, run `node scripts/build-pdf.js` to refresh the
  downloadable PDF (optional).
  ============================================================
*/
window.RESUME = {
  name: "Dave Gulli",
  initials: "DG",
  photo: "assets/dave-gulli.jpg", // delete this line to fall back to the initials avatar
  title: "Forward Deployed Engineer and AI Architect (L7), Google Cloud",
  shortTitle: "Forward Deployed Engineer & AI Architect",
  employer: "Google Cloud",
  location: "Melbourne, Australia",
  email: "dgulli@gmail.com",
  linkedin: "https://www.linkedin.com/in/davegulli/",
  linkedinLabel: "linkedin.com/in/davegulli",
  resumePdf: "assets/Dave-Gulli-Resume.pdf",

  /* ---------- Hero ---------- */
  hero: {
    greeting: "Hi, I'm Dave Gulli",
    headline: ["I take generative AI", "from idea to production", "in regulated industries."],
    accentLine: 1, // which headline line gets the accent colour (0-based)
    intro:
      "I'm a Forward Deployed Engineer and AI Architect at Google Cloud. I advise banks, telcos and government agencies across Australia and Asia-Pacific, then design and build the agentic systems, evaluation frameworks and guardrails that get them live.",
    facts: ["20+ years customer-facing", "6 years at Google Cloud", "NV1 security cleared"],
  },

  /* ---------- Names shown in the scrolling strip ---------- */
  engagements: [
    "Bank of Singapore", "Bendigo Bank", "Telstra", "ANZ Bank", "Atlassian", "Canva",
    "Macquarie Bank", "Zip Co", "Department of Defence", "Bureau of Meteorology",
    "MLC Life Insurance", "Latitude Financial Services",
  ],

  /* ---------- Resume summary (used verbatim on the printable resume) ---------- */
  summary:
    "AI architect and forward deployed engineer with more than 20 years in customer-facing technical roles, the last six at Google Cloud. I advise banks, telcos and government agencies across Australia and Asia-Pacific on adopting generative AI, then design and build the agentic systems, evaluation frameworks and guardrails that take them into production under APRA, MAS and ISM requirements. Former CTO and AUNZ pre-sales site lead who works with executives and engineering teams alike and writes production Python. NV1 security cleared.",

  /* ---------- About section (website wording) ---------- */
  about: [
    "I've spent more than 20 years in customer-facing technical roles, the last six at Google Cloud. These days my work is helping banks, telcos and government agencies adopt generative AI, and then staying on to design and build what gets them into production.",
    "That usually means agentic systems, the evaluation frameworks that prove they work, and the guardrails that keep them safe, all built to meet APRA, MAS and ISM requirements.",
    "I'm a former CTO and AUNZ pre-sales site lead, so I'm as comfortable in an executive workshop as I am in a code review. I still write production Python.",
  ],
  highlights: [
    { value: 20, suffix: "+", label: "years in customer-facing technical roles" },
    { value: 7, suffix: "", label: "Google Cloud Professional certifications" },
    { value: 130, suffix: "+", label: "customer projects as a solution architect" },
  ],

  /* ---------- Headline numbers ---------- */
  metrics: [
    { value: 0.958, decimals: 3, suffix: "", label: "macro F1 on a production AI screening pipeline, with zero false negatives" },
    { value: 68, suffix: "%", label: "reduction in model API cost, alongside 42% lower inference latency" },
    { value: 60, suffix: "/60", label: "adversarial benchmark scenarios blocked by fail-closed guardrails" },
    { value: 6559, suffix: "", label: "tests kept at a 100% pass rate by an autonomous triage pipeline" },
  ],

  /* ---------- Skills ---------- */
  skills: [
    {
      group: "LLM engineering",
      items: ["Agentic and multi-agent systems", "RAG and grounding", "Prompt engineering", "Structured output", "Model Context Protocol (MCP) servers", "Model selection and tuning"],
    },
    {
      group: "Evaluation",
      items: ["LLM-as-a-judge", "Reference-free scorecards", "Golden and synthetic datasets", "Confidence intervals", "Regression gates in CI", "DeepEval", "Promptfoo", "Nvidia Garak"],
    },
    {
      group: "AI safety and security",
      items: ["Prompt injection and jailbreak defences", "Output filtering", "PII masking", "Fail-closed guardrails", "Read-only tool sandboxes for agents"],
    },
    {
      group: "Languages and platforms",
      items: ["Python", "Go", "SQL", "Terraform", "Google Cloud", "Vertex AI", "Agent Development Kit", "Spanner", "Cloud Run", "AWS"],
    },
    {
      group: "Regulated industries",
      items: ["APRA CPS 234 and CPS 230", "MAS Notice 626", "ISM (Official: Sensitive and Protected)", "Data sovereignty"],
    },
    {
      group: "Pre-sales",
      items: ["Technical discovery", "Solution scoping", "Statements of work", "Executive workshops", "Deal qualification"],
    },
  ],

  /* ---------- Selected work (project cards) ---------- */
  projects: [
    {
      name: "Adverse media screening platform",
      client: "Bank of Singapore",
      summary: "A six-stage AI screening platform covering English and Chinese media under MAS Notice 626.",
      points: [
        "Led the architecture and authored three of the six stages, including multilingual entity resolution.",
        "Built a compliance advisor agent limited to a read-only database sandbox.",
        "Validated at 0.958 macro F1, zero false negatives and 1.000 citation faithfulness.",
      ],
      tags: ["Agentic AI", "Multilingual", "MAS Notice 626"],
    },
    {
      name: "LLM evaluation and reliability",
      client: "Bank of Singapore",
      summary: "A production evaluation harness, plus the changes that made model output repeatable and cheaper.",
      points: [
        "Reference-free five-pillar scorecards, LLM-as-a-judge and 95% confidence intervals, with regression gates in CI.",
        "Replaced free-form probability scores with a discrete ordinal taxonomy, removing drift between identical runs.",
        "Cut inference latency by 42% and model API cost by 68%.",
      ],
      tags: ["LLM-as-a-judge", "Golden datasets", "CI gates"],
    },
    {
      name: "Enterprise agentic AI platform",
      client: "Bendigo Bank",
      summary: "A platform that lets business units build and deploy their own AI agents while customer data stays in Australia.",
      points: [
        "Sole architect and author: 11 Terraform modules, 5 reusable Python agent archetypes and an 11-chapter technical design.",
        "Keeps customer data inside Australia under APRA CPS 234.",
        "Passed the bank's CISO and model risk reviews on first submission.",
      ],
      tags: ["Terraform", "Python", "APRA CPS 234"],
    },
    {
      name: "Fail-closed AI guardrails and MCP connectors",
      client: "Bendigo Bank",
      summary: "In-region screening of every prompt and response, and a faster way to plug in new tools.",
      points: [
        "Screens for prompt injection, jailbreaks and tax file numbers.",
        "Blocked every adversarial payload across 60 benchmark scenarios.",
        "MCP connectors for SharePoint and Chinese-language news search cut new tool integration from weeks to under 48 hours.",
      ],
      tags: ["Guardrails", "MCP", "PII masking"],
    },
    {
      name: "Sovereign cloud landing zone",
      client: "Telstra",
      summary: "A sovereign landing zone built to meet national sovereignty requirements.",
      points: [
        "Programmatic regulatory perimeters and zero-trust controls.",
        "Delivered entirely as infrastructure as code.",
        "Covers data, cryptographic and operational sovereignty.",
      ],
      tags: ["Sovereignty", "Zero trust", "IaC"],
    },
    {
      name: "Payments and platform scale",
      client: "ANZ Bank and Atlassian",
      summary: "Architecture leadership for two of the largest Google Cloud footprints in the region.",
      points: [
        "ANZ's payments platform: 99.999% SLA, carrying 60% of Australia's transaction volume.",
        "Atlassian's Google Cloud footprint: more than 27,000 CPUs serving 27 million users.",
        "Earlier at ANZ: an event-driven system automating project provisioning and security perimeter enrolment.",
      ],
      tags: ["High availability", "Scale", "Google Cloud"],
    },
  ],

  /* ---------- Experience (full resume detail) ---------- */
  experience: [
    {
      company: "Google Cloud",
      roles: [
        {
          title: "Forward Deployed Engineer (L7)",
          period: "August 2026 to present",
          bullets: [
            { lead: "Bank of Singapore adverse media screening", text: "led the architecture and wrote core code for a six-stage AI screening platform covering English and Chinese media under MAS Notice 626. Authored three of the six stages, including multilingual entity resolution and a compliance advisor agent limited to a read-only database sandbox." },
            { lead: "LLM evaluation", text: "designed and built the platform's production evaluation harness, with reference-free five-pillar scorecards, LLM-as-a-judge, 95% confidence intervals, golden and synthetic test cohorts, and regression gates in CI. Validated the pipeline at 0.958 macro F1, zero false negatives and 1.000 citation faithfulness across 168- and 240-subject cohorts." },
            { lead: "Reliability and cost of model output", text: "replaced free-form LLM probability scores with a discrete ordinal taxonomy and deterministic scoring, which removed classification drift between identical runs. Combined with prompt and caching changes, this cut inference latency by 42% and model API cost by 68%." },
            { lead: "AI-assisted engineering", text: "built an autonomous bug triage and remediation pipeline and a verification agent that keep a 6,559-test monorepo at a 100% pass rate." },
          ],
        },
        {
          title: "Enterprise Architect and AUNZ Pre-sales Site Lead (L7)",
          period: "March 2022 to August 2026",
          bullets: [
            { lead: "Bendigo Bank enterprise agentic AI platform", text: "sole architect and author of a platform that lets business units build and deploy their own AI agents while keeping customer data inside Australia under APRA CPS 234. Delivered 11 Terraform modules, 5 reusable Python agent archetypes and an 11-chapter technical design." },
            { lead: "AI guardrails", text: "built fail-closed guardrails that screen every prompt and response in-region for prompt injection, jailbreaks and tax file numbers. Blocked every adversarial payload across 60 benchmark scenarios." },
            { lead: "MCP and tool integration", text: "built MCP connectors for Microsoft SharePoint and Chinese-language news search, reducing the time to add a new tool or data source from weeks to under 48 hours." },
            { lead: "Teaching and stakeholder alignment", text: "ran an eight-sprint architecture workshop series for Bendigo Bank's architects, security teams and platform developers. The designs passed the bank's CISO and model risk reviews on first submission." },
            { lead: "Pre-sales leadership", text: "as AUNZ Pre-sales Site Lead, introduced a deal qualification framework to diagnose and unblock priority deals. Contributed technical architecture to wins including Canva, Macquarie Bank and Zip Co." },
            { lead: "Telstra sovereign cloud", text: "architected a sovereign landing zone with programmatic regulatory perimeters, infrastructure as code and zero-trust controls to meet national data, cryptographic and operational sovereignty requirements." },
            { lead: "ANZ Bank and Atlassian", text: "led the architecture for ANZ's payments platform (99.999% SLA, 60% of Australia's transaction volume) and for scaling Atlassian's Google Cloud footprint to more than 27,000 CPUs serving 27 million users." },
            { lead: "Department of Defence", text: "authored the cloud foundations proposal mapping the architecture to the ISM for Official: Sensitive and Protected workloads." },
            { lead: "Community", text: "Google GenAI Ambassador and AI Accelerator Mentor. Designed hands-on lab content for the Sydney Cloud Summit 2026 Builder Zone." },
          ],
        },
        {
          title: "Cloud Consultant (L6)",
          period: "July 2020 to March 2022",
          bullets: [
            { text: "Product owner for an ANZ Bank platform team, designing an event-driven system that automated project provisioning and security perimeter enrolment." },
            { text: "Led the first global engagement of the Cloud App Modernisation Program, directing a team of 10 across multiple regions." },
            { text: "Designed the architecture for isolating ANZ New Zealand workloads under the RBNZ BS11 outsourcing policy." },
          ],
        },
      ],
    },
    {
      company: "Versent",
      roles: [
        {
          title: "Principal Consultant",
          period: "September 2017 to August 2018 and April 2019 to July 2020",
          bullets: [
            { text: "Led infrastructure and data teams building an AWS control plane and a data archiving platform holding 50 TB and 2.2 billion records for MLC Life Insurance." },
            { text: "Led 12 engineers building secure, reusable enterprise API microservices in Go and Java on AWS for Latitude Financial Services." },
          ],
        },
      ],
    },
    {
      company: "AtlasPlato",
      roles: [
        {
          title: "Co-founder, Chief Technology Officer and General Manager",
          period: "August 2018 to April 2019",
          bullets: [
            { text: "Co-founded a cloud-native data and BI consultancy and grew it from one engineer and $120,000 in annual revenue to a ten-person team turning over $1.5 million." },
            { text: "Managed and coached the founding team of 5 product and data engineers and designed their career progression framework." },
          ],
        },
      ],
    },
    {
      company: "Thomas Duryea Logicalis",
      roles: [
        {
          title: "Chief Technology Officer",
          period: "June 2016 to September 2017",
          extraTitles: [{ title: "Solution Architect, Public Cloud", period: "December 2013 to June 2016" }],
          bullets: [
            { text: "As CTO, directed a 200-person national engineering and technical pre-sales organisation across five practices, and owned pre-sales governance, architecture design and estimation." },
            { text: "As Solution Architect, worked with enterprise and government customers on more than 130 projects in a combined pre-sales and architecture role." },
            { text: "Lead architect for the Bureau of Meteorology's mobile app backend on AWS, supporting more than 100,000 active users on launch day." },
          ],
        },
      ],
    },
    {
      company: "Earlier roles",
      roles: [
        {
          title: "Senior Systems Consultant, Harbour IT",
          period: "2010 to 2013",
          bullets: [{ text: "Technical pre-sales, design and implementation of private cloud platforms." }],
        },
        {
          title: "Systems Administrator, Upstream Print Solutions and Invizage Technology",
          period: "2008 to 2010 and 2005 to 2008",
          bullets: [{ text: "Virtualisation and unified communications rollouts." }],
        },
      ],
    },
  ],

  /* ---------- Credentials ---------- */
  certifications: [
    {
      issuer: "Google Cloud Professional",
      items: ["Machine Learning Engineer", "Cloud Architect", "Cloud Developer", "Data Engineer", "Cloud Security Engineer", "Cloud DevOps Engineer", "Cloud Network Engineer"],
    },
    {
      issuer: "AWS and Microsoft",
      items: ["AWS Certified Solutions Architect", "AWS Certified Developer", "MCSE: Cloud Platform and Infrastructure"],
    },
  ],
  education: [
    { degree: "Advanced Diploma of Computer Systems and Engineering", school: "RMIT", period: "2003 to 2004" },
  ],
  clearance: { level: "NV1", label: "Australian Government security clearance" },
  community: [
    "Google GenAI Ambassador",
    "AI Accelerator Mentor",
    "Lab content designer, Sydney Cloud Summit 2026 Builder Zone",
  ],
};
