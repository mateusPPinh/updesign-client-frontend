import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 425px) {
    > div {
      padding-left: 1rem;
      padding-right: 1rem;
      margin-top: -1rem;
    }
  }

  @media (width: 375px) {
    > div:first-child {
      margin-left: 1rem;
      margin-top: -1rem;
      background: none;
    }
  }

  @media (min-width: 768px) {
    > div {
      padding-left: 0.8rem;
      padding-right: 0.8rem;
      margin-top: -1.4rem;
    }
  }
`;

export const ImageResponsiveContainer = styled.div`
  @media (min-width: 425px) and (width: 375px) {
    img {
      width: 100%;
      max-width: 48px;
      height: 100%;
      max-height: 51px;
    }
  }

  /* @media (min-width: 768px) {
    img {
      width: 100%;
      max-width: 48px;
      height: 100%;
      max-height: 51px;
    }
  } */
`;

export const BurgerMenuResponsiveContainer = styled.div`
  @media (min-width: 425px) {
    img {
      width: 40px;
    }
  }
`;
