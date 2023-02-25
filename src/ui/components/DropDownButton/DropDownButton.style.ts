import styled from 'styled-components';

const StyledDropDownButton = styled.div`
  position: relative;
  color: #F4F2FA;
  font-weight: 700;
  font-size: 18px;

  .drop-down__block {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .arrow {
    width: 12px;
    height: 12px;
    border-top: 1px solid #F4F2FA;
    border-right: 1px solid #F4F2FA;
    transform: rotate(45deg);
    margin-left: 12px;
  }

  .arrow-bottom {
      transform: rotate(135deg); 
  }

  .drop-down__container {
    z-index: 4;
    position: absolute;
    top: 70px;
  }

`;

export default StyledDropDownButton;
