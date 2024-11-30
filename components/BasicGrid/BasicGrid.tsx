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
      <div className='flex flex-col md:flex-row md:items-end justify-between gap-6'>
        <div>
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
              className='text-3xl md:text-4xl font-bold mt-2 gradient-text'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {'tech' in (items[0] || {}) && (
          <div className='flex flex-wrap gap-2'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                filter === 'all'
                  ? 'bg-primary text-primary-content'
                  : 'bg-base-300 text-base-content hover:bg-primary/10'
              }`}
              onClick={() => setFilter('all')}
            >
              All
            </motion.button>
            {technologies.map((tech) => (
              <motion.button
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === tech
                    ? 'bg-primary text-primary-content'
                    : 'bg-base-300 text-base-content hover:bg-primary/10'
                }`}
                onClick={() => setFilter(tech)}
              >
                {tech}
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {divider && (
        <div className='h-px bg-gradient-to-r from-transparent via-base-content/10 to-transparent my-8'></div>
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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                {children[idx]}
              </motion.div>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='text-lg font-medium text-base-content/60 col-span-full text-center py-12'
            >
              No items were found.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};
