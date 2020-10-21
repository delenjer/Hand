import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import './slider.scss';

export const Slider = () => (
  <Carousel
    showStatus={false}
    showThumbs={false}
    infiniteLoop
  >
    <div className="slider-item">
      <div className="about-us__description">
        <div
          className={
            `about-us__description-content
            about-us__description-content--content-lemon`
          }
        >
          <h4 className="about-us__description-title">
            Fragrance
          </h4>

          <p className="about-us__description-text">
            With a lemon scent, you will feel both safe and full of energy.
          </p>
        </div>
      </div>

      <div className="about-us__slide">
        <img
          src="images/bottle-lemon.png"
          alt="Bottle"
          className="about-us__slide-img"
        />

        <p className="about-us__slide-text">
          OUR PRODUCT
        </p>
      </div>
    </div>

    <div className="slider-item">
      <div className="about-us__description">
        <div
          className={
            `about-us__description-content
            about-us__description-content--content-mint`
          }
        >
          <h4 className="about-us__description-title">
            Fragrance
          </h4>

          <p
            className={
              `about-us__description-text
              about-us__description-text--mint`
            }
          >
            With a menthol scent, you will feel both safe and refreshed.
          </p>
        </div>
      </div>

      <div className="about-us__slide">
        <img
          src="images/bottle-mint.png"
          alt="Bottle"
          className="about-us__slide-img"
        />

        <p className="about-us__slide-text">
          OUR PRODUCT
        </p>
      </div>
    </div>

    <div className="slider-item">
      <div className="about-us__description">
        <div
          className={
            `about-us__description-content
            about-us__description-content--content-natural`
          }
        >
          <h4 className="about-us__description-title">
            Fragrance
          </h4>

          <p
            className={
              `about-us__description-text
              about-us__description-text--mint`
            }
          >
            With this natural scent, you will feel both safe and clean.
          </p>
        </div>
      </div>

      <div className="about-us__slide">
        <img
          src="images/bottle-natural.png"
          alt="Bottle"
          className="about-us__slide-img"
        />

        <p className="about-us__slide-text">
          OUR PRODUCT
        </p>
      </div>
    </div>
  </Carousel>
);
