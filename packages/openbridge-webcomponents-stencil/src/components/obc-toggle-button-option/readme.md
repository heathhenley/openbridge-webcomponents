# obc-toggle-button-option



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type      | Default            |
| ---------- | ---------- | ----------- | --------- | ------------------ |
| `icon`     | `icon`     |             | `string`  | `'01-placeholder'` |
| `selected` | `selected` |             | `boolean` | `false`            |
| `value`    | `value`    |             | `string`  | `'value'`          |


## Events

| Event      | Description | Type                              |
| ---------- | ----------- | --------------------------------- |
| `selected` |             | `CustomEvent<{ value: string; }>` |


## Dependencies

### Used by

 - [obc-brilliance-menu](../obc-brilliance-menu)

### Depends on

- [obc-icon](../obc-icon)

### Graph
```mermaid
graph TD;
  obc-toggle-button-option --> obc-icon
  obc-brilliance-menu --> obc-toggle-button-option
  style obc-toggle-button-option fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
