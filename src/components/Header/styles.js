import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.elementColor};
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 32px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.04);

  h1{
    font-size: 1.5rem;
  }

  button{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.elementColor};
    border: none;

    img{
      width: 1rem;
      margin-right: 8px;
    }
  }

  @media (max-width: 400px){
    h1{
      font-size: 1rem;
    }
  }
`;
