import React from 'react';
import { FaHome, FaPaintBrush, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

const Footer = props => (
    <div id="footer">
        <a onClick={props.setPortfolio}>
            <FaPaintBrush />
            Portfolio
        </a>
        <a onClick={props.setHome}>
            <FaHome  />
            Home
        </a>
        
        <GoMarkGithub />
        <FaLinkedin />
        <FaTwitter />
    </div>
);

export default Footer;
