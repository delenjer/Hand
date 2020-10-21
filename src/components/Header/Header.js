import React from 'react';
import PropTypes from 'prop-types';

import { animateScroll as scroll } from 'react-scroll';

import { Nav } from '../Nav';
import { Lang } from '../Lang/Lang';
import { LogoBox } from '../LogoBox/LogoBox';

import './header.scss';

export const Header = ({ isScrolled }) => {
  const scrollToTop = (e) => {
    e.preventDefault();

    return scroll.scrollToTop();
  };

  const hideMenu = () => {
    const header = document.querySelector('.header');

    header.classList.remove('visible-header');
  };

  return (
    <header
      className={isScrolled ? 'header bg-scroll' : 'header'}
    >
      <LogoBox scrollToTop={scrollToTop} />

      <div className="nav-wrapper">
        <Nav />

        <Lang />
      </div>

      <button onClick={hideMenu} type="button" className="menu-close" />
    </header>
  );
};

Header.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
};
