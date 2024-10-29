import { ReactNode } from 'react';
import { AvatarSize } from '../Avatar/Avatar.theme';

export interface AvatarGroupProps {
  children: ReactNode;
  limit: number;
  size?: keyof typeof AvatarSize;
}
