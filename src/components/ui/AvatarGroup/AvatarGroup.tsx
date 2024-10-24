import React from 'react';
import { AvatarGroupContainer } from './AvatarGroup.styled';
import { AvatarGroupProps } from './AvatarGroup.type';

export default function AvatarGroup({ children, limit }: AvatarGroupProps) {
  const childrenArray = React.Children.toArray(children);
  const childrenArrayLength = childrenArray.length;

  const previewAvatars = childrenArray.slice(0, limit);
  const extraCount = childrenArrayLength - limit;

  return (
    <AvatarGroupContainer>
      <>
        {previewAvatars.map((avatar) => avatar)}
        <div>+{extraCount}</div>
      </>
    </AvatarGroupContainer>
  );
}
