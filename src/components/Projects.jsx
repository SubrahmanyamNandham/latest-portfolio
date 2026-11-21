import { LuGithub, LuDatabase } from "react-icons/lu";
import { CiPlay1 } from "react-icons/ci";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiTailwindcss, SiRedux, SiMongodb, SiFastapi, SiOpenai, SiPostgresql,
  SiExpress, SiNestjs, SiNextdotjs, SiTypescript, SiSocketdotio, SiRedis,
  SiDocker, SiKubernetes, SiLangchain, SiSupabase, SiTwilio,
  SiSap, SiGraphql, SiPrisma,
} from "react-icons/si";

const projects = [
  {
    title: "AI-Powered Recruiting Platform",
    description:
      "Agentic platform that discovers, evaluates, enriches, and ranks candidate profiles against job requirements. Combines LLM reasoning, tool calling, skill extraction, and vector search to give recruiters explainable candidate recommendations, with provenance, consent, and prompt-versioning built in.",
    tech: ["LangGraph", "RAG", "NestJS", "React.js", "PostgreSQL", "pgvector", "Qdrant", "Redis"],
    github: "https://github.com/SubrahmanyamNandham",
    live: null,
    gradient: "from-blue-600/20 to-violet-600/20",
    accent: "#3b82f6",
    badge: "Agentic AI · In Progress",
  },
  {
    title: "Agentic AI for Outpatient Healthcare",
    description:
      "Agentic workflow system for outpatient care covering patient support, appointment scheduling, consultation documentation, and follow-ups. Turns consultation transcripts into structured clinical drafts, flags missing or inconsistent details, and keeps doctors in control with a human-in-the-loop review step before anything reaches patients.",
    tech: ["Python", "FastAPI", "LangChain", "RAG", "React.js", "TypeScript", "Supabase", "Twilio"],
    github: "https://github.com/SubrahmanyamNandham",
    live: null,
    gradient: "from-emerald-600/20 to-teal-600/20",
    accent: "#10b981",
    badge: "Agentic AI / Healthcare",
  },
  {
    title: "TravelMitra – AI Travel Planner",
    description:
      "Turns preferences, destination, budget, and duration into structured, personalized itineraries. Combines LLM reasoning with tool-based retrieval (Apify) and semantic search (Qdrant), served by a FastAPI backend with authentication and persistence.",
    tech: ["Python", "FastAPI", "React.js", "OpenAI API", "RAG", "Qdrant", "Apify"],
    github: "https://github.com/SubrahmanyamNandham",
    live: null,
    gradient: "from-violet-600/20 to-pink-600/20",
    accent: "#8b5cf6",
    badge: "AI / Full Stack",
  },
  {
    title: "Product Support Chat Platform",
    description:
      "Real-time support platform with product-specific conversations, persistent messaging, typing indicators, read receipts, and agent dashboards. Uses JWT authentication and RBAC for customer and support-agent workflows.",
    tech: ["Next.js", "NestJS", "TypeScript", "MongoDB", "Socket.IO"],
    github: "https://github.com/SubrahmanyamNandham",
    live: null,
    gradient: "from-cyan-600/20 to-blue-600/20",
    accent: "#06b6d4",
    badge: "Real-time",
  },
  {
    title: "Fynd Forge MES Platform",
    description:
      "Enterprise Manufacturing Execution System connecting production workflows with SAP ERP and COSEC HR. Real-time shop-floor dashboards and event-driven syncs cut workflow turnaround by 30%, and PostgreSQL tuning cut API latency by 25%, supporting 100K+ concurrent users.",
    tech: ["React.js", "Redux", "Node.js", "PostgreSQL", "GraphQL", "Prisma ORM", "SAP ERP", "Socket.IO"],
    github: null,
    live: null,
    gradient: "from-orange-600/20 to-red-600/20",
    accent: "#f97316",
    badge: "Enterprise",
  },
  {
    title: "Airport Operations SaaS",
    description:
      "Cloud-based airport operations suite for 10K+ users, including shift management, handovers, LMS, snow management, and lease management. Cut initial load time by about 40% and API response times by about 30%, and added AI agent workflows to generate shift handover summaries.",
    tech: ["React.js", "Redux", "Node.js", "PostgreSQL", "MongoDB", "Prisma ORM"],
    github: null,
    live: null,
    gradient: "from-pink-600/20 to-orange-600/20",
    accent: "#ec4899",
    badge: "Product",
  },
];

const techIcons = {
  "React.js": <FaReact className="text-[#61dafb]" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "Python": <FaPython className="text-yellow-400" />,
  "FastAPI": <SiFastapi className="text-teal-400" />,
  "MongoDB": <SiMongodb className="text-green-500" />,
  "OpenAI API": <SiOpenai className="text-white" />,
  "PostgreSQL": <SiPostgresql className="text-blue-400" />,
  "pgvector": <SiPostgresql className="text-blue-400" />,
  "Express.js": <SiExpress className="text-gray-400" />,
  "NestJS": <SiNestjs className="text-red-500" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "TypeScript": <SiTypescript className="text-blue-500" />,
  "Socket.IO": <SiSocketdotio className="text-white" />,
  "Redis": <SiRedis className="text-red-500" />,
  "Docker": <SiDocker className="text-sky-500" />,
  "Kubernetes": <SiKubernetes className="text-blue-500" />,
  "LangGraph": <SiLangchain className="text-emerald-400" />,
  "LangChain": <SiLangchain className="text-emerald-400" />,
  "Qdrant": <LuDatabase className="text-rose-500" />,
  "Supabase": <SiSupabase className="text-emerald-500" />,
  "Twilio": <SiTwilio className="text-red-500" />,
  "SAP ERP": <SiSap className="text-sky-400" />,
  "GraphQL": <SiGraphql className="text-pink-400" />,
  "Prisma ORM": <SiPrisma className="text-white" />,
  "Redux": <SiRedux className="text-purple-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  "RAG": <span className="text-emerald-400 text-xs font-bold">RAG</span>,
  "Apify": <span className="text-blue-400 text-xs font-bold">A</span>,
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0f] py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-[#3b82f6] text-sm tracking-[0.3em] uppercase mb-2 font-medium">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index}
              className={`bg-gradient-to-br ${project.gradient} border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:translate-y-[-2px] group`}>

              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full border"
                  style={{ color: project.accent, borderColor: project.accent + '40', background: project.accent + '10' }}>
                  {project.badge}
                </span>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="p-2 rounded-lg border border-white/10 hover:border-white/30 text-gray-400 hover:text-white transition">
                      <LuGithub size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="p-2 rounded-lg border border-white/10 hover:border-white/30 text-gray-400 hover:text-white transition">
                      <CiPlay1 size={16} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span key={idx}
                    className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-md px-2.5 py-1 text-xs text-gray-300">
                    {techIcons[tech] || null}
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://github.com/SubrahmanyamNandham" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-gray-300 hover:border-[#3b82f6] hover:text-white text-sm font-medium transition">
            <LuGithub size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
