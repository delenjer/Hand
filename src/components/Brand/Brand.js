import React from 'react';

import './brand.scss';

export const Brand = () => (
  <div className="brand flx">
    <div className="flx__col">
      <img
        src="images/hand-big.png"
        alt="Hands"
        className="brand__img"
      />
    </div>

    <div className="brand__wrap flx__col">
      <article className="brand__content">
        <h3 className="brand__title" data-aos="fade-left">
          <span className="brand__title--first">Your</span>
          daily
          hand
          sanitizer
        </h3>

        <p className="brand__text" data-aos="fade-left">
          It`s our new routine to keep us healthy!
        </p>
      </article>
    </div>
  </div>
);
