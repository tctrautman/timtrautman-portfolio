import React from 'react';

const Footer = props => (
    <div id="footer">
        <a onClick={props.setPortfolio}>Portfolio</a>
        <a onClick={props.setHome}>Home</a>
    </div>
);

export default Footer;
