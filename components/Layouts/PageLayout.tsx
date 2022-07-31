import { PropsWithChildren } from 'react';
import DefaultLayout, { MetaProps } from './DefaultLayout';

const PageLayout = ({ children, ...customMeta }: PropsWithChildren<MetaProps>) => {
  return (
    <DefaultLayout {...customMeta}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </div>
    </DefaultLayout>
  );
};

export default PageLayout;
