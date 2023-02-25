import React from 'react';
import Checkbox from '../Checkbox';

import image_1 from './images/descar.svg';
import image_2 from './images/webbinar.svg';
import StyledResursosDropDown from './ResursosDropDown.style';

const ResursosDropDown: React.FC = () => {
  const resursesList = [
    {
      image: image_2,
      title: 'Descargables',
    },
    {
      image: image_1,
      title: 'Webinnars',
    },
  ];
  return (
    <StyledResursosDropDown>
      <div
        className="drop-down__triangle"
      />
      {resursesList.map((item) => (
        <Checkbox key={item.title}
          element={item}
        />
      ))}
    </StyledResursosDropDown>
  );
};

export default ResursosDropDown;
