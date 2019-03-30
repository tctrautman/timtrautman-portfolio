import React from 'react';
import Text from './Text';
import styled from 'styled-components';
import Portfolio from './Portfolio';

const ContentContainer = styled.div`
    min-height: 400px;
    max-width: 550px;
    margin: 0 auto;
    padding: 10px;
`;

const Content = props => (
    <ContentContainer>
       {props.currentContent === 'home'
        ? <Text />
        : <Portfolio />}
    </ContentContainer>
);

export default Content;
