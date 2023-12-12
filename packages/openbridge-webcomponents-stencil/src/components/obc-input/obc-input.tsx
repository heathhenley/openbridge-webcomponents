import { Component, Prop, h } from '@stencil/core';

@Component({ tag: 'obc-input', shadow: true, styleUrl: 'obc-input.css' })
export class Input {
    @Prop() value: string = "";
    @Prop() placeholder: string = "";
    @Prop() type: string = "text";
    @Prop() icon: String = "";

    onInput(e: Event) {
        this.value = (e.target as HTMLInputElement).value;
    }

    onChange(e: Event) {
        this.value = (e.target as HTMLInputElement).value;
    }

    render() {
        const hasIcon = this.icon !== "";
        return (
        <label class="wrapper">
            <input type={this.type} class="input" value={this.value} placeholder={this.placeholder} onInput={this.onInput} onChange={this.onChange}/>
            {hasIcon ? <div class="icon"><obc-icon iconId={this.icon.toString()} sizePx={24}></obc-icon></div> : ""}
        </label>
        )
    }

    ;
}


