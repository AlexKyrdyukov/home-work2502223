import styled from 'styled-components';

const StyledCardList = styled.div`
  padding-left: 148px;
  padding-right: 148px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 23px;
  grid-row-gap: 40px;

  @media (max-width: 1354px)  {
    padding-left: 80px;
    padding-right: 80px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 30px;
  }

  @media (max-width: 400px)  { 
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default StyledCardList;
