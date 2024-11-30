'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { techlist } from '../../constants/techlist';

const categories = {
  frontend: 'Frontend Development',
  styling: 'Styling & Design',
  tools: 'Development Tools',
  testing: 'Testing & Quality',
  build: 'Build Tools',
  performance: 'Performance',
};

const TechList = () => {
  const groupedTech = techlist.reduce(
    (acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = [];
      }
      acc[tech.category].push(tech);
      return acc;
    },
    {} as Record<string, typeof techlist>
  );

  return (
    <div className='space-y-8'>
      {Object.entries(groupedTech).map(([category, techs], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: categoryIndex * 0.1 }}
          className='space-y-4'
        >
          <h3 className='text-xl font-semibold text-base-content/90'>
            {categories[category as keyof typeof categories]}
          </h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {techs.map((tech, techIndex) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: categoryIndex * 0.1 + techIndex * 0.05,
                  type: 'spring',
                  stiffness: 100,
                }}
                className='flex flex-col items-center gap-2 p-4 rounded-xl bg-base-200/50 hover:bg-base-200 transition-colors duration-200'
              >
                <div className='relative w-12 h-12'>
                  <Image
                    src={tech.img}
                    alt={tech.name}
                    fill
                    className='object-contain'
                  />
                </div>
                <span className='text-sm font-medium text-center'>
                  {tech.name}
                </span>
                <span className='text-xs text-base-content/60 capitalize'>
                  {tech.proficiency}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechList;
