import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  h3{
    margin-right: 8px;
  }

  img{
    max-width: 480px;
    margin-right: 100px;
  }

  @media (max-width: 890px){
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    img{
      margin-right: 0;
    }
  }

  @media (max-width: 540px){
    img{
      width: 360px;
      margin-bottom: 32px;
    }
  }

  @media(max-width: 400px){
    img{
      width: 240px;
    }
  }
`;
