import React from 'react';
import { FaClipboardList } from 'react-icons/fa';
import styled from 'styled-components';
import ProjectTab from './ProjectTab';
import ProjectButtons from './ProjectButtons';
import MiniButton from './MiniButton';
import { FooterContainer, FlipContainer } from './TileDescription';

const PictureContainer = styled.div`
    width: 100%;
    float: left;
    margin: 0 auto;
    align-items: center;
    display: inline-block;
    vertical-align: middle;

    img {
        display: inline-block;
        max-width: 90%;
        height: auto;
        margin-bottom: 70px;
        vertical-align: middle;
    }
`;

const Picture = props => (
    <PictureContainer>
        <img src={props.gifSrc} alt={props.description} />
    </PictureContainer>
);

const TilePicture = props => {
    const proj = props.project;

    return (
        <>
            <h2>{proj.title}</h2>
            <Picture
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
