// ─────────────────────────────────────────────────────────────
//  All page content lives here. Edit this file to update your CV.
// ─────────────────────────────────────────────────────────────
window.CV = {
  name: "Nikoloz Gochiashvili",
  handle: "ngoch",
  title: "Team Lead & Software Architect",
  tagline: ["Team Lead", "Software Architect", "Ex-CTO", "AI enthusiast"],
  location: "Tbilisi, Georgia",
  currently: "Webiz · Fundbox",
  avatar: "https://avatars.githubusercontent.com/u/2676940?s=460&v=4",
  email: "", // e.g. "you@example.com" (leave empty to hide)

  about: [
    "Team lead and software architect who enjoys hard problems. I spent ten years as CTO and Software Architect at FINA, then designed cloud and IoT systems at AzRy, built AI-driven sentiment analysis at BrandTotal, and led cloud migrations for Amplify Health. Today I lead a product team at Webiz working on Fundbox.",
    "I'm deeply curious about AI, particularly deep learning and natural language processing, and how these technologies are reshaping the software landscape.",
  ],

  stats: [
    { value: "15+", label: "years building software" },
    { value: "PhD", label: "candidate, informatics" },
    { value: "5", label: "companies" },
  ],

  experience: [
    {
      role: "Team Lead",
      company: "Webiz International · Fundbox",
      period: "2023 —",
      points: [
        "Lead a team of talented software developers and help them grow technically and professionally.",
        "Set team priorities and define roles, responsibilities and workflow.",
        "Take part in code and design reviews, and work with other teams on cross-team features.",
        "Deliver features end to end, owning the full lifecycle from design to release.",
      ],
      achievements: ["Developed two new products: Credit Builder and a partnership integration."],
      tech: ["Python", "MySQL", "AWS"],
    },
    {
      role: "Senior Developer / Tech Lead",
      company: "Webiz International · Amplify Health",
      period: "2022 — 2023",
      points: [
        "Developed a discovery health platform.",
        "Worked with AKS, Helm, microservices and Spring.",
      ],
      achievements: ["Migrated an on-premises application to the cloud.", "Implemented multi-tenancy."],
      tech: ["Spring", "PostgreSQL", "SAP HANA", "Elasticsearch", "AKS", "Camunda", "Drools"],
    },
    {
      role: "Senior Backend Engineer",
      company: "BrandTotal LLC",
      period: "2021 — 2022",
      points: [
        "Developed and upgraded UpVoice.",
        "Worked with NestJS, AWS and AI-based sentiment analysis.",
      ],
      achievements: ["Developed version 2 of the application.", "Implemented multilingual sentiment analysis."],
      tech: ["Node.js", "NestJS", "Python"],
    },
    {
      role: "Software Architect",
      company: "AzRy LLC",
      period: "2020 — 2022",
      points: [
        "Oversaw design, development and upgrades of the Transport System.",
        "Designed the entire system from the received requirements.",
        "Led software development projects.",
      ],
      achievements: [
        "Built an IoT platform.",
        "Introduced Agile/Scrum team development.",
        "Migrated the Transport System to AWS ECS.",
        "Implemented Gitflow across the organization.",
      ],
      tech: ["Java EE (JBoss)", "Spring Boot", "React", "Oracle Database", "AWS ECS/ECR"],
    },
    {
      role: "Software Architect / CTO",
      company: "FINA LLC",
      url: "http://fina2.net",
      period: "2010 — 2020",
      points: [
        "Evaluated, identified and developed software solutions.",
        "Led software development projects.",
        "Planned, tracked and scheduled software deliverables.",
        "Built strong working relationships with marketing and product managers, programmers and engineers.",
      ],
      achievements: [],
      tech: ["Java EE", "JBoss / WildFly", "Oracle", "SQL Server", "PostgreSQL"],
    },
  ],

  education: [
    { degree: "Doctor of Philosophy (PhD)", school: "Georgian Technical University", detail: "Faculty of Informatics and Management Systems", period: "2016 —" },
    { degree: "MSc, Computer Science", school: "International Black Sea University", detail: "Faculty of Computer Technologies and Engineering", period: "2015 —" },
    { degree: "MSc, Computer Science", school: "Tbilisi State University", detail: "Faculty of Exact and Natural Sciences", period: "2011 — 2013" },
    { degree: "BSc, Computer Science", school: "Tbilisi State University", detail: "Faculty of Exact and Natural Sciences", period: "2007 — 2011" },
  ],

  skills: [
    { group: "Java & JVM", items: ["Java", "Java EE / Jakarta EE", "Spring / Spring Boot", "JPA", "Camunda", "Drools"] },
    { group: "Frontend", items: ["React", "Redux", "ExtReact", "Angular"] },
    { group: "Mobile", items: ["React Native", "Ambebi", "Anbani", "Cade"] },
    { group: "Python, Node & AI", items: ["Python", "Django", "Node.js", "NestJS", "NLTK", "Sentiment analysis"] },
    { group: "Cloud & DevOps", items: ["AWS (ECS, ECR)", "Azure AKS", "Helm", "Docker", "Microservices", "Gitflow"] },
    { group: "Databases", items: ["PostgreSQL", "MySQL", "Oracle", "SQL Server", "SAP HANA", "Elasticsearch", "MongoDB"] },
    { group: "App servers", items: ["WildFly", "JBoss", "Tomcat", "Nginx"] },
  ],

  social: [
    { label: "GitHub", url: "https://github.com/ngoch" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nikoloz-gochiashvili-21628835" },
    { label: "X / Twitter", url: "https://twitter.com/ng0ch1" },
    { label: "Instagram", url: "https://www.instagram.com/ngoch1/" },
    { label: "YouTube", url: "https://www.youtube.com/user/ngochiashvili" },
    { label: "Facebook", url: "https://www.facebook.com/ngoch01" },
  ],
};
