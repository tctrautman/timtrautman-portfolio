import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const ProjectContainer = styled.div`
    border: 2px solid;
    min-height: 380px;
    margin: 0 auto;
    padding: 0px;
    border-radius: 5%;
    margin-right: 15px;
`;

const Portfolio = props => (
    <ProjectContainer>
        {props.projects.map(project => (
            <Project
                key={project.title}
                project={project}
            />
        ))}
    </ProjectContainer>
);

export default Portfolio;
