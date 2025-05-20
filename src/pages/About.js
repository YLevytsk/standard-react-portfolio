/* eslint-disable prettier/prettier */

import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import DownloadButton from '../components/DownloadButton';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
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
    text-align: justify;
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
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
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

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div data-aos="fade-left" className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Yuliia Levytska</span>
              </p>
              <h2 className="about__heading">A FullStack Developer and UI/UX Designer</h2>
              <div className="about__info">
                <PText>
                 Hello! I'm from Cambridge, United Kingdom. <br />
I’m passionate about art, design, and website development. <br />
With a background in UI/UX, I enjoy creating clear and engaging user experiences — <br />
from landing pages to mobile apps. <br />
Coding became a way for me to bring those designs to life. <br /><br />

I got interested in coding about a year ago <br />
after watching a few trial lessons on programming. <br />
It opened up a whole new world for me within the IT field. <br />
I fell in love with it, and now I have the opportunity <br />
to combine development with design. <br /><br />

I find this combination truly exciting, <br />
and I genuinely enjoy the entire process of creating. <br /><br />

My vision is to make the world a better place. <br />
Today, almost everything is improving more than ever. <br />
Now it's time for us to build meaningful things <br />
that help the world become an even better place.

                </PText>
              </div>
              <DownloadButton
                text="Download Resume"
                file="/Yuliia-Levytska-FullStack.pdf"
              />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>

          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="University"
                items={['East Ukrainian National University V. Dahl']}
              />
              <AboutInfoItem
                title=""
                items={['Master’s Degree — Chemical Technology']}
              />

              <AboutInfoItem
                title="IT School GoIT"
                items={['UI/UX Design']}
              />
              <AboutInfoItem
                title=""
                items={['Fullstack Development']}
              />
            </div>

            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

           <AboutInfoItem
  title="Frontend"
  items={[
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'Bootstrap',
    'Tailwind CSS',
    'Material UI',
    'CSS Grid',
    'REST API',
  ]}
/>


              <AboutInfoItem
                title="Backend"
                items={['Node.js', 'Express.js']}
              />

              <AboutInfoItem
                title="Tools & Platforms"
                items={[
                  'Git',
                  'GitHub',
                  'VS Code',
                  'Chrome DevTools',
                  'Postman',
                  'Swagger',
                  'OpenAPI',
                ]}
              />

              <AboutInfoItem
                title="UI/UX Design"
                items={[
                  'Figma',
                  'Wireframing',
                  'Prototyping',
                  'User Flow Design',
                  'Responsive Design',
                ]}
              />
            </div>

            <div className="about__info__item">
              <h1 className="about__info__heading">Experience</h1>

              <AboutInfoItem
                title=""
                items={['']}
              />
              <AboutInfoItem
                title=""
                items={['']}
              />
            </div>
          </div>

          <ContactBanner />
        </div>
      </AboutPageStyles>
    </>
  );
}
