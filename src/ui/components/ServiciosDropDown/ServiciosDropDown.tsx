import React from 'react';
import Checkbox from '../Checkbox';

import image_1 from '../../pages/MainPage/components/CardList/images/image_1.svg';
import image_2 from '../../pages/MainPage/components/CardList/images/image_2.svg';
import image_3 from '../../pages/MainPage/components/CardList/images/image_3.svg';
import image_4 from '../../pages/MainPage/components/CardList/images/image_4.svg';
import image_5 from '../../pages/MainPage/components/CardList/images/image_5.svg';
import image_6 from '../../pages/MainPage/components/CardList/images/image_6.svg';
import image_7 from '../../pages/MainPage/components/CardList/images/image_7.svg';
import image_8 from '../../pages/MainPage/components/CardList/images/image_8.svg';

import StyledServiciosDropDown from './ServiciosDropDown.style';

const ServiciosDropDown: React.FC = () => {
  const servicesList = [
    {
      image: image_1,
      title: 'Canales digitales y Growth Haking',
    },
    {
      image: image_2,
      title: 'E-commerce',
    },
    {
      image: image_3,
      title: 'Headhunting y Mentoring',
    },
    {
      image: image_4,
      title: 'Consultoría CRM',
    },
    {
      image: image_5,
      title: 'Analítica Digital e Inteligencia Artificial',
    },
    {
      image: image_6,
      title: 'Diseño de experiencia',
    },
    {
      image: image_7,
      title: 'Publicidad digital',
    },
    {
      image: image_8,
      title: 'Marketing Automation',
    },
  ];
  return (
    <StyledServiciosDropDown>
      <div
        className="drop-down__triangle"
      />
      {servicesList.map((item) => (
        <Checkbox key={item.title}
          element={item}
        />
      ))}
    </StyledServiciosDropDown>
  );
};

export default ServiciosDropDown;
