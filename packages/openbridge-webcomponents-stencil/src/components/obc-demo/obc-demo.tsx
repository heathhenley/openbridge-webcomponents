import { Component, State, h, Fragment } from '@stencil/core';

@Component({ tag: 'obc-demo', shadow: true, styleUrl: 'obc-demo.css' })
export class Demo {

    @State() showBrilliance = false;
    @State() showNavigation = false;

    private menuButtonClicked = () => {
        this.showNavigation = !this.showNavigation;
      }

  render() {
    const date = new Date().toISOString();
    return (
        <Fragment>
        <header>
            <obc-top-bar 
                date={date}
                onMenuButtonClicked={this.menuButtonClicked}
                onDimmingButtonClicked={() => this.showBrilliance = !this.showBrilliance}
                        
            ></obc-top-bar>
        </header>
        <body>
            <div class="content">
                {this.showNavigation ? 
                <obc-navigation-menu class="navigation-menu">
                    <obc-navigation-item slot="main" icon="01-apps" label="Apps" href="#"></obc-navigation-item>
                    <obc-navigation-item slot="main" checked icon="14-alerts" label="Alerts" href="#"></obc-navigation-item>
                    <obc-navigation-item slot="main" icon="04-dimming" label="Dimming" href="#"></obc-navigation-item>
                    
                    <obc-navigation-item slot="footer" icon="03-support" label="Help" href="#"></obc-navigation-item>
                    <obc-navigation-item slot="footer" icon="03-settings" label="Settings" href="#"></obc-navigation-item>
                    <obc-navigation-item slot="footer" icon="08-alert-list" label="Alert" href="#"></obc-navigation-item>
                    
                    <img slot="logo" src="https://via.placeholder.com/320x96" alt="logo"></img>
                </obc-navigation-menu>
                : undefined}
            
                {this.showBrilliance ? <obc-brilliance-menu></obc-brilliance-menu> : undefined}
            </div>
        </body>
        </Fragment>
    )
  }

  

  ;
}


