import styled from 'styled-components';

const StyledLowBanner = styled.section`
  @font-face {
    font-family: 'Tiempos Headline Medium';
    src: url('TiemposHeadline-Medium.eot');
    src: url('TiemposHeadline-Medium.eot?#iefix') format('embedded-opentype'),
    url('TiemposHeadline-Medium.woff') format('woff'),
    url('TiemposHeadline-Medium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    }
    margin-bottom: 128px;
    
    .low-banner__block {
      margin: 0px auto;
      padding-top: 128px;
      max-width: 1540px;
    }

    .low-banner__title {
      font-family: 'Tiempos Headline Medium';
      font-weight: 500;
      font-size: 48px;
      color: #000033;
      display: flex;
      justify-content: center;
      padding-bottom: 48px;
      }

    @media (max-width: 400px)  {
      margin-bottom: 64px;

    .low-banner__title {
      margin: 0px auto;
      font-weight: 500;
      font-size: 24px;
      max-width: 140px;
      padding-bottom: 64px;
    }

    .low-banner__block {
      padding-top: 64px;
      max-width: 320px;
    }
    }
`;

export default StyledLowBanner;
