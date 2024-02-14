import styled from 'styled-components';

export const SelectContainer = styled.div`
  height: 48px;
  color: ${({ theme }) => theme.inputTextColor};
  position: relative;
  border-radius: 8px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.04);
  width: 250px;

  *{
    cursor: pointer;
  }

  select{
    background-color: ${({ theme }) => theme.elementColor};
    padding: 0 32px 0 32px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: none;
    appearance: none;
    &:focus{
      outline: none;
    }
  }

  img{
    position: absolute;
    right: 0;
    width: 1rem;
    top: 18px;
    right: 16px;
  }

  @media (max-width: 400px){
    width: 200px;
  }
`;
