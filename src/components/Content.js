import React from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Text from './Text';
import Portfolio from './Portfolio';

const ContentContainer = styled.div`
    min-height: 724.8px;
    position: relative;
    top: 0;
    margin-bottom: 0px;
    color: ${props => props.theme.color};

    .fade-enter {
        opacity: 0;
        z-index: 1;
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 200ms linear;
    }

    .fade-exit {
        opacity: 1;
        position: absolute;
        top: 0;
        width: 100%;
    }

    .fade-exit.fade-exit-active {
        opacity: 0;
        transition: opacity 200ms linear;
    }

    .fade-exit-done {
        opacity: 0;
    }

    @media only screen and (max-width: 600px) {
        height: auto;
        min-height: none;
    }
`;

const Content = props => (
    <ContentContainer>
        <TransitionGroup>
            <CSSTransition
                key={props.currentContent}
                timeout={200}
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
