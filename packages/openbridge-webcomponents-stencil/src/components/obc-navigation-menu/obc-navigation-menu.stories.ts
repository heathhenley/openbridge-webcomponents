import type { Meta, StoryObj } from '@storybook/web-components';
import { NavigationMenu } from './obc-navigation-menu';
import imageUrl from '../../../assets/320x96.png';

import { html } from 'lit';


const meta: Meta<typeof NavigationMenu> = {
  title: 'menu/Navigation menu',
  tags: ['autodocs'],
  component: "obc-navigation-menu",
  render: (args) => {
    return html`
    <div style="height: 80vh">
        <obc-navigation-menu>
            <obc-navigation-item slot="main" icon="01-apps" label="Apps" href="#"></obc-navigation-item>
            <obc-navigation-item slot="main" checked icon="14-alerts" label="Alerts" href="#"></obc-navigation-item>
            <obc-navigation-item slot="main" icon="04-dimming" label="Dimming" href="#"></obc-navigation-item>
            
            <obc-navigation-item slot="footer" icon="03-support" label="Help" href="#"></obc-navigation-item>
            <obc-navigation-item slot="footer" icon="03-settings" label="Settings" href="#"></obc-navigation-item>
            <obc-navigation-item slot="footer" icon="08-alert-list" label="Alert" href="#"></obc-navigation-item>
            
            <img slot="logo" src="${imageUrl}" alt="logo">    
        </obc-navigation-menu>
    </div>
    `
  },
  args: {
  },
  argTypes: {
  },
} satisfies Meta<NavigationMenu>;

export default meta;
type Story = StoryObj<NavigationMenu>;

export const Primary: Story = {
  args: {
  },
};