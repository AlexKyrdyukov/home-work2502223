import styled from 'styled-components';

const StyledHighBanner = styled.section`
  background: #100FA8;
  overflow: hidden;
  
  .high-banner__block {
    position: relative;
    margin: 0px auto;
    max-width: 1540px;
    padding-left: 144px;


  display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .high-banner-h1 {
    grid-area: 2 / 1 / 4 / 2;
    max-width: 607px;
    font-style: normal;
    font-weight: 600;
    font-size: 52px;
    color: #FFFFFF;
    line-height: 63px;
  }

  .high-banner__button-block {
    grid-area: 4 / 1 / 5 / 2;
    display: flex;
    align-items: center;
    margin-bottom: 72px;
  }

  .high-banner__button {
    color: #000033;
    background: #FFFFFF;
    border-radius: 3px;
    padding: 10px 20px;
    margin-right: 55px;
    font-weight: 700;
    font-size: 18px;
  }

  .high-banner__button-block-text {
    color: #F4F2FA;
    font-weight: 600;
    font-size: 18px;
    margin-right: 8px;
  }

  .high-banner__info-blocks {
    grid-area: 5 / 1 / 6 / 2;
    display: flex;
  }

  .high-banner__info-block1 {
    width: 185px;
  }

    .high-banner__info-block2 {
    max-width: 189px;
  }

    .high-banner__info-block3 {
    max-width: 170px;
  }

  .high-banner__info-title-count {
    font-weight: 700;
    font-size: 40px;
    color: #FFFFFF;
    margin-bottom: 5px;
  }

  .high-banner__info-title-text {
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
  }

  .high-banner__ledi-image-block {
    grid-area: 1 / 2 / 7 / 3;
    z-index: 2;
  }

  .high-banner__ledi-image {
    padding-top: 50px;
  }

  .high-banner__figure-block {
    position: absolute;
    right: 0px;
    bottom: 0px;
    z-index: 0;
  }

  .high-banner__figure-rectangle {
    margin-right: 15px;
  }

  .high-banner__pagination-block {
    z-index: 5;
    padding-left: 144px;
    position: absolute;
    width: 1540px;
    bottom: 64px;
    padding-right: 144px;
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 18px;
  }

  .high-banner__pagination-left-hand-side {
    display: flex;
    align-items: center;

    & img {
      margin-right: 8px;
    }
  }

  .high-banner__pagination-right-hand-side {
    display: flex;
    align-items: center;

    & span {
      margin-right: 8px;
    }
  }

  .high-banner__pagination-center-block{
    display: flex;
    align-items: center;
    column-gap: 20px;
  }

  .high-banner__pagination-center-element1 {
    background: #FFFFFF;
    width: 54px;
    height: 8px;
    border-radius: 4px;
  }

  .high-banner__pagination-center-element2 {
    background: #CECFFB;
    opacity: 0.6;
    width: 54px;
    height: 8px;
    border-radius: 4px;
  }
  
  .high-banner__pagination-center-element3 {
    background: #CECFFB;
    opacity: 0.6;
    width: 54px;
    height: 8px;
    border-radius: 4px;
  }

  @media (max-width: 1480px)  { 
    .high-banner-h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 1354px)  {
  .high-banner__block {
    padding-left: 80px;
  }
    .high-banner-h1 {
      font-size: 32px;
    }
  }

  @media (max-width: 400px)  {

  .high-banner__block {
    max-width: 320px;
    padding-left: 20px;
    padding-right: 20px;
    display: block;
    position: relative;
  }

  .high-banner-h1{
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 24px;
  }

  .high-banner__button-block {
    margin-bottom: 24px;
  }

  .high-banner__info-blocks {
    flex-wrap: wrap;
    padding-bottom: 70px;
  }

  .high-banner__info-title-count {
    font-size: 24px;
  }

  .high-banner__info-title-text {
    font-size: 14px;
  }

  .high-banner__info-block1 {
    width: 82px;
    margin-right: 16px;
  }

  .high-banner__info-block2 {
    width: 150px;
  }

  .high-banner__info-block3 {
    margin-top: 32px;
    width: 110px;
  }

  .high-banner__ledi-image-block {
    position: absolute;
    right: -30px;
    bottom: 0px;
    width: 217.12px;
    height: 242.92px;
  }

  .high-banner__ledi-image {
    height: 100%;
    width: 100%;
  }


  .high-banner__figure-block {
    width: 444px;
    height: 175px;
    right: -180px; 
    bottom: -60px;
  }

  .high-banner__figure-rectangle {
    width: 100%;
    height: 100%;
  }

  .high-banner__pagination-block {
    width: 204px;
    padding-left: 30px;
    bottom: 12px;
  }

  .high-banner__pagination-left-hand-side {
    & span {
      display: none;
    }
  }

    .high-banner__pagination-right-hand-side {
    & span {
      display: none;
    }
  }

  .high-banner__pagination-center-element1 {
    width: 24px;
    height: 4px;
  }

    .high-banner__pagination-center-element2 {
    width: 24px;
    height: 4px;
  }

  .high-banner__pagination-center-element3 {
    width: 24px;
    height: 4px;
  }

  .high-banner__button {
    font-size: 14px;
    margin-right: 20px;
  }

  .high-banner__button-block-text {
    white-space: nowrap;
    font-size: 14px;
  }

  .high-banner__pagination-center-block{
    column-gap: 8px;
  }

    .high-banner__pagination-left-hand-side {
    display: flex;
    align-items: center;

    & img {
      margin-right: 40px;
    }
  }

  .high-banner__pagination-right-hand-side {
    display: flex;
    align-items: center;

    & img {
      margin-left: 40px;
    }
  }

  }
`;

export default StyledHighBanner;
