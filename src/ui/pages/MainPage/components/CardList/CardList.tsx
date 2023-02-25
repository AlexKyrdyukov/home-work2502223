import React from 'react';

import image_1 from './images/image_1.svg';
import image_2 from './images/image_2.svg';
import image_3 from './images/image_3.svg';
import image_4 from './images/image_4.svg';
import image_5 from './images/image_5.svg';
import image_6 from './images/image_6.svg';
import image_7 from './images/image_7.svg';
import image_8 from './images/image_8.svg';
import right_arrow from './images/right_arrow.svg';

import StyledCardList from './CardList.style';
import Carditem from '../CardItem/Carditem';

const CardList: React.FC = () => {
  const cardList = [
    {
      image: image_1,
      title: 'Canales digitales y Growth Haking',
      text: 'Atrae más clientes a través de Canales digitales y potencia tus resultados con Growth Hacking.',
      link: 'Ver servicios',
      arrow: right_arrow,
    },
    {
      image: image_2,
      title: 'E-commerce',
      text: 'Desarrolla estrategias que impulsen tu e-commerce.',
      link: 'Ver servicios',
      arrow: right_arrow,
    }, {
      image: image_3,
      title: 'Headhunting y Mentoring',
      text: 'Recluta, selecciona personal y forma talento digital de alto performance.',
      link: 'Ver servicios',
      arrow: right_arrow,
    }, {
      image: image_4,
      title: 'Consultoría CRM',
      text: 'Crea, desarrolla y mejora la relación con tus clientes.',
      link: 'Ver servicios',
      arrow: right_arrow,
    }, {
      image: image_5,
      title: 'Analítica Digital e Inteligencia Artificial',
      text: 'Mide, visualiza y capitaliza la data de tu empresa.',
      link: 'Ver servicios',
      arrow: right_arrow,
    }, {
      image: image_6,
      title: 'Diseño de experiencia y Transformación Digital',
      titleMobile: 'Diseño de experiencia',
      text: 'Conoce y mejora la experiencia UX/UI de los usuarios en mis activos digitales.',
      link: 'Ver servicios',
      arrow: right_arrow,
    }, {
      image: image_7,
      title: 'Publicidad digital',
      text: 'Logra tus objetivos de negocio usando medios digitales pagados y SEM.',
      link: 'Ver servicios',
      arrow: right_arrow,
    }, {
      image: image_8,
      title: 'Marketing Automation',
      text: 'Automatiza acciones, entrega contenido personalizado y fideliza a los clientes con nuestras soluciones.',
      link: 'Ver servicios',
      arrow: right_arrow,
    },
  ];

  return (
    <StyledCardList>
      {cardList.map((item) => (
        <Carditem
          key={item.text}
          card={item}
        />
      ))}
    </StyledCardList>
  );
};

export default CardList;
