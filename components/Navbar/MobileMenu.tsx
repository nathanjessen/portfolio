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
      <ul className='flex flex-col gap-1 list-none w-full pb-4'>
        <li>
          <Link
            href='/about'
            className={`flex w-full items-center justify-center gap-2 px-4 py-2 rounded transition-colors ${pathname === '/about' ? 'bg-primary/10 text-primary' : 'hover:bg-white/10'}`}
            onClick={onClose}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href='/projects'
            className={`flex w-full items-center justify-center gap-2 px-4 py-2 rounded transition-colors ${pathname === '/projects' ? 'bg-primary/10 text-primary' : 'hover:bg-white/10'}`}
            onClick={onClose}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href='/contact'
            className={`flex w-full items-center justify-center gap-2 px-4 py-2 rounded transition-colors ${pathname === '/contact' ? 'bg-primary/10 text-primary' : 'hover:bg-white/10'}`}
            onClick={onClose}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
