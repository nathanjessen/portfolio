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
        <motion.h2
          className='text-2xl md:text-3xl font-semibold mb-12 text-base-content/90 text-center md:text-left leading-relaxed'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          I craft modern, performant web experiences with a focus on design
          systems and component-driven development.
        </motion.h2>

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
              className='space-y-4'
            >
              <h3 className='text-lg font-medium text-primary/90'>Contact</h3>
              <p className='text-base text-base-content/80 leading-relaxed'>
                I&apos;d love to hear from you or answer any questions you may
                have. Reach out using the{' '}
                <Link
                  href='/contact'
                  className='text-primary hover:text-secondary transition-colors duration-200 font-medium'
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
              className='space-y-4'
            >
              <h3 className='text-lg font-medium text-primary/90'>
                Job Opportunities
              </h3>
              <p className='text-base text-base-content/80 leading-relaxed'>
                I&apos;m actively interviewing for a new role. If I might be a
                good fit,{' '}
                {User.resumeUrl && (
                  <>
                    check out my{' '}
                    <a
                      href={User.resumeUrl}
                      download={User.resumeName}
                      className='text-primary hover:text-secondary transition-colors duration-200 font-medium'
                    >
                      resume
                    </a>{' '}
                    or{' '}
                  </>
                )}
                <Link
                  href='/contact'
                  className='text-primary hover:text-secondary transition-colors duration-200 font-medium'
                >
                  get in touch
                </Link>
                .
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className='space-y-4'
            >
              <h3 className='text-lg font-medium text-primary/90'>Connect</h3>
              <div className='flex flex-wrap gap-3'>
                {socialPlatforms.map(({ name, url }) => (
                  <a
                    key={name}
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary/90 hover:bg-primary/20 transition-colors duration-200'
                  >
                    {name}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Main Content */}
          <motion.div
            className='md:col-span-2 space-y-12'
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

            {/* Technologies */}
            <motion.div
              className='space-y-6'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h3 className='text-lg font-medium text-primary/90'>
                Technologies & Tools
              </h3>
              <TechList />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
