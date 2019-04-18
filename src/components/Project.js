import React from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TileDescription from './TileDescription';
import TilePicture from './TilePicture';

let getColorType = props => {
    const type = props.type;
    const theme = props.theme;
    if (type === 'full-stack') {
        return theme.fullStack.color;
    } else if (type === 'front-end') {
        return theme.frontEnd.color;
    } else if (type === 'back-end') {
        return theme.backEnd.color;
    }
}

const AnimationStyles = styled.div`
    position: relative;

    .project {
        display: block;
        position: relative;
        transition: all 0.4s;
        backface-visibility: hidden;
    }

    .project-enter {
        transform: rotateX(0.5turn);
    }

    .project-enter-active {
        transform: rotateX(0);
    }

    .project-exit {
        top: 0;
        position: absolute;
        transform: rotateX(0);
    }

    .project-exit-active {
        transform: rotateX(0.5turn);
    }
`;

const ProjectContainer = styled.div`
    position: relative;
    width: 18.75rem;
    height: 21rem;
    border: 1px solid;
    border-radius: 16px;
    border-color: ${props => getColorType(props)};
    box-shadow: 10px 10px 22px -9px rgba(0,0,0,0.75);

    h2 {
        margin-top: 13px;
        margin-left: 10px;
        margin-right: 10px;
        color: ${props => getColorType(props)};
    }

    min-height: 305px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 30px;
    margin-right: 30px;
    vertical-align: baseline;

    @media only screen and (max-width: 600px) {
        height: auto;
    }
`;

const Project = props => {
    let proj = props.project;
    let flipTileCallback = function() {
        return props.setFlipped(proj.title);
    } 
    return (
        <AnimationStyles>
            <TransitionGroup>
                <CSSTransition
                    unmountOnExit
                    className="project"
                    classNames="project"
                    key={`${proj.title}-${proj.flipped}`}
                    timeout={{ enter: 400, exit: 400 }}
                >
                    <ProjectContainer
                        type={proj.type}
                        ind={props.ind}
                    >
                        {proj.flipped
                        ? <TileDescription project={proj} flipHandler={flipTileCallback} />
                        : <TilePicture project={proj} flipHandler={flipTileCallback} />
                        }
                    </ProjectContainer>
                </CSSTransition>
            </TransitionGroup>
        </AnimationStyles>
)};

export default Project;
export { getColorType };
