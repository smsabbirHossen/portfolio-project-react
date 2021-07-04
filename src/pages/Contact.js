import React from 'react';
import styled from 'styled-components';
import { MdPlace, MdLocalPhone, MdEmail } from 'react-icons/md';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import SectionTitle from '../components/SectionTitle';
import ContactInfoItem from '../components/ContactInfoItem';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';
import FooterSection from '../components/FooterSection';

const ContactPageStyle = styled.div`
  padding-top: 10rem;
  .contact__section__wrapper {
    display: flex;
    justify-content: center;
    gap: 5rem;
    margin-top: 7rem;
    position: relative;
    padding-bottom: 5rem;
  }
  .contact__section__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    left: 50%;
    top: 30%;
    background-color: var(--gray-1);
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    width: 100%;
    max-width: 500px;
  }
  @media only screen and (max-width: 768px) {
    .contact__section__wrapper {
      flex-direction: column;
    }
    .contact__section__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

const Contact = () => (
  <ContactPageStyle>
    <div className="container">
      <SectionTitle heading="Contact" subHeading="Get In Touch" />
      <div className="contact__section__wrapper">
        <Fade left>
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+8801303238290" />
            <ContactInfoItem icon={<MdEmail />} text="smsabbir925@gmail.com" />
            <ContactInfoItem icon={<MdPlace />} text="Gazipur, Bangladesh" />
          </div>
        </Fade>
        <Fade right>
          <div className="right">
            <ContactForm />
          </div>
        </Fade>
      </div>
      <Zoom>
        <Map />
      </Zoom>
      <FooterSection />
    </div>
  </ContactPageStyle>
);

export default Contact;
