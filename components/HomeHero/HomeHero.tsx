import User from '../../constants/User';
import { CodeSnippet } from './CodeSnippet';

export const HomeHero = () => {
  return (
    <div className='py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[60vh] md:min-h-screen flex flex-col md:flex-row items-center justify-between gap-12'>
      <div className='flex flex-col justify-center z-10 md:max-w-lg'>
        <p className='text-xl font-medium text-base-content mb-1'>
          {User.name}
        </p>
        <p className='text-base font-light text-emerald-400 mb-6'>
          {User.position}
        </p>
        <h1 className='text-3xl md:text-4xl leading-tight text-base-content font-extrabold'>
          Shipping AI-powered products with Next.js and agentic workflows
        </h1>
      </div>

      <div className='hidden md:flex justify-center md:justify-end md:flex-1 md:min-w-0'>
        <CodeSnippet />
      </div>
    </div>
  );
};
