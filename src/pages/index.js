import React, { Component } from 'react';
import Intro from '../components/Intro';
import Content from '../components/Content';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Container = styled.div`
    background: #707070;
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
            <Container>
                <Intro />
                <Content currentContent={this.state.content} />
                <Footer
                    setHome={this._setHome}
                    setPortfolio={this._setPortfolio}
                />
            </Container>
        );
    }
}

export default Home;
