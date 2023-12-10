import { Component, Prop, h, Element} from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

/**
 * Button component
 */
@Component({
  tag: 'obc-button',
  styleUrl: 'obc-button.css',
  shadow: true,
})
export class ObcButton {
  @Prop() variant = "normal";
  @Prop() size = "regular";
  @Prop() fullWidth = false;
  @Prop() leftAlign = false;

  hasLeadingIcon: boolean;
  hasTrailingIcon: boolean;

  @Element() hostElement: HTMLStencilElement;

  componentWillLoad() {
    this.hasLeadingIcon = !!this.hostElement.querySelector('[slot="leading-icon"]');
    this.hasTrailingIcon = !!this.hostElement.querySelector('[slot="trailing-icon"]');
}

  render() {
    return (
      <button class={{
        wrapper: true,
        ['variant-' + this.variant]: true,
        ['size-' + this.size]: true,
        'full-width': this.fullWidth,
        'left-align': this.leftAlign,
        'has-icon-leading': this.hasLeadingIcon,
        'has-icon-trailing': this.hasTrailingIcon,
      }}
      >
        <div class="visible-wrapper">
          <span class="icon leading"><slot name="leading-icon"></slot></span>
          <span class="label"><slot></slot></span>
          <span class="icon trailing"><slot name="trailing-icon"></slot></span>
        </div>
      </button>
    );
  }
}