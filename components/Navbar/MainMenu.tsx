'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
];

export const MainMenu = () => {
  const pathname = usePathname();

  return (
    <ul className='flex items-center list-none' role='menubar'>
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <li
            key={href}
            role='none'
            className={`border-b-4 ${
              isActive ? 'border-primary' : 'border-transparent'
            }`}
          >
            <Link
              href={href}
              className='block px-8 py-2 text-sm font-medium hover:bg-base-200 transition-colors'
              role='menuitem'
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
