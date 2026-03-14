'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const MainMenu = () => {
  const pathname = usePathname();
  const isActive = pathname === '/about';

  return (
    <ul className='flex items-center list-none' role='menubar'>
      <li
        role='none'
        className={`border-b-4 ${isActive ? 'border-primary' : 'border-transparent'}`}
      >
        <Link
          href='/about'
          className='block px-8 py-2 text-sm font-medium hover:bg-base-200 transition-colors'
          role='menuitem'
          aria-current={isActive ? 'page' : undefined}
        >
          About
        </Link>
      </li>
    </ul>
  );
};
