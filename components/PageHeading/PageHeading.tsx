'use client';

import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { Container } from '../Layouts/Container';

export const PageHeading = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <div className='py-12'>
        <motion.div
          className='text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className='text-lg font-medium text-primary/90 mb-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Overview
          </motion.h2>
          <motion.h1
            className='text-3xl md:text-4xl font-bold tracking-tight'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {children}
          </motion.h1>
        </motion.div>
      </div>
    </Container>
  );
};
