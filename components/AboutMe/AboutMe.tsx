'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import User from '../../constants/User';
import { socialLinks } from '../../constants/socialLinks';
import TechList from '../TechList/TechList';

const socialPlatforms = [
  { name: 'Facebook', url: socialLinks.facebook },
  { name: 'Twitter', url: socialLinks.twitter },
  { name: 'GitHub', url: socialLinks.github },
  { name: 'LinkedIn', url: socialLinks.linkedin },
  { name: 'Instagram', url: socialLinks.instagram },
].filter((platform) => platform.url);

export const AboutMe = () => {
  return (
    <section className='py-8'>
      <div className='container-custom'>
        <motion.h1
          className='text-2xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center md:text-left'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          I craft modern, performant web experiences with a focus on design
          systems and component-driven development.
        </motion.h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16'>
          {/* Left Column - Profile and Contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='space-y-8'
          >
            {/* Profile Image */}
            <motion.div
              className='relative w-48 h-48 mx-auto md:mx-0'
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Image
                src='/images/profile.svg'
                alt='Profile'
                width={192}
                height={192}
                className='relative rounded-full object-cover border-4 border-base-100 shadow-xl'
                priority
              />
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className='space-y-6'
            >
              <h2 className='text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                Contact
              </h2>
              <p className='text-lg text-base-content/80'>
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

            {/* Job Opportunities Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className='space-y-6'
            >
              <h2 className='text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                Job Opportunities
              </h2>
              <p className='text-lg text-base-content/80'>
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

            {/* Social Links Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className='space-y-6'
            >
              <h2 className='text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                Social Links
              </h2>
              <div className='space-y-2'>
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
                      <span className='text-lg font-medium'>
                        {platform.name}
                      </span>
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div
            className='md:col-span-2 space-y-8'
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* Bio Section */}
            <motion.div
              className='space-y-8'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.p
                className='text-lg leading-relaxed text-base-content/80'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                With over a decade of frontend development experience, I
                specialize in building scalable design systems and component
                libraries that empower teams to create consistent, accessible
                web applications. My expertise in React, TypeScript, and modern
                frontend tools enables me to deliver high-quality solutions that
                prioritize both user experience and developer efficiency.
              </motion.p>
              <motion.p
                className='text-lg leading-relaxed text-base-content/80'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                I&apos;m passionate about creating intuitive user interfaces and
                believe in the power of well-structured code to drive business
                success. My approach combines technical expertise with a deep
                understanding of user needs, ensuring that every project
                delivers both functional excellence and an exceptional user
                experience.
              </motion.p>
              <motion.p
                className='text-lg leading-relaxed text-base-content/80'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Currently, I&apos;m seeking a role where I can drive frontend
                excellence, mentor other developers, and continue to evolve the
                craft of web development. I&apos;m particularly interested in
                opportunities that emphasize modern frontend architecture,
                design systems, and web accessibility standards.
              </motion.p>
            </motion.div>

            {/* Tech Stack Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <motion.h2
                className='text-3xl font-bold mb-8'
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
      </div>
    </section>
  );
};

export default AboutMe;
