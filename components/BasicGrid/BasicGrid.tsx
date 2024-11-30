'use client';

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../Layouts/Container';
import { Project } from '../../constants/projects';

export interface BasicGridProps<Item> {
  title: string;
  subtitle?: string;
  divider?: boolean;
  items: Item[];
  children: ReactNode[];
}

export const BasicGrid = <Item extends unknown>({
  title,
  subtitle,
  divider = true,
  items,
  children,
}: BasicGridProps<Item>) => {
  const [filter, setFilter] = useState<string>('all');
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);

  // Get unique technologies from all projects
  const technologies = items.reduce((acc: string[], item) => {
    if ('tech' in item) {
      const projectItem = item as unknown as Project;
      projectItem.tech.forEach((tech) => {
        if (!acc.includes(tech)) {
          acc.push(tech);
        }
      });
    }
    return acc;
  }, []);

  // Filter items based on selected technology
  const filteredItems = items.filter((item) => {
    if (filter === 'all') return true;
    if ('tech' in item) {
      const projectItem = item as unknown as Project;
      return projectItem.tech.includes(filter);
    }
    return true;
  });

  return (
    <Container>
      <div className='flex flex-col md:flex-row md:items-end justify-between gap-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='space-y-4'
        >
          <motion.div className='space-y-2'>
            <motion.h2
              className='text-xl md:text-2xl font-medium text-primary'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p
                className='text-3xl md:text-4xl font-bold gradient-text'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>

          {divider && (
            <motion.div
              className='h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent'
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 80, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
          )}
        </motion.div>

        {'tech' in (items[0] || {}) && (
          <motion.div
            className='flex flex-wrap gap-2'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredFilter('all')}
              onHoverEnd={() => setHoveredFilter(null)}
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-primary text-primary-content shadow-lg shadow-primary/25'
                  : 'bg-base-200 text-base-content hover:bg-primary/10'
              }`}
              onClick={() => setFilter('all')}
            >
              <span className='relative z-10'>All</span>
              {hoveredFilter === 'all' && (
                <motion.div
                  layoutId='filter-hover'
                  className='absolute inset-0 bg-primary/10 rounded-full'
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
            {technologies.map((tech) => (
              <motion.button
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredFilter(tech)}
                onHoverEnd={() => setHoveredFilter(null)}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === tech
                    ? 'bg-primary text-primary-content shadow-lg shadow-primary/25'
                    : 'bg-base-200 text-base-content hover:bg-primary/10'
                }`}
                onClick={() => setFilter(tech)}
              >
                <span className='relative z-10'>{tech}</span>
                {hoveredFilter === tech && (
                  <motion.div
                    layoutId='filter-hover'
                    className='absolute inset-0 bg-primary/10 rounded-full'
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>

      {divider && (
        <motion.div
          className='h-px bg-gradient-to-r from-transparent via-base-content/10 to-transparent my-12'
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
      )}

      <motion.div
        layout
        className='mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      >
        <AnimatePresence mode='popLayout'>
          {filteredItems?.length > 0 ? (
            filteredItems.map((_, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{
                  duration: 0.3,
                  delay: idx * 0.1,
                  layout: { duration: 0.3 },
                }}
              >
                {children[idx]}
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className='col-span-full flex flex-col items-center justify-center py-16 space-y-4'
            >
              <svg
                className='w-16 h-16 text-base-content/20'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 20a8 8 0 100-16 8 8 0 000 16z'
                />
              </svg>
              <p className='text-lg font-medium text-base-content/60 text-center'>
                No items were found matching this filter.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='btn btn-sm btn-primary mt-4'
                onClick={() => setFilter('all')}
              >
                Show All Items
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};
