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
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
          <div className='absolute top-0 left-0 transform -translate-x-6 -translate-y-8 text-6xl text-primary opacity-25'>
            "
          </div>
          <div className='absolute bottom-0 right-0 transform translate-x-6 translate-y-8 text-6xl text-primary opacity-25'>
            "
          </div>

          <motion.div 
            className='max-w-4xl mx-auto text-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className='text-2xl md:text-3xl leading-relaxed text-base-content/90 font-medium'>
              {testimonial.quote}
            </p>
          </motion.div>

          <motion.footer 
            className='mt-10'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className='flex items-center justify-center space-x-4'>
              {testimonials.length > 1 && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className='p-2 rounded-full bg-base-200 hover:bg-base-300 transition-colors duration-200'
                >
                  <svg
                    className='w-6 h-6 text-primary'
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
                </motion.button>
              )}

              <div className='flex items-center'>
                {testimonial.thumbnail && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='flex-shrink-0 mr-4'
                  >
                    <Image
                      className='h-12 w-12 rounded-full ring-2 ring-primary/20'
                      src={testimonial.thumbnail}
                      alt={testimonial.person}
                      width={48}
                      height={48}
                    />
                  </motion.div>
                )}
                
                <div className='text-center flex flex-col sm:flex-row items-center'>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='text-lg font-bold text-base-content'
                  >
                    {testimonial.person}
                  </motion.div>

                  {testimonial.title && (
                    <>
                      <svg
                        className='hidden sm:block mx-3 h-1 w-1 text-primary'
                        fill='currentColor'
                        viewBox='0 0 8 8'
                      >
                        <circle cx='4' cy='4' r='3' />
                      </svg>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className='text-base text-base-content/80'
                      >
                        {testimonial.title}
                      </motion.div>
                    </>
                  )}
                </div>
              </div>

              {testimonials.length > 1 && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className='p-2 rounded-full bg-base-200 hover:bg-base-300 transition-colors duration-200'
                >
                  <svg
                    className='w-6 h-6 text-primary'
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
                </motion.button>
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
          </motion.footer>
        </motion.blockquote>
      </motion.div>
    </section>
  );
};
