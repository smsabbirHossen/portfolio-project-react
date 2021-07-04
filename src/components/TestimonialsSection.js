import React, { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import Fade from 'react-reveal/Fade';
import SectionTitle from './SectionTitle';
import PText from './PText';
import testimonials from '../assets/data/testimonials';

const TestimonialsSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .testimonials__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .testimonial__info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
  }
  .testimonial__desc {
    .para {
      text-align: center;
    }
  }
  .testimonial__name {
    margin-top: 4rem;
    font-family: 'Montserrat Bold';
    font-size: 2.2rem;
  }
  .testimonial__title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 30px;
      pointer-event: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  .fade-enter {
    opacity: 0;
    tranform: scale(0.96);
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 300ms eade-in;
    transition-property: opacity, transform;
  }
  .fade-exit {
    opacity: a;
    tranform: scale(1);
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 300ms eade-in;
    transition-property: opacity, transform;
  }
`;
function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonials[activeIndex];
  function handelPrev() {
    if (activeIndex <= 0) {
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }
  function handelnext() {
    if (activeIndex >= testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  return (
    <TestimonialsSectionStyles>
      <div className="container">
        <SectionTitle
          heading="Testimonials"
          subHeading="see what out clients say about us"
        />
        <Fade bottom>
          <div className="testimonials__wrapper">
            <SwitchTransition component={null}>
              <CSSTransition
                key={activeSlide.id}
                timeout={300}
                classNames="fade"
              >
                <div className="testimonial__info">
                  <div className="testimonial__desc">
                    <PText>{activeSlide.desc}</PText>
                  </div>
                  <h2 className="testimonial__name">{activeSlide.name}</h2>
                  <p className="testimonial__title">
                    {activeSlide.title} , <br />
                    {activeSlide.org}
                  </p>
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>

          <div className="arrows">
            <div
              className="prev"
              onClick={handelPrev}
              role="button"
              tabIndex={0}
              onKeyDown={handelPrev}
            >
              <MdArrowBack />
            </div>
            <div
              className="next"
              onClick={handelnext}
              role="button"
              tabIndex={0}
              onKeyDown={handelnext}
            >
              <MdArrowForward />
            </div>
          </div>
        </Fade>
      </div>
    </TestimonialsSectionStyles>
  );
}

export default TestimonialsSection;
