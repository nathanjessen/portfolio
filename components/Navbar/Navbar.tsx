import { useCallback, useState } from 'react';
import User from '../../constants/User';
import Brand from '../Brand';
import SocialNav from '../SocialNav';
import { MainMenu } from './MainMenu';
import { MobileMenu } from './MobileMenu';
import { MobileMenuToggle } from './MobileMenuToggle';

export const Navbar = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setExpanded((prevExpanded) => !prevExpanded);
  }, []);

  return (
    <header className='bg-base-100 fixed top-0 w-full z-50'>
      <div className='navbar justify-between px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto'>
        <Brand name={User.name} position={User.position} />

        <div className='hidden sm:block'>
          <MainMenu />
        </div>

        <div className='hidden md:flex'>
          <SocialNav />
        </div>

        <div className='flex sm:hidden'>
          <MobileMenuToggle onToggle={toggleMenu} />
        </div>
      </div>

      {expanded && <MobileMenu />}
    </header>
  );
};
