import { applyPolyfills, defineCustomElements } from 'openbridge-webcomponents-stencil/loader';
export const ComponentLibrary = {
    async install() {
        applyPolyfills().then(() => {
            defineCustomElements();
        });
    },
};
//# sourceMappingURL=plugin.js.map