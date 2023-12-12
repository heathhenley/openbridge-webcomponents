import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';





@Component({ tag: 'obc-toggle-button-option', shadow: true, styleUrl: 'obc-toggle-button-option.css' })
export class ToggleButtonOption {
  @Prop() icon = '01-placeholder'
  @Prop() value = 'value'
  @Prop() selected = false

  @Event({eventName: 'selected'}) selectedEvent: EventEmitter<{ value: string }>;
  onClick() {
    this.selectedEvent.emit({ value: this.value });
  }

  render() {
    return (
      // @ts-ignore
      <button class="wrapper" selected={this.selected} onClick={this.onClick}>
        <obc-icon iconId={this.icon} class="icon"></obc-icon>
        <div class="label"><slot></slot></div>
      </button>
    )
  }

  ;
}


