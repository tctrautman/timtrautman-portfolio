import React from 'react';
import styled from 'styled-components';
import { FaClipboardList } from 'react-icons/fa';
import ProjectTab from './ProjectTab';
import ProjectButtons from './ProjectButtons';
import Description from './Description';
import MiniButton from './MiniButton';

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

const TileContainer = styled.div`
    position: relative;
`;

const TileDescription = props => {
    const proj = props.project;

    return (
        <TileContainer>
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
                        handler={props.flipHandler}
                        icon={<FaClipboardList />}
                    />
                </FlipContainer>
            </FooterContainer>
        </TileContainer>
)}

export default TileDescription;
export { FlipContainer, FooterContainer };
