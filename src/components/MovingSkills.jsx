import React from "react";
import {
  SiReact, SiRedux, SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs,
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiMysql, SiRedis,
  SiDocker, SiKubernetes, SiGit, SiGithub, SiAmazon, SiPrisma, SiGraphql,
  SiJest, SiPython,
} from "react-icons/si";

const skillsWithIcons = [
  { name: "React.js", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "AWS", icon: <SiAmazon /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "Jest", icon: <SiJest /> },
  { name: "Python", icon: <SiPython /> },
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
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MovingSkills;
