'use client';

export const SkipLink = () => {
  return (
    <a
      href='#main-content'
      className='sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-base-100 focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary'
    >
      Skip to main content
    </a>
  );
};
