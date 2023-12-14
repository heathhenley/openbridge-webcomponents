import { defineContainer } from './vue-component-lib/utils';
export const ObcAlertButton = defineContainer('obc-alert-button', undefined, [
    'nAlerts',
    'type',
    'standalone',
    'counter'
]);
export const ObcAlertMenu = defineContainer('obc-alert-menu', undefined, [
    'alerts',
    'narrow'
]);
export const ObcAppButton = defineContainer('obc-app-button', undefined, [
    'label',
    'icon',
    'checked',
    'size'
]);
export const ObcAppMenu = defineContainer('obc-app-menu', undefined, [
    'items',
    'selectedItemId',
    'appSelected'
]);
export const ObcBreadcrumb = defineContainer('obc-breadcrumb', undefined, [
    'items'
]);
export const ObcBrillianceMenu = defineContainer('obc-brilliance-menu', undefined, [
    'brillianceChanged'
]);
export const ObcButton = defineContainer('obc-button', undefined, [
    'variant',
    'size',
    'fullWidth',
    'leftAlign'
]);
export const ObcClock = defineContainer('obc-clock', undefined, [
    'date',
    'showDate'
]);
export const ObcDemo = defineContainer('obc-demo', undefined);
export const ObcDivider = defineContainer('obc-divider', undefined);
export const ObcIcon = defineContainer('obc-icon', undefined, [
    'iconId',
    'sizePx',
    'useCssColor'
]);
export const ObcIconButton = defineContainer('obc-icon-button', undefined, [
    'icon',
    'variant',
    'size',
    'cornerLeft',
    'cornerRight',
    'activeColor'
]);
export const ObcInput = defineContainer('obc-input', undefined, [
    'value',
    'placeholder',
    'type',
    'icon'
]);
export const ObcNavigationItem = defineContainer('obc-navigation-item', undefined, [
    'icon',
    'label',
    'href',
    'checked'
]);
export const ObcNavigationMenu = defineContainer('obc-navigation-menu', undefined);
export const ObcNotificationButton = defineContainer('obc-notification-button', undefined, [
    'openRight',
    'openLeft',
    'icon',
    'disabled',
    'indent'
]);
export const ObcNotificationMessage = defineContainer('obc-notification-message', undefined, [
    'empty',
    'large'
]);
export const ObcNotificationMessageItem = defineContainer('obc-notification-message-item', undefined, [
    'time'
]);
export const ObcSlider = defineContainer('obc-slider', undefined, [
    'value',
    'min',
    'max',
    'step',
    'iconLeft',
    'iconRight'
]);
export const ObcToggleButtonGroup = defineContainer('obc-toggle-button-group', undefined, [
    'hasLabels',
    'value',
    'valueChanged'
]);
export const ObcToggleButtonOption = defineContainer('obc-toggle-button-option', undefined, [
    'icon',
    'value',
    'selected',
    'selected'
]);
export const ObcToggleSwitch = defineContainer('obc-toggle-switch', undefined, [
    'label',
    'checked'
]);
export const ObcTooltip = defineContainer('obc-tooltip', undefined, [
    'label',
    'text',
    'position',
    'open'
]);
export const ObcTopBar = defineContainer('obc-top-bar', undefined, [
    'appTitle',
    'pageName',
    'date',
    'wideMenuButton',
    'showAppsButton',
    'showDimmingButton',
    'showAlertsButton',
    'showClock',
    'inactive',
    'sizeSmall',
    'settings',
    'breadcrumbItems',
    'menuButtonClicked',
    'alertsButtonClicked',
    'dimmingButtonClicked',
    'appsButtonClicked',
    'leftMoreButtonClicked',
    'close',
    'back',
    'forward'
]);
//# sourceMappingURL=components.js.map