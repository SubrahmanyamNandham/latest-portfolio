import { LuGithub } from "react-icons/lu";
import { CiPlay1 } from "react-icons/ci";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiMongodb, SiFastapi, SiOpenai, SiPostgresql, SiExpress, SiJsonwebtokens, SiMaterialdesign } from "react-icons/si";

const projects = [
  {
    title: "AI-Powered Travel Planning Platform",
    description: "Generates end-to-end personalized travel itineraries based on user preferences, budget, and trip duration using OpenAI APIs with dynamic real-time recommendations.",
    tech: ["Python", "FastAPI", "React.js", "MongoDB", "OpenAI API"],
    github: "https://github.com/SubrahmanyamNandham",
    live: null,
    gradient: "from-blue-600/20 to-violet-600/20",
    accent: "#3b82f6",
    badge: "AI / Full Stack",
  },
  {
    title: "Task Pilot – Project Management Tool",
    description: "Full project management platform with JWT-based authentication, RBAC, task assignments, workflow tracking, and responsive dashboards for team visibility.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Material UI"],
    github: "https://github.com/SubrahmanyamNandham",
    live: null,
    gradient: "from-violet-600/20 to-pink-600/20",
    accent: "#8b5cf6",
    badge: "Full Stack",
  },
  {
    title: "MES-AP-COSEC HR Integration Pipeline",
    description: "Cron-based data sync pipelines bridging SAP and COSEC HR systems, improving data consistency by 35% and eliminating manual reconciliation workflows.",
    tech: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL", "Prisma ORM"],
    github: "https://github.com/SubrahmanyamNandham",
    live: null,
    gradient: "from-emerald-600/20 to-teal-600/20",
    accent: "#10b981",
    badge: "Enterprise",
  },
  {
    title: "LMS & Snow Management",
    description: "Architected and launched Learning Management and Snow Management solutions for AeroSimple, improving operational efficiency by 35% across aviation operations.",
    tech: ["React.js", "Redux", "Node.js", "Prisma ORM", "PostgreSQL"],
    github: "https://github.com/SubrahmanyamNandham",
    live: null,
    gradient: "from-orange-600/20 to-red-600/20",
    accent: "#f97316",
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
  "Express.js": <SiExpress className="text-gray-400" />,
  "JWT": <SiJsonwebtokens className="text-pink-400" />,
  "Material UI": <SiMaterialdesign className="text-blue-400" />,
  "Redux": <SiRedux className="text-purple-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  "Prisma ORM": <span className="text-white text-xs font-bold">P</span>,
  "GraphQL": <span className="text-pink-400 text-xs font-bold">GQL</span>,
  "REST APIs": <span className="text-gray-400 text-xs">API</span>,
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
                      className="p-2 rounded-lg border border-white/10 hover:border-white/30 text-gray-400 hover:text-white transition">
                      <LuGithub size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
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
