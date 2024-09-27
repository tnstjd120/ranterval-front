'use client';

import { ReactNode } from 'react';
import EmotionThemeProvider from './EmotionThemeProvider';
import ReactQueryProvider from './ReactQueryProvider';

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <EmotionThemeProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </EmotionThemeProvider>
  );
}
