import { Component, Prop, h } from '@stencil/core';

@Component({ tag: 'obc-icon-button', shadow: true, styleUrl: 'obc-icon-button.css' })
export class IconButton {
  @Prop() icon = '01-placeholder'
  @Prop() variant = "normal"
  @Prop() size = "regular"
  @Prop() cornerLeft = false
  @Prop() cornerRight = false
  @Prop() activeColor = false

  render() {
    return (
      <button class={{
          "wrapper": true,
          ["variant-"+this.variant]: true,
          ["size-"+this.size]: true,
          "corner-left": this.cornerLeft,
          "corner-right": this.cornerRight,
          "active-color": this.activeColor
        }}>
        <div class="visible-wrapper">
          <obc-icon iconId={this.icon} class="icon"></obc-icon>
        </div>
      </button>
    )
  }

  
}


