import { PropsWithChildren } from 'react';
import Container from '../Layouts/Container';

export const PageHeading = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left">
        {children}
      </h1>
    </Container>
  );
};
