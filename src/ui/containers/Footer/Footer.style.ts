import styled from 'styled-components';

const StyledFooter = styled.footer`
 @font-face {
    font-family: 'Tiempos Headline Medium';
    src: url('TiemposHeadline-Medium.eot');
    src: url('TiemposHeadline-Medium.eot?#iefix') format('embedded-opentype'),
    url('TiemposHeadline-Medium.woff') format('woff'),
    url('TiemposHeadline-Medium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    }
  max-width: 1540px;
  margin: 0px auto;

  .footer__title {
    font-family: 'Tiempos Headline Medium';
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    display: flex;
    justify-content: center;
    color: #000033;
    margin-bottom: 48px;
  }

  .footer__content-block {
    padding-right: 145px;
    padding-left: 145px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 110px;
  }

  .footer__link {
    display: flex;
    align-items: center;

    & img {
      margin-right: 7px;
    }

    & p {
      color: #000;
    }
  }

  @media (max-width: 400px)  {

    .footer__title {
      font-size: 24px;
    }

    .footer__content-block {
    padding-right: 20px;
    padding-left: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 8px;
    grid-row-gap: 26px;
    }
  }
`;

export default StyledFooter;
