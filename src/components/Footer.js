import React from 'react';
import { FaHome, FaPaintBrush, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import styled from 'styled-components';
import Button from './FooterButton';

const FooterContainer = styled.div`
    padding-bottom: 0px;
`;

const Footer = props => (
    <FooterContainer>
        <Button
            title="Home"
            icon={<FaHome />}
            handler={props.setHome}
        />
        <Button
            title="Portfolio"
            icon={<FaPaintBrush />}
            handler={props.setPortfolio}
        />
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
    </FooterContainer>
);

export default Footer;
