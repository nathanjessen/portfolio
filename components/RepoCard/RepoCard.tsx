'use client';

import { motion } from 'framer-motion';
import { Repository } from '../../constants/repo';

export interface RepoCardProps {
  item?: Repository;
  index: number;
}

export const RepoCard = ({
  item: {
    name,
    description,
    clone_url,
    language,
    stargazers_count,
    forks_count,
  },
  index,
}: RepoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='group relative p-6 bg-base-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300'
    >
      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      <div className='relative space-y-4'>
        <div className='flex items-start justify-between'>
          <motion.h4
            className='font-semibold text-lg text-base-content group-hover:text-primary transition-colors duration-300'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            {name}
          </motion.h4>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className='flex items-center space-x-3 text-base-content/60'
          >
            {language && (
              <span className='flex items-center space-x-1 text-sm'>
                <span className='relative flex h-2 w-2'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-2 w-2 bg-primary'></span>
                </span>
                <span>{language}</span>
              </span>
            )}
          </motion.div>
        </div>

        <motion.p
          className='text-base text-base-content/80 leading-relaxed line-clamp-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          {description}
        </motion.p>

        <motion.div
          className='flex items-center space-x-4 text-sm text-base-content/60'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          <a
            href={clone_url}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center space-x-1 hover:text-primary transition-colors duration-300'
          >
            <svg
              className='h-4 w-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
            <span>View Repository</span>
          </a>

          <div className='flex items-center space-x-2'>
            <span className='flex items-center space-x-1'>
              <svg
                className='h-4 w-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                />
              </svg>
              <span>{stargazers_count}</span>
            </span>
            <span className='flex items-center space-x-1'>
              <svg
                className='h-4 w-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
                />
              </svg>
              <span>{forks_count}</span>
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
