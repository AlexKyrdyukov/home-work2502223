import styled from 'styled-components';

const StyledChecbox = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;

  .checkbox__image {
    padding-left: 13px;
  }

  .checkbox__text {
    color: #000033;
    padding: 10px;
    padding-top: 15px;
    font-weight: 700;
    font-size: 20px;
  }

  :hover {
    background: #F4F2FA;
    border-radius: 8px;
  }

  :active {
    background: #F4e5Ff;;
  }
`;

export default StyledChecbox;
