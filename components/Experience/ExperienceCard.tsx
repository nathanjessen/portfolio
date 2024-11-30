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
      className='group relative experience-card border p-6 rounded-xl bg-base-200/60 backdrop-blur-sm z-10 
                 transition-all duration-300 hover:bg-base-200/90 hover:shadow-lg'
    >
      {year && (
        <div className='absolute -left-4 top-6 bg-base-100 px-3 py-1 rounded-full border'>
          <span className='text-sm font-semibold text-base-content'>
            {year}
          </span>
        </div>
      )}
      <div className='ml-8'>
        <h3 className='font-semibold text-xl text-base-content'>{title}</h3>
        {company && companyLink && (
          <a
            href={companyLink}
            target='_blank'
            rel='noreferrer'
            className='inline-block mt-2 text-base-content/75 hover:text-primary transition-colors duration-200'
          >
            {company}
          </a>
        )}
        {company && !companyLink && (
          <span className='inline-block mt-2 text-base-content/75'>
            {company}
          </span>
        )}
        {desc && (
          <p className='mt-4 text-base-content/70 leading-relaxed'>{desc}</p>
        )}
      </div>
    </motion.div>
  );
};
