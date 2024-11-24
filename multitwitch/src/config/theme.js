const themes = {
  // Dark theme configuration
  dark: {
    name: 'dark',
    colors: {
      primaryBackground: '#202123',
      secondaryBackground: '#343541',
      hoverBackground: '#2b2c2e',
      accent: '#10a37f',
      primaryText: '#d1d5db',
      secondaryText: '#5bb5ec',
      placeholderText: 'rgba(209, 213, 219, 0.5)',
      borderDefault: '#3b3b3e',
      borderHover: '#10a37f',
    },
  },
  // Light theme configuration
  light: {
    name: 'light',
    colors: {
      primaryBackground: '#ffffff',
      secondaryBackground: '#f7f7f8',
      hoverBackground: '#e3e4e6',
      accent: '#1a7f64',
      primaryText: '#3c3d3e',
      secondaryText: '#007acc',
      placeholderText: 'rgba(60, 61, 62, 0.5)',
      borderDefault: '#e5e7eb',
      borderHover: '#1a7f64',
    },
  },
};

// Font configuration used across the application
const fonts = {
  mainFont: 'Inter, sans-serif',
};

export { themes, fonts };