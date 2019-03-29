import React from 'react';

const Content = props => (
    props.currentContent === 'home'
        ? <div>text</div>
        : <div>portfolio</div>
);

export default Content;
