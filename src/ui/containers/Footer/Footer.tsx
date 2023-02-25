import React from 'react';

import aws from './images/aws.svg';
import googleCloud from './images/google_cloud.svg';
import googleMarket from './images/google_market.svg';
import hubspot from './images/hubspot.svg';
import salesForce from './images/sales_force.svg';

import StyledFooter from './Footer.style';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <h2
        className="footer__title"
      >Somos Partners
      </h2>
      <nav
        className="footer__content-block"
      >
        <a
          className="footer__link"
          href="https://marketingplatform.google.com/about/"
        >
          <img src={googleMarket} alt="logo google market" />
          <div>
            <p>Google</p>
            <p>Marketing Platform</p>
          </div>
        </a>
        <a
          className="footer__link"
          href="https://cloud.google.com/"
        >
          <img src={googleCloud} alt="logo google cloud" />
          <div>
            <p>Google</p>
            <p>Cloud</p>
          </div>
        </a>
        <a
          className="footer__link"
          href="https://www.salesforce.com/"
        >
          <img src={salesForce} alt="logo sales force" />
        </a>
        <a
          className="footer__link"
          href="https://www.hubspot.com/"
        >
          <img src={hubspot} alt="logo hubspot" />
        </a>
        <a
          className="footer__link"
          href="https://aws.amazon.com/ru/"
        >
          <img src={aws} alt="aws logo" />
        </a>
      </nav>
    </StyledFooter>
  );
};

export default Footer;
