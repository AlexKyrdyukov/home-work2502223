import React from 'react';
import Button from '../../../../components/Button';

import bisnesLedi from './images/bisnes_ledi.png';
import paginationleftArrow from './images/pagination_left_arrow.svg';
import paginationRightArrow from './images/pagination_right_arrow.svg';
import substract from './images/subtract.svg';
import rightArrow from './images/right_arrow.svg';

import StyledHighBanner from './HighBanner.style';

const HighBanner = () => (
  <StyledHighBanner>
    <div
      className="high-banner__block"
    >
      <h1
        className="high-banner-h1"
      >
        Unimos la data y el diseño centrado en el usuario para obtener resultados de negocio
      </h1>
      <div
        className="high-banner__button-block"
      >
        <Button
          className="high-banner__button"
        >Contáctanos
        </Button>
        <p
          className="high-banner__button-block-text"
        >Ver soluciones
        </p>
        <img src={rightArrow} alt="arrow" />
      </div>
      <div
        className="high-banner__info-blocks"
      >
        <div
          className="high-banner__info-block1"
        >
          <h2
            className="high-banner__info-title-count"
          >21
          </h2>
          <h5
            className="high-banner__info-title-text"
          >años de experiencia
          </h5>
        </div>
        <div
          className="high-banner__info-block2"
        >
          <h2
            className="high-banner__info-title-count"
          >+100
          </h2>
          <h5
            className="high-banner__info-title-text"
          >empresas en más de 15 sectores distintos
          </h5>
        </div>
        <div
          className="high-banner__info-block3"
        >
          <h2
            className="high-banner__info-title-count"
          >+800
          </h2>
          <h5
            className="high-banner__info-title-text"
          >proyectos ejecutados en los últimos 5 años
          </h5>
        </div>
      </div>
      <div
        className="high-banner__ledi-image-block"
      >
        <img
          className="high-banner__ledi-image"
          src={bisnesLedi} alt="bisnes ledi"
        />
      </div>
      <div
        className="high-banner__figure-block"
      >
        <img
          className="high-banner__figure-rectangle"
          src={substract} alt="rectangle"
        />
      </div>
      <div
        className="high-banner__pagination-block"
      >
        <div
          className="high-banner__pagination-left-hand-side"
        >
          <img src={paginationleftArrow} alt="left arrow" />
          <span>Anterior</span>
        </div>
        <div
          className="high-banner__pagination-center-block"
        >
          <div
            className="high-banner__pagination-center-element1"
          />
          <div
            className="high-banner__pagination-center-element2"
          />
          <div
            className="high-banner__pagination-center-element3"
          />
        </div>
        <div
          className="high-banner__pagination-right-hand-side"
        >
          <span>Siguiente</span>
          <img src={paginationRightArrow} alt="right arrow" />
        </div>
      </div>
    </div>
  </StyledHighBanner>
);

export default HighBanner;
