import styled from '@emotion/styled';
import { type AvatarVariant, type AvatarSize } from './Avatar';

export const AvatarContainer = styled.div<{ variant: AvatarVariant; size: AvatarSize }>`
  background-color: ${({ size }) => size};
`;
