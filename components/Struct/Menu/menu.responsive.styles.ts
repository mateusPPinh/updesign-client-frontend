import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 425px) {
    > div {
      padding-left: 1rem;
      padding-right: 1rem;
      margin-top: -1rem;
    }
  }
`;

export const ImageResponsiveContainer = styled.div`
  @media (max-width: 425px) {
    img {
      width: 100%;
      max-width: 48px;
      height: 100%;
      max-height: 51px;
    }
  }
`;

export const BurgerMenuResponsiveContainer = styled.div`
  @media (max-width: 425px) {
    img {
      width: 100%;
      max-width: 40px;
    }
  }
`;

// export const OpenedMenuResponsiveContainer = styled.div<{ $isOpen?: boolean }>`
//   ${({ $isOpen }) => {
//     if ($isOpen) {
//       return css``;
//     }
//   }}
// `;
