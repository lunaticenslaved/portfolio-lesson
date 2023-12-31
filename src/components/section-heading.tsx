import { PropsWithChildren } from 'react';

export function SectionHeading({ children }: PropsWithChildren) {
  return <h2 className="text-3xl font-medium capitalize text-center mb-8">{children}</h2>;
}
