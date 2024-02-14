import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  margin-top: 32px;
`;

export const HomeHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 860px){
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InputContainer = styled.div`
   position: relative;

   input{
    background-color: ${({ theme }) => theme.elementColor};
    color: ${({ theme }) => theme.inputTextColor};
    border: none;
    width: 480px;
    border-radius: 8px;
    left: 0;
    padding-left: 42px;
    height: 48px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.04);

    &:focus{
      outline: none
    }
  }

  img{
    position: absolute;
    width: 1rem;
    top: 18px;
    left: 16px;
  }

  @media (max-width: 860px){
    margin-bottom: 32px;
  }

  @media (max-width: 540px){
    width: 100%;
    input{
      width: 100%;
    }
  }
`;
