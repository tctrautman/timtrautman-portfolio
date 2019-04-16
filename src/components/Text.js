import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
    justify-items: center;
    position: relative;
    width: 100%;

    img {
        border-radius: 50%;
        max-height: 250px;
        max-height: 250px;
        margin-top: 10px;
        display: block;
        margin: 0 auto;
    }
`;

const TextContainer = styled.div`
    align-content: center;
    line-height: 21px;
    padding-top: 20px;
    padding-left: 13px;
    padding-right: 13px;
    padding-bottom: 0px;
    margin-bottom: 2px;
    min-height: 350px;
    color: ${props => props.theme.color};

    div {
        max-width: 550px;
        text-align: left;
        margin: 0 auto;
    }

    p {
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 0px;
        font-weight: 300;
    }

    li {
        padding-bottom: 5px;
        padding-top: 5px;
    }

    a {
        color: ${props => props.theme.a.color};
    }

    h2 {
        text-align: center;
        font-size: 54px;
        font-weight: 100;
        margin-bottom: 4rem;
    }
`;

const Text = props => (
    <TextContainer>
        <div>
            <ImageContainer>
                <img src="https://s3.amazonaws.com/tt-personal-site/timpicture.jpg" alt="Tim"/>
            </ImageContainer>
            <h2>hey, I'm Tim</h2>
            <p>I live in San Francisco, work as a software engineer, and run on espresso.</p>
            <p>I like learning about how people use the internet to solve problems in new ways. I'm particularly interested in exploring <a href="https://stratechery.com/2017/defining-aggregators/" >aggregation theory</a>, the rise of smaller <a href="https://medium.com/@dunn/digitally-native-vertical-brands-b26a26f2cf83">niche businesses</a>, and data ethics.</p>
            <p>Right now I'm a Developer Advocate at MIT's <a href="http://probcomp.csail.mit.edu/" >Probabilistic Computing Project</a>.  In past lives I:</p>
            <ul>
                <li>Targeted advertising with third party marketing data at <a href="https://www.uber.com/">Uber</a>.</li>
                <li>Helped get <a href="https://www.civisanalytics.com/" >Civis Analytics</a>' engineering and product teams off the ground during the company's first three years.</li>
                <li>PM'd the analytics tech team on Obama's <a href="https://www.technologyreview.com/s/509026/how-obamas-team-used-big-data-to-rally-voters/">2012 campaign</a>.</li>
            </ul>
            <p>You should get in touch if you think we'd have something to talk about.</p>
        </div>
    </TextContainer>
);

export default Text;
