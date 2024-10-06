import styled from '@emotion/styled';

export const TransparentBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  pointer-events: none;

  > div {
  }
`;
