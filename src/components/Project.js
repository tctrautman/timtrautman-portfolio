import React from 'react';
import styled from 'styled-components';
import Gif from './Gif';
import Description from './Description';

const ProjectContainer = styled.div`
    min-height: 110px;
    width: 100%;
    border-bottom: 1px solid;
`;

const Project = props => {
    let proj = props.project;
    return (
        <ProjectContainer>
            <Gif
                gifSrc={proj.gifSrc}
                github={proj.github}
                link={proj.link}
                description={proj.description}
            />
            <Description
                title={proj.title}
                description={proj.description}
            />
        </ProjectContainer>
)};

export default Project;
