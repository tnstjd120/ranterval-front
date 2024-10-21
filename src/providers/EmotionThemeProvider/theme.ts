const colors = {
  grey: {
    900: '#3C3C3E',
    800: '#4F4F51',
    700: '#666669',
    600: '#828387',
    500: '#8F9094',
    400: '#A5A6A9',
    300: '#B4B5B7',
    200: '#CBCCCE',
    100: '#EFF0F2',
  },
  black: {
    600: '#000000',
    500: '#111111',
    400: '#222222',
    300: '#333333',
    200: '#444444',
    100: '#555555',
  },
  white: '#FFFFFF',
  success: '#15C051',
  warning: '#FEB33F',
  error: '#FE3E40',
};

const background = {
  default: colors.black[300],
  light: colors.grey[100],
  dark: colors.black[600],
};

const text = {
  default: colors.white,
  secondary: colors.grey[500],
  disabled: colors.grey[400],
  error: colors.error,
  success: colors.success,
  warning: colors.warning,
};

const breakpoints = {
  mobile: 640,
  desktop: 1140,
};

const padding = {
  mobile: {
    inline: 16,
    block: 80,
  },
  desktop: {
    inline: 32,
    block: 80,
  },
};

const typography = {
  h1: {
    fontSize: '3rem',
    lineHeight: '1.2',
    fontWeight: 700,
  },
  h2: {
    fontSize: '2.5rem',
    lineHeight: '1.2',
    fontWeight: 700,
  },
  h3: {
    fontSize: '2rem',
    lineHeight: '1.2',
    fontWeight: 700,
  },
  h4: {
    fontSize: '1.5rem',
    lineHeight: '1.2',
    fontWeight: 700,
  },
  subtitle: {
    fontSize: '1.125rem',
    lineHeight: '1.5',
    fontWeight: 600,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: '1.5',
    fontWeight: 500,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: '1.5',
    fontWeight: 500,
  },
  button: {
    fontSize: '1.0625rem',
    lineHeight: '1.5',
    fontWeight: 700,
  },
  caption: {
    fontSize: '0.75rem',
    lineHeight: '1.5',
    fontWeight: 500,
  },
  overline: {
    fontSize: '0.625rem',
    lineHeight: '1.2',
    fontWeight: 500,
  },
};

const theme = { colors, typography, breakpoints, background, text, padding };

export default theme;
