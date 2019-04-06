import React from 'react';
import styled from 'styled-components';
import Gif from './Gif';
import ProjectTab from './ProjectTab';
import ProjectButtons from './ProjectButtons';
import { FaPencilAlt } from 'react-icons/fa';
import MiniButton from './MiniButton';

const ProjectContainer = styled.div`
    display: inline-block;
    min-height: 300px;
    width: 300px;
    border: 1px solid;
    border-radius: 16px;

    h2 {
        margin-top: 13px;
    }

    margin-top: 13px;
`;

const FlipContainer = styled.div`
    a {
        margin-top: 13px;
        float: right;
        margin-right: 20px;
    }
`;

const Project = props => {
    let proj = props.project;
    return (
        <ProjectContainer>
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
            />
            <FlipContainer>
                <MiniButton 
                    icon={<FaPencilAlt />}
                />
            </FlipContainer>
        </ProjectContainer>
)};

export default Project;
