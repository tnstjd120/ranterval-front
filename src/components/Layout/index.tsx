'use client';

import { ReactNode } from 'react';
import * as S from './style';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return <S.Layout>{children}</S.Layout>;
}

export default Layout;
