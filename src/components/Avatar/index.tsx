'use client';

import * as style from '@dicebear/notionists-neutral';
import { createAvatar } from '@dicebear/avatars';
import { Size } from '@/types/size';
import { useMemo } from 'react';
import Image from 'next/image';

import * as S from './style';

interface Props {
  src: string;
  size?: Size;
}

export default function Avatar({ src, size = 'medium' }: Props) {
  const randomAvatar = useMemo(() => {
    return createAvatar(style, {
      size: 60,
      dataUri: true,
    });
  }, []);

  return (
    <S.Avatar size={size}>
      <Image src={src || randomAvatar} alt="profile image" fill />
    </S.Avatar>
  );
}
