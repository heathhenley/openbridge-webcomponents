import type { Meta, StoryObj } from '@storybook/web-components';
import { ObcButton } from './obc-button';
import { ICONS_IDS } from '../../icons';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta: Meta<typeof ObcButton> = {
  title: 'Button/Button',
  tags: ['autodocs'],
  component: "obc-button",
  args: {
    // @ts-ignore
    size: 'regular',
    // @ts-ignore
    label: "Button",
    iconLeading: "01-placeholder",
    fullWidth: false,
  },
  argTypes: {
    variant: {
      options: ['normal', 'flat', 'raised'],
      control: { type: 'select' },
    },
    size: {
      options: ['regular', 'large'],
      control: { type: 'select' },
    },
    iconLeading: {
      options: ICONS_IDS,
      control: { type: 'select' },
    },
    iconTrailing: {
      options: ICONS_IDS,
      control: { type: 'select' },
    },
  },
  render: (args) => `<obc-button variant=${args.variant} size=${args.size} ${args.fullWidth ? 'full-width' : ''}>
    ${args.iconLeading ? `<obc-icon slot="leading-icon" icon-id=${args.iconLeading} size="24"></obc-icon>` : ''}
    ${args.label}
    ${args.iconTrailing ? `<obc-icon slot="trailing-icon" icon-id=${args.iconTrailing} size="24"></obc-icon>` : ''}
    </obc-button>`,
} satisfies Meta<ObcButton>;

export default meta;
type Story = StoryObj<ObcButton>;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Normal: Story = {
  args: {
    variant: 'normal',
  },
};

export const NormalIconBoth: Story = {
  args: {
    variant: 'normal',
    iconTrailing: "01-placeholder"
  },
};

export const NormalIconTrailing: Story = {
  args: {
    variant: 'normal',
    iconLeading: undefined,
    iconTrailing: "01-placeholder"
  },
};

export const NormalNoIcon: Story = {
  args: {
    variant: 'normal',
    iconLeading: undefined
  },
};

export const NormalFullWidth: Story = {
  args: {
    variant: 'normal',
    fullWidth: true
  },
};

export const Flat: Story = {
  args: {
    variant: 'flat',
  },
};

export const Raised: Story = {
  args: {
    variant: 'raised',
  },
};

export const NormalLarge: Story = {
  args: {
    variant: 'normal',
    size: "large"
  },
};