'use client';

import { usePathname } from 'next/navigation';

interface MainContentProps {
  children: React.ReactNode;
}

export const MainContent = ({ children }: MainContentProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <main
      id='main-content'
      className={`flex-1 ${isHomePage ? '' : 'pt-24'}`}
      role='main'
      tabIndex={-1}
    >
      {children}
    </main>
  );
};

export default MainContent;
