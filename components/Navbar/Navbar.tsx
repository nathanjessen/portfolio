'use client';

import { useCallback, useEffect, useState } from 'react';
import User from '../../constants/User';
import Brand from '../Brand';
import SocialNav from '../SocialNav';
import { MainMenu } from './MainMenu';
import { MenuToggle } from './MenuToggle';
import { MobileMenu } from './MobileMenu';
import { SkipLink } from '../common/SkipLink';

export const Navbar = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setExpanded((prevExpanded) => !prevExpanded);
  }, []);

  const closeMenu = useCallback(() => {
    setExpanded(false);
  }, []);

  return (
    <>
      <SkipLink />
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
        }`} 
        role='banner'
      >
        <div className='navbar justify-between px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto'>
          <Brand name={User.name} position={User.position} />

          <nav
            className='hidden sm:block'
            role='navigation'
            aria-label='Main navigation'
          >
            <MainMenu />
          </nav>

          <div
            className='hidden md:flex items-center space-x-4'
            role='navigation'
            aria-label='Social links'
          >
            <SocialNav />
          </div>

          <div className='flex sm:hidden'>
            <MenuToggle
              onToggle={toggleMenu}
              aria-controls='mobile-menu'
              aria-expanded={expanded}
            />
          </div>
        </div>

        <MobileMenu expanded={expanded} onClose={closeMenu} />
      </header>
    </>
  );
};
