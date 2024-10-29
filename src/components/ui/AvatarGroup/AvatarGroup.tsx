import React from 'react';
import { AvatarGroupContainer } from './AvatarGroup.styled';
import { AvatarGroupProps } from './AvatarGroup.type';
import Avatar from '../Avatar/Avatar';

export default function AvatarGroup({ children, limit, size = 'medium' }: AvatarGroupProps) {
  const childrenArray = React.Children.toArray(children);
  const childrenArrayLength = childrenArray.length;

  const previewAvatars = childrenArray.slice(0, limit);
  const extraCount = childrenArrayLength - limit;

  return (
    <AvatarGroupContainer>
      <>
        {React.Children.map(previewAvatars, (avatar) =>
          React.cloneElement(avatar as React.ReactElement, { size }),
        )}
        <Avatar size={size} text={`+${extraCount}`} />
      </>
    </AvatarGroupContainer>
  );
}
