/** @type { import('@storybook/html').Preview } */
import { defineCustomElements } from '../loader';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

defineCustomElements();

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      night: 'night',
      dusk: 'dusk',
      day: 'day',
      bright: 'bright',
    },
    defaultTheme: 'day',
    attributeName: 'data-ob-theme',
  }),
];

import "../assets/variables.css";

export default preview;
