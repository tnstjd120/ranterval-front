'use client';

import Image from 'next/image';
import * as S from './style';
import Avatar from '../Avatar';

export default function Header() {
  return (
    <S.Header>
      <S.Inner>
        <S.LogoLink href="/">
          <Image src="/images/logo/logo-w.svg" alt="Ranterval" fill />
        </S.LogoLink>

        <S.Right>
          <Avatar src="" />
        </S.Right>
      </S.Inner>
    </S.Header>
  );
}
