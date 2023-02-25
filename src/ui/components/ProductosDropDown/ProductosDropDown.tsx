import React from 'react';

import Checkbox from '../Checkbox';

import image_1 from './images/cube_union.svg';
import image_2 from './images/human_head.svg';

import StyledProductosDropDown from './ProductosDropDown.style';

const ProductosDropDown: React.FC = () => {
  const productList = [
    {
      image: image_2,
      title: 'Neo Digital Skills',
    },
    {
      image: image_1,
      title: 'Otros',
    },
  ];
  return (
    <StyledProductosDropDown>
      <div
        className="drop-down__triangle"
      />
      {productList.map((item) => (
        <Checkbox key={item.title}
          element={item}
        />
      ))}
    </StyledProductosDropDown>
  );
};

export default ProductosDropDown;
