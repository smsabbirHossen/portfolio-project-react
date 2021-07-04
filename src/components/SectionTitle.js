import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const SectionTitleStyles = styled.div`
  text-align: center;
  p {
    font-family: 'RobotoMono Regular';
    font-size: 2rem;
  }
  h2 {
    font-family: 'Montserrat Bold';
    font-size: 4rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;
function SectionTitle({
  subHeading = 'This is subHeading',
  heading = 'This is heading',
}) {
  return (
    <SectionTitleStyles className="section__title">
      <Fade botom>
        <p>{subHeading}</p>
      </Fade>
      <Fade bottom>
        <h2>{heading}</h2>
      </Fade>
    </SectionTitleStyles>
  );
}

export default SectionTitle;
