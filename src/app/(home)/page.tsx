'use client';

import { Avatar } from '@/components/ui/Avatar';
import AvatarGroup from '@/components/ui/AvatarGroup/AvatarGroup';
import styled from '@emotion/styled';

const TestTitle = styled.h1`
  ${({ theme }) => theme.typography.h1};
  color: ${({ theme }) => theme.colors.grey[500]};
`;

export default function Home() {
  return (
    <>
      <TestTitle>Hello, Ranterval</TestTitle>
      <Avatar size="large" text="하이루" />
      <Avatar src="/images/og-image.png" alt="test" />
      <Avatar size="large" src="/images/og-image.png" alt="test" />

      <AvatarGroup limit={3} size="large">
        <Avatar src="/images/og-image.png" alt="test" />
        <Avatar src="/images/og-image.png" alt="test" />
        <Avatar src="/images/og-image.png" alt="test" />
        <Avatar src="/images/og-image.png" alt="test" />
        <Avatar src="/images/og-image.png" alt="test" />
        <Avatar src="/images/og-image.png" alt="test" />
      </AvatarGroup>
    </>
  );
}
