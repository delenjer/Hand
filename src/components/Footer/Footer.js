import React from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';

import './footer.scss';

export const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();

    return scroll.scrollToTop();
  };

  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__top">
          <div className="footer__top-logo">
            <a
              href="/"
              className="footer__logo"
              onClick={scrollToTop}
            >
              <img
                src="images/icons/main-footer-logo.svg"
                alt="Footer logo"
                className="footer__logo--img"
              />
            </a>

            <p className="footer__top-logo--text">
              Gel
              Hydroalcoolique
            </p>
          </div>

          <p className="footer__top-text">
            HC A personal care brand that puts social
            commitment first by keeping our youth safe and happy.
          </p>
        </div>

        <div className="footer__content">
          <img
            src="images/icons/footer-logo.svg"
            alt="Icon"
            className="footer__content-icon"
          />

          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <Link
                  to="product"
                  smooth
                  className="footer__nav-link"
                >
                  home
                </Link>
              </li>

              <li className="footer__nav-item">
                <Link
                  to="protect"
                  className="footer__nav-link"
                  smooth
                  offset={-90}
                >
                  protect
                </Link>
              </li>

              <li className="footer__nav-item">
                <Link
                  to="invest"
                  smooth
                  offset={-90}
                  className="footer__nav-link"
                >
                  invest
                </Link>
              </li>

              <li className="footer__nav-item">
                <Link
                  to="process"
                  smooth
                  offset={-90}
                  className="footer__nav-link"
                >
                  use
                </Link>
              </li>

              <li className="footer__nav-item">
                <Link
                  to="contact"
                  smooth
                  offset={-90}
                  className="footer__nav-link"
                >
                  contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer__media">
        <a
          href="/"
          target="_blank"
          className="footer__media--link"
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
          className="footer__media--link"
          rel="noopener"
        >
          <img
            src="images/icons/instagram.svg"
            alt="Facebook"
          />
        </a>
      </div>
    </footer>
  );
};
