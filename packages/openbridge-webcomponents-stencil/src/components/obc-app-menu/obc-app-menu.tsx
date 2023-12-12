import { Component, Prop, State, Event, EventEmitter, h} from '@stencil/core';

export interface MenuItem {
    id: string;
    name: string;
    icon: string;
}

@Component({ tag: 'obc-app-menu', shadow: true, styleUrl: 'obc-app-menu.css' })
export class AppMenu {
    @Prop() items: Array<MenuItem> = [];
    @Prop() selectedItemId: string = '';
    @State() private _search = ''

    onSearchInput(e: Event) {
        this._search = (e.target as HTMLInputElement).value;
    }

    @Event() appSelected: EventEmitter<MenuItem>;

    onAppButtonClick(item: MenuItem) {
        this.appSelected.emit(item);
    }

    render() {
        const filteredItems = this.items.filter(item => item.name.toLowerCase().includes(this._search.toLowerCase()));
        return (
        <div class="card">
            <obc-input placeholder="Search" icon="01-search" onInput={this.onSearchInput}></obc-input>
            <div class="main-apps">
                {filteredItems.map(item => 
                    <obc-app-button icon={item.icon} label={item.name} checked={item.id===this.selectedItemId} onClick={() => this.onAppButtonClick(item)}></obc-app-button>
                )}
            </div>
        </div>
    )
    }

    ;
}


