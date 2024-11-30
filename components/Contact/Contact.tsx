'use client';

import { FormEvent } from 'react';
import ContactForm from '../ContactForm';

export const Contact = () => {
  const onContactFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Optional: Add any client-side form validation or tracking here
    console.log('Form submitted');
  };

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='space-y-14'>
        <header className=''>
          <h2 className='font-semibold text-2xl'>
            Get in touch, let&apos;s talk.
          </h2>
          <p className='mt-2'>
            Fill in the details and I&apos;ll get back to you as soon as I can.
          </p>
        </header>

        <div className='inline-flex flex-col gap-6'>
          <div className='flex flex-row items-center space-x-4'>
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
            <a href='mailto:nathan.jessen@gmail.com'>nathan.jessen@gmail.com</a>
          </div>

          <div className='flex flex-row items-center space-x-4'>
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
            <a
              href='https://github.com/nathanjessen'
              target='_blank'
              rel='noopener noreferrer'
            >
              github.com/nathanjessen
            </a>
          </div>

          <div className='flex flex-row items-center space-x-4'>
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
            <a
              href='https://www.linkedin.com/in/njessen'
              target='_blank'
              rel='noopener noreferrer'
            >
              linkedin.com/in/njessen
            </a>
          </div>
        </div>
      </div>

      <div>
        <ContactForm onSubmit={onContactFormSubmit} />
      </div>
    </section>
  );
};
