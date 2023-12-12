import { Component, Prop, h } from '@stencil/core';



@Component({ tag: 'obc-toggle-switch', shadow: true, styleUrl: 'obc-toggle-switch.css' })
export class ToggleSwitch {

    @Prop() label = 'Label'
    @Prop() checked = false

    render() {
        return (
      <label>
        <span>{this.label}</span>
        <div class="switch">
            <div class={{presenter: true, checked: this.checked }}>
                <div class="knob"></div>
                <input type="checkbox" checked={this.checked} onClick={this._tryChange}/>
            </div>
        </div>
      </label>
    )
    }

    _tryChange() {
        this.checked = !this.checked
    }

    ;
}


