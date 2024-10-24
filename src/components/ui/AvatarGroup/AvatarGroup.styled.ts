import styled from '@emotion/styled';

export const AvatarGroupContainer = styled.div`
  display: flex;
  align-items: center;

  > div:not(:first-of-type) {
    margin-left: -12px;
  }
`;
