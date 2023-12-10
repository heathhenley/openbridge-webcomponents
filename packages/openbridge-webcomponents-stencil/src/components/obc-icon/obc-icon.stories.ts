import { Meta } from '@storybook/web-components';
import { ObcIcon } from './obc-icon';
import { ICONS_IDS } from '../../icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof ObcIcon> = {
  title: 'Example/Icon',
  tags: ['autodocs'],
  component: "obc-icon",
  argTypes: {
    // @ts-ignore
    iconId: {
      control: {
        type: 'select',

      },
      options: ICONS_IDS
    },

  }
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Placeholder = {
  args: {
    iconId: '01-placeholder',
  },
};

export const FullscreenIcon = {
  args: {
    iconId: '05-fullscreen',
  },
};