import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 54px;
    color: ${props => props.theme.color};
    text-align: center;
    height: 100%;
    padding: 0px;
    margin: 0px;

    img {
        border-radius: 50%;
        max-height: 250px;
        max-height: 250px;
        margin-top: 10px;
    }

    a {
        display: block;
        float: left;
    }

    h2 {
        font-size: 54px;
        font-weight: 100;
    }

`;

const Intro = props => (
    <Container>
        <br/>
        <img src="https://s3.amazonaws.com/tt-personal-site/timpicture.jpg" alt="Tim"/>
        <br/><br/>
        <h2>hey, I'm Tim</h2>
        <br/>
    </Container>
);

export default Intro;
