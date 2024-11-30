'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Testimonial } from '../../constants/testimonials';

export interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className='relative py-12 md:py-16 lg:py-20 overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10' />

      <motion.div
        className='relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.blockquote
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className='relative'
        >
          {/* Quote marks */}
          <div className='absolute top-0 left-0 transform -translate-x-6 -translate-y-8 text-6xl text-primary/25'>
            "
          </div>
          <div className='absolute bottom-0 right-0 transform translate-x-6 translate-y-8 text-6xl text-primary/25'>
            "
          </div>

          <div className='relative'>
            <div className='text-center mb-8'>
              <h2 className='text-lg font-medium text-primary/90 mb-2'>
                Testimonials
              </h2>
              <h3 className='text-3xl md:text-4xl font-bold tracking-tight'>
                What Others Say
              </h3>
            </div>

            <div className='max-w-3xl mx-auto text-center'>
              <p className='text-lg md:text-xl text-base-content/90 leading-relaxed mb-8'>
                {testimonial.quote}
              </p>

              <div className='flex items-center justify-center space-x-4'>
                <div className='relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20'>
                  <Image
                    src={testimonial.thumbnail}
                    alt={testimonial.person}
                    fill
                    className='object-cover'
                    sizes='3rem'
                  />
                </div>
                <div className='text-left'>
                  <div className='font-semibold text-base-content'>
                    {testimonial.person}
                  </div>
                  <div className='text-sm text-base-content/70'>
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className='flex justify-center mt-8 space-x-4'>
            {testimonials.length > 1 && (
              <button
                onClick={prevTestimonial}
                className='p-2 rounded-full hover:bg-base-200 transition-colors duration-300'
                aria-label='Previous testimonial'
              >
                <svg
                  className='w-6 h-6 text-base-content/60'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
              </button>
            )}
            {testimonials.length > 1 && (
              <button
                onClick={nextTestimonial}
                className='p-2 rounded-full hover:bg-base-200 transition-colors duration-300'
                aria-label='Next testimonial'
              >
                <svg
                  className='w-6 h-6 text-base-content/60'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </button>
            )}
          </div>
          {testimonials.length > 1 && (
            <div className='flex justify-center mt-6 space-x-2'>
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    idx === currentIndex ? 'bg-primary' : 'bg-base-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          )}
        </motion.blockquote>
      </motion.div>
    </section>
  );
};
