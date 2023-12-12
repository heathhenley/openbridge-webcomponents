import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import { BreadcrumbItem } from '../obc-breadcrumb/obc-breadcrumb';

@Component({ tag: 'obc-top-bar', shadow: true, styleUrl: 'obc-top-bar.css' })
export class TopBar {

  @Prop() appTitle = 'App'
  @Prop() pageName = 'Page'
  @Prop() date = "2021-01-01T11:11:11.111Z"
  @Prop() wideMenuButton = false;
  @Prop() showAppsButton = false;
  @Prop() showDimmingButton = false;
  @Prop() showAlertsButton = false;
  @Prop() showClock = false;
  @Prop() inactive = false;
  @Prop() sizeSmall = false;
  @Prop() settings = false;
  @Prop() breadcrumbItems: BreadcrumbItem[] = [];

  @Event() menuButtonClicked: EventEmitter;
  @Event() alertsButtonClicked: EventEmitter;
  @Event() dimmingButtonClicked: EventEmitter;
  @Event() appsButtonClicked: EventEmitter;
  @Event() leftMoreButtonClicked: EventEmitter;
  @Event() close: EventEmitter;
  @Event() back: EventEmitter;
  @Event() forward: EventEmitter;

  render() {
    let leftGroup = [];
    if (this.settings) {
      leftGroup.push(<div class="menu-button"><obc-icon-button icon="01-close" variant="flat" onClick={this.close.emit}></obc-icon-button></div>);
      leftGroup.push(<obc-divider></obc-divider>);
      leftGroup.push(<obc-icon-button icon="02-arrow-back" variant="flat" cornerLeft onClick={this.back.emit}></obc-icon-button>);
      leftGroup.push(<obc-icon-button icon="02-arrow-forward" variant="flat" cornerRight onClick={this.forward.emit}></obc-icon-button>);
      leftGroup.push(<obc-divider></obc-divider>);
      leftGroup.push(<div class="title">{this.appTitle}</div>);
      leftGroup.push(<obc-breadcrumb items={this.breadcrumbItems}></obc-breadcrumb>);
    } else {
      if (!this.inactive) {
        leftGroup.push(
          <div class={{'menu-button': true, wide: this.wideMenuButton}}>
                  <obc-icon-button icon="01-menu" variant="flat" onClick={this.menuButtonClicked.emit}></obc-icon-button>
                </div>);
      }
      if (!this.sizeSmall) {
        leftGroup.push(<div class="title">{this.appTitle}</div>);
      }
      leftGroup.push(<div class="page-name">{this.pageName}</div>);
    }


    return (
      <nav class={{
      wrapper: true,
      inactive: this.inactive,
      small: this.sizeSmall,
      settings: this.settings,
    }}
      >
        <div class="left group">
          {leftGroup}
        </div>
        <div class="right group">
          {this.showClock ? <obc-clock date={this.date} showDate={!this.sizeSmall}></obc-clock> : null}
          <obc-icon-button icon="14-alerts" variant="flat" onClick={this.alertsButtonClicked.emit}></obc-icon-button>
          {this.showDimmingButton && !this.inactive && !this.sizeSmall ? <obc-icon-button icon="04-dimming" variant="flat" onClick={this.dimmingButtonClicked.emit}></obc-icon-button> : null}
          {this.showAppsButton && !this.inactive && !this.sizeSmall ? <obc-icon-button icon="01-apps" variant="flat" onClick={this.appsButtonClicked.emit}></obc-icon-button> : null}
          {this.sizeSmall ? <obc-icon-button icon="01-more-vertical" variant="flat" onClick={this.leftMoreButtonClicked.emit}></obc-icon-button> : null}
        </div>
      </nav>
    );




  }
}


