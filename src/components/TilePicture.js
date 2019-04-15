import React from 'react';
import { FaClipboardList } from 'react-icons/fa';
import Gif from './Gif';
import ProjectTab from './ProjectTab';
import ProjectButtons from './ProjectButtons';
import MiniButton from './MiniButton';
import { FooterContainer, FlipContainer } from './TileDescription';

const TilePicture = props => {
    const proj = props.project;

    return (
        <>
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
                        handler={props.flipHandler}
                        icon={<FaClipboardList />}
                    />
                </FlipContainer>
            </FooterContainer>
        </>
)}

export default TilePicture;
