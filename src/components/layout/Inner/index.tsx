import { ReactNode } from 'react';
import * as S from './Inner.styled';

interface Props {
  children: ReactNode;
}

export default function Inner({ children }: Props) {
  return <S.Container>{children}</S.Container>;
}
