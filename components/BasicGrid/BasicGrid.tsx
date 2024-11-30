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
  render: (item: Item, index: number) => ReactNode;
  showFilters?: boolean;
}

export const BasicGrid = <Item extends unknown>({
  title,
  subtitle,
  divider = true,
  items,
  render,
  showFilters = false,
}: BasicGridProps<Item>) => {
  const [filter, setFilter] = useState<string>('all');
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);

  // Get unique technologies from all projects and limit to most common ones
  const technologies = showFilters
    ? items.reduce((acc: string[], item) => {
        if ('tech' in item) {
          const projectItem = item as unknown as Project;
          projectItem.tech.forEach((tech) => {
            if (!acc.includes(tech)) {
              acc.push(tech);
            }
          });
        }
        return acc;
      }, [])
    : [];

  // Priority list of technologies to show as filters
  const priorityTech = [
    'HTML',
    'CSS',
    'React',
    'Vue',
    'Jekyll',
    'AngularJS',
    'JavaScript',
    'Sass',
    'AEM',
  ];

  // Filter and sort technologies based on priority
  const filteredTech = technologies
    .filter((tech) => priorityTech.includes(tech))
    .sort((a, b) => priorityTech.indexOf(a) - priorityTech.indexOf(b));

  // Filter items based on selected technology
  const filteredItems = showFilters
    ? items.filter((item) => {
        if (filter === 'all') return true;
        if ('tech' in item) {
          const projectItem = item as unknown as Project;
          return projectItem.tech.includes(filter);
        }
        return true;
      })
    : items;

  return (
    <Container>
      <div className='flex flex-col md:flex-row md:items-end justify-between gap-8'>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <h2 className='text-xl md:text-2xl font-medium text-primary'>
              {title}
            </h2>
            {subtitle && (
              <p className='text-3xl md:text-4xl font-bold gradient-text'>
                {subtitle}
              </p>
            )}
          </div>

          {divider && (
            <div className='h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent' />
          )}
        </div>

        {showFilters && filteredTech.length > 0 && (
          <div className='flex flex-wrap gap-2'>
            <button
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === 'all'
                  ? 'bg-primary text-primary-content shadow-lg shadow-primary/25'
                  : 'bg-base-200 text-base-content hover:bg-primary/10'
              }`}
              onClick={() => setFilter('all')}
            >
              <span className='relative z-10'>All</span>
            </button>
            {filteredTech.map((tech) => (
              <button
                key={tech}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                  filter === tech
                    ? 'bg-primary text-primary-content shadow-lg shadow-primary/25'
                    : 'bg-base-200 text-base-content hover:bg-primary/10'
                }`}
                onClick={() => setFilter(tech)}
              >
                <span className='relative z-10'>{tech}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {divider && (
        <div className='h-px bg-gradient-to-r from-transparent via-base-content/10 to-transparent my-12' />
      )}

      <div className='mt-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredItems?.map((item, idx) => (
            <motion.div
              key={idx}
              className='h-full'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              {render(item, idx)}
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};
