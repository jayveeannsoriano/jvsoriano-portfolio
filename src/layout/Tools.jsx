import React from "react";
import SectionContainer from "../components/SectionContainer";

const Chip = ({ label }) => (
  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-gray-700 bg-gray-900/40 text-gray-300 text-xs font-mono hover:border-sky-500/50 hover:text-sky-300 transition-colors duration-150 whitespace-nowrap">
    {label}
  </span>
);

const TechGroup = ({ title, description, chips }) => (
  <div className="flex flex-col gap-3">
    <p className="text-lg font-mono text-sky-500 uppercase tracking-widest">
      {title}
    </p>
    <div className="flex flex-wrap gap-1.5">
      {chips.map((label) => (
        <Chip key={label} label={label} />
      ))}
    </div>
    <p className="text-xs md:text-sm text-gray-400 leading-snug">
      {description}
    </p>
  </div>
);

const TECH_GROUPS = [
  {
    title: "Frontend",
    description:
      "Core stack for production UIs. TypeScript keeps component contracts clear and catches issues early.",
    chips: ["TypeScript", "Next.js", "JavaScript", "React"],
  },
  {
    title: "UI/UX Design & Styling",
    description:
      "Tailwind for layout consistency. shadcn/ui for accessible component systems. Bootstrap for a legacy-compatible client project. Figma for design decisions before touching code.",
    chips: ["Tailwind CSS", "Bootstrap", "shadcn/ui", "Figma"],
  },
  {
    title: "State & Forms",
    description:
      "Zustand for cross-component state without the overhead. React Hook Form + Zod for schema-validated, performant multi-step forms.",
    chips: ["Zod", "Zustand", "React Hook Form"],
  },
  {
    title: "Backend & Data",
    description:
      "Shipped a full-stack client project on Supabase — auth, relational data, and file storage in one layer.",
    chips: ["Supabase", "SQL"],
  },
  {
    title: "Mobile",
    description:
      "Built cross-platform mobile apps with Flutter and Dart during internship at FFUF Manila Inc. — writing widget trees, managing state, and shipping real features to a production codebase.",
    chips: ["Flutter", "Dart"],
  },
  {
    title: "Tools & Platforms",
    description:
      "Git workflows with branching and PRs across all team projects. Jira for sprint tasks, bugs, and feature tickets. Postman for API testing. Vercel for CI-connected deployments.",
    chips: ["Git", "GitHub", "Bitbucket", "Vercel", "Jira", "Postman"],
  },
];

const Tools = () => {
  return (
    <SectionContainer sectionName={"Skills"} id={"skills"}>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3"
      >
        {TECH_GROUPS.map((group) => (
          <TechGroup
            key={group.title}
            title={group.title}
            description={group.description}
            chips={group.chips}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Tools;
