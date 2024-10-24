import { AvatarSize, AvatarVariant } from './Avatar.theme';

export type AvatarVariantUnion = keyof typeof AvatarVariant;
export type AvatarSizeUnion = keyof typeof AvatarSize;

export interface AvatarProps {
  variant?: AvatarVariantUnion;
  size?: AvatarSizeUnion;
  src: string;
  alt: string;
}
