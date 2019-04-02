import React from 'react';
import styled from 'styled-components';
import { GoMarkGithub } from 'react-icons/go';
import { FaDesktop } from 'react-icons/fa';
import MiniButton from './MiniButton';

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
