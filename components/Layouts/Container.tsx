import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {children}
    </div>
  );
};

export default Container;
