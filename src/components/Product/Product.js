import React from 'react';

import './product.scss';

export const Product = () => {
  const showMenu = () => {
    const header = document.querySelector('.header');

    header.classList.add('visible-header');
  };

  return (
    <section className="product">
      <div className="product__content">
        <h1 className="product__title" data-aos="fade-up">
          Protecting
          <br />
          is caring
        </h1>

        <button onClick={showMenu} type="button" className="menu-burger" />

        <div className="product__description-container">
          <div className="product__description-wrap">
            <article className="product__description">
              <img
                src="images/icons/icon_bottle.svg"
                alt="Bottle"
                className="product__img"
              />

              <div className="product__description-content">
                <h2 className="product__description-title">
                  Hydroalcoholic Gel 130ml
                </h2>

                <div className="product__description-text">
                  With more than 70% a

                  With more than 70% alcohol,
                  <br />
                  Hand Check is one of the most effective
                  <br />
                  hydroalcoholic gels.
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="product__bottle-big" />
      </div>

      <div className="media">
        <a
          href="/"
          target="_blank"
          className="media-link"
          rel="noopener"
        >
          <img
            src="images/icons/facebook.svg"
            alt="Facebook"
          />
        </a>
        <a
          href="/"
          target="_blank"
          className="media-link"
          rel="noopener"
        >
          <img
            src="images/icons/instagram.svg"
            alt="Facebook"
          />
        </a>

        <p className="media__text">
          Made by love
        </p>
      </div>

      <img
        src="images/icons/mouse.svg"
        alt="Down"
        className="product__mouse-down"
      />
    </section>
  );
};
