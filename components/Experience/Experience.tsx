'use client';

import { motion } from 'framer-motion';
import { experience } from '../../constants/experience';
import { ExperienceCard } from './ExperienceCard';

export const Experience = () => {
  return (
    <section className='mt-12 max-w-xl mx-auto relative'>
      {/* Background gradient effect */}
      <div className='absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent rounded-lg -z-10' />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <ExperienceCard
              title={exp.title}
              desc={exp.desc}
              year={exp.year}
              company={exp.company}
              companyLink={exp.companyLink}
            />
            {idx === experience.length - 1 ? null : (
              <div className='divider-container flex flex-col items-center -mt-2'>
                <div className='w-4 h-4 bg-primary rounded-full relative z-10'>
                  <div className='w-4 h-4 bg-primary rounded-full relative z-10 animate-ping' />
                </div>
                <motion.div
                  className='w-1 h-24 bg-base-300 rounded-full -mt-2'
                  initial={{ height: 0 }}
                  whileInView={{ height: 96 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 + 0.3, duration: 0.5 }}
                />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
