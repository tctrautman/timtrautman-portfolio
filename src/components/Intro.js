import React from 'react';
import styled from 'styled-components';
import MiniButton from './MiniButton';
import { FaSun } from 'react-icons/fa';

const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 54px;
    color: #FFDA9D;
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
`;

const Intro = props => (
    <Container>
        <MiniButton
            icon={<FaSun />}
            link="www.google.com"
        />
        <br/>
        <br/>
        <img src="https://s3.amazonaws.com/tt-personal-site/timpicture.jpg" alt="Tim"/>
        <br/><br/>
        <div>hey, I'm Tim</div>
        <br/>
    </Container>
);

export default Intro;
