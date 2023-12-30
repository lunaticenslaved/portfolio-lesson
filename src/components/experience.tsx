'use client';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { SectionHeading } from '@/components/section-heading';
import { useListenSectionInView } from '@/context/active-section';
import { useThemeContext } from '@/context/theme';
import { experiencesData } from '@/shared/data';

export function Experience() {
  const { ref, inView } = useListenSectionInView('Experience');
  const { isLight } = useThemeContext();

  return (
    <section
      id="experience"
      ref={ref}
      className="max-w-[53rem] scroll-mt-28 text-center sm:mb-40 mb-28">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map(({ title, description, location, date, icon }, index) => (
          <VerticalTimelineElement
            key={index}
            visible={inView}
            contentStyle={{
              background: isLight ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
              boxShadow: 'none',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              textAlign: 'left',
              padding: '1.3rem 2rem',
            }}
            contentArrowStyle={{
              borderRight: isLight
                ? '0.4rem solid #9ca3af'
                : '0.4rem solid rgba(255, 255, 255, 0.5)',
            }}
            date={date}
            icon={icon}
            iconStyle={{
              background: isLight ? 'white' : 'rgba(255, 255, 255, 0.15)',
              fontSize: '1.5rem',
            }}>
            <h3 className="font-semibold capitalize">{title}</h3>
            <p className="font-normal !mt-0">{location}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
