'use client';

import { motion } from 'framer-motion';
import User from '../../constants/User';
import SocialNav from '../SocialNav';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className='relative mt-24 border-t border-base-content/10'
      role='contentinfo'
    >
      <motion.div
        className='relative max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8'>
          <motion.div
            className='space-y-8'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className='space-y-4'>
              <motion.h3
                className='text-xl font-semibold text-base-content'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Let's Connect
              </motion.h3>
              <motion.p
                className='text-base-content/80 max-w-md'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Feel free to reach out for collaborations or just a friendly
                hello! I'm always open to discussing new projects or
                opportunities.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <SocialNav className='justify-start gap-4' />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className='space-y-8'
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className='space-y-4'>
              <motion.h3
                className='text-xl font-semibold text-base-content'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Quick Links
              </motion.h3>
              <motion.nav
                className='flex flex-col space-y-3'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href={User.resumeUrl}
                  download={User.resumeName}
                  className='text-base-content/80 hover:text-primary transition-colors duration-200'
                >
                  Download Resume
                </a>
                <a
                  href={`mailto:${User.email}`}
                  className='text-base-content/80 hover:text-primary transition-colors duration-200'
                >
                  Contact Me
                </a>
                <a
                  href={User.github}
                  target='_blank'
                  rel='noreferrer'
                  className='text-base-content/80 hover:text-primary transition-colors duration-200'
                >
                  View GitHub
                </a>
              </motion.nav>
            </div>
          </motion.div>
        </div>

        <motion.div
          className='mt-16 pt-8'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-base-content/60 text-sm'>
              &copy; {currentYear} {User.name}. All rights reserved.
            </p>
            <p className='text-base-content/60 text-sm'>
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};
