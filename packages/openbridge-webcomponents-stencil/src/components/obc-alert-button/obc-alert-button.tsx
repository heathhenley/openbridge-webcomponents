import { Component, Prop, h } from '@stencil/core';

export enum AlertType {
  Alarm = "alarm",
  Warning = "warning",
  Caution = "caution",
  Running = "running",
  Command = "command",
  Notification = "notification",
  Regular = "regular",
  Flat = "flat",
}

@Component({ tag: 'obc-alert-button', shadow: true, styleUrl: 'obc-alert-button.css' })
export class AlertButton {

  @Prop() nAlerts = 0;
  @Prop() type = AlertType.Regular;
  @Prop() standalone = false;
  @Prop() counter = false;

  render() {
    return (
        <button class={{wrapper: true,  ['type-'+this.type]: true,  counter: this.counter,  standalone: this.standalone}}>
          <div class="visible-wrapper">
            <obc-icon iconId="14-alerts" class="icon"></obc-icon>
            {this.counter ? <div class="badge">{this.nAlerts}</div> : null}
          </div>
        </button>
    )
  }

  ;
}


