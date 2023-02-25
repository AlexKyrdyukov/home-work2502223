import React from 'react';

import StyledButton from './Button.style';

type PropType = {
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
} & React.PropsWithChildren;

const Button: React.FC<PropType> = ({ children, ...props }) => {
  return (
    <StyledButton
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
