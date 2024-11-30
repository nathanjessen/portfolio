'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export const MainMenu = () => {
  const pathname = usePathname();

  return (
    <nav
      className='hidden sm:block'
      role='navigation'
      aria-label='Main navigation'
    >
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
              className={`group relative block py-2 transition-colors duration-200
                ${pathname === href ? 'text-primary' : 'text-base-content/70 hover:text-primary'}`}
              role='menuitem'
              aria-current={pathname === href ? 'page' : undefined}
            >
              {label}
              <span
                className={`absolute -bottom-0.5 left-0 h-0.5 w-full transform bg-primary transition-transform duration-200 ease-out
                  ${pathname === href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
