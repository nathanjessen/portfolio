'use client';

import { useCallback, useState } from 'react';
import User from '../../constants/User';
import Brand from '../Brand';
import SocialNav from '../SocialNav';
import { MainMenu } from './MainMenu';
import { MenuToggle } from './MenuToggle';
import { MobileMenu } from './MobileMenu';
import { SkipLink } from '../common/SkipLink';

export const Navbar = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setExpanded((prevExpanded) => !prevExpanded);
  }, []);

  const closeMenu = useCallback(() => {
    setExpanded(false);
  }, []);

  return (
    <>
      <SkipLink />
      <header className='bg-base-100 fixed top-0 w-full z-50' role='banner'>
        <div className='navbar justify-between px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto'>
          <Brand name={User.name} position={User.position} />

          <nav
            className='hidden sm:block'
            role='navigation'
            aria-label='Main navigation'
          >
            <MainMenu />
          </nav>

          <div
            className='hidden md:flex'
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

        {expanded && (
          <MobileMenu onClose={closeMenu} aria-label='Mobile navigation' />
        )}
      </header>
    </>
  );
};
