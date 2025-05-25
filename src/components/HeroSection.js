import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeroImg from '../assets/images/hero.webp';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import PText from './PText';

const HeroStyles = styled.div`
  padding: 10rem 0;
  .hero {
    height: 100vh;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  @media only screen and (max-width: 768px) {
    .hero {
      height: auto;
      width: 100%;
    }
  }

  .hero__heading {
    font-size: 2rem;
    margin-bottom: 20px;
    position: relative;
    opacity: 0;
    transform: translateY(-40px);
    animation: slideDownFade 1s ease-out forwards;
    animation-delay: 0.2s;

    span {
      display: inline-block;
      width: 100%;
    }
  }

  .hero__name {
    font-family: 'Montserrat SemiBold';
    font-size: 7rem;
    color: var(--white);
  }

  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 500px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
    opacity: 0;
    transform: scale(0.9) rotateX(45deg);
    animation: zoomReveal 1s ease-out forwards;
    animation-delay: 0.8s;
  }

  .hero__info {
    margin-top: -18rem;
    opacity: 0;
    transform: translateY(50px);
    animation: slideUpFade 1s ease-out forwards;
    animation-delay: 1.4s;
  }

  .hero__social,
  .hero__scrollDown {
    display: flex;
    position: fixed;
    flex-direction: column;
    gap: 2rem;
    width: 50px;
    z-index: 10;
  }

  .hero__social {
    left: 50px;
    bottom: 280px;
  }

  .hero__scrollDown {
    right: 50px;
    bottom: 440px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
      animation: bounceDown 2s ease-in-out infinite;
    }
  }

  .hero__scrollDown {
    img {
      max-height: 70px;
      animation: bounceDown 2s ease-in-out infinite;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @keyframes slideDownFade {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes zoomReveal {
    to {
      opacity: 1;
      transform: scale(1) rotateX(0deg);
    }
  }

  @keyframes slideUpFade {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounceDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(8px);
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
    .hero {
      max-width: 100%;
    }

    .hero__heading {
      font-size: 1.4rem;
    }

    .hero__name {
      font-size: 4.5rem;
    }

    .hero__img {
      height: 300px;
    }

    .hero__info {
      margin-top: 3rem;
    }

    .hero-info,
    .hero-text {
      text-align: justify;
    }

    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;

      .hero__social__indicator {
        width: 20px;

        p {
          font-size: 1.2rem;
        }

        img {
          max-height: 22px;
        }
      }

      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }

    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;

      p {
        font-size: 1.3rem;
      }
    }
  }
`;

function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name">Yuliia Levytska</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="Yuliia" />
          </div>
          <div className="hero__info">
            <PText className="hero-text">
              I'm a Fullstack Developer who builds clean and user-friendly
              websites. I'm also a UI/UX designer — ready to help with landing
              pages, redesigns, and app interfaces.
            </PText>
            <Button btnText="see my works" btnLink="/projects" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="arrow" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://www.behance.net/yuliialevytska"
                    target="_blank"
                    rel="noreferrer"
                  >
                    BH
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/yuliia-levytska-90a94b2a6/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IN
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/YLevytsk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GH
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <li>
              <Link to="/projects">LIVE</Link>
            </li>
            <img src={ScrollDownArrow} alt="Scroll down" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

export default memo(HeroSection);
