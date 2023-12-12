import { Component, Prop, h } from '@stencil/core';


@Component({ tag: 'obc-app-button', shadow: true, styleUrl: 'obc-app-button.css' })
export class AppButton {
  @Prop() label = 'Button'
  @Prop() icon = '01-placeholder'
  @Prop() checked = false;
  @Prop() size = "normal";

  render() {
    return ( //@ts-ignore
    <div class={{wrapper: true, small: this.size === 'small'}} checked={this.checked}>
        <button>
            <span class="icon"><obc-icon iconId={this.icon} sizePx={this.size === 'small' ? 20 : 48}></obc-icon></span>
        </button>
        <span class="label" > {this.label} </span>
    </div>
    )
  }

  ;
}


