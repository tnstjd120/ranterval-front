import { ReactNode } from 'react';
import * as S from './Content.styled';

interface Props {
  children: ReactNode;
}

export default function Content({ children }: Props) {
  return <S.Container>{children}</S.Container>;
}
