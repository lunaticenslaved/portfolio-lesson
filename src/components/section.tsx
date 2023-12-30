import { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

export function Section({ children }: PropsWithChildren) {
  return <motion.section>{children}</motion.section>;
}
