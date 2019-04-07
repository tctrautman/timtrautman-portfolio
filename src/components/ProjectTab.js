import React from 'react';
import styled from 'styled-components';
import { getColorType } from './Project';

const ProjectTabContainer = styled.div`
    float: left;
    padding: 13px;
    background: ${props => getColorType(props)};
    color: ${props => props.theme.background};
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    
    h3 {
        margin-bottom: 0px;
        margin-top: 0px;
        float: left;
    }
`;

const ProjectTab = props => (
    <ProjectTabContainer type={props.type}>
        <h3>{props.type}</h3>
    </ProjectTabContainer>
);

export default ProjectTab;
