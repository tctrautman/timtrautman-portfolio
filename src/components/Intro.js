import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: #707070;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 54px;
    color: #FFDA9D;
    text-align: center;
    height: 100%;
    padding: 0px;
    margin: 20px;
    padding: 20px;

    img {
        border-radius: 50%;
        max-height: 250px;
        max-height: 250px
    }
`;

const Intro = props => (
    <Container>
        <img src="https://s3.amazonaws.com/tt-personal-site/timpicture.jpg" alt="Photo of Tim"/>
        <div>hey, I'm Tim</div>
    </Container>
);

export default Intro;
