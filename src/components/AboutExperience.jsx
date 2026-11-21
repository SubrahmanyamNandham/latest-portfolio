import React from "react";
import MovingSkills from "./MovingSkills";

const skills = [
  "JavaScript (ES6+)", "TypeScript", "Python", "SQL",
  "LangChain", "LangGraph", "RAG", "Tool Calling", "MCP", "Multi-Agent Systems",
  "OpenAI", "Claude", "Gemini", "Qdrant", "pgvector",
  "React.js", "Redux Toolkit", "Next.js", "Tailwind CSS", "Material UI",
  "Node.js", "NestJS", "Express.js", "FastAPI", "GraphQL", "REST APIs", "WebSockets",
  "PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma ORM",
  "Docker", "Kubernetes", "AWS", "GitHub Actions", "GitLab CI/CD",
  "System Design", "Microservices", "Event-Driven Architecture", "RBAC", "OAuth 2.0", "JWT",
  "Jest", "Playwright",
];

const experiences = [
  {
    company: "upGrad (Client: Fynd)",
    role: "Software Development Engineer – I",
    period: "Sep 2025 – Mar 2026",
    location: "Mumbai, India",
    highlights: [
      "Built the Fynd Forge MES platform, an enterprise Manufacturing Execution System connecting production workflows with SAP ERP and COSEC HR, supporting 100K+ concurrent users.",
      "Developed real-time production dashboards with React.js, Redux Toolkit, Socket.IO, Node.js, and PostgreSQL for monitoring machine status, production counts, and operational events.",
      "Engineered end-to-end MES features across frontend and backend, cutting workflow turnaround by 30%.",
      "Designed REST and GraphQL APIs with Node.js, Express.js, and Prisma, integrating SAP ERP modules through OData services.",
      "Implemented scheduled and event-driven sync between SAP ERP and COSEC HR, improving data consistency and reducing manual reconciliation.",
      "Optimized PostgreSQL with indexing, execution-plan analysis, and connection pooling, reducing API latency by 25%.",
      "Implemented granular RBAC and automated deployments with Docker, Kubernetes, and GitLab CI/CD.",
      "Integrated LLM-powered workflows and RAG for production data analysis and operational knowledge retrieval.",
    ],
    color: "#3b82f6",
  },
  {
    company: "AeroSimple",
    role: "Software Development Engineer – I",
    period: "Aug 2023 – Aug 2025",
    location: "Visakhapatnam, India",
    highlights: [
      "Built and enhanced cloud-based airport operations products used by 10K+ users, including shift management, handovers, LMS, snow management, and lease management.",
      "Redesigned frontend state management with Redux Toolkit, React Hooks, memoization, and lazy loading, cutting initial load time by about 40%.",
      "Integrated and extended 10+ REST APIs with Node.js and Prisma, adding retry handling and exponential backoff.",
      "Optimized MongoDB indexes, aggregation pipelines, and schemas, reducing average API response times by about 30%.",
      "Wrote unit and integration tests with Jest and Enzyme, reaching 80%+ code coverage.",
      "Designed AI agent workflows with tool calling and multi-step orchestration to generate shift handover summaries and streamline task management.",
    ],
    color: "#8b5cf6",
  },
  {
    company: "3SBC",
    role: "Technical Recruiter",
    period: "Feb 2020 – Aug 2022",
    location: "Kakinada, India",
    highlights: [
      "Recruited 50+ engineers across Data Engineering, UI, Java, Python, SAP, and QA, reducing time-to-fill by 25%.",
      "Conducted 300+ technical screening interviews and partnered with 10+ hiring managers to close critical roles.",
    ],
    color: "#10b981",
  },
];

const AboutExperience = () => {
  return (
    <section
      id="about"
      className="bg-[#0a0a0f] text-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      <MovingSkills />

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
        {/* About Me Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full md:w-5/12 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-4">About Me</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            I'm a Full Stack Agentic AI Engineer with 2.5+ years of experience building production web applications and AI-powered systems. I've worked at upGrad (deployed at Fynd) and AeroSimple, shipping software used in real operational environments, including enterprise systems supporting 100K+ concurrent users.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            My foundation is full-stack engineering: React.js frontends, Node.js and Python backends, PostgreSQL and MongoDB, enterprise integrations with SAP ERP, and cloud-native delivery with Docker, Kubernetes, and CI/CD. On top of that, I design AI applications using LLMs, RAG, vector databases, tool calling, LangChain, and LangGraph.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Right now I'm building an AI-powered recruiting platform and an agentic healthcare workflow system with human-in-the-loop review. I'm open to Full-Stack, Forward Deployed, and Agentic AI / GenAI engineering roles on teams that value technical excellence, ownership, and continuous learning.
          </p>

          <h4 className="text-sm font-semibold text-gray-300 mb-3 tracking-wide uppercase">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill}
                className="border border-[#3b82f6]/30 text-[#60a5fa] px-2.5 py-1 rounded-lg text-xs font-medium hover:bg-[#3b82f6]/10 transition cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full md:w-7/12">
          <h3 className="text-xl font-bold text-white mb-6">Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-5 border-l-2" style={{ borderColor: exp.color + '40' }}>
                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full" style={{ background: exp.color }} />
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h4 className="font-bold text-white text-base">{exp.company}</h4>
                  <span className="text-xs text-gray-500">{exp.period} · {exp.location}</span>
                </div>
                <p className="text-sm font-semibold mb-2" style={{ color: exp.color }}>{exp.role}</p>
                <ul className="space-y-1">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-gray-400 text-xs leading-relaxed flex gap-2">
                      <span className="text-gray-600 mt-0.5">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExperience;
