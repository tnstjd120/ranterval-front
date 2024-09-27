'use client';

import styled from '@emotion/styled';

const TestTitle = styled.h1`
  ${({ theme }) => theme.typography.h1};
  color: ${({ theme }) => theme.colors.grey[500]};
`;

export default function Home() {
  return <TestTitle>Hello, Ranterval</TestTitle>;
}
