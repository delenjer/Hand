import React from 'react';

import { Slider } from '../Slider/Slider';

import './about-us.scss';

export const AboutUs = () => (
  <section className="about-us flx">
    <div className="about-us__wrap flx__col">
      <article className="about-us__content">
        <h3 className="about-us__title title-box">
          Commit
        </h3>

        <p className="about-us__text text-box">
          Today, seize the opportunity to strengthen
          the relationship with your customers
          by offering them not only one of the best hydroalcoholic gel
          on the market but to participate to a great cause.
          It’s a social commitment, on top of being a sanitary one..
        </p>

        <div className="about-us__line-small" />

        <h3 className="about-us__title title-box" data-aos="fade-right">
          Composition
        </h3>

        <p className="about-us__text text-box">
          Ethyl alcohol + 70%, iso propyl alcohol, distilled water,
          peroxide, glycerine, propylene glycol. Made in Europe.
        </p>

        <div className="about-us__line line" />
      </article>
    </div>

    <div className="about-us__product flx__col">
      <div className="about-us__slider slider">
        <Slider />
      </div>
    </div>
  </section>
);
