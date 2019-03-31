import React from 'react';
import styled from 'styled-components';
import { GoMarkGithub } from 'react-icons/go';
import { FaDesktop } from 'react-icons/fa';

const GifContainer = styled.div`
    width: 33%;
    float: left;

    img {
        max-height: 100px;
        max-width: 100px;
        display: block;
        margin: 0 auto;
    }
`;

const MiniButtonContainer = styled.a`
    color: #FFDA9D;
    display: inline-flex;
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 15px;
`;

const MiniButton = props => (
    <MiniButtonContainer href={props.link}>
        {props.icon}
    </MiniButtonContainer>
);

const Gif = props => (
    <GifContainer>
        <img src={props.gifSrc} alt={props.description} />
        <MiniButton
            icon={<GoMarkGithub />}
            link={props.github}
        />
        {props.link && <MiniButton
            icon={<FaDesktop />}
            link={props.link}
        />}
    </GifContainer>
);

export default Gif;
