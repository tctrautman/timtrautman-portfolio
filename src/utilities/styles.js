import { createGlobalStyle } from 'styled-components';

const darkTheme = {
    background: '#4A4A4A',
    color: `#FFDA9D`,

    a: {
        color: '#9DDAFF'
    },

    fullStack: {
        color: '#FFDA9D',
    },

    frontEnd: {
        color: `#FFDA9D`,
    }
};

const lightTheme = {
    background: '#FFFAB9',
    color: '#84B0E3',

    a: {
        color: '#7F6986'
    }
};

const GlobalContainer = createGlobalStyle`
    html {
        background: ${props => props.theme.background};
        height: 100%;
        width: 100%;
        color: ${props => props.theme.color};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        box-sizing: border-box;
    }

    body {
        height: 100%;
        width: 100%;
    }

    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    color: #FFDA9D;
    text-align: center;
    width: 100%;

    .fade-appear {
        opacity: 0;
        z-index: 1;
    }

    .fade-appear.fade-appear-active {
        opacity: 1;
        transition: opacity 2000ms linear;
    }

    .fade-enter {
        opacity: 0;
        z-index: 1;
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 2000ms linear;
    }
`;

export {darkTheme, lightTheme, GlobalContainer}
