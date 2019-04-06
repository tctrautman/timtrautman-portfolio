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

const project = {
    title: "Static site written in Gatsby.js",
    description: "A portfolio site, written in Gatsby.js",
    type: 'front-end',
    feGithub: "https://github.com/tctrautman",
    beGithub: "www.google.com",
    publicLink: "www.timtrautman.com",
    picSrc: "https://i.iheart.com/v3/re/new_assets/5c49d672c0f39c3bcbab4100?ops=max(650,0),quality(80)",
}

const Portfolio = props => (
    <ProjectContainer>
        <Project
            project={project}
        />
    </ProjectContainer>
);

export default Portfolio;
