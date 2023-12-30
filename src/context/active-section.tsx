'use client';

import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { links } from '@/shared/data';

interface IActiveSection {
  activeSection: Section;
  setActiveSection(value: Section): void;
  timeOfLastClick: number;
  setTimeOfLastClick(value: number): void;
}

const Context = createContext<IActiveSection | null>(null);

type Section = (typeof links)[number]['name'];

export function ActiveSectionContextProvider({ children }: PropsWithChildren) {
  const [activeSection, setActiveSection] = useState<Section>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  const value: IActiveSection = useMemo(
    () => ({
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick,
    }),
    [activeSection, timeOfLastClick],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useActiveSectionContext() {
  const context = useContext(Context);

  if (!context) {
    throw new Error('Active section context not found');
  }

  return context;
}

export function useListenSectionInView(section: Section, threshold: number) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({ threshold });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section);
    }
  }, [inView, section, setActiveSection, timeOfLastClick]);

  return ref;
}
