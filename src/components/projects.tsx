'use client';

import { useListenSectionInView } from '@/context/active-section';
import { projectsData } from '@/shared/data';

import { Project } from './project';
import { SectionHeading } from './section-heading';

export function Projects() {
  const ref = useListenSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>

      <div>
        {projectsData.map(project => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
