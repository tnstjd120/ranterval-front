'use client';

import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import theme from './theme';

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        body, * {
          font-family:
            'Pretendard Variable',
            Pretendard,
            -apple-system,
            BlinkMacSystemFont,
            system-ui,
            Roboto,
            'Helvetica Neue',
            'Segoe UI',
            'Apple SD Gothic Neo',
            'Noto Sans KR',
            'Malgun Gothic',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            sans-serif;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background: ${theme.colors.black['300']};
          height: 100vh;
          height: 100dvh;
          overscroll-behavior-y: none;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        ul {
          list-style: none;
        }
      `}
    />
  );
}
