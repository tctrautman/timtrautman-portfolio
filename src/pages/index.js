import React, { Component } from 'react';
import Intro from '../components/Intro';
import Content from '../components/Content';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
    fontFamily: 'Roboto',
    background: '#707070'
}

const GlobalContainer = createGlobalStyle`
    html {
        background: #707070;
        height: 100%;
        width: 100%;
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
            content: 'home'
        }
    }

    _setHome = () => {
        this.setState({'content': 'home'});
    }

    _setPortfolio = () => {
        this.setState({'content': 'portfolio'})
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <GlobalContainer />
                    <Container>
                        <Intro />
                        <Content currentContent={this.state.content} />
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
