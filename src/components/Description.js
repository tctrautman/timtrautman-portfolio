import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
    text-align: left;
    min-height: 315px;
    margin-top: 0px;

    h2 {
        font-size: 25px;
        text-align: center;
    }
`;

const Description = props => (
    <DescriptionContainer>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </DescriptionContainer>
)

export default Description;
