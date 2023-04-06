import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const MainMenu = () => {
  const pathname = usePathname();

  return (
    <ul className='menu menu-horizontal'>
      <li
        className={`border-b-4 ${
          pathname === '/about'
            ? 'border-primary !rounded-none'
            : 'border-transparent hover:border-primary-focus'
        }`}>
        <Link href='/about' className='px-8 !rounded-none'>
          About
        </Link>
      </li>
      <li
        className={`border-b-4 ${
          pathname === '/projects'
            ? 'border-primary !rounded-none'
            : 'border-transparent hover:border-primary-focus'
        }`}>
        <Link href='/projects' className='px-8 !rounded-none'>
          Projects
        </Link>
      </li>
      <li
        className={`border-b-4 ${
          pathname === '/experience'
            ? 'border-primary !rounded-none'
            : 'border-transparent hover:border-primary-focus'
        }`}>
        <Link href='/experience' className='px-8 !rounded-none'>
          Experience
        </Link>
      </li>
      <li
        className={`border-b-4 ${
          pathname === '/contact'
            ? 'border-primary !rounded-none'
            : 'border-transparent hover:border-primary-focus'
        }`}>
        <Link href='/contact' className='px-8 !rounded-none'>
          Contact
        </Link>
      </li>
    </ul>
  );
};
