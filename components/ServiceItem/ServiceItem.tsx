'use client';

import { motion } from 'framer-motion';
import { Service } from '../../constants/services';

export interface ServiceItemProps {
  item: Service;
  index?: number;
}

export const ServiceItem = ({
  item: { title, description },
  index = 0,
}: ServiceItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className='group relative h-full p-6 rounded-xl bg-base-200/50 backdrop-blur-sm border border-base-300 
                 hover:bg-base-200 transition-colors duration-300 flex flex-col'
    >
      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-xl opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 -z-10' />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2 }}
        className='flex flex-col flex-grow'
      >
        <motion.p 
          className='text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {title}
        </motion.p>
        
        <motion.p 
          className='mt-4 text-lg text-base-content/80 leading-relaxed flex-grow'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
