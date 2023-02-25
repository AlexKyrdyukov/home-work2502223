import React from 'react';
import HighBanner from './components/HighBanner';
import LowBanner from './components/LowBanner';

import StyledMainPage from './MainPage.style';

const MainPage: React.FC = () => {
  return (
    <StyledMainPage>
      <HighBanner />
      <LowBanner />
    </StyledMainPage>
  );
};

export default MainPage;
