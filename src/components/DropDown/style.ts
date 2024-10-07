import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const TransparentBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
`;

export const Content = styled(motion.div)`
  position: fixed;
  margin-top: 10px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.black[300]};
  box-shadow: 0 3px 12px rgba(255, 255, 255, 0.1);
`;
