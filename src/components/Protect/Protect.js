import React from 'react';

import './protect.scss';

export const Protect = () => (
  <div className="protect flx">
    <article className="protect__wrap flx__col">
      <div className="protect__content">
        <h3 className="protect__title title-box" data-aos="fade-up">
          Protect
        </h3>

        <div className="protect__line line" data-aos="fade-up" />

        <p className="protect__text text-box" data-aos="fade-up">
          HC Group is a Swiss company whose entire range of activities
          is focused on protecting the health of the consumers.
          Today and in response to the sanitary situation,
          we offer you Hand CheckTM, our hydroalcoholic gel
          that will meet the the population highest health’s expectations.
          Necessary, qualitative and at the correct price,
          it will seduce your customers.
        </p>
      </div>
    </article>

    <div className="flx__col">
      <img
        src="images/training-min.png"
        alt="Hands"
        className="protect__img"
      />
    </div>
  </div>
);
