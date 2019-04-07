import React from 'react';
import Text from './Text';
import styled from 'styled-components';
import Portfolio from './Portfolio';

const ContentContainer = styled.div`
    min-height: 380px;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 0px;
    margin-bottom: 0px;
    color: ${props => props.theme.color};
`;

const Content = props => (
    <ContentContainer>
       {props.currentContent === 'home'
        ? <Text mode={props.mode}/>
        : <Portfolio
            projects={props.projects}
            setFlipped={props.setFlipped}
        />}
    </ContentContainer>
);

export default Content;
