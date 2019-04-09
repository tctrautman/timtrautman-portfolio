import React from 'react';
import styled from 'styled-components';

const GifContainer = styled.div`
    width: 100%;
    float: left;
    margin: 0 auto;
    align-items: center;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    height: 220px;

    img {
        display: inline-block;
        max-width: 90%;
        height: auto;
        margin-bottom: 70px;
        vertical-align: middle;
    }
`;

const Gif = props => (
    <GifContainer>
        <img src={props.gifSrc} alt={props.description} />
    </GifContainer>
);

export default Gif;
