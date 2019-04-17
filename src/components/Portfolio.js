import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const ProjectContainer = styled.div`
    min-height: 724.81px;
    padding-left: 2px;
    padding-right: 2px;
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    border-radius: 5%;
    margin-right: 15px;
    position: relative;
`;

const InnerProjectContainer = styled.div`
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    justify-items: center;
    vertical-align: middle;
    grid-gap: 2fr;
    display: grid;
    column-gap: 40px;
    min-width: 340px;
    width: 100%;
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
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
