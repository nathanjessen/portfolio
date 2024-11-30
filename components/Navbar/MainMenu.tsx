'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export const MainMenu = () => {
  const pathname = usePathname();

  return (
    <ul className='flex items-center space-x-8' role='menubar'>
      {[
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/experience', label: 'Experience' },
        { href: '/contact', label: 'Contact' },
      ].map(({ href, label }) => (
        <li key={href} role='none'>
          <Link
            href={href}
            className={`relative py-2 nav-link transition-colors duration-200
              ${pathname === href ? 'text-primary' : 'hover:text-primary/80'}`}
            role='menuitem'
            aria-current={pathname === href ? 'page' : undefined}
          >
            {label}
            {pathname === href && (
              <motion.div
                className='absolute -bottom-1 left-0 right-0 h-0.5 bg-primary'
                layoutId='navbar-active'
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};
