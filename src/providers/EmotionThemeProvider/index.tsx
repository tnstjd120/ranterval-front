'use client';

import { ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

type EmotionThemeProviderProps = {
  children: ReactNode;
};

export default function EmotionThemeProvider({ children }: EmotionThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
