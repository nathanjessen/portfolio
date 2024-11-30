'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '../../constants/projects';

export interface ProjectCardProps {
  item: Project;
}

const css = { width: '100%', height: 'auto' };

export const ProjectCard = ({ item }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='group relative overflow-hidden rounded-xl bg-base-200 card-hover h-full flex flex-col'
    >
      {item.img && (
        <div className='relative aspect-video overflow-hidden bg-base-300'>
          <Image
            src={item.img}
            alt={`Screenshot of ${item.title} project`}
            sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
            height={240}
            width={400}
            style={css}
            className='object-cover transition-all duration-500 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-base-200/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
        </div>
      )}

      <div className='flex flex-col gap-4 p-6 flex-grow'>
        <div>
          <h3 className='text-xl font-semibold text-base-content group-hover:text-primary transition-colors duration-300'>
            {item.title}
          </h3>
          {item.client && (
            <p className='text-base-content/60 text-sm mt-1'>
              Client: {item.client}
            </p>
          )}
        </div>

        <p className='text-base-content/80 line-clamp-2'>{item.desc}</p>

        <div className='flex gap-2 flex-wrap mt-auto'>
          {item.tech.map((tech, idx) => (
            <span
              key={idx}
              className='inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary transition-colors duration-300'
              title={`Built with ${tech}`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className='flex gap-2 pt-4 mt-auto border-t border-base-content/10'>
          {item.source && (
            <a
              href={item.source}
              target='_blank'
              rel='noreferrer'
              className='flex-1'
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='btn btn-sm btn-primary btn-outline w-full gap-2'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .26.18.57.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z'
                  />
                </svg>
                Source
              </motion.button>
            </a>
          )}
          {item.url && (
            <a
              href={item.url}
              target='_blank'
              rel='noreferrer'
              className='flex-1'
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='btn btn-sm btn-primary w-full gap-2'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
                Live Demo
              </motion.button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
