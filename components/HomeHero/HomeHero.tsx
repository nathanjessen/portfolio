'use client';

import { motion } from 'framer-motion';
import User from '../../constants/User';

export const HomeHero = () => {
  return (
    <div className='relative min-h-[90vh] flex items-center'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-gradient-xy'></div>
      
      {/* Content container */}
      <div className='container-custom relative flex flex-col md:flex-row items-center justify-between gap-12 py-20'>
        {/* Text content */}
        <motion.div 
          className='flex-1 space-y-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className='text-xl md:text-2xl font-medium text-primary'>
              {User.name}
            </h2>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4'>
              <span className='gradient-text'>Software Engineer</span>
              <br />
              <span className='text-base-content'>Based in {User.location}</span>
            </h1>
          </motion.div>

          <motion.ul
            className='space-y-3 text-lg md:text-xl text-base-content/80'
            aria-label='Areas of expertise'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.li 
              className='flex items-center space-x-2'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className='h-1.5 w-1.5 rounded-full bg-primary'></span>
              <span>React + TypeScript Applications</span>
            </motion.li>
            <motion.li 
              className='flex items-center space-x-2'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className='h-1.5 w-1.5 rounded-full bg-secondary'></span>
              <span>Storybook Component Libraries</span>
            </motion.li>
            <motion.li 
              className='flex items-center space-x-2'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <span className='h-1.5 w-1.5 rounded-full bg-accent'></span>
              <span>WCAG Accessibility Compliance</span>
            </motion.li>
          </motion.ul>

          <motion.div 
            className='flex items-center gap-12 pt-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className='flex items-start gap-3'>
              <span className='text-4xl md:text-5xl font-bold text-primary'>10+</span>
              <span className='text-sm md:text-base text-base-content/80 leading-tight'>
                Years of<br />Experience
              </span>
            </div>
            <a
              href={User.resumeUrl}
              download={User.resumeName}
              className='btn btn-primary hover:scale-105 transition-transform duration-200 gap-2'
              aria-label='Download my resume'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                />
              </svg>
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Visual element */}
        <motion.div 
          className='flex-1 flex justify-center items-center'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className='relative h-48 w-28 md:h-96 md:w-60'>
            <motion.div 
              className='absolute inset-0 -translate-x-10 md:-translate-x-24 bg-accent rounded-lg -rotate-12 hover:scale-105 transition-transform duration-300'
              initial={{ rotate: 0 }}
              animate={{ rotate: -12 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            ></motion.div>
            <motion.div 
              className='absolute inset-0 bg-secondary rounded-lg hover:scale-105 transition-transform duration-300'
              initial={{ rotate: 0 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            ></motion.div>
            <motion.div 
              className='absolute inset-0 translate-x-10 md:translate-x-24 bg-primary rounded-lg rotate-12 hover:scale-105 transition-transform duration-300'
              initial={{ rotate: 0 }}
              animate={{ rotate: 12 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
