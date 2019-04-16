import React from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Text from './Text';
import Portfolio from './Portfolio';

const ContentContainer = styled.div`
    min-height: 500px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 0px;
    position: relative;
    margin-bottom: 0px;
    color: ${props => props.theme.color};

    .fade-enter {
        opacity: 0;
        z-index: 1;
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 2000ms linear 2000ms;
    }

    .fade-exit {
        opacity: 1;
        position: absolute;
        top: 0;
        width: 100%;
    }

    .fade-exit.fade-exit-active {
        opacity: 0;
        transition: opacity 2000ms linear;
    }

    .fade-exit-done {
        opacity: 0;
    }
`;

const Content = props => (
    <ContentContainer>
        <TransitionGroup>
            <CSSTransition
                key={props.currentContent}
                timeout={4000}
                classNames="fade"
            >
                {props.currentContent === 'home'
                    ? <Text mode={props.mode}/>
                    : <Portfolio
                        projects={props.projects}
                        setFlipped={props.setFlipped}
                    />}
            </CSSTransition>
        </TransitionGroup>
    </ContentContainer>
);

export default Content;
