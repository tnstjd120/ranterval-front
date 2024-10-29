import Image from 'next/image';
import * as S from './Avatar.styled';
import { AvatarSize } from './Avatar.theme';
import { AvatarImageProps, AvatarProps } from './Avatar.type';

export default function Avatar({ variant = 'circle', size = 'medium', ...rest }: AvatarProps) {
  return 'text' in rest ? (
    <S.AvatarTextContainer variant={variant} size={size}>
      {rest.text}
    </S.AvatarTextContainer>
  ) : (
    <S.AvatarContainer variant={variant} size={size}>
      <Image
        width={AvatarSize[size]}
        height={AvatarSize[size]}
        src={(rest as AvatarImageProps).src}
        alt={(rest as AvatarImageProps).alt}
      />
    </S.AvatarContainer>
  );
}
