import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    border-color: #FFDA9D;
    border-width: 1px;
    border-style: solid;
    border-radius: 20%;
    margin-top: 10px;
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 13px;
    max-width: 70px;
    display: inline-block;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-size: 13px;
    
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
