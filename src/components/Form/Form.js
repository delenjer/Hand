import React, { useState } from 'react';
import cx from 'classnames';

import { Field } from '../Field/Field';

export const Form = () => {
  const [query, setQuery] = useState({});
  const [isErrorName, setErrorName] = useState(false);
  const [isErrorSurname, setErrorSurname] = useState(false);
  const [isErrorEmail, setErrorEmail] = useState(false);
  const [isVisibleThanks, setVisibleThanks] = useState(false);

  // eslint-disable-next-line consistent-return
  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;

    setQuery(prevState => ({
      ...prevState,
      [name]: value,
    }));

    switch (name) {
      case 'name':
        setErrorName(false);
        break;

      case 'surname':
        setErrorSurname(false);
        break;

      case 'email':
        setErrorEmail(false);
        break;

      default:
        return '';
    }
  };

  const handleForm = (event) => {
    event.preventDefault();

    const pattern = /^[A-Z]/;
    const patternEmail = /[-.\w]+@([\w-]+\.)+[\w-]+/g;

    const { name, surname, email } = query;

    if (!(
      (!name || !pattern.test(name))
      || (!surname || !pattern.test(surname))
      || (!email || !patternEmail.test(email)))) {
      setQuery(prevState => ({
        ...prevState,
        name: '',
        surname: '',
        email: '',
      }));

      setErrorName(false);
      setErrorSurname(false);
      setErrorEmail(false);

      setVisibleThanks(true);
    } else {
      if (!name || !pattern.test(name)) {
        setErrorName(true);
      } else {
        setErrorName(false);
      }

      if (!surname || !pattern.test(surname)) {
        setErrorSurname(true);
      } else {
        setErrorSurname(false);
      }

      if (!email || !patternEmail.test(email)) {
        setErrorEmail(true);
      } else {
        setErrorEmail(false);
      }

      setVisibleThanks(false);
    }
  };

  if (isVisibleThanks === true) {
    setTimeout(() => {
      setVisibleThanks(false);
    }, 10000);
  }

  const visibleThanks = cx('thanks',
    { 'thanks visible-thanks': isVisibleThanks });

  return (
    <form
      className="contact__form form"
      onSubmit={handleForm}
    >
      <div
        className={visibleThanks}
      >
        <div className="thanks__wrap">
          <img
            src="images/icons/thanks.svg"
            alt="Thanks"
            className="thanks__icon"
          />

          <h2 className="thanks__title">
            Thank
          </h2>

          <p className="thanks__text">
            Thank you for your message!
          </p>
        </div>
      </div>

      <div className="form__content">
        <div className="form__full-name">
          <Field
            type="text"
            placeholder="First name"
            name="name"
            value={query.name === undefined ? '' : query.name}
            className={isErrorName
              ? 'form__input form__full-name-input error'
              : 'form__input form__full-name-input'
            }
            handleChange={handleChange}
          />

          <Field
            type="text"
            placeholder="Last name"
            name="surname"
            value={query.surname === undefined ? '' : query.surname}
            className={isErrorSurname
              ? 'form__input form__full-name-input error'
              : 'form__input form__full-name-input'
            }
            handleChange={handleChange}
          />
        </div>

        <Field
          type="email"
          placeholder="Email"
          name="email"
          value={query.email === undefined ? '' : query.email}
          className={isErrorEmail
            ? 'form__input error'
            : 'form__input'
          }
          handleChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          cols="30"
          rows="10"
          className="form__textarea"
        />

        <button
          type="submit"
          className="form__button"
        >
          Send
        </button>
      </div>
    </form>
  );
};
