import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
  }

  body{
    background-color: ${({ theme }) => theme.backgroundColor};
  }

  button{
    cursor: pointer;
  }

  html{
    font-size: 14px;
  }

  @media (max-width: 400px){
    font-size: 8px;
  }
`;
