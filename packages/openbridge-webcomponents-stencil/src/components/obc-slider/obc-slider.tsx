import { Component, Prop, h } from '@stencil/core';

@Component({ tag: 'obc-slider', shadow: true, styleUrl: 'obc-slider.css' })
export class Slider {
    @Prop() value = 50;
    @Prop() min = 0;
    @Prop() max = 100;
    @Prop() step = 1;

    @Prop() iconLeft = '01-placeholder'
    @Prop() iconRight = '01-placeholder'

    render() {
        return (
        <div class="wrapper">
            <obc-icon iconId={this.iconLeft}> </obc-icon>
            <input type="range" min={this.min} max={this.max} step={this.step} value={this.value} class="slider"></input>
            <obc-icon iconId={this.iconRight}> </obc-icon>  
        </div>
        )
    }
}


