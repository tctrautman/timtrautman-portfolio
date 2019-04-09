import React, { Component } from 'react';
import Intro from '../components/Intro';
import Content from '../components/Content';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import projects from '../projects';

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
            mode: 'dark',
            projects: projects
        }
    }

    _setHome = (e) => {
        this.setState({'content': 'home'});
    }

    _setPortfolio = (e) => {
        this.setState({'content': 'portfolio'})
    }

    _setMode = () => {
        const nextMode = this.state.mode === 'dark' ? 'light' : 'dark';
        this.setState({'mode': nextMode})
    }

    _setFlipped = (title) => {
        let projects = this.state.projects.slice();
        let flippedIndex;

        projects.forEach((proj, ind) => {
            if (proj.title === title) {
                flippedIndex = ind;
            }
        });

        projects[flippedIndex].flipped = !projects[flippedIndex].flipped;
        this.setState({'projects': projects});
    }

    render() {
        return (
            <ThemeProvider theme={
                this.state.mode === 'dark'
                ? darkTheme
                : lightTheme}
            >
                <React.Fragment>
                    <GlobalContainer />
                    <Container>
                        <Intro
                            mode={this.state.mode}
                            setMode={this._setMode}
                        />
                        <Content
                            currentContent={this.state.content}
                            mode={this.state.mode}
                            projects={this.state.projects}
                            setFlipped={this._setFlipped}
                        />
                        <br/>
                        <Footer
                            setHome={this._setHome}
                            setPortfolio={this._setPortfolio}
                            content={this.state.content}
                        />
                    </Container>
                </React.Fragment>
            </ThemeProvider>
        );
    }
}

export default Home;
