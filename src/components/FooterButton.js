import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    border-color: ${props => props.theme.color};
    border-width: 1px;
    border-style: solid;
    border-radius: 20%;
    margin-top: 10px;
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 13px;
    max-width: 70px;
    display: inline-block;
    font-size: 13px;
    color: ${props => props.theme.color};
    
    div {
        padding-top: 7px;
        padding-bottom: 7px;
    }

    p {
        margin: 0;
    }

    a, a:link, a:visited, a:active {
        color: ${props => props.theme.color};
        text-decoration: none;
        cursor: pointer;
    }
`;

const Button = props => {
    return (
        <IconContainer>
            <a onClick={props.handler} href={props.path}>
                <div>
                    {props.icon}
                    <p>{props.title}</p>
                </div>
            </a>
        </IconContainer>
    );
};

export default Button;
