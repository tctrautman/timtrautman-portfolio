import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    border-color: #FFDA9D;
    border-width: 1px;
    border-style: solid;
    border-radius: 20%;
    margin: 10px;
    max-width: 70px;
    display: inline-block;

    div {
        padding-top: 7px;
        padding-bottom: 7px;
    }

    p {
        margin: 0;
    }

    a {
        color: #FFDA90;
        text-decoration: none;
        cursor: pointer;
    }
`;

const Button = props => {
    const activeIcon = props.icon;
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
