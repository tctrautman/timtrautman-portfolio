import React from 'react';
import styled from 'styled-components';
import Gif from './Gif';
import ProjectTab from './ProjectTab';
import ProjectButtons from './ProjectButtons';
import { FaListAlt } from 'react-icons/fa';
import MiniButton from './MiniButton';
import Description from './Description';

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

const ProjectContainer = styled.div`
    display: inline-block;
    width: 300px;
    border: 1px solid;
    border-radius: 16px;
    border-color: ${props => getColorType(props)};

    h2 {
        margin-top: 13px;
        color: ${props => getColorType(props)};
    }
    min-height: 305px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 30px;
    margin-right: 30px;
`;

const FlipContainer = styled.div`
    a {
        margin-top: 14px;
        float: right;
        margin-right: 20px;
    }
`;

const Project = props => {
    let proj = props.project;
    return (
        <ProjectContainer
            type={proj.type}
            ind={props.ind}
        >
        {proj.flipped
        ? <Description
            title={proj.title}
            description={proj.description}
          />
        : <>
            <h2>{proj.title}</h2>
            <Gif
                gifSrc={proj.picSrc}
            />
            <ProjectTab
                type={proj.type}
            />
            <ProjectButtons
                beGithub={proj.beGithub}
                feGithub={proj.feGithub}
                publicLink={proj.publicLink}
                type={proj.type}
            />
        </>
        }
        </ProjectContainer>
)};

export default Project;
export { getColorType };
