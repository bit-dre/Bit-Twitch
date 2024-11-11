import React from 'react';
import PropTypes from 'prop-types';

/**
 * IconButton Component
 * A reusable button that wraps around an icon.
 * It helps maintain consistent styles and behaviors for all icon buttons.
 */
const IconButton = ({ icon: Icon, onClick, ariaLabel, className }) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`flex items-center justify-center p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 ${className}`}
    >
      <Icon className="w-5 h-5 text-current" />
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
