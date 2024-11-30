import React from 'react';
import PropTypes from 'prop-types';

/**
 * IconButton Component
 * A reusable button that wraps around an icon.
 * It helps maintain consistent styles and behaviors for all icon buttons.
 */
const IconButton = ({ icon: Icon, ariaLabel, className, ...props }) => {
  return (
    <button
      aria-label={ariaLabel}
      className={`rounded placeholder:${className}`}
      {...props}
    >
      <Icon className="w-6 h-6" />
    </button>
  );
};

IconButton.propTypes = {
  /**
   * The icon component to render inside the button.
   */
  icon: PropTypes.elementType.isRequired,

  /**
   * Function to call when the button is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Accessible label for screen readers.
   */
  ariaLabel: PropTypes.string.isRequired,

  /**
   * Additional classes for custom styling.
   */
  className: PropTypes.string,
};

IconButton.defaultProps = {
  onClick: null,
  className: '',
};

export default IconButton;
