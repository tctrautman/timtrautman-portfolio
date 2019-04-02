import React from 'react';
import styled from 'styled-components';

const MiniButtonContainer = styled.a`
    color: #FFDA9D;
    display: inline-flex;
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 15px;
`;

const MiniButton = props => (
    <MiniButtonContainer href={props.link} onClick={props.handler}>
        {props.icon}
    </MiniButtonContainer>
);

export default MiniButton;
