import React, { useState, useEffect } from 'react';
import './App.scss';

import { Header } from './components/Header';
import { Main } from './components/Main/Main';

export const App = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const scrollHeader = () => {
    const scrolled = window.pageYOffset;

    if (scrolled > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (windowWidth > 768) {
      window.addEventListener('scroll', scrollHeader, { passive: true });
    }

    return () => window.removeEventListener('scroll', scrollHeader);
  }, [windowWidth]);

  return (
    <div className="hand">
      <div className="page-content">
        <Header
          isScrolled={isScrolled}
          scrollHeader={scrollHeader}
        />

        <Main />
      </div>
    </div>
  );
};
