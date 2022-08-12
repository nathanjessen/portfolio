import Link from 'next/link';
import { useRouter } from 'next/router';

export const MainMenu = () => {
  const router = useRouter();

  return (
    <ul className='menu menu-horizontal'>
      <li
        className={`border-b-4 ${
          router.asPath === '/about'
            ? 'border-primary !rounded-none'
            : 'border-transparent hover:border-primary-focus'
        }`}>
        <Link href='/about' className='px-8 !rounded-none'>
          About
        </Link>
      </li>
      <li
        className={`border-b-4 ${
          router.asPath === '/projects'
            ? 'border-primary !rounded-none'
            : 'border-transparent hover:border-primary-focus'
        }`}>
        <Link href='/projects' className='px-8 !rounded-none'>
          Projects
        </Link>
      </li>
      <li
        className={`border-b-4 ${
          router.asPath === '/experience'
            ? 'border-primary !rounded-none'
            : 'border-transparent hover:border-primary-focus'
        }`}>
        <Link href='/experience' className='px-8 !rounded-none'>
          Experience
        </Link>
      </li>
      <li
        className={`border-b-4 ${
          router.asPath === '/contact'
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
