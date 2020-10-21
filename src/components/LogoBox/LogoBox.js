import React from 'react';
import PropTypes from 'prop-types';

export const LogoBox = ({ scrollToTop }) => (
  <div className="header__col logo-box">
    <a
      href="/"
      className="header__logo logo-box__logo"
      onClick={scrollToTop}
    >
      <img
        src="images/icons/logo.svg"
        alt="Logo"
        className="logo-box__img"
      />
    </a>

    <p className="header__text logo-box__text">
      Gel
      Hydroalcoolique
    </p>
  </div>
);

LogoBox.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
};
