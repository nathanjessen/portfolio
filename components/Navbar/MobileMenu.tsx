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

      </ul>
    </nav>
  );
};
