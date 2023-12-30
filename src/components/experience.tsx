'use client';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { SectionHeading } from '@/components/section-heading';
import { useListenSectionInView } from '@/context/active-section';
import { experiencesData } from '@/shared/data';

export function Experience() {
  const { ref, inView } = useListenSectionInView('Experience');

  return (
    <section id="experience" ref={ref} className="max-w-[53rem] scroll-mt-28 text-center sm:mb-40 ">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map(({ title, description, location, date, icon }, index) => (
          <VerticalTimelineElement
            key={index}
            visible={inView}
            contentStyle={{
              background: '#f3f4f6',
              boxShadow: 'none',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              textAlign: 'left',
              padding: '1.3rem 2rem',
            }}
            contentArrowStyle={{
              borderRight: '0.4rem solid #9ca3af',
            }}
            date={date}
            dateClassName="mx-3"
            icon={icon}
            iconStyle={{
              background: 'white',
              fontSize: '1.5rem',
            }}>
            <h3 className="font-semibold capitalize">{title}</h3>
            <p className="font-normal !mt-0">{location}</p>
            <p className="!mt-1 !font-normal text-gray-700">{description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
