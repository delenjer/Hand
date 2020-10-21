import React from 'react';

import { Product } from '../Product/Product';
import { Brand } from '../Brand';
import { Protect } from '../Protect/Protect';
import { Invest } from '../Invest/Invest';
import { AboutUs } from '../AboutUs/AboutUs';
import { Process } from '../Process/Process';
import { Partners } from '../Partners/Partners';
import { Contact } from '../Contact/Contact';
import { Footer } from '../Footer/Footer';

export const Main = () => (
  <main className="main">
    <Product />

    <Brand />

    <Protect />

    <Invest />

    <AboutUs />

    <Process />

    <Partners />

    <Contact />

    <Footer />
  </main>
);
