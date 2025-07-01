import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiFastapi,
  SiPostgresql,
  SiFirebase
} from "react-icons/si";

const techs = [
  { name: "HTML", icon: <SiHtml5 size={24} color="#E44D26" /> },
  { name: "CSS", icon: <SiCss3 size={24} color="#2965F1" /> },
  { name: "JavaScript", icon: <SiJavascript size={24} color="#F7DF1E" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={24} color="#38BDF8" /> },
  { name: "React", icon: <SiReact size={24} color="#61DAFB" /> },
  { name: "Node.js", icon: <SiNodedotjs size={24} color="#3C873A" /> },
  { name: "Express.js", icon: <SiExpress size={24} color="#aaa" /> },
  { name: "TypeScript", icon: <SiTypescript size={24} color="#3178C6" /> },
  { name: "MongoDB", icon: <SiMongodb size={24} color="#10AA50" /> },
  { name: "Next.js", icon: <SiNextdotjs size={24} color="#000" /> },
  { name: "FastAPI", icon: <SiFastapi size={24} color="#05998B" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={24} color="#336791" /> },
  { name: "Firebase", icon: <SiFirebase size={24} color="#FFA000" /> },
];

export default function TechStack() {
  return (
    <section id="techstack" className="w-full max-w-3xl mx-auto py-16 px-4 mt-20">
      <h2 className="text-5xl font-bold text-center text-white mb-2">
        Tech <span className="text-sky-400">Stack</span>
      </h2>
      <div className="h-1 w-48 bg-sky-400 mx-auto rounded mb-6" />
      <p className="text-center text-gray-400 text-xl mb-12">
        Techstack I am familiar with
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center bg-[#13171f] rounded-2xl border border-gray-700 p-4 shadow-md min-h-[90px] hover:scale-105 transition-transform"
          >
            <div className="mb-1">{tech.icon}</div>
            <span className="text-white text-sm font-medium mt-1 text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
