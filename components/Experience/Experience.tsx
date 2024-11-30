'use client';

import { motion } from 'framer-motion';
import { experience } from '../../constants/experience';
import { ExperienceCard } from './ExperienceCard';

export const Experience = () => {
  return (
    <section className='py-8'>
      <div className='container-custom'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-12 text-center'
        >
          <motion.h2
            className='text-lg font-medium text-primary/90 mb-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Career Path
          </motion.h2>
          <motion.h3
            className='text-2xl md:text-3xl font-semibold text-base-content/90 leading-relaxed'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A decade of experience in frontend development and design systems
          </motion.h3>
        </motion.div>

        <div className='max-w-3xl mx-auto relative'>
          {/* Background gradient */}
          <div className='absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent rounded-lg -z-10' />

          <div className='relative'>
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className='relative'
              >
                <ExperienceCard
                  title={exp.title}
                  desc={exp.desc}
                  year={exp.year}
                  company={exp.company}
                  companyLink={exp.companyLink}
                />
                {idx !== experience.length - 1 && (
                  <div className='divider-container flex flex-col items-center -mt-2'>
                    <div className='relative'>
                      <div className='w-2.5 h-2.5 bg-base-100 border-2 border-primary/40 rounded-full relative z-10' />
                      <div className='absolute inset-0 bg-primary/20 rounded-full blur-sm' />
                    </div>
                    <div className='w-[1px] h-12 bg-gradient-to-b from-primary/30 to-transparent' />
                  </div>
                )}
              </motion.div>
            ))}
            {/* Timeline line */}
            <div className='absolute left-1/2 top-0 bottom-0 w-[1px] bg-base-content/10 -translate-x-1/2 -z-[1]' />
          </div>
        </div>
      </div>
    </section>
  );
};
