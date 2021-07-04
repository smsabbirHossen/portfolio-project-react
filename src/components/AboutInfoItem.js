import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const AboutInfoItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 20rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    gap: 1rem;
    border-radius: 8px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }

    .title {
      font-size: 2rem;
    }
  }
`;

function AboutInfoItem({ title = 'This is title', items = ['Html', 'CSS'] }) {
  return (
    <AboutInfoItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutInfoItemStyles>
  );
}

export default AboutInfoItem;
