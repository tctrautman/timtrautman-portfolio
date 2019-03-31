import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
    text-align: left;

    h2 {
        font-size: 20px;
    }
`;

const Description = props => (
    <DescriptionContainer>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </DescriptionContainer>
)

export default Description;
