"use client"
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito';
    }
    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Nunito', sans-serif;
        margin: 0;
    }
    a{
        all: unset;
        cursor: pointer;
    }
    a:hover{
        opacity: 0.9;
    }
`