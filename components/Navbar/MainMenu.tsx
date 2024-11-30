'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const MainMenu = () => {
  const pathname = usePathname();

  return (
    <ul className='flex items-center space-x-8' role='menubar'>
      <li role='none'>
        <Link
          href='/about'
          className={`nav-link ${pathname === '/about' ? 'text-primary' : ''}`}
          role='menuitem'
          aria-current={pathname === '/about' ? 'page' : undefined}
        >
          About
        </Link>
      </li>
      <li role='none'>
        <Link
          href='/projects'
          className={`nav-link ${pathname === '/projects' ? 'text-primary' : ''}`}
          role='menuitem'
          aria-current={pathname === '/projects' ? 'page' : undefined}
        >
          Projects
        </Link>
      </li>
      <li role='none'>
        <Link
          href='/experience'
          className={`nav-link ${pathname === '/experience' ? 'text-primary' : ''}`}
          role='menuitem'
          aria-current={pathname === '/experience' ? 'page' : undefined}
        >
          Experience
        </Link>
      </li>
      <li role='none'>
        <Link
          href='/contact'
          className={`nav-link ${pathname === '/contact' ? 'text-primary' : ''}`}
          role='menuitem'
          aria-current={pathname === '/contact' ? 'page' : undefined}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};
