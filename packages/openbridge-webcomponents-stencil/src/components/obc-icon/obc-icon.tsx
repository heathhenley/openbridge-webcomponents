import { Component, Prop, h } from '@stencil/core';
import { ICONS, ICONS_CSS } from '../../icons';

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

  @Prop() useCssColor: boolean = false;

  render() {
    const icons = this.useCssColor ? ICONS_CSS : ICONS;
    let icon = icons[this.iconId];
    if (!icon) { console.error(`Icon ${this.iconId} not found`)
    icon = icons['01-placeholder'];
  }

    return (
       <div class="wrapper" style={{'--size': this.sizePx + 'px'}} innerHTML={icon}> 
      </div>
    );
  }

}
