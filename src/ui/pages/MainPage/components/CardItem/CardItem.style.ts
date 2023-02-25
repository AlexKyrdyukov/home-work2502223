import styled from 'styled-components';

const StyledCardItem = styled.div`
  position: relative;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0px 14px 24px rgba(0, 0, 51, 0.04);
  border: 0.5px solid #CCCCD6;

  .card-item__main-block {
    padding: 16px 25px;
  }

  .card-item__title-logo-block {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    & img {
      margin-right: 16px;
    }
  }

  .card-item__paragraph-text {
    font-weight: 500;
    color: #4D4D70;
    font-size: 18px;
    margin-bottom: 16px;
    line-height: 24px;
  }

  .card-item__title-web-screen {
    width: 302px;
    font-weight: 700;
    font-size: 20px;
    color: #000033;
  }

  .card-item__link-block {
    display: flex;
    align-items: center;

    & span {
      font-weight: 500;
      font-size: 18px;
      color: #000033;
      margin-right: 8px;
    }
  }

  .card-item__blue-line {
    position: absolute;
    bottom: 0px;
    background: #100FA8;
    height: 7px;
    width: 400px;
    border-radius: 0px 0px 8px 8px;
  }

  @media (max-width: 400px)  { 
    max-width: 136px;

    .card-item__paragraph-text {
      display: none;
    }

    .card-item__title-web-screen {
      font-size: 16px;
    }

  .card-item__blue-line {
        width: 136px;      
    }

    .card-item__link-block {
      
      & span {
        font-size: 14px;
        white-space: nowrap;
      }
    }

  .card-item__main-block {
    padding: 8px;
  }

  .card-item__title-logo-block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    & img {
      grid-area: 1 / 1 / 2 / 2;
    }
  }

  .card-item__title-web-screen {
    max-width: 120px;
    grid-area: 2 / 1 / 5 / 3;
  }

  .card-item__link-block {
    padding-bottom: 10px;
  }

  }
`;

export default StyledCardItem;
