import { PropsWithChildren } from 'react';
import HomeHero from '../HomeHero';

export const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <HomeHero />
      {children}
    </>
  );
};
