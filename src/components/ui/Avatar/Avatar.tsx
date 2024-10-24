import Image from 'next/image';
import { AvatarContainer } from './Avatar.styled';
import { AvatarSize } from './Avatar.theme';
import { AvatarProps } from './Avatar.type';

export default function Avatar({ variant = 'circle', size = 'medium', ...rest }: AvatarProps) {
  return (
    <AvatarContainer variant={variant} size={size}>
      <Image width={AvatarSize[size]} height={AvatarSize[size]} {...rest} />
    </AvatarContainer>
  );
}
