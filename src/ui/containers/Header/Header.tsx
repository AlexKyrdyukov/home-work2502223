import React from 'react';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';

import logo from './images/logo_neo.svg';
import StyledHeader from './Header.style';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div className="header__block">
        <div
          className="header__mobile-navbar"
        >
          <p />
          <p />
          <p />
        </div>
        <div
          className="header__logo-block"
        >
          <img
            className="header__logo"
            src={logo} alt="logo"
          />
        </div>
        <Navbar
          className="header__navbar"
        />
        <div
          className="header-navbar__button-block"
        >
          <Button
            className="header-navbar__button"
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
