import React from 'react';
import classNames from 'classnames';
import type { JSXElementConstructor } from 'react';

import StyledDropDownButton from './DropDownButton.style';

type PropsType = {
  component: React.ReactElement<unknown | JSXElementConstructor<unknown>>;
  title: string;
};

const DropDownButton: React.FC<PropsType> = (props) => {
  const [buttonState, setButtonState] = React.useState<boolean>(false);
  const divElement = React.useRef<HTMLDivElement>(null);
  const handleClickOutside = (ev: MouseEvent): void => {
    if (divElement.current && !divElement.current.contains(ev.target as Node)) {
      setButtonState(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const arrow = classNames('arrow', {
    'arrow-bottom': buttonState,
  });
  return (
    <StyledDropDownButton
      ref={divElement}
    >
      <div
        className="drop-down__block"
        onClick={() => setButtonState(!buttonState)}
      >
        <h6>
          {props.title}
        </h6>
        <div className={arrow} />
      </div>
      {buttonState
        ? <div className="drop-down__container">{props.component}</div>
        : null}
    </StyledDropDownButton>
  );
};

export default DropDownButton;
