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
      className='group relative experience-card p-6 rounded-xl bg-base-200 card-hover z-10'
    >
      {year && (
        <div className='absolute -left-4 top-6'>
          <div className='relative inline-flex items-center rounded-full bg-base-100 px-3 py-1 border'>
            <span className='text-sm font-semibold text-base-content'>
              {year}
            </span>
          </div>
        </div>
      )}
      <div className='ml-8 space-y-4'>
        <div>
          <h3 className='text-lg font-medium text-base-content group-hover:text-primary transition-colors duration-300'>
            {title}
          </h3>
          {company && companyLink && (
            <a
              href={companyLink}
              target='_blank'
              rel='noreferrer'
              className='inline-block mt-1 text-sm text-base-content/60 hover:text-primary transition-colors duration-200'
            >
              {company}
            </a>
          )}
          {company && !companyLink && (
            <span className='inline-block mt-1 text-sm text-base-content/60'>
              {company}
            </span>
          )}
        </div>
        {desc && (
          <p className='text-base text-base-content/80 leading-relaxed'>
            {desc}
          </p>
        )}
      </div>
    </motion.div>
  );
};
