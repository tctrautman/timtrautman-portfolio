import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { FaDesktop } from 'react-icons/fa';
import MiniButton from './MiniButton';
import styled from 'styled-components';

const ProjectButtonsContainer = styled.div`
    margin-top: 5px;
    float: left;
`;

const ProjectButtons = props => (
    <ProjectButtonsContainer>
        {props.beGithub && <MiniButton
            icon={<GoMarkGithub />}
            link={props.beGithub}
            type={props.type}
        />}
        {props.feGithub && <MiniButton
            icon={<GoMarkGithub />}
            link={props.feGithub}
            type={props.type}
        />}
        {props.publicLink && <MiniButton
            icon={<FaDesktop />}
            link={props.publicLink}
            type={props.type}
        />}
    </ProjectButtonsContainer>
);

export default ProjectButtons;