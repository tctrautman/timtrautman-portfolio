import React from 'react';
import styled from 'styled-components';
import { FaClipboardList } from 'react-icons/fa';
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

const DescriptionContainer = styled.div`
    text-align: left;
    margin-top: 0px;
    padding-left: 10px;
    padding-right: 10px;

    h3 {
        text-align: center;
    }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

const Description = props => (
    <DescriptionContainer>
        <p>{props.description}</p>
        <h3>Built using</h3>
        <ul>
            {props.builtUsing.map(tech => (
                <li key={`${props.title}-${tech}`}>{tech}</li>
            ))}
        </ul>
    </DescriptionContainer>
)

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
