import Link from 'next/link';
import User from '../../constants/User';
import { CodeSnippet } from './CodeSnippet';

export const HomeHero = () => {
  return (
    <div className='py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 -mt-16'>
      <div className='flex flex-col justify-center z-10'>
        <h1 className='text-xl md:text-2xl font-medium text-primary'>
          Nathan Jessen
        </h1>
        <p className='text-4xl leading-tight tracking-wider uppercase text-base-content font-extrabold mt-2 mb-8'>
          Software Engineer
          <br />
          AI Dev Tooling
        </p>
        <ul
          className='text-base-content/80 space-y-2 text-xl'
          aria-label='Areas of expertise'
        >
          <li>React + TypeScript Applications</li>
          <li>Storybook Component Systems</li>
        </ul>
        <div className='mt-8 flex gap-4'>
          <Link
            href='/about'
            className='inline-flex items-center justify-center bg-emerald-600 text-white text-sm px-8 py-3 min-h-12 rounded font-semibold hover:bg-emerald-700 transition-colors w-40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-base-100'
          >
            About Me
          </Link>
          <a
            href={User.resumeUrl}
            download={User.resumeName}
            className='inline-flex items-center justify-center gap-1 border border-emerald-600 text-emerald-600 text-sm px-8 py-3 min-h-12 rounded font-semibold hover:bg-emerald-600 hover:text-white transition-colors w-40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-base-100'
            aria-label='Download my resume'
          >
            Resume
          </a>
        </div>
      </div>

      <div className='hidden md:flex justify-center md:justify-end w-full md:w-auto'>
        <CodeSnippet />
      </div>
    </div>
  );
};
