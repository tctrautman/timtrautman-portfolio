import React from "react"
import styled from "styled-components"
import TimPhoto from "../assets/ttp-1.jpg"

const ImageContainer = styled.div`
  justify-items: center;
  width: 100%;

  img {
    border-radius: 50%;
    max-height: 250px;
    max-height: 250px;
    margin-top: 10px;
    display: block;
    margin: 0 auto;
  }
`

const TextContainer = styled.div`
  align-content: center;
  line-height: 21px;
  padding-top: 20px;
  padding-bottom: 0px;
  margin-bottom: 2px;
  margin-left: 0px;
  margin-right: 0px;
  min-height: 704.8px;
  color: ${props => props.theme.color};

  div {
    max-width: 550px;
    text-align: left;
    margin: 0 auto;
  }

  p {
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
    font-size: 44px;
    font-weight: 100;
    margin-bottom: 4rem;
  }

  @media only screen and (max-width: 600px) {
    p {
      margin-left: 10px;
      margin-right: 15px;
    }

    li {
      margin-left: 10px;
      margin-right: 15px;
    }
  }
`

const Text = props => (
  <TextContainer>
    <div>
      <ImageContainer>
        <img src={TimPhoto} alt="Tim" />
      </ImageContainer>
      <h2>hey, I'm Tim</h2>
      <p>
        I live in San Francisco, work as a software engineer, and run on
        espresso. I like exploring new ideas, solving problems, and being
        friends with cool dogs.
      </p>
      <p>
        Right now I'm a Software Engineer at{" "}
        <a href="https://www.getcanix.com/">Canix</a>. In past lives I:
      </p>
      <ul>
        <li>
          Built prototypes at the{" "}
          <a href="http://probcomp.csail.mit.edu/">
            MIT Probabilistic Computing Lab
          </a>
          .
        </li>
        <li>
          Targeted advertising with third party marketing data at{" "}
          <a href="https://www.uber.com/">Uber</a>.
        </li>
        <li>
          Helped get{" "}
          <a href="https://www.civisanalytics.com/">Civis Analytics</a>'
          engineering and product teams off the ground during the company's
          first three years.
        </li>
        <li>
          PM'd the analytics tech team on Obama's{" "}
          <a href="https://www.technologyreview.com/s/509026/how-obamas-team-used-big-data-to-rally-voters/">
            2012 campaign
          </a>
          , and did data in the 2010 and 2008 cycles.
        </li>
      </ul>
      <p>
        You should get in touch if you think we'd have something to talk about.
      </p>
    </div>
  </TextContainer>
)

export default Text
