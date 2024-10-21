import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  height: 100%;
  padding-inline: ${({ theme }) => theme.padding.desktop.inline};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.padding.mobile.inline};
  }
`;
