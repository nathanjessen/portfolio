import User from '../../constants/User';

export const HomeHero = () => {
  return (
    <div className='py-20 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto min-h-screen flex flex-col md:flex-row gap-6 justify-center md:justify-between -mt-16'>
      <div className='flex flex-col justify-center items-center md:order-last'>
        <div className='relative h-48 w-28 md:h-96 md:w-60 md:-translate-x-32'>
          <div className='absolute hover:scale-110 transition-all ease-in-out duration-300 inset-0 -translate-x-10 md:-translate-x-24 block bg-accent h-48 w-30 md:h-96 md:w-60 rounded-lg -rotate-12'></div>
          <div className='absolute hover:scale-110 transition-all ease-in-out duration-300 inset-0 block bg-secondary h-48 w-30 md:h-96 md:w-60 rounded-lg'></div>
          <div className='absolute hover:scale-110 transition-all ease-in-out duration-300 inset-0 top-5 translate-x-10 md:translate-x-24 block bg-primary h-48 w-30 md:h-96 md:w-60 rounded-lg rotate-12'></div>
        </div>
      </div>

      <div className='flex flex-col justify-center z-10'>
        <h2 className='text-xl md:text-2xl font-medium text-primary'>
          Nathan Jessen
        </h2>
        <p className='text-4xl leading-tight tracking-wider uppercase text-white font-extrabold mt-2 mb-8'>
          Software Engineer
          <br />
          Based in Austin
        </p>
        <ul className='text-neutral-content space-y-2 text-xl'>
          <li>React + TypeScript Applications</li>
          <li>Storybook Component Libraries</li>
          <li>WCAG Accessibility Compliance</li>
        </ul>
        <div className='flex items-start gap-8 mt-8'>
          <div className='flex'>
            <h3 className='leading-snug'>
              Years of <br />
              Experience
            </h3>
            <p className='whitespace-nowrap text-4xl font-extrabold order-first pr-3 text-white'>
              10+
            </p>
          </div>
        </div>
        <div className='mt-8'>
          <a
            href={User.resumeUrl}
            download={User.resumeName}
            className='btn btn-outline btn-primary btn-wide gap-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z'
                clipRule='evenodd'
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};
