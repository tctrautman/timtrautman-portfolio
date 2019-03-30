import React from 'react';
import Text from './Text';

const Content = props => (
    props.currentContent === 'home'
        ? <Text />
        : <div>portfolio</div>
);

export default Content;
