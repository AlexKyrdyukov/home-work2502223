import React from 'react';

import StyledChecbox from './Checkbox.style';

type PropsType = {
  element: {
    image: string;
    title: string;
  };
};

const Checkbox: React.FC<PropsType> = (props) => {
  const { element } = props;
  return (
    <StyledChecbox
    >
      <img
        className="checkbox__image"
        src={element.image} alt="logo"
      />
      <p
        className="checkbox__text"
      >{element.title}
      </p>
    </StyledChecbox>
  );
};

export default Checkbox;
