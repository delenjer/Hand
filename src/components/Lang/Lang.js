import React from 'react';

import './lang.scss';

export const Lang = () => (
  <div className="lang">
    <a href="/" className="lang__link main-lang">
      en
    </a>

    <div className="lang__box">
      <div className="visible-link">
        <a
          href="index-fr.html"
          className="lang__link lang__item lang-item lang-item-eng"
        >
          fr
        </a>
      </div>

      <div className="visible-link">
        <a
          href="index-de.html"
          className="lang__link lang__item lang-item lang-item-de"
        >
          de
        </a>
      </div>
    </div>
  </div>
);
