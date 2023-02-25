import React from 'react';
import CardList from '../CardList';

import StyledLowBanner from './LowBanner.style';

const LowBanner = () => {
  return (
    <StyledLowBanner>
      <div
        className="low-banner__block"
      >
        <h3
          className="low-banner__title"
        >Contamos con soluciones en
        </h3>
        <CardList />
      </div>
    </StyledLowBanner>
  );
};

export default LowBanner;
