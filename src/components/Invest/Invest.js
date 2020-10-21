import React from 'react';

import './invest.scss';

export const Invest = () => (
  <section className="invest">
    <h3 className="invest__title title-box">
      Invest
    </h3>

    <div className="invest__wrap">
      <ul className="invest__list">
        <li className="invest__item">
          <img
            src="images/icons/bottle-min.svg"
            alt="bottle"
            className="invest__icons"
          />

          <p className="invest__text">
            HAND CHECK
          </p>
        </li>

        <li className="invest__item-arrow" />

        <li className="invest__item">
          <img
            src="images/icons/resellers.svg"
            alt="resellers"
            className="invest__icons"
          />

          <p className="invest__text">
            RESELLERS
          </p>
        </li>

        <li className="invest__item-arrow" />

        <li className="invest__item">
          <img
            src="images/icons/stoke.svg"
            alt="stoke"
            className="invest__icons"
          />

          <p className="invest__text">
            FOUNDATION
          </p>
        </li>

        <li className="invest__item-arrow" />

        <li className="invest__item">
          <img
            src="images/icons/sport.svg"
            alt="resellers"
            className="invest__icons"
          />

          <p className="invest__text">
            SPORT CLUB
          </p>
        </li>

        <li className="invest__item-arrow" />

        <li className="invest__item">
          <img
            src="images/icons/group.svg"
            alt="resellers"
            className="invest__icons"
          />

          <p className="invest__text">
            SPORTS COMMUNITY
          </p>
        </li>
      </ul>

      <div className="invest__group" />
    </div>
  </section>
);
