import { PropsWithChildren } from 'react';
import DefaultLayout, { MetaProps } from './DefaultLayout';
import HomeHero from '../HomeHero';

const HomeLayout = ({ children, ...customMeta }: PropsWithChildren<MetaProps>) => {
  return (
    <DefaultLayout {...customMeta}>
      <HomeHero />
      {children}
    </DefaultLayout>
  );
};

export default HomeLayout;
