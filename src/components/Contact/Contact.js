import React from 'react';

import { Form } from '../Form/Form';

import './contact.scss';

export const Contact = () => (
  <section className="contact">
    <h2 className="contact__title">
      Contact
    </h2>

    <p className="contact__text">
      If you have any question, comments or concerns, please
      <br />
      do not hesitate to contact us.
    </p>

    <div className="contact__wrap">
      <div className="contact__img" />

      <Form />
    </div>
  </section>
);
