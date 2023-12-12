import { Component, h } from '@stencil/core';

@Component({ tag: 'obc-navigation-menu', shadow: true, styleUrl: 'obc-navigation-menu.css' })
export class NavigationMenu {

  render() {
    return (
        <div class="wrapper">
            <nav class="main">
                <ol>
                    <slot name="main"></slot>
                </ol>
            </nav>
            <div class="footer">
                <nav>
                    <ol>
                        <slot name="footer"></slot>
                    </ol>
                </nav>
                <div class="logo">
                    <slot name="logo"></slot>
                </div>
            </div>  
        </div>
    )
  }

  ;
}


