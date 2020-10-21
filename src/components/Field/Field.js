import React from 'react';
import PropTypes from 'prop-types';

export const Field = (
  {
    type,
    placeholder,
    name,
    className,
    handleChange,
    value,
  },
) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      className={className}
      onChange={handleChange}
    />
  </>
);

Field.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
