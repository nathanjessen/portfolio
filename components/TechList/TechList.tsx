'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { techlist } from '../../constants/techlist';

const categories = {
  frontend: 'Frontend Development',
  styling: 'Styling & Design',
  tools: 'Development Tools',
  testing: 'Testing & Quality',
  build: 'Build Tools',
  performance: 'Performance & Optimization'
};

const proficiencyColor = {
  expert: 'from-primary to-primary/80',
  advanced: 'from-secondary to-secondary/80',
  intermediate: 'from-accent to-accent/80',
};

const categoryOrder = ['frontend', 'styling', 'tools', 'testing', 'build', 'performance'];

export const TechList = () => {
  const groupedTech = techlist.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof techlist>);

  return (
    <div className='space-y-12'>
      {categoryOrder.map((category, categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          className='space-y-6'
        >
          <h3 className='text-2xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
            {categories[category as keyof typeof categories]}
          </h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {groupedTech[category]?.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className='group relative flex flex-col items-center p-4 rounded-xl bg-base-200/50 hover:bg-base-200 transition-colors duration-200'
              >
                <div className='relative'>
                  <Image
                    src={tech.img}
                    alt={`${tech.name} icon`}
                    className='h-12 w-12 transition-transform duration-200 group-hover:scale-110'
                    width={48}
                    height={48}
                  />
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-br ${proficiencyColor[tech.proficiency]}`} />
                </div>
                <p className='mt-3 text-sm font-medium text-center text-base-content/80 group-hover:text-base-content'>
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
