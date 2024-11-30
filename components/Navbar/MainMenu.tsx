'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const MainMenu = () => {
  const pathname = usePathname();

  return (
    <ul className='menu menu-horizontal' role='menubar'>
      <li
        role='none'
        className={`border-b-4 ${
          pathname === '/about'
            ? 'border-primary !rounded-none'
            : 'border-transparent hover:border-primary-focus'
        }`}
      >
        <Link
          href='/about'
          className='px-8 !rounded-none'
          role='menuitem'
          aria-current={pathname === '/about' ? 'page' : undefined}
        >
          About
        </Link>
      </li>
      <li
        role='none'
        className={`border-b-4 ${
          pathname === '/projects'
            ? 'border-primary !rounded-none'
            : 'border-transparent hover:border-primary-focus'
        }`}
      >
        <Link
          href='/projects'
          className='px-8 !rounded-none'
          role='menuitem'
          aria-current={pathname === '/projects' ? 'page' : undefined}
        >
          Projects
        </Link>
      </li>
      <li
        role='none'
        className={`border-b-4 ${
          pathname === '/experience'
            ? 'border-primary !rounded-none'
            : 'border-transparent hover:border-primary-focus'
        }`}
      >
        <Link
          href='/experience'
          className='px-8 !rounded-none'
          role='menuitem'
          aria-current={pathname === '/experience' ? 'page' : undefined}
        >
          Experience
        </Link>
      </li>
      <li
        role='none'
        className={`border-b-4 ${
          pathname === '/contact'
            ? 'border-primary !rounded-none'
            : 'border-transparent hover:border-primary-focus'
        }`}
      >
        <Link
          href='/contact'
          className='px-8 !rounded-none'
          role='menuitem'
          aria-current={pathname === '/contact' ? 'page' : undefined}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};
