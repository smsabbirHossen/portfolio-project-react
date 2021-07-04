import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import FooterSection from '../components/FooterSection';

const AboutPageStyles = styled.div`
  .container {
    padding-bottom: 0;
  }
  .top__section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0 0 0;
    .top__section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheadding {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

const About = () => (
  <AboutPageStyles>
    <div className="container">
      <div className="top__section">
        <div className="left">
          <Fade left>
            <p className="about__subheading">
              Hi , I am <span>Sabbir Hossain</span>
            </p>
          </Fade>
          <Fade bottom>
            <h2 className="about__heading">A freelance Web developer</h2>
          </Fade>
          <Fade bottom>
            <div className="about__info">
              <PText className="para">
                I am from Gazipur , Bangladesh . A place of beauty and nature .
                Since my childhood . I love art and design . I always try to
                design stuff with my unique point of view . I also love to
                create things that can be usefull to others . <br />
                <br />
                I started coding since I was in high school . Coding is also an
                art for me . I alove it and with the coding . I find it really
                interssting and I enjoyed the process a lot . <br />
                <br />
                My vision is to make the workd a better place . Now almost
                everything is becoming better than ever . It is time for us to
                create more good stuff that helps the world to become a better
                place .
              </PText>
            </div>
          </Fade>
          <Fade left>
            <Button btnLink="#" btnText="Download CV" />
          </Fade>
        </div>
        <Fade right>
          <div className="right">
            <img src={AboutImg} alt="sabbir hossain" />
          </div>
        </Fade>
      </div>
      <div className="about__info__items">
        <Fade bottom>
          <div className="about__info__item">
            <h2 className="about__info__heading">Education</h2>
            <AboutInfoItem
              title="School"
              items={['Karihata High School, Kapashia,Gazipur']}
            />
            <AboutInfoItem
              title="Institute"
              items={['Narsingdi Polytechnic Institute , Narsingdi']}
            />
            <AboutInfoItem
              title="Univercity"
              items={['Dhaka International Univercity , Dhaka']}
            />
          </div>
        </Fade>
        <Fade bottom>
          <div className="about__info__item">
            <h2 className="about__info__heading">My Skill</h2>
            <AboutInfoItem
              title="FrontEnd"
              items={['Html', 'CSS', 'Javascript', 'React']}
            />
            <AboutInfoItem
              title="BackEnd"
              items={['Node', 'Express', 'MangoDB']}
            />
            <AboutInfoItem
              title="Design"
              items={['PhotoShop', 'After Effects', 'Figma']}
            />
          </div>
        </Fade>
        <Fade bottom>
          <div className="about__info__item">
            <h2 className="about__info__heading">Experiences</h2>
            <AboutInfoItem
              title="2016-2017"
              items={['Jonior Developer at web tech']}
            />
            <AboutInfoItem
              title="2018-2020"
              items={['Front end developer at web tech']}
            />
            <AboutInfoItem title="2021-" items={['Freelance Web Developer']} />
          </div>
        </Fade>
      </div>
      <ContactBanner />
      <FooterSection />
    </div>
  </AboutPageStyles>
);

export default About;
