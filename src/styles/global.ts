import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  } 
  html {
    font-size: 62.5%;
    line-height: 1.6;
  }
  body {
    background-color: #333333;
  }
  button {
    cursor: pointer;
    border: none;
    background: none;
  }
  button:disabled {
    cursor: auto;
  }
  .is-active {
    font-weight: bold;
  }
`;
