import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;

  h1{
    margin-bottom: 8px;
    font-weight: 800;
  }
`;

export const MidContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  max-height: 140px;
  margin-bottom: 32px;

  p{
    margin-top: 8px;
    margin-right: 8px;
    font-weight: 300;

    strong{
      font-weight: 600;
    }
  }

  @media (max-width: 1025px){
    max-height: none;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h3{
    font-weight: 300;
  }

  .borderCountries{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    span{
      background-color: ${({ theme }) => theme.elementColor};
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.04);
      margin-right: 8px;
      padding: 4px 16px;
      border-radius: 8px;
      margin: 8px 8px 8px 0;
    }
  }
  @media (max-width: 1025px){
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;

    h3{
      margin-bottom: 8px;
    }
  }
`;
