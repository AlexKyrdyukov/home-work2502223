import React from 'react';
import Button from '../Button';

import DropDownButton from '../DropDownButton/DropDownButton';
import ProductosDropDown from '../ProductosDropDown/ProductosDropDown';
import ResursosDropDown from '../ResursosDropDown/ResursosDropDown';
import ServiciosDropDown from '../ServiciosDropDown/ServiciosDropDown';
import StyledNavbar from './Navbar.style';

type PropsType = {
  className: string;
};

const Navbar: React.FC<PropsType> = (props) => {
  return (
    <StyledNavbar
      className={props.className}
    >
      <DropDownButton
        title="Servicios"
        component={<ServiciosDropDown />}
      />
      <DropDownButton
        title="Productos"
        component={<ProductosDropDown />}
      />
      <DropDownButton
        title="Recursos"
        component={<ResursosDropDown />}
      />
      <Button
        className="navbar__button"
      >Casos de exito
      </Button>
      <Button
        className="navbar__button"
      >Blog
      </Button>
    </StyledNavbar>
  );
};

export default Navbar;
