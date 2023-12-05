import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'obc-tooltip',
  styleUrl: 'obc-tooltip.css',
  shadow: true,
})
export class ObcTooltip {
  @Prop() label: string = '';
  @Prop() text: string = '';
  /**
   * Position of the tooltip arrow
   * 
   * @type {('above' | 'below' | 'left' | 'right')}
   */
  @Prop() position: 'above' | 'below' | 'left' | 'right' = 'below';

  /**
   * Open the tooltip
   * 
   * @type {boolean}
   * The tooltip can also be opened by using CSS custom properties: --obc-tooltip-open: 1
   */
  @Prop() open: boolean = false;

  render() {
    const hasText = this.text !== '';
    return (
      <div class="outer-wrapper">
      <div class={{
            wrapper: true,
            'large-arrow': hasText,
            [this.position]: true,
            open: this.open
        }}
        >
                <div class="header">
                    <div class="title">{this.label}</div>
                    { this.text === '' ? null : <div class="text">{this.text}</div>}
                </div>
            
        </div>
          <div class="content">
                <slot></slot>
          </div>
       </div>
    );
  }

}
