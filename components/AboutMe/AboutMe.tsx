'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import User from '../../constants/User';
import { socialLinks } from '../../constants/socialLinks';
import TechList from '../TechList';

const socialPlatforms = [
  { name: 'Facebook', url: socialLinks.facebook },
  { name: 'Twitter', url: socialLinks.twitter },
  { name: 'GitHub', url: socialLinks.github },
  { name: 'LinkedIn', url: socialLinks.linkedin },
  { name: 'Instagram', url: socialLinks.instagram },
].filter((platform) => platform.url);

export const AboutMe = () => {
  return (
    <section className='relative'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl -z-10' />

      <motion.p
        className='text-2xl md:text-4xl font-bold px-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        I craft modern, performant web experiences with a focus on design
        systems and component-driven development.
      </motion.p>

      <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-20'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h2 className='text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
              Contact
            </h2>
            <p className='text-lg mt-4 text-base-content/80'>
              I&apos;d love to hear from you or answer any questions you may
              have. Reach out using the{' '}
              <Link
                href='/contact'
                className='text-primary hover:text-secondary transition-colors duration-200 font-bold'
              >
                Contact
              </Link>{' '}
              page.
            </p>
          </motion.div>

          <motion.div
            className='mt-12'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h2 className='text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
              Job Opportunities
            </h2>
            <p className='text-lg mt-4 text-base-content/80'>
              I&apos;m actively interviewing for a new role. If I might be a
              good fit,{' '}
              {User.resumeUrl && (
                <>
                  check out my{' '}
                  <a
                    href={User.resumeUrl}
                    download={User.resumeName}
                    target='_blank'
                    rel='noreferrer'
                    className='text-primary hover:text-secondary transition-colors duration-200 font-bold'
                  >
                    Resume
                  </a>{' '}
                  and{' '}
                </>
              )}
              get in contact.
            </p>
          </motion.div>

          <motion.div
            className='mt-12'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h2 className='text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
              Social Links
            </h2>
            <div className='mt-6 space-y-2'>
              {socialPlatforms.map((platform, idx) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                >
                  <motion.a
                    href={platform.url}
                    className='group flex items-center gap-4 py-2 text-base-content/80 hover:text-primary transition-colors duration-200'
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <motion.span
                      className='text-primary'
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      →
                    </motion.span>
                    <span className='text-lg font-medium'>{platform.name}</span>
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className='col-span-1 md:col-span-2'
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className='space-y-6'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.p
              className='text-xl leading-relaxed text-base-content/80'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              With over a decade of frontend development experience, I
              specialize in building scalable design systems and component
              libraries that empower teams to create consistent, accessible web
              applications. My expertise in React, TypeScript, and modern
              frontend tools enables me to deliver high-quality solutions that
              prioritize both user experience and developer efficiency.
            </motion.p>
            <motion.p
              className='text-xl leading-relaxed text-base-content/80'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              I'm passionate about creating intuitive interfaces that work for
              everyone. My approach combines technical excellence with a deep
              commitment to accessibility and performance. I leverage tools like
              Storybook for component documentation and testing, ensuring that
              every piece of UI is thoroughly documented and tested.
            </motion.p>
            <motion.p
              className='text-xl leading-relaxed text-base-content/80'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              Currently, I'm seeking a role where I can drive frontend
              excellence, mentor other developers, and continue to evolve the
              craft of web development. I'm particularly interested in
              opportunities that emphasize modern frontend architecture, design
              systems, and web accessibility standards.
            </motion.p>
          </motion.div>

          <motion.div
            className='mt-12'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.h2
              className='text-3xl font-bold mb-8 inline-block'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                Tech Stack
              </span>
            </motion.h2>
            <TechList />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
