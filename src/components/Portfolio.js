import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const ProjectContainer = styled.div`
    min-height: 380px;
    padding: 2px;
    border-radius: 5%;
    margin-right: 15px;
`;

const InnerProjectContainer = styled.div`
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    justify-items: center;
    grid-gap: 2fr;
    display: grid;
    column-gap: 40px;
    min-width: 340px;
    width: 100%;
`;

const Portfolio = props => (
    <ProjectContainer>
        <InnerProjectContainer>
            {props.projects.map((project, ind) => (
                <Project
                    key={project.title}
                    project={project}
                    setFlipped={props.setFlipped}
                    ind={ind}
                />
            ))}
        </InnerProjectContainer>
    </ProjectContainer>
);

export default Portfolio;
