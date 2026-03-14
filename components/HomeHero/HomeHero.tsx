import Link from 'next/link';
import User from '../../constants/User';
import { CodeSnippet } from './CodeSnippet';

export const HomeHero = () => {
  return (
    <div className='py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12'>
      <div className='flex flex-col justify-center z-10 md:max-w-lg'>
        <h1 className='text-3xl md:text-4xl leading-tight text-base-content font-extrabold mb-8'>
          Shipping AI-powered products with Next.js and agentic workflows
        </h1>
        <div className='mt-8 flex gap-4'>
          <Link
            href='/about'
            className='inline-flex items-center justify-center bg-emerald-600 text-white text-sm px-8 py-3 min-h-12 rounded font-semibold hover:bg-emerald-700 transition-colors w-40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-base-100'
          >
            About Me
          </Link>
        </div>
      </div>

      <div className='hidden md:flex justify-center md:justify-end md:flex-1 md:min-w-0'>
        <CodeSnippet />
      </div>
    </div>
  );
};
