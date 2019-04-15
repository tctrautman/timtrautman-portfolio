import React from 'react';
import styled from 'styled-components';
import Gif from './Gif';
import ProjectTab from './ProjectTab';
import ProjectButtons from './ProjectButtons';
import Description from './Description';
import MiniButton from './MiniButton';
import { FaClipboardList } from 'react-icons/fa';

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
    position: relative;
    width: 18.75rem;
    height: 21rem;
    border: 1px solid;
    border-radius: 16px;
    border-color: ${props => getColorType(props)};

    h2 {
        margin-top: 13px;
        margin-left: 10px;
        margin-right: 10px;
        color: ${props => getColorType(props)};
    }

    min-height: 305px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 30px;
    margin-right: 30px;
    vertical-align: baseline;
`;

const FooterContainer = styled.div`
    display: inline-block;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
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
    let flipTileCallback = function() {
        return props.setFlipped(proj.title);
    } 
    return (
        <ProjectContainer
            type={proj.type}
            ind={props.ind}
        >
            {proj.flipped
            ? 
            <>
                <h2>{proj.title}</h2>
                <Description
                    title={proj.title}
                    description={proj.description}
                    builtUsing={proj.builtUsing}
                />
                <FooterContainer>
                    <ProjectTab
                        type={proj.type}
                        />
                    <ProjectButtons
                        beGithub={proj.beGithub}
                        feGithub={proj.feGithub}
                        publicLink={proj.publicLink}
                        type={proj.type}
                        />
                    <FlipContainer>
                        <MiniButton
                            handler={flipTileCallback}
                            icon={<FaClipboardList />}
                        />
                    </FlipContainer>
                </FooterContainer>
            </>
            : <>
                <h2>{proj.title}</h2>
                <Gif
                    gifSrc={proj.picSrc}
                />
                <FooterContainer>
                    <ProjectTab
                        type={proj.type}
                        />
                    <ProjectButtons
                        beGithub={proj.beGithub}
                        feGithub={proj.feGithub}
                        publicLink={proj.publicLink}
                        type={proj.type}
                        />
                    <FlipContainer>
                        <MiniButton
                            handler={flipTileCallback}
                            icon={<FaClipboardList />}
                        />
                    </FlipContainer>
                </FooterContainer>
            </>
            }
        </ProjectContainer>
)};

export default Project;
export { getColorType };
