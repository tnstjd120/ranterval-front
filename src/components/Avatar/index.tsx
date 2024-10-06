'use client';

import * as style from '@dicebear/notionists-neutral';
import { createAvatar } from '@dicebear/avatars';
import { Size } from '@/types/size';
import { MouseEvent, useMemo } from 'react';
import Image from 'next/image';

import * as S from './style';

interface Props {
  src: string;
  size?: Size;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export default function Avatar({ src, size = 'medium', onClick }: Props) {
  const randomAvatar = useMemo(() => {
    return createAvatar(style, {
      size: 60,
      dataUri: true,
    });
  }, []);

  return (
    <S.Avatar size={size} onClick={onClick}>
      <Image src={src || randomAvatar} alt="profile image" fill />
    </S.Avatar>
  );
}
