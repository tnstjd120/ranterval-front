import Image from 'next/image';
import { AvatarContainer } from './Avatar.styled';
import { Size } from './Avatar.theme';

export type AvatarVariant = 'circle' | 'rounded' | 'square';
export type AvatarSize = 'small' | 'medium' | 'large';

export interface AvatarProps {
  variant: AvatarVariant;
  size: AvatarSize;
  src: string;
  alt: string;
}

export default function Avatar({ variant, size, ...rest }: AvatarProps) {
  return (
    <AvatarContainer variant={variant} size={size}>
      <Image width={Size[size]} height={Size[size]} {...rest} />
    </AvatarContainer>
  );
}
