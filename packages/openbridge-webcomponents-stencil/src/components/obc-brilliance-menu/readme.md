# obc-brilliance-menu



<!-- Auto Generated Below -->


## Events

| Event               | Description | Type                              |
| ------------------- | ----------- | --------------------------------- |
| `brillianceChanged` |             | `CustomEvent<{ value: number; }>` |


## Dependencies

### Used by

 - [obc-demo](../obc-demo)

### Depends on

- [obc-slider](../obc-slider)
- [obc-toggle-switch](../obc-toggle-switch)
- [obc-toggle-button-group](../obc-toggle-button-group)
- [obc-toggle-button-option](../obc-toggle-button-option)

### Graph
```mermaid
graph TD;
  obc-brilliance-menu --> obc-slider
  obc-brilliance-menu --> obc-toggle-switch
  obc-brilliance-menu --> obc-toggle-button-group
  obc-brilliance-menu --> obc-toggle-button-option
  obc-slider --> obc-icon
  obc-toggle-button-option --> obc-icon
  obc-demo --> obc-brilliance-menu
  style obc-brilliance-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
