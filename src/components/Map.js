import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.jpg';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;

  .container {
    position: relative;
    min-height: 400px;
  }

  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }

  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }

  /* СБРОС margin от PText внутри карты */
  .map__card .para {
    margin: 0 !important;
  }

  .map__card .para p {
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }

  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

const Map = () => (
  <MapStyles>
    <div className="container">
      <div className="map__card">
        <h3 className="map__card__heading">Here is me</h3>
        <PText>Cambridge,UK</PText>
        <a
          className="map__card__link"
          href="https://maps.app.goo.gl/Qt6CJ46GtwR6TErG7"
          target="_blank"
          rel="noreferrer"
        >
          Open in google map
        </a>
      </div>
    </div>
  </MapStyles>
);

export default React.memo(Map);
