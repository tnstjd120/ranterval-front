import styled from '@emotion/styled';
import { AvatarSize, AvatarTextSize, AvatarVariant } from './Avatar.theme';
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

export const AvatarTextContainer = styled(AvatarContainer)`
  display: flex;
  font-weight: bold;
  white-space: nowrap;
  text-align: center;

  font-size: ${({ size }) => AvatarTextSize[size]};
  background-color: ${({ theme }) => theme.colors.black[400]};
  color: ${({ theme }) => theme.colors.white};
`;
