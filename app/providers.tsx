'use client';

import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange
      enableColorScheme={true}
      storageKey="theme"
      // Prevent theme flash on load
      themes={['light', 'dark']}
    >
      {children}
    </ThemeProvider>
  );
}
