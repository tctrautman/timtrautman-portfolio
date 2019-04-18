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

const ButtonContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 3px;
    margin-bottom: 13px;
`;

const TileDescription = props => {
    const proj = props.project;

    return (
        <>
            <h2>{proj.title}</h2>
            <Description
                title={proj.title}
                description={proj.description}
                builtUsing={proj.builtUsing}
            />
            <ButtonContainer>
                <MiniButton
                    handler={props.flipHandler}
                    icon={<FaClipboardList />}
                />
            </ButtonContainer>
        </>
)}

export default TileDescription;
export { FlipContainer, FooterContainer };
