import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  border: 2px solid var(--gray-1);
  border-radius: 2rem;
  padding: 3rem 1rem;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .services__title {
    font-size: 2.5rem;
    font-familay: 'Montserrat Semibold';
  }
  .para {
    margin-top: 2rem;
  }
`;
function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sunt aut ad perspiciatis quo voluptas',
}) {
  return (
    <Zoom>
      <ItemStyles>
        <div className="servicesItem__icon">{icon}</div>
        <div className="services__title">{title}</div>
        <PText>{desc}</PText>
      </ItemStyles>
    </Zoom>
  );
}

export default ServicesSectionItem;
