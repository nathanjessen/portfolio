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
  const [prevScrollY, setPrevScrollY] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update visibility based on scroll direction
      if (currentScrollY > 100) {
        setVisible(prevScrollY > currentScrollY);
      } else {
        setVisible(true);
      }

      // Update scrolled state for glass effect
      setScrolled(currentScrollY > 20);

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  const toggleMenu = useCallback(() => {
    setExpanded((prevExpanded) => !prevExpanded);
  }, []);

  const closeMenu = useCallback(() => {
    setExpanded(false);
  }, []);

  return (
    <>
      <SkipLink />
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background,shadow,backdrop-filter] duration-200 ${
          scrolled
            ? 'bg-base-100/80 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-base-100/60'
            : 'bg-transparent supports-[backdrop-filter]:bg-base-100/5 backdrop-blur-none'
        }`}
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        role='banner'
      >
        {/* Animated border line */}
        <motion.div
          className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent'
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0, opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className='navbar justify-between px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Brand name={User.name} position={User.position} />
          </motion.div>

          <nav
            className='hidden sm:block'
            role='navigation'
            aria-label='Main navigation'
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <MainMenu />
            </motion.div>
          </nav>

          <motion.div
            className='flex sm:hidden'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MenuToggle
              onToggle={toggleMenu}
              aria-controls='mobile-menu'
              aria-expanded={expanded}
            />
          </motion.div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <MobileMenu expanded={expanded} onClose={closeMenu} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Backdrop for mobile menu */}
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
