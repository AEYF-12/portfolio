import React from "react";

const skills = {
  left: [
    { name: "C/C++", level: 6 },
    { name: "Java", level: 6 },
    { name: "Python", level: 7 },
    { name: "Pandas", level: 7 },
    { name: "Numpy", level: 7 },
    { name: "Git/Github", level: 8 },
    { name: "ML", level: 8 },
    { name: "AI", level: 7 },
    { name: "Firebase", level: 7 },
    { name: "REST API", level: 7 },
    { name: "Redux", level: 8 }
  ],
  right: [
    { name: "Html", level: 8 },
    { name: "CSS", level: 8 },
    { name: "Tailwind", level: 8 },
    { name: "Javascript", level: 8 },
    { name: "Node.js", level: 7 },
    { name: "Express", level: 7 },
    { name: "MySQL", level: 8 },
    { name: "MongoDB", level: 8 },
    { name: "PostgreSQL", level: 7 },
    { name: "React", level: 8 },
    { name: "Nextjs", level: 7 },
  ],
};

const SkillRow = ({ name, level }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6">
    <span className="text-white text-lg sm:text-2xl w-full sm:w-28">{name}</span>
    <div className="flex gap-1 flex-wrap">
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          className={`w-2.5 h-2.5 rounded-full ${
            i < level ? "bg-fuchsia-500" : "bg-slate-700"
          }`}
        />
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section className="text-white px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 sm:mb-12 text-center sm:text-left">
          My skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 sm:gap-x-24">
          {/* Left Column */}
          <div className="space-y-6">
            {skills.left.map((skill) => (
              <SkillRow key={skill.name} {...skill} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {skills.right.map((skill) => (
              <SkillRow key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
