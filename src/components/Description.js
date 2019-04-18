import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
    text-align: left;
    margin-top: 0px;
    padding-left: 10px;
    padding-right: 10px;

    h3 {
        text-align: center;
    }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

const Description = props => (
    <DescriptionContainer>
        <p>{props.description}</p>
        <h3>Built using</h3>
        <ul>
            {props.builtUsing.map(tech => (
                <li key={`${props.title}-${tech}`}>{tech}</li>
            ))}
        </ul>
    </DescriptionContainer>
)

export default Description;
