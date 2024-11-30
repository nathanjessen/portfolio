'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className='menu w-full pb-4'>
        <li>
          <Link
            href='/about'
            className={pathname === '/about' ? 'active' : ''}
            onClick={onClose}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href='/projects'
            className={pathname === '/projects' ? 'active' : ''}
            onClick={onClose}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href='/experience'
            className={pathname === '/experience' ? 'active' : ''}
            onClick={onClose}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            href='/contact'
            className={pathname === '/contact' ? 'active' : ''}
            onClick={onClose}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
