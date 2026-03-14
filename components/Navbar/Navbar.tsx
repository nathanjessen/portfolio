'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import User from '../../constants/User';
import Brand from '../Brand';
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

        <div className='flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto'>
          <Brand name={User.name} position={User.position} />

          <nav
            className='hidden sm:block'
            role='navigation'
            aria-label='Main navigation'
          >
            <MainMenu />
          </nav>

          <div className='flex sm:hidden'>
            <MenuToggle onToggle={toggleMenu} isOpen={expanded} />
          </div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <MobileMenu onClose={closeMenu} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 bg-base-300/50 backdrop-blur-sm z-40'
            onClick={closeMenu}
            aria-hidden='true'
          />
        )}
      </AnimatePresence>
    </>
  );
};
