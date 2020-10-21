import React from 'react';

import './partners.scss';

export const Partners = () => (
  <section className="partners">
    <div className="partners__wrap">
      <h3 className="partners__title title-box">
        Partners
      </h3>

      <div className="partners__content">
        <div className="partners__logo" />

        <ul className="partners__list">
          <li className="partners__item">
            <img
              src="images/partners.png"
              alt="img"
              className="partners__img"
            />
          </li>

          <li className="partners__item">
            <img
              src="images/partners.png"
              alt="img"
              className="partners__img"
            />
          </li>

          <li className="partners__item">
            <img
              src="images/partners.png"
              alt="img"
              className="partners__img"
            />
          </li>

          <li className="partners__item">
            <img
              src="images/partners.png"
              alt="img"
              className="partners__img"
            />
          </li>

          <li className="partners__item">
            <img
              src="images/partners.png"
              alt="img"
              className="partners__img"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
);
