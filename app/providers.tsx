'use client';

import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider defaultTheme='light' attribute='class'>
      {children}
    </ThemeProvider>
  );
}
