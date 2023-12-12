import type { Meta, StoryObj } from '@storybook/web-components';
import { NotificationMessage } from './obc-notification-message';

const meta: Meta<typeof NotificationMessage> = {
  title: 'Application/Notification message',
  tags: ['autodocs'],
  component: "obc-notification-message",
  args: {
  },
  argTypes: {
  },
} satisfies Meta<NotificationMessage>;

export default meta;
type Story = StoryObj<NotificationMessage>;

export const Primary: Story = {
  render: () => `
  <obc-notification-message>
    <obc-notification-message-item time="2023-01-01T13:37:01+01:00">
      <obc-icon slot="icon" icon-id="14-alarm-unack" size-px="24" use-css-color></obc-icon>
      <div slot="message">This is a message</div>
    </obc-notification-message-item>
    <div slot="empty">No active alerts</div>
  </obc-notification-message>
`
};

export const Empty: Story = {
  render: () => `
    <obc-notification-message empty>
        <div slot="empty">No active alerts</div>
    </obc-notification-message>
  `
};

export const Large: Story = {
  render: () => `
    <obc-notification-message large>
        <obc-notification-message-item time="2023-01-01T13:37:01+01:00">
            <obc-icon slot="icon" icon-id="14-alarm-unack" size-px="24" use-css-color></obc-icon>
            <div slot="message">This is a message</div>
        </obc-notification-message-item>
        <obc-notification-message-item time="2023-01-01T13:37:01+01:00">
            <obc-icon slot="icon" icon-id="14-alarm-unack" size-px="24" use-css-color></obc-icon>
            <div slot="message">This is a message</div>
        </obc-notification-message-item>
        <div slot="empty">No active alerts</div>
    </obc-notification-message>
  `
};


export const LargeSingleMessage: Story = {
  render: () => `
    <obc-notification-message large>
        <obc-notification-message-item time="2023-01-01T13:37:01+01:00">
            <obc-icon slot="icon" icon-id="14-alarm-unack" size-px="24" use-css-color></obc-icon>
            <div slot="message">This is a message</div>
        </obc-notification-message-item>
        <div slot="empty">No active alerts</div>
    </obc-notification-message>
  `
};