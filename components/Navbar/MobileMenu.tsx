import Link from 'next/link';
import { useRouter } from 'next/router';

export const MobileMenu = () => {
  const router = useRouter();

  return (
    <nav>
      <ul className='menu w-full pb-4'>
        <li>
          <Link
            href='/about'
            className={router.asPath === '/about' ? 'active' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href='/projects'
            className={router.asPath === '/projects' ? 'active' : ''}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href='/experience'
            className={router.asPath === '/experience' ? 'active' : ''}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            href='/contact'
            className={router.asPath === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
