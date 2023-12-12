import { Component, Prop, Event, EventEmitter, Element, h } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';


@Component({ tag: 'obc-toggle-button-group', shadow: true, styleUrl: 'obc-toggle-button-group.css' })
export class ToggleButtonGroup {

  @Prop() hasLabels = false;
  @Prop() value = '';

  @Element() hostElement: HTMLStencilElement;

  get options() {
    return Array.from(this.hostElement.querySelectorAll('obc-toggle-button-option'));
  }

  componentWillLoad() {
    this.options.forEach(slot => {
      slot.addEventListener('selected', (e) => this.handleOptionClick(e));
      slot.selected = slot.value === this.value;
    })
  }

  @Event() valueChanged: EventEmitter<{ value: string }>;

  handleOptionClick(event: Event) {
    const value = (event as CustomEvent).detail.value;
    this.valueChanged.emit({ value } )
    this.options.forEach(option => {
      option.selected = option.value === value;
    })
  }

  render() {
    return (
     <div class={{wrapper: true, 'has-label':  this.hasLabels}}>
        <slot></slot>
      </div>
    )
  }
}


