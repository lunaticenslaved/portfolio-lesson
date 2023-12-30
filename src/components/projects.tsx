import { projectsData } from '@/shared/data';

import { Project } from './project';
import { SectionHeading } from './section-heading';

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>

      <div>
        {projectsData.map(project => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
