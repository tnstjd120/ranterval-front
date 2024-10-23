import styled from '@emotion/styled';
import Inner from '../Inner';

export const Container = styled(Inner)`
  background-color: ${({ theme }) => theme.background.default};
  color: ${({ theme }) => theme.text.default};
  padding-block: ${({ theme }) => theme.padding.desktop};
  min-height: 100dvh;
`;
