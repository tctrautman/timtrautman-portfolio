import React from 'react';
import styled from 'styled-components';

const GifContainer = styled.div`
    width: 100%;
    float: left;
    margin: 0 auto;
    align-items: center;

    img {
        max-width: 90%;
        height: auto;
        margin-bottom: 5px;
    }
`;

const Gif = props => (
    <GifContainer>
        <img src={props.gifSrc} alt={props.description} />
    </GifContainer>
);

export default Gif;
