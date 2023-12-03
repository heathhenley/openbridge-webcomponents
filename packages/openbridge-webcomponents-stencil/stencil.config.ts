import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'openbridge-webcomponents-stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    vueOutputTarget({
      componentCorePackage: 'openbridge-webcomponents-stencil',
      proxiesFile: '../stencil-vue-lib/lib/components.ts',
    }),
  ],
  plugins: [
    inlineSvg(),
  ],
  testing: {
    browserHeadless: "new",
  },
};
