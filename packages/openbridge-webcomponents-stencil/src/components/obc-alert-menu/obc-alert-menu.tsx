import { Component, Fragment, Prop, h } from '@stencil/core';
import { renderTime } from '../../renderTime';



export interface AlertAcknowledgeble {
    id: string;
    icon: string;
    message: string;
    type: 'alarm' | 'warning' | 'caution' | 'running';
    acknowledged: boolean;
    acknowledgeble: true;
    time: Date;
    timeSince: string;
}

export interface AlertNotAcknowledgeble {
    id: string;
    icon: string;
    message: string;
    type: 'alarm' | 'warning' | 'caution' | 'running';
    acknowledgeble: false;
    time: Date;
    timeSince: string;
}

export type Alert = AlertAcknowledgeble | AlertNotAcknowledgeble;

@Component({ tag: 'obc-alert-menu', shadow: true, styleUrl: 'obc-alert-menu.css' })
export class AlertMenu {
    @Prop() alerts: Array<Alert> = [];
    @Prop() narrow: boolean = false;

  render() {
    return (
        <div class={{wrapper: true, narrow: this.narrow}}>
            <div class="header">
                <div class="title">Active alerts</div>
                <obc-button variant="raised" class="ack-all-btn">ACK ALL</obc-button>
            </div>
            <div class="divider"></div>
             {this.alerts.map(a => renderAlertItem(a))}
            <div class="divider"></div>
            <obc-button variant="flat" full-width left-align class="alert-list-btn">Alert list
                <obc-icon iconId="08-alert-list" slot="leading-icon" sizePx={24}></obc-icon>
                <obc-icon iconId="02-chevron-right" slot="trailing-icon" sizePx={24}></obc-icon>
            </obc-button>
        </div>
    )
  }
}

function renderAlertItem(alert: Alert) {
    const time = renderTime(alert.time);
    return (
        <Fragment>
            <div class="alert">
                <div class="icon">
                    <obc-icon iconId={alert.icon} useCssColor sizePx={32}/>
                </div>
                <div class="message">
                    {alert.message}
                </div>
                <div class="time-wrapper">
                    <div class="time">
                        {time}
                    </div>
                    <div class="time-since">
                        {alert.timeSince}
                    </div>
                </div>
                <div class="acknowledge">
                    {alert.acknowledgeble && !alert.acknowledged ? 
                        <obc-button class="acknowledge-button" full-width>ACK</obc-button>
                     : ''}
                </div>
            </div>
            <div class="divider"></div>
        </Fragment>
    )
};