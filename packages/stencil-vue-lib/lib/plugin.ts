import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@tibnor/openbridge-webcomponents-stencil/loader';

export const ComponentLibrary: Plugin = {
    async install() {
        applyPolyfills().then(() => {
            defineCustomElements();
        });
    },
};