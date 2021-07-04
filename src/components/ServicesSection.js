import React from 'react';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 3rem;

    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;
function ServicesSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle subHeading="what i will do for you" heading="services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web Design"
            desc="I do ui/ux design for the website that helps website to get a unique lock ."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Development"
            desc="I also develope the website . I create high perfomance website with blaxing fast speed ."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="I develope mobile application . I create mobile app with eye catching ui ."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}

export default ServicesSection;
