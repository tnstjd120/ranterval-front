'use client';

import Image from 'next/image';
import { MouseEvent, useState } from 'react';
import * as S from './style';
import Avatar from '../Avatar';
import DropDown from '../DropDown';

export default function Header() {
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (anchorElement) {
      setAnchorElement(null);
    } else {
      setAnchorElement(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <S.Header>
      <S.Inner>
        <S.LogoLink href="/">
          <Image src="/images/logo/logo-w.svg" alt="Ranterval" fill />
        </S.LogoLink>

        <S.Right>
          <Avatar src="" onClick={handleClick} />

          <DropDown anchorElement={anchorElement} onClose={handleClose}>
            <h2>하이 ㅋㅋ</h2>
          </DropDown>
        </S.Right>
      </S.Inner>
    </S.Header>
  );
}
