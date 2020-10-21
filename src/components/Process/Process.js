import React from 'react';

import './process.scss';

export const Process = () => (
  <section className="process">
    <div className="process__wrap">
      <h2 className="process__title">
        How to use it
      </h2>

      <ul className="process__list">
        <li className="process__item">
          <img
            src="images/icons/picto1.svg"
            alt="1"
            className="process__icon"
          />

          <p className="process__text">
            <span className="process__text--num">1:</span>
            Apply sufficient Hand
            Check product in in the
            palm of one hand and
            scrub for 60 seconds
          </p>
        </li>

        <li className="process__item">
          <img
            src="images/icons/picto2.svg"
            alt="2"
            className="process__icon"
          />

          <p className="process__text">
            <span className="process__text--num">2:</span>
            Rub your fingertips
            into the palm
          </p>
        </li>

        <li className="process__item">
          <img
            src="images/icons/picto3.svg"
            alt="3"
            className="process__icon"
          />

          <p className="process__text">
            <span className="process__text--num">3:</span>
            Scrub your hands
            from the inside and
            outside
          </p>
        </li>

        <li className="process__item">
          <img
            src="images/icons/picto4.svg"
            alt="4"
            className="process__icon"
          />

          <p className="process__text">
            <span className="process__text--num">4:</span>
            Rub also between
            your fingers
          </p>
        </li>

        <li className="process__item">
          <img
            src="images/icons/picto5.svg"
            alt="5"
            className="process__icon"
          />

          <p className="process__text">
            <span className="process__text--num">5:</span>
            Enjoy your clean
            hands
          </p>
        </li>
      </ul>
    </div>
  </section>
);
