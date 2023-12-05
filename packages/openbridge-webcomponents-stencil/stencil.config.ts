import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { inlineSvg } from 'stencil-inline-svg';
import { postcss } from '@stencil-community/postcss';
import postCssMixin from "postcss-mixins";
import { styleMixin } from "./mixins";
import path from 'path';

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
    postcss({
      plugins: [
        postCssMixin({
          "mixinsDir": path.join(__dirname, "src", "mixins"),
          "mixins": {
            "style": styleMixin
          }
        })]
    })],
  testing: {
    browserHeadless: "new",
  },
};
