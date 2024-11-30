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
            className='font-bold text-xl text-base-content group-hover:text-primary transition-colors duration-300'
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
                <span className='w-2 h-2 rounded-full bg-primary'></span>
                <span>{language}</span>
              </span>
            )}

            {stargazers_count > 0 && (
              <span className='flex items-center space-x-1 text-sm'>
                <svg
                  className='w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <span>{stargazers_count}</span>
              </span>
            )}

            {forks_count > 0 && (
              <span className='flex items-center space-x-1 text-sm'>
                <svg
                  className='w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M8.75 19.25a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM12 2.75a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5zM8.75 4.75a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5z'></path>
                </svg>
                <span>{forks_count}</span>
              </span>
            )}
          </motion.div>
        </div>

        <motion.p
          className='text-base-content/80'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          {description}
        </motion.p>

        <motion.a
          href={clone_url}
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary-focus transition-colors duration-300'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          whileHover={{ x: 10 }}
        >
          <span>View Repository</span>
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 7l5 5m0 0l-5 5m5-5H6'
            />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};
