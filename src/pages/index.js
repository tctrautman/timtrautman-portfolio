import React, { Component } from 'react';
import projects from '../projects';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { CSSTransition } from 'react-transition-group';
import Content from '../components/Content';
import Footer from '../components/Footer';

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
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Tim Trautman</title>
                    </Helmet>
                    <GlobalContainer />
                        <Container>
                            <CSSTransition 
                                in={true}
                                appear={true}
                                timeout={2000}
                                classNames="fade"
                            >
                                <div>
                                    <Content
                                        currentContent={this.state.content}
                                        mode={this.state.mode}
                                        projects={this.state.projects}
                                        setFlipped={this._setFlipped}
                                    />
                                    <Footer
                                        setHome={this._setHome}
                                        setPortfolio={this._setPortfolio}
                                        content={this.state.content}
                                    />
                                </div>
                            </CSSTransition>
                        </Container>
                </React.Fragment>
            </ThemeProvider>
        );
    }
}

export default Home;
