import { Size } from '@/types/size';
import styled from '@emotion/styled';

export enum AvatarSize {
  small = '20px',
  medium = '40px',
  large = '60px',
}

export const Avatar = styled.figure<{ size: Size }>`
  width: ${({ size }) => AvatarSize[size]};
  height: ${({ size }) => AvatarSize[size]};
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  outline: 2px solid ${({ theme }) => theme.colors.black[200]};
  background-color: ${({ theme }) => theme.colors.white};

  > img {
    object-fit: cover;
    object-position: center;
  }
`;
