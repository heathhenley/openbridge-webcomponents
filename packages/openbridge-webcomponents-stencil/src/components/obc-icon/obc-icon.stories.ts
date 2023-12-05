

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: ({ sizePx, icon }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return `<obc-icon size-px="${sizePx}" icon="${icon}"></obc-icon>`;
  },
  args: {
    sizePx: 24,
    icon: 'placeholder',
  },
  argTypes: {
    sizePx: { control: 'number' },
    icon: {
      control: { type: 'select' },
      options: ['placeholder', 'support'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
  },
};
