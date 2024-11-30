'use client';

import { FormEvent } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../ContactForm';

const contactInfo = [
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='feather feather-mail'
      >
        <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
        <polyline points='22,6 12,13 2,6'></polyline>
      </svg>
    ),
    href: 'mailto:nathan.jessen@gmail.com',
    text: 'nathan.jessen@gmail.com',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='feather feather-github'
      >
        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
      </svg>
    ),
    href: 'https://github.com/nathanjessen',
    text: 'github.com/nathanjessen',
    external: true,
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='feather feather-linkedin'
      >
        <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
        <rect x='2' y='9' width='4' height='12'></rect>
        <circle cx='4' cy='4' r='2'></circle>
      </svg>
    ),
    href: 'https://www.linkedin.com/in/njessen',
    text: 'linkedin.com/in/njessen',
    external: true,
  },
];

export const Contact = () => {
  const onContactFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Optional: Add any client-side form validation or tracking here
    console.log('Form submitted');
  };

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='space-y-14'
      >
        <header>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='text-2xl font-medium text-base-content'
          >
            Get in touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='mt-4 text-base text-base-content/80 leading-relaxed'
          >
            Fill in the details and I&apos;ll get back to you as soon as I can.
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className='inline-flex flex-col gap-6'
        >
          {contactInfo.map((info, idx) => (
            <motion.div
              key={info.href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1 }}
            >
              <motion.a
                href={info.href}
                target={info.external ? '_blank' : undefined}
                rel={info.external ? 'noopener noreferrer' : undefined}
                className='flex items-center gap-4 text-sm text-base-content/60 hover:text-primary transition-colors duration-200'
                whileHover={{ x: 4 }}
              >
                <span className='text-primary'>{info.icon}</span>
                {info.text}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className='relative'
      >
        <div className='absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg -z-10 blur-xl' />
        <ContactForm onSubmit={onContactFormSubmit} />
      </motion.div>
    </section>
  );
};
