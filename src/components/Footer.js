import React from 'react';
import { FaHome, FaPaintBrush, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import styled from 'styled-components';
import FooterButton from './FooterButton';

const FooterContainer = styled.div`
    margin-top: 10px;
    padding-bottom: 0px;
    position: relative;
    border: 0;

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
            <FooterButton
                title="Home"
                icon={<FaHome />}
                handler={props.setHome}
                content={props.content}
            />
            <FooterButton
                title="Portfolio"
                icon={<FaPaintBrush />}
                handler={props.setPortfolio}
                content={props.content}
            />
        </div>
        <div className="divider" />
        <div className="secondRow">
            <FooterButton
                title="Github"
                icon={<GoMarkGithub />}
                path="https://github.com/tctrautman"
            />
            <FooterButton
                title="LinkedIn"
                icon={<FaLinkedin />}
                path="https://www.linkedin.com/in/timtrautman/"
            />
            <FooterButton
                title="Twitter"
                icon={<FaTwitter />}
                path="https://twitter.com/TimTrautman"
            />
        </div>
    </FooterContainer>
);

export default Footer;
