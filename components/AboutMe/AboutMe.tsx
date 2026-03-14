import User from '../../constants/User';
import TechList from '../TechList';

export const AboutMe = () => {
  return (
    <section>
      <p className='text-2xl md:text-4xl font-semibold px-8'>
        I&apos;m an <span className='text-emerald-400'>AI-native engineer</span> shipping production software with
        Next.js and agentic workflows.
      </p>

      <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-20'>
        <div className='order-2 md:order-1'>
          <div>
            <h2 className='text-xl font-semibold'>Get in touch</h2>
            <div className='mt-4 space-y-4'>
              <div className='flex flex-row items-center space-x-3'>
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
                >
                  <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                  <polyline points='22,6 12,13 2,6'></polyline>
                </svg>
                <a
                  href='mailto:nathan.jessen@gmail.com'
                  className='text-lg hover:text-emerald-500 transition-colors'
                >
                  nathan.jessen@gmail.com
                </a>
              </div>

              <div className='flex flex-row items-center space-x-3'>
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
                >
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                  <rect x='2' y='9' width='4' height='12'></rect>
                  <circle cx='4' cy='4' r='2'></circle>
                </svg>
                <a
                  href='https://www.linkedin.com/in/njessen'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-lg hover:text-emerald-500 transition-colors'
                >
                  linkedin.com/in/njessen
                </a>
              </div>

              <div className='flex flex-row items-center space-x-3'>
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
                >
                  <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                </svg>
                <a
                  href='https://github.com/nathanjessen'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-lg hover:text-emerald-500 transition-colors'
                >
                  github.com/nathanjessen
                </a>
              </div>
            </div>
          </div>

          {User.resumeUrl && (
            <div className='mt-8'>
              <h2 className='text-xl font-semibold'>Resume</h2>
              <div className='mt-4'>
                <a
                  href={User.resumeUrl}
                  download={User.resumeName}
                  target='_blank'
                  rel='noreferrer'
                  className='underline text-emerald-600 hover:text-emerald-500 font-bold text-lg'
                >
                  Download Resume
                </a>
              </div>
            </div>
          )}
        </div>

        <div className='col-span-1 md:col-span-2 order-1 md:order-2'>
          <div className='space-y-4'>
            <p className='text-xl'>
              I&apos;ve been building frontend applications professionally for
              over 13 years. Over the past year I&apos;ve shifted to AI-native
              engineering — using agentic workflows with Claude and Codex to
              prototype rapidly and ship reliable software faster than
              traditional approaches allow.
            </p>
            <p className='text-xl'>
              At A Place for Mom I&apos;ve contributed to a high-traffic Next.js
              platform and helped ship two AI-powered products: a B2C
              care-finder and a B2B platform connecting home care agencies with
              care-seekers. Both went from prototype to
              production in under three months.
            </p>
            <p className='text-xl'>
              I&apos;m drawn to the developer tooling layer — tools like
              Storybook and Chromatic that change how engineers build and ship
              software. My goal is to bring AI into the development workflow
              itself, not just into the products developers ship.
            </p>
          </div>

          <div className='mt-6'>
            <h2 className='bg-primary text-3xl rounded-md px-3 inline-block font-medium mb-6'>
              Tech Stack
            </h2>
            <TechList />
          </div>
        </div>
      </div>
    </section>
  );
};
