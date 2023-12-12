import { Component, Prop, h } from '@stencil/core';

@Component({ tag: 'obc-navigation-item', shadow: true, styleUrl: 'obc-navigation-item.css' })
export class NavigationItem {

  @Prop() icon = '01-placeholder'
  @Prop() label = 'Label'
  @Prop() href = '#'
  @Prop() checked = false

  onClick() {
    dispatchEvent(new CustomEvent('click'));
  }

  render() {
    return (
      // @ts-ignore
      <a class="wrapper" checked={this.checked} href={this.href} onClick={this.onClick}>
        <obc-icon iconId={this.icon} class="icon">
        </obc-icon>
        <span class="label">
            {this.label}
        </span>
    </a>
    )
  }

  ;
}


