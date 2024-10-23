import styled from '@emotion/styled';
import Inner from '../Inner';

export const Container = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.background.default};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[500]};
`;

export const HeaderInner = styled(Inner)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
