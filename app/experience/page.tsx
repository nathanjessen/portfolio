'use client';

import { motion } from 'framer-motion';
import { Container } from '../../components/Layouts/Container';
import PageHeading from '../../components/PageHeading';
import Experience from '../../components/Experience';

const ExperiencePage = () => {
  return (
    <>
      <PageHeading>Experience</PageHeading>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Experience />
        </motion.div>
      </Container>
    </>
  );
};

export default ExperiencePage;
