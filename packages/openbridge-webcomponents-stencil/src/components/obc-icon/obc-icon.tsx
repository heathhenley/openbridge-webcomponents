import { Component, Prop, h } from '@stencil/core';
import { ICONS } from '../../icons';

@Component({
  tag: 'obc-icon',
  styleUrl: 'obc-icon.css',
  shadow: true,
})
export class ObcIcon {

  /**
   * The icon name
   */
  @Prop() iconId: string;

  /**
   * The icon size in pixels
   */
  @Prop() sizePx: number = 24;

  render() {
    let icon = ICONS[this.iconId];
    if (!icon) { console.error(`Icon ${this.iconId} not found`)
    icon = ICONS['01-placeholder'];
  }

    return (
       <div class="wrapper" style={{'--size': this.sizePx + 'px'}} innerHTML={icon}> 
      </div>
    );
  }

}
