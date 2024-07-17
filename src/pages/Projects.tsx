import { SectionTitle, SectionWrapper } from "@components/Section";
import { Project } from "@components/Project";
import { ProjectType } from "@types";

const projects: ProjectType[] = [
  {
    name: "ERC720",
    description: "",
    tech: ['react', 'solidity']
  },
];

export const Projects = () => {
  return (
    <SectionWrapper id="projects" className="bg-earth-2" withOverlay={false}>
      <SectionTitle className="text-black">Projects</SectionTitle>
      <div className="mt-24 flex flex-col gap-8 px-2 md:mt-40 md:gap-20 md:px-8">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};
