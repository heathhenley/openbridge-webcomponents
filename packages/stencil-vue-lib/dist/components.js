import { defineContainer } from './vue-component-lib/utils';
export const MyComponent = defineContainer('my-component', undefined, [
    'first',
    'middle',
    'last',
    'myEvent'
]);
export const ObcIcon = defineContainer('obc-icon', undefined, [
    'icon',
    'sizePx'
]);
export const ObcTooltip = defineContainer('obc-tooltip', undefined, [
    'label',
    'text',
    'position',
    'open'
]);
//# sourceMappingURL=components.js.map