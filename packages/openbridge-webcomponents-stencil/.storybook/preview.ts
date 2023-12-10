import { defineCustomElements } from '../loader';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import "../assets/variables.css";
import { setCustomElementsManifest, Preview } from '@storybook/web-components';

import customElements from '../custom-elements.json';

setCustomElementsManifest(customElements);

defineCustomElements();

const preview: Preview = {
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



export default preview;
