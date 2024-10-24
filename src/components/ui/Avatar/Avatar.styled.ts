import styled from '@emotion/styled';
import { AvatarSize, AvatarVariant } from './Avatar.theme';
import { AvatarSizeUnion, AvatarVariantUnion } from './Avatar.type';

export const AvatarContainer = styled.div<{
  variant: AvatarVariantUnion;
  size: AvatarSizeUnion;
}>`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  border: 2px solid ${({ theme }) => theme.colors.black[400]};
  background-color: ${({ theme }) => theme.colors.black[400]};

  width: ${({ size }) => AvatarSize[size]}px;
  height: ${({ size }) => AvatarSize[size]}px;
  border-radius: ${({ variant }) => AvatarVariant[variant]};

  > img {
    object-fit: cover;
    object-position: center;
  }
`;
