import React from 'react';
import { FaHome, FaPaintBrush, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import styled from 'styled-components';
import Button from './FooterButton';

const FooterContainer = styled.div`
    padding-bottom: 0px;
    .divider {
        display: inline-block;
        min-width: 40px;
    }

    .firstRow {
        display: inline-block;
        justify-self: center;
    }

    .secondRow {
        display: inline-block;
        justify-self: center;
    }
`;

const Footer = props => (
    <FooterContainer>
        <div className="divider" />
        <div className="firstRow">
            <Button
                title="Home"
                icon={<FaHome />}
                handler={props.setHome}
                content={props.content}
            />
            <Button
                title="Portfolio"
                icon={<FaPaintBrush />}
                handler={props.setPortfolio}
                content={props.content}
            />
        </div>
        <div className="divider" />
        <div className="secondRow">
            <Button
                title="Github"
                icon={<GoMarkGithub />}
                path="https://github.com/tctrautman"
            />
            <Button
                title="LinkedIn"
                icon={<FaLinkedin />}
                path="https://www.linkedin.com/in/timtrautman/"
            />
            <Button
                title="Twitter"
                icon={<FaTwitter />}
                path="https://twitter.com/TimTrautman"
            />
        </div>
    </FooterContainer>
);

export default Footer;
