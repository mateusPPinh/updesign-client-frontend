import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  /*
    Mobile 425px: Width 425px x Height 752px
  */

  @media (max-width: 425px) {
    img {
      width: 100%;
      height: 100%;
      max-height: 725px !important;
      background-position: center center;
      background-size: cover;
    }
  }
`;
