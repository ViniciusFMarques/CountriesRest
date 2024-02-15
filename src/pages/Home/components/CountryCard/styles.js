import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 280px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  height: 360px;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.elementColor};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  *{
    text-decoration: none;
  }

  &:hover{
    transform: scale(1.1);
  }

  @media (max-width: 470px){
    width: 224px;
    height: 390px;

    &:hover{
      transform: scale(1.1);
    }
  }
`;

export const ImageContainer = styled.div`
  background-size: cover;
  height: 50%;
  width: 100%;
  border-radius: 8px 8px 0 0;
`;

export const TextContainer = styled.div`
  padding: 12px 8px 32px 8px;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 50%;

  h1{
    font-weight: 800;
    margin-bottom: 16px;
    text-decoration: none;
    font-size: 1.3rem;
  }
`;

export const SubTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  strong{
    font-weight: 600;
    font-size: 1rem;
  }

  p{
    margin-top: 8px;
  }

  span{
    font-weight: 300;
    font-size: 0.9rem;
  }
`;
