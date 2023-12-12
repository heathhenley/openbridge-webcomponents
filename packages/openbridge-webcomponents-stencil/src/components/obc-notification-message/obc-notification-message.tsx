import { Component, Prop, h } from '@stencil/core';

@Component({ tag: 'obc-notification-message', shadow: true, styleUrl: 'obc-notification-message.css' })
export class NotificationMessage {
    @Prop() empty = false;
    @Prop() large = false;

  render() {
    return (
        <div class={{
            'wrapper': true,
            'empty': this.empty,
            'large': this.large,
        }}>
            <div class='message-wrapper'>
                <slot></slot>
                {this.empty ? <div class="empty-wapper"><slot name="empty"></slot></div> : null }
            </div>
        </div>
    )
  }

  ;
}


