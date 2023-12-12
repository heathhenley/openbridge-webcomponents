import { Component, Prop, h } from '@stencil/core';

@Component({ tag: 'obc-notification-button', shadow: true, styleUrl: 'obc-notification-button.css' })
export class NotificationButton {
  @Prop() openRight = false
  @Prop() openLeft = false
  @Prop() icon = false
  @Prop() disabled = false
  @Prop() indent = false

  render() {
    return (
      <button class={{wrapper: true, 'open-right': this.openRight, 'open-left': this.openLeft, icon: this.icon, indent: this.indent}}
        disabled={this.disabled}
      >
        <div class="visible-wrapper">
          <slot></slot>
        </div>
      </button>
    )
  }

  
}


