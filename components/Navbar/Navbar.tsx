'use client';

import { useEffect, useState } from 'react';
import User from '../../constants/User';
import Brand from '../Brand';
import { SkipLink } from '../common/SkipLink';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SkipLink />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background,shadow,backdrop-filter] duration-200 ${
          scrolled
            ? 'bg-base-100/80 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-base-100/60'
            : 'bg-transparent supports-[backdrop-filter]:bg-base-100/5 backdrop-blur-none'
        }`}
        role='banner'
      >
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
        />

        <div className='flex items-center px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto'>
          <Brand name={User.name} position={User.position} />
        </div>
      </header>
    </>
  );
};
