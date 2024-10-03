'use client';

import Image from 'next/image';
import * as S from './style';

export default function Header() {
  return (
    <S.Header>
      <S.Inner>
        <S.LogoLink href="/">
          <Image src="/images/logo/logo-w.svg" alt="Ranterval" width={146} height={35} />
        </S.LogoLink>

        <S.Right>Profile</S.Right>
      </S.Inner>
    </S.Header>
  );
}
