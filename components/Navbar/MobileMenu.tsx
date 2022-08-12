import Link from 'next/link';
import { useRouter } from 'next/router';

export const MobileMenu = () => {
  const router = useRouter();

  return (
    <nav>
      <ul className='menu w-full pb-4'>
        <li>
          <Link href='/about'>
            <a className={router.asPath === '/about' ? 'active' : ''}>About</a>
          </Link>
        </li>
        <li>
          <Link href='/projects'>
            <a className={router.asPath === '/projects' ? 'active' : ''}>
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href='/experience'>
            <a className={router.asPath === '/experience' ? 'active' : ''}>
              Experience
            </a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a className={router.asPath === '/contact' ? 'active' : ''}>
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
