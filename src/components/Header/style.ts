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
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey['700']};
`;

export const Inner = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  width: 146px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;
