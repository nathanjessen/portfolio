'use client';

import { motion } from 'framer-motion';
import { experience } from '../../constants/experience';
import { ExperienceCard } from './ExperienceCard';

export const Experience = () => {
  return (
    <section className='py-8'>
      <div className='container-custom'>
        <div className='max-w-2xl mx-auto relative'>
          {/* Background effects */}
          <div className='absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent rounded-lg -z-10' />

          <div className='relative'>
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className='relative'
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
                    <div className='relative'>
                      <div className='w-3 h-3 bg-base-100 border-2 border-primary rounded-full relative z-10' />
                      <div className='absolute inset-0 bg-primary/20 rounded-full blur-sm' />
                    </div>
                    <div className='w-[2px] h-16 bg-gradient-to-b from-primary/40 to-transparent' />
                  </div>
                )}
              </motion.div>
            ))}
            {/* Timeline line */}
            <div className='absolute left-1/2 top-0 bottom-0 w-[1px] bg-base-300/20 -translate-x-1/2 -z-[1]' />
          </div>
        </div>
      </div>
    </section>
  );
};
