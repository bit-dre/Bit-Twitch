// Theme configurations for both dark and light modes
const themes = {
  // Dark theme configuration
  dark: {
    name: 'dark',
    colors: {
      primaryBackground: '#18181b',
      secondaryBackground: '#1f1f23',
      hoverBackground: '#3b3b3e',
      accent: '#49b4f6',
      primaryText: '#ffffff',
      secondaryText: '#5bb5ec',
      placeholderText: 'rgba(255, 255, 255, 0.5)',
      borderDefault: '#3b3b3e',
      borderHover: '#49b4f6',
    },
  },
  // Light theme configuration
  light: {
    name: 'light',
    colors: {
      primaryBackground: '#ffffff',
      secondaryBackground: '#f5f5f5',
      hoverBackground: '#e0e0e0',
      accent: '#007acc',
      primaryText: '#000000',
      secondaryText: '#007acc',
      placeholderText: 'rgba(0, 0, 0, 0.5)',
      borderDefault: '#cccccc',
      borderHover: '#007acc',
    },
  },
};

// Font configuration used across the application
const fonts = {
  mainFont: 'font-maven',
};

export { themes, fonts };
