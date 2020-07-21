import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
    /*display: flex;*/
    justify-content: center;
  }
  body {
    background:#222933;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    color: #222;
    font: 14px;
    font-family:sans-serif;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }

`;

/*
@import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');
 'Roboto'


*/
