import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({ tag: 'obc-brilliance-menu', shadow: true, styleUrl: 'obc-brilliance-menu.css' })
export class BrillianceMenu {

  @Event() brillianceChanged: EventEmitter<{ value: number }>;

  onBrilianceChanged(event: CustomEvent) {
    this.brillianceChanged.emit( { value: event.detail.value });
  }

  render() {
    return (
        <div class="card">
            <h3>Brilliance</h3>
            <obc-slider iconLeft="04-brilliance-low" iconRight="04-brilliance-high"></obc-slider>
            <obc-toggle-switch label="Auto brilliance"></obc-toggle-switch>
            <div class="divider"></div>
            <h3>Day - Night</h3>
            <obc-toggle-button-group value="day" onValueChanged={this.onBrilianceChanged}>
                <obc-toggle-button-option icon="04-night" value="night"></obc-toggle-button-option>
                <obc-toggle-button-option icon="04-dusk" value="dusk"></obc-toggle-button-option>
                <obc-toggle-button-option icon="04-day" value="day"></obc-toggle-button-option>
                <obc-toggle-button-option icon="04-day-bright" value="bright"></obc-toggle-button-option>
            </obc-toggle-button-group>
            <obc-toggle-switch label="Auto day - night" checked></obc-toggle-switch>

        </div>
    )
  }

  ;
}


