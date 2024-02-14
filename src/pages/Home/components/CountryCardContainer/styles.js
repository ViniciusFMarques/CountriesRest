import styled, { css } from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;

  ${({ countryLength }) => (countryLength < 3) && css`
    justify-content: space-around;
  `};
  flex-wrap: wrap;
  width: 100%;
  margin-top: 24px;

  @media (max-width: 700px){
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
`;
