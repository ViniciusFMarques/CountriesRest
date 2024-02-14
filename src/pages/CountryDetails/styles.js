import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  margin-top: 32px;
`;

export const CountryDetailsHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .buttonContainer{
    width: 100px;
    position: relative;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.04);
    height: 32px;

      button{
      background-color: ${({ theme }) => theme.elementColor};
      color: ${({ theme }) => theme.textColor};
      border: none;
      border-radius: 8px;
      width: 100%;
      height: 100%;
    }

    img{
      width: 1rem;
      position: absolute;
      left: 16px;
      top: 9px;
    }
  }




`;
