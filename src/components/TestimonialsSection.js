import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import PText from './PText';
import SectionTitle from './SectionTitle';
import testimonials from '../assets/data/testimonials';

const TestimonialSectionStyles = styled.div`
  overflow-x: hidden;
  padding: 10rem 0;
  text-align: center;

  .testimonial__wrapper {
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

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* Сброс PText */
    .para {
      margin: 0 !important;
    }
    .para p {
      margin: 0;
    }
  }

  .testimonial__desc {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

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
    align-items: center;
    justify-content: center;

    svg {
      width: 30px;
      pointer-events: none;
      transition: transform 0.2s ease, color 0.2s ease;
    }

    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s ease, background-color 0.2s ease;

      &:hover {
        background-color: var(--gray-2);
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }

  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
    z-index: 1;
  }

  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: transform, opacity;
    z-index: 1;
  }

  .fade-exit {
    transform: scale(1);
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 200ms ease-in;
    transition-property: transform, opacity;
  }
`;

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonials[activeIndex];

  function handleNext() {
    setActiveIndex((prevIndex) =>
      prevIndex >= testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handlePrev() {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }

  return (
    <TestimonialSectionStyles>
      <div className="container">
        <SectionTitle
          subheading="see what our clients say about us"
          heading="Testimonials"
        />
        <div className="testimonial__wrapper">
          <SwitchTransition component={null}>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="testimonial__info">
                <div className="testimonial__desc">
                  <PText>{activeSlide.desc}</PText>
                </div>
                <h2 className="testimonial__name">{activeSlide.name}</h2>
                <p className="testimonial__title">
                  {activeSlide.title}, <br /> {activeSlide.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>

        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </TestimonialSectionStyles>
  );
};

export default React.memo(TestimonialsSection);
