import React from 'react';
import styled from 'styled-components';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';
import projects from '../assets/data/projects';

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  text-align: center;

  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 0rem;
  }

  .keen-slider {
    padding-top: 8rem;
    max-width: 100%;
  }

  .keen-slider__slide {
    min-width: 0;
  }

  .arrows {
    margin-top: 2rem;
    display: none;
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

  @media only screen and (min-width: 1200px) {
    .arrows {
      display: flex;
    }
  }

  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;

      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

const ProjectsSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 30,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 1, spacing: 30 },
      },
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 30 },
      },
      '(min-width: 1200px)': {
        slides: { perView: 3, spacing: 30 },
      },
    },
  });

  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle subheading="some of my recent works" heading="Projects" />
        <div className="projects__allItems">
          <div ref={sliderRef} className="keen-slider">
            {projects.map((project, index) => {
              if (index >= 5) return null;
              return (
                <div className="keen-slider__slide" key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="arrows">
          <div
            className="prev"
            onClick={() => instanceRef.current?.prev()}
            role="button"
            tabIndex={0}
            onKeyDown={() => instanceRef.current?.prev()}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={() => instanceRef.current?.next()}
            role="button"
            tabIndex={0}
            onKeyDown={() => instanceRef.current?.next()}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </ProjectSectionStyle>
  );
};

export default React.memo(ProjectsSection);
