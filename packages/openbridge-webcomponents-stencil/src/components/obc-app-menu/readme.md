# obc-app-menu



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description | Type         | Default |
| ---------------- | ------------------ | ----------- | ------------ | ------- |
| `items`          | --                 |             | `MenuItem[]` | `[]`    |
| `selectedItemId` | `selected-item-id` |             | `string`     | `''`    |


## Events

| Event         | Description | Type                    |
| ------------- | ----------- | ----------------------- |
| `appSelected` |             | `CustomEvent<MenuItem>` |


## Dependencies

### Depends on

- [obc-input](../obc-input)
- [obc-app-button](../obc-app-button)

### Graph
```mermaid
graph TD;
  obc-app-menu --> obc-input
  obc-app-menu --> obc-app-button
  obc-input --> obc-icon
  obc-app-button --> obc-icon
  style obc-app-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
