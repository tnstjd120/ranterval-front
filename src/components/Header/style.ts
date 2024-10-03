import styled from '@emotion/styled';
import Link from 'next/link';

export const Header = styled.header`
  width: 100%;
  height: 80px;
  max-width: 1024px;
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.black[300]};
`;

export const Inner = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  width: 146px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;
