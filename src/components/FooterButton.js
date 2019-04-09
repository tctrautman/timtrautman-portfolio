import React from 'react';
import styled from 'styled-components';

let invertColors = (props, cssProp) => {
    const title = props.title;
    const content = props.content;

    if ((title === "Home" && content === "home")
        || (title === "Portfolio" && content === "portfolio")) {
            return cssProp === "background" ? props.theme.color : props.theme.background;
        } else {
            return cssProp === "background" ? props.theme.background : props.theme.color;
    }
}

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
    background: ${props => invertColors(props, "background")};
    
    div {
        padding-top: 7px;
        padding-bottom: 7px;
    }

    p {
        margin: 0;
    }

    a, a:link, a:visited, a:active {
        color: ${props => invertColors(props, "color")};
        text-decoration: none;
        cursor: pointer;
    }
`;

const FooterContentButton = props => {
    return (
        <IconContainer title={props.title} content={props.content}>
            <a onClick={props.handler} href={props.path}>
                <div>
                    {props.icon}
                    <p>{props.title}</p>
                </div>
            </a>
        </IconContainer>
    );
};

export default FooterContentButton;
