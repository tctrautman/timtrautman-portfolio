import React, { Component } from 'react';
import Intro from '../components/Intro';
import Content from '../components/Content';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const darkTheme = {
    background: '#4A4A4A',
    color: `#FFDA9D`,

    a: {
        color: '#9DDAFF'
    }
};

const lightTheme = {
    background: '#FFFAB9',
    color: '#84B0E3',

    a: {
        color: '#7F6986'
    }
};

const DarkGlobalContainer = createGlobalStyle`
    html {
        background: #4A4A4A;
        height: 100%;
        width: 100%;
        color: #FFDA9D;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    body {
        height: 100%;
        width: 100%;
    }
`;

const LightGlobalContainer = createGlobalStyle`
    html {
        background: #FFFAB9;
        height: 100%;
        width: 100%;
        color: black;
    }

    body {
        height: 100%;
        width: 100%;
    }
`;

const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    color: #FFDA9D;
    text-align: center;
    width: 100%;
`;

class Home extends Component {
    constructor() {
        super();
        this.state = {
            content: 'home',
            mode: 'dark'
        }
    }

    _setHome = () => {
        this.setState({'content': 'home'});
    }

    _setPortfolio = () => {
        this.setState({'content': 'portfolio'})
    }

    _setMode = () => {
        const nextMode = this.state.mode === 'dark' ? 'light' : 'dark';
        this.setState({'mode': nextMode})
    }

    render() {
        return (
            <ThemeProvider theme={
                this.state.mode === 'dark'
                ? darkTheme
                : lightTheme}
            >
                <React.Fragment>
                    {this.state.mode === 'dark'
                        ? <DarkGlobalContainer />
                        : <LightGlobalContainer />
                    }
                    <Container>
                        <Intro
                            mode={this.state.mode}
                            setMode={this._setMode}
                        />
                        <Content
                            currentContent={this.state.content}
                            mode={this.state.mode}
                        />
                        <br/>
                        <Footer
                            setHome={this._setHome}
                            setPortfolio={this._setPortfolio}
                        />
                    </Container>
                </React.Fragment>
            </ThemeProvider>
        );
    }
}

export default Home;
