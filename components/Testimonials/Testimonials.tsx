import Image from 'next/image';
import { Testimonial } from '../../constants/testimonials';

export interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const testimonial = testimonials[0];

  return (
    <section className='py-12 bg-base-100 overflow-hidden md:py-16 lg:py-20'>
      <div className='relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
        <blockquote>
          <div className='max-w-5xl mx-auto text-center text-2xl leading-9 font-medium'>
            <p className='ldquo rdquo'>{testimonial.quote}</p>
          </div>
          <footer className='mt-8'>
            <div className='md:flex md:items-center md:justify-center'>
              {testimonial.thumbnail && (
                <div className='md:flex-shrink-0 mb-3 md:mb-0 md:mr-4'>
                  <Image
                    className='mx-auto h-10 w-10 rounded-full'
                    src={testimonial.thumbnail}
                    alt={testimonial.person}
                    width={40}
                    height={40}
                  />
                </div>
              )}
              <div className='text-center md:flex md:items-center'>
                <div className='text-base leading-6 font-medium'>
                  {testimonial.person}
                </div>

                {testimonial.title && (
                  <>
                    <svg
                      className='hidden md:block mx-1 h-5 w-5 text-primary'
                      fill='currentColor'
                      viewBox='0 0 20 20'>
                      <path d='M11 0h3L9 20H6l5-20z' />
                    </svg>

                    <div className='text-base leading-6 font-medium'>
                      {testimonial.title}
                    </div>
                  </>
                )}
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};
