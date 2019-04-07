import React from 'react';
import styled from 'styled-components';
import getColorType from './Project';

const MiniButtonContainer = styled.a`
    color: ${props => props.theme.color};
    display: inline-flex;
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 15px;
    cursor: pointer;
`;

const MiniButton = props => (
    <MiniButtonContainer
        type={props.type}
        href={props.link}
        onClick={props.handler}
    >
        {props.icon}
    </MiniButtonContainer>
);

export default MiniButton;
