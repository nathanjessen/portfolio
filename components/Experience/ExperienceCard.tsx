'use client';

import { motion } from 'framer-motion';

export interface ExperienceCardProps {
  title: string;
  desc?: string;
  year?: string;
  company?: string;
  companyLink?: string;
}

export const ExperienceCard = ({
  title,
  desc,
  year,
  company,
  companyLink,
}: ExperienceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className='relative experience-card border p-6 rounded-xl shadow-lg bg-base-200/80 backdrop-blur-sm z-10 
                 transition-colors duration-300 hover:bg-base-200'
    >
      <h3 className='font-semibold text-xl text-base-content'>{title}</h3>
      {year && (
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className='absolute -top-10 md:-left-10 text-4xl font-bold'
        >
          <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
            {year}
          </span>
        </motion.p>
      )}
      {company && companyLink && (
        <a
          href={companyLink}
          target='_blank'
          rel='noreferrer'
          className='inline-block mt-2 text-base-content/80 hover:text-primary transition-colors duration-200'
        >
          {company}
        </a>
      )}
      {company && !companyLink && (
        <span className='inline-block mt-2 text-base-content/80'>
          {company}
        </span>
      )}
      {desc && (
        <p className='mt-4 text-base-content/80 leading-relaxed'>{desc}</p>
      )}
    </motion.div>
  );
};
