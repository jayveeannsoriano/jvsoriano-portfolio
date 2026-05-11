import React from "react";
import SectionContainer from "../components/SectionContainer";
import {
  BiLogoReact,
  BiLogoGit,
  BiLogoJavascript,
  BiLogoFlutter,
  BiLogoTailwindCss,
  BiLogoBootstrap,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { FaFigma } from "react-icons/fa6";
import { SiDart, SiSupabase, SiRadixui, SiVercel, SiReacthookform } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

const Chip = ({ icon: Icon, label }) => (
  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-gray-700 bg-gray-900/40 text-gray-300 text-xs font-mono hover:border-sky-500/50 hover:text-sky-300 transition-colors duration-150 whitespace-nowrap">
    {label}
  </span>
);

const TechGroup = ({ title, description, chips }) => (
  <div className="flex flex-col gap-3">
    <p className="text-lg font-mono text-sky-500 uppercase tracking-widest">{title}</p>
    <div className="flex flex-wrap gap-1.5">
      {chips.map(({ icon, label }) => (
        <Chip key={label} icon={icon} label={label} />
      ))}
    </div>
    <p className="text-xs md:text-sm text-gray-400 leading-snug">{description}</p>
  </div>
);

const TECH_GROUPS = [
  {
    title: "Frontend",
    description: "My primary stack. Used React and Next.js across client and personal projects to build component-driven UIs with a focus on performance and maintainability.",
    chips: [
      { icon: BiLogoReact, label: "React" },
      { icon: TbBrandNextjs, label: "Next.js" },
      { icon: BiLogoJavascript, label: "JavaScript" },
    ],
  },
  {
    title: "UI & Styling",
    description: "Tailwind is my default for layout and design systems. Bootstrap for legacy-compatible work. shadcn/ui for accessible, composable components in production.",
    chips: [
      { icon: BiLogoTailwindCss, label: "Tailwind CSS" },
      { icon: BiLogoBootstrap, label: "Bootstrap" },
      { icon: SiRadixui, label: "shadcn/ui" },
    ],
  },
  {
    title: "State & Forms",
    description: "Zustand for lightweight global state. React Hook Form for complex, multi-step forms — keeping renders minimal and validation logic clean.",
    chips: [
      { icon: null, label: "Zustand" },
      { icon: SiReacthookform, label: "React Hook Form" },
    ],
  },
  {
    title: "Backend & Data",
    description: "Used Supabase as the full backend layer in a live client project — handling auth, database, and file storage without managing a separate server.",
    chips: [
      { icon: SiSupabase, label: "Supabase" },
    ],
  },
  {
    title: "Mobile",
    description: "Built 5+ Flutter apps during internship at FFUF Manila Inc., contributing to a live production codebase with real code review and Agile workflows.",
    chips: [
      { icon: BiLogoFlutter, label: "Flutter" },
      { icon: SiDart, label: "Dart" },
    ],
  },
  {
    title: "Tooling",
    description: "Git and GitHub for version control and collaboration. Vercel for zero-config deployments. Figma for wireframes, prototypes, and design handoffs.",
    chips: [
      { icon: BiLogoGit, label: "Git" },
      { icon: VscGithub, label: "GitHub" },
      { icon: VscGithub, label: "Bitbucket" },
      { icon: SiVercel, label: "Vercel" },
      { icon: FaFigma, label: "Figma" },
    ],
  },
];

const Tools = () => {
  return (
    <SectionContainer sectionName={"Skills"} id={"skills"}>
      <div data-aos="fade-up" className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
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
