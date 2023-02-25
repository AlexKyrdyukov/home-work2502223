import styled from 'styled-components';

const StyledResursosDropDown = styled.div`
 background: #FFFFFF;
  border: 1px solid #CCCCD6;
  box-shadow: 0px 36px 64px rgba(0, 0, 51, 0.2);
  border-radius: 16px;
  position: relative;
  width: 255px;
  padding: 24px;

  .drop-down__triangle {
    position: absolute;
    top: -15px;
    left: 5px;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 24px solid #FFFFFF;
  }
`;

export default StyledResursosDropDown;
