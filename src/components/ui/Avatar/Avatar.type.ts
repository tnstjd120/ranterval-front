import { AvatarSize, AvatarVariant } from './Avatar.theme';

export type AvatarVariantUnion = keyof typeof AvatarVariant;
export type AvatarSizeUnion = keyof typeof AvatarSize;

export interface AvatarCommonProps {
  variant?: AvatarVariantUnion;
  size?: AvatarSizeUnion;
}

export interface AvatarImageProps extends AvatarCommonProps {
  src: string;
  alt: string;
}

export interface AvatarTextProps extends AvatarCommonProps {
  text: string;
  src?: never;
  alt?: never;
}

export type AvatarProps = AvatarImageProps | AvatarTextProps;
