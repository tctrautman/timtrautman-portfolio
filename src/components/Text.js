import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
    text-align: left;
    align-content: center;
    line-height: 21px;
    padding-top: 13px;
    padding-left: 13px;
    padding-right: 13px;
    padding-bottom: 0px;
    margin-bottom: 0px;
    min-height: 400px;

    p {
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 0px;
    }

    li {
        padding-bottom: 5px;
        padding-top: 5px;
    }

    a {
        color: #9DDAFF;
    }
`;

const Text = props => (
    <TextContainer>
        <p>I live in San Francisco, work as a software engineer, and run on espresso.</p>
        <p>I like learning about how people use the internet to solve problems in new ways. I'm particularly interested in exploring <a href="https://stratechery.com/2017/defining-aggregators/" >aggregation theory</a>, the rise of smaller <a href="https://medium.com/@dunn/digitally-native-vertical-brands-b26a26f2cf83">niche businesses</a>, and data ethics.</p>
        <p>Right now I'm a Developer Advocate at MIT's <a href="http://probcomp.csail.mit.edu/" >Probabilistic Computing Project</a>.  In past lives I:</p>
        <ul>
            <li>Targeted advertising with third party marketing data at <a href="https://www.uber.com/">Uber</a>.</li>
            <li>Helped get <a href="https://www.civisanalytics.com/" >Civis Analytics</a>' engineering and product teams off the ground during the company's first three years.</li>
            <li>PM'd the analytics tech team on Obama's <a href="https://www.technologyreview.com/s/509026/how-obamas-team-used-big-data-to-rally-voters/">2012 campaign</a>.</li>
        </ul>
        <p>You should get in touch if you think we'd have something to talk about.</p>
    </TextContainer>
);

export default Text;
