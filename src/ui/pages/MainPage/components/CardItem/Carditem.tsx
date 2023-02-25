import React from 'react';
import StyledCardItem from './CardItem.style';

type PropsType = {
  card: {
    titleMobile?: string;
    image: string;
    title: string;
    text: string;
    link: string;
    arrow: string;
  };
};

const Carditem: React.FC<PropsType> = (props) => {
  const { card } = props;
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth <= 400);

  React.useEffect(() => {
    if (card.titleMobile) {
      window.addEventListener('resize', updateDimensions);
    }
    return () => window.removeEventListener('resize', updateDimensions);
  }, [card.titleMobile]);

  const updateDimensions = () => {
    setScreenWidth(window.innerWidth <= 400);
  };

  return (
    <StyledCardItem>
      <div
        className="card-item__main-block"
      >
        <div
          className="card-item__title-logo-block"
        >
          <img src={card.image} alt="logo card" />
          <h6
            className="card-item__title-web-screen"
          >{screenWidth && card.titleMobile ? card.titleMobile : card.title}
          </h6>
        </div>
        <p
          className="card-item__paragraph-text"
        >{card.text}
        </p>
        <div
          className="card-item__link-block"
        >
          <span>{card.link}</span>
          <img src={card.arrow} alt="right arrow" />
        </div>
      </div>
      <div
        className="card-item__blue-line"
      />
    </StyledCardItem>
  );
};

export default Carditem;
