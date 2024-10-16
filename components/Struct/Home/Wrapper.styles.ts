import styled from 'styled-components';

export const Wrapper = styled.div`
  .page-block {
    > div {
      width: calc(100% - 80px);
      gap: 40px;
      height: 100%;

      a,
      h3 {
        font-family: var(--font-poppins);
        font-size: 24px;
        line-height: 110%;
        color: rgb(20, 38, 52);
        margin-top: 0px;
        font-weight: 500;
      }

      * p {
        font-family: var(--font-poppins);
        font-size: 12px;
        line-height: 110%;
        color: rgb(20, 38, 52);
        margin-top: -3px;
        margin-right: 3px;
        margin-bottom: 0px;
        text-transform: uppercase;
        font-weight: 500;
      }
    }

    div > div {
      width: 100%;
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-bottom: 24px;

      img {
        border-radius: 0px;
        height: 100%;
        min-height: 435px;
        width: 100%;
        min-width: 580px;
        object-fit: cover;
        transition: transform 0.35s;
        background-position: left !important;
        image-rendering: -webkit-optimize-contrast;
        &:hover {
          transform: scale(1.015);
        }
      }
    }
  }
`;
