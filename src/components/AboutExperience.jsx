import React from "react";
import MovingSkills from "./MovingSkills";

const skills = [
  "JavaScript (ES6+)", "TypeScript", "Python",
  "React.js", "Redux", "Next.js", "Tailwind CSS", "Material UI",
  "Node.js", "Express.js", "GraphQL", "REST APIs", "Microservices",
  "PostgreSQL", "MySQL", "MongoDB", "Redis",
  "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "AWS (EC2, S3, Lambda)",
  "Prisma ORM", "Jest", "OpenAI API", "Claude API", "Gemini API",
];

const experiences = [
  {
    company: "upGrad (Client: Fynd)",
    role: "Software Development Engineer – I",
    period: "Sep 2025 – Mar 2026",
    location: "Mumbai, India",
    highlights: [
      "Delivered full-stack features for on-premises MES platform supporting 50K+ users, cutting workflow turnaround by 30%.",
      "Integrated SAP modules (MM, BOM, PP) via OData services; converted to optimized REST/GraphQL APIs, reducing frontend complexity by 25%.",
      "Designed cron-based pipelines to sync SAP and COSEC HR data, improving data consistency by 35%.",
      "Built RBAC user management system, reducing admin overhead by 30%.",
      "Automated CI/CD with Docker & Kubernetes, cutting deployment time by 40%.",
    ],
    color: "#3b82f6",
  },
  {
    company: "AeroSimple",
    role: "Software Development Engineer – I",
    period: "Aug 2023 – Aug 2025",
    location: "Visakhapatnam, India",
    highlights: [
      "Architected and launched LMS and Snow Management solutions, improving operational efficiency by 35%.",
      "Enhanced state management with Redux & React Hooks, reducing app load time by 40%.",
      "Integrated and extended 10+ legacy APIs using Node.js and Prisma ORM.",
      "Developed comprehensive unit tests with Jest and Enzyme, significantly improving code quality.",
    ],
    color: "#8b5cf6",
  },
  {
    company: "3SBC",
    role: "Technical Recruiter",
    period: "Feb 2020 – Aug 2022",
    location: "Kakinada, India",
    highlights: [
      "Recruited 50+ candidates across React.js, Python, SAP, and QA roles.",
      "Built pipeline of 200+ qualified candidates, improving hiring conversion rates.",
      "Conducted 300+ technical screenings, reducing interview drop-offs.",
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
           I’m a Full Stack Engineer focused on building scalable, high-performance systems and delivering products that create measurable impact. Over the past 2.5+ years, I’ve worked across engineering teams at upGrad (Fynd) and AeroSimple, contributing to production-grade applications used in real-world operational environments.
           My experience spans frontend engineering, backend architecture, databases, and cloud-native infrastructure. I’ve built responsive React.js applications, designed secure and scalable Node.js services, integrated enterprise systems like SAP, and optimized deployment workflows using Docker, Kubernetes, and CI/CD pipelines.
           I enjoy solving complex engineering problems with clean, maintainable solutions. Whether it’s improving application performance, designing GraphQL APIs, debugging large-scale state management issues, or building RBAC-secured systems handling high-volume data, I focus on writing reliable software that scales with both users and teams.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Currently, I’m exploring AI/ML, LLMs, and agentic systems to expand my understanding of intelligent applications and next-generation software systems. I’m looking for opportunities to work on ambitious products alongside strong engineering teams that value technical excellence, ownership, and continuous learning.
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
