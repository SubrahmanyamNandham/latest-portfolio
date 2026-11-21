import React from "react";
import {
  // Languages & frontend
  SiReact, SiRedux, SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiMui,
  // Backend
  SiNodedotjs, SiExpress, SiNestjs, SiFastapi, SiGraphql, SiSocketdotio,
  // Databases
  SiPostgresql, SiMongodb, SiMysql, SiRedis, SiPrisma,
  // AI / GenAI
  SiLangchain, SiOpenai, SiAnthropic, SiGooglegemini,
  // DevOps & tools
  SiDocker, SiKubernetes, SiAmazon, SiGithubactions, SiGitlab, SiGit,
  SiJest, SiPlaywright, SiPostman, SiPython,
} from "react-icons/si";
import { LuDatabase } from "react-icons/lu";

const skillsWithIcons = [
  // AI first, since it's the current focus
  { name: "LangChain", icon: <SiLangchain /> },
  { name: "LangGraph", icon: <SiLangchain /> },
  { name: "OpenAI", icon: <SiOpenai /> },
  { name: "Claude", icon: <SiAnthropic /> },
  { name: "Gemini", icon: <SiGooglegemini /> },
  { name: "Qdrant", icon: <LuDatabase /> },
  { name: "pgvector", icon: <SiPostgresql /> },

  { name: "React.js", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "NestJS", icon: <SiNestjs /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "Socket.IO", icon: <SiSocketdotio /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Material UI", icon: <SiMui /> },

  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "Prisma", icon: <SiPrisma /> },

  { name: "Docker", icon: <SiDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "AWS", icon: <SiAmazon /> },
  { name: "GitHub Actions", icon: <SiGithubactions /> },
  { name: "GitLab CI/CD", icon: <SiGitlab /> },
  { name: "Jest", icon: <SiJest /> },
  { name: "Playwright", icon: <SiPlaywright /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Git", icon: <SiGit /> },
];

const MovingSkills = () => {
  return (
    <div className="w-full overflow-hidden mb-10 relative flex items-center">
      <div className="flex gap-3 sm:gap-5 whitespace-nowrap animate-marquee">
        {skillsWithIcons.concat(skillsWithIcons).map((skill, index) => (
          <span
            key={index}
            className="text-[#3b82f6] px-3 py-2 rounded-lg text-xs sm:text-sm font-medium bg-white/5 border border-white/10 flex items-center gap-2 transition hover:border-[#3b82f6]/50"
          >
            {React.cloneElement(skill.icon, { size: 14 })}
            {skill.name}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 80s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MovingSkills;
