import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #100FA8;

  .header__block {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 90px;
    padding-right: 90px;
    display: grid;
    grid-template-columns: 123px auto 182px;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    max-width: 1540px;
    margin: 0px auto;
  }

  .header__mobile-navbar {
    display: none;
  }

  .header__logo-block {
    max-width: 123px;
    min-height: 40px;
    grid-area: 1 / 1 / 2 / 2;
  }

  .header__navbar {
    margin: 0px auto;
    grid-area: 1 / 2 / 2 / 3;
  }

    .header__logo {
      height: 100%;
      width: 100%;
    }

  .header-navbar__button-block {
    grid-area: 1 / 3 / 2 / 4;
  }

  .header-navbar__button {
    background: #100FA8;
    color: #F4F2FA;
    padding: 10px 20px;
    border-radius: 3px;
    border: 1px solid #F4F2FA;
    font-weight: 700;
    font-size: 18px;
  }


  @media (max-width: 800px)  {

    .header__block {
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 15px;
      padding-right: 15px;
    }

    .header__navbar {
      display: none;
    }
  }

  @media (max-width: 400px)  {
    .header__logo-block {
      grid-area: 1 / 2 / 2 / 4;
      max-width: 55px;
      height: 18px;
    }

    .header__block {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }

    .header__logo {
      width: 100%;
    }

    .header-navbar__button-block {
    grid-area: 1 / 5 / 2 / 8;
  }


  .header__mobile-navbar {
    display: block;
    grid-area: 1 / 1 / 2 / 2;
    padding-top: 10px;

    & p {
      margin-bottom: 7px;
      width: 24px;
      height: 2px;
      background-color: #FFFFFF;
      border-radius: 2px
    }
  }

  .header-navbar__button {
    font-weight: 500;
    font-size: 14px;
  }
  }
`;

export default StyledHeader;
