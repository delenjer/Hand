import React from 'react';

import { Link } from 'react-scroll';

import './nav.scss';

export const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <Link
          to="product"
          className="nav__link"
          smooth
        >
          home
        </Link>
      </li>

      <li className="nav__item">
        <Link
          to="protect"
          smooth
          offset={-90}
          className="nav__link"
        >
          protect
        </Link>
      </li>

      <li className="nav__item">
        <Link
          to="invest"
          smooth
          offset={-90}
          className="nav__link"
        >
          invest
        </Link>
      </li>

      <li className="nav__item">
        <Link
          to="process"
          smooth
          offset={-90}
          className="nav__link"
        >
          use
        </Link>
      </li>

      <li className="nav__item">
        <Link
          to="contact"
          smooth
          offset={-90}
          className="nav__link"
        >
          contact
        </Link>
      </li>
    </ul>
  </nav>
);
