import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map.png';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background-color: var(--deep-dark);
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

function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Hear is me</h3>
          <PText>Kapashia, Gazipur, Bangladesh</PText>
          <a
            className="map__card__link"
            href="https://www.google.com.bd/maps/place/%E0%A6%95%E0%A6%BE%E0%A6%AA%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A7%9F%E0%A6%BE+%E0%A6%AC%E0%A6%BE%E0%A6%B8+%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%87%E0%A6%B6%E0%A6%A8/@24.1140555,90.559144,17z/data=!3m1!4b1!4m5!3m4!1s0x3755d5e57829270d:0x3779c418087047b8!8m2!3d24.1140877!4d90.5613273"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}

export default Map;
