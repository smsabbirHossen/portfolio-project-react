import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/about-sec-img.png';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSecton__right {
    flex: 1;
  }
  .section__title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSecton__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSecton__right {
      width: 100%;
    }
    .aboutSecton__right {
      margin-top: 3rem;
    }
    .section__title{
        text-align:center;
        
    }
    .para{
        margin: 0 auto;
        margin-top:2rem;
    }
    .aboutSection__buttons{
        flex-direction:column;
        gap:0;
        .button__wrapper,
        a{
            width:100%;
            text-align:center;
        }
        }
    }
  }
`;

function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subHeading="Let me introduce myself"
            heading="About me"
          />

          <Fade bottom>
            <PText>
              I am working as a freelance website deisgner and developer from
              Gazipur, Bangladesh . I create professional websites . I love art
              and always try to show unique views to the audience throught my
              design .
            </PText>
          </Fade>
          <div className="aboutSection__buttons">
            <Fade bottom>
              <Button btnLink="/projects" btnText="works" />
            </Fade>
            <Fade bottom>
              <Button btnLink="/about" btnText="Read More" outline />
            </Fade>
          </div>
        </div>
        <Fade right>
          <div className="aboutSecton__right">
            <img src={AboutImg} alt="" />
          </div>
        </Fade>
      </div>
    </AboutSectionStyles>
  );
}

export default AboutSection;
