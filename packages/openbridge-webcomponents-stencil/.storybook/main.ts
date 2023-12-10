import { join, dirname } from 'path';
import type { StorybookConfig } from "@storybook/web-components-vite";


/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [getAbsolutePath('@storybook/addon-links'), getAbsolutePath('@storybook/addon-essentials'), getAbsolutePath('@storybook/addon-interactions')],
  framework: {
    name: getAbsolutePath('@storybook/web-components-vite'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  previewHead: (head, options) => `
    ${head}
    <style>
      @font-face {
      font-family: Noto Sans;
      src: url(${options.configType === 'DEVELOPMENT' ? '' : '/openbridge-webcomponents/storybook'}/assets/NotoSans.ttf);
      }
    </style>
  `,
};
export default config;
