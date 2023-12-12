import { Component, Prop, h } from '@stencil/core';
import { renderTime } from '../../renderTime';

@Component({ tag: 'obc-notification-message-item', shadow: true, styleUrl: 'obc-notification-message-item.css' })
export class NotificationMessageItem {
  @Prop() time = "2021-01-01T11:11:11.111Z"

  render() {
    const time = renderTime(new Date(this.time));

  return (
    <div class="wrapper">
    <div class="icon"><slot name="icon"></slot></div>
    <div class="message"><slot name="message"></slot></div>
    <div class="time">{time}</div>
    </div>
  )
  }

  ;
}


