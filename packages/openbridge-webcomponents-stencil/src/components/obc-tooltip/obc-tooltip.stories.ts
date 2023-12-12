

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Tooltip',
  tags: ['autodocs'],
  component: "obc-tooltip",
  render: ({ label, text, position, open }) => {
    return `
    <div style='margin: 100px'>
    <obc-tooltip label="${label}" text="${text}" position="${position}" ${open ? 'open' : ''}>
      <div style="padding: 10px; background-color: pink; width: max-content;">Box</div>
    </obc-tooltip>
    </div>`;
  },
  args: {
    open: true,
    label: 'Title',
    text: '',
    position: 'above',
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['above', 'below', 'left', 'right'],
    }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LabelOnly = {
  args: {
  },
};

export const WithText = {
  args: {
    text: 'Longer description of the tooltip',
  },
};

export const Below = {
  args: {
    text: 'Longer description of the tooltip',
    position: 'below',
  },
};

export const Right = {
  args: {
    text: 'Longer description of the tooltip',
    position: 'right',
  },
};

export const Left = {
  args: {
    position: 'left',
  },
};

export const ShowOnHoverDemo = {
  render() {
    return `
    <style>
      .box {
        padding: 10px; 
        background-color: pink; 
        width: max-content;
      }

      .wrapper {
        margin: 100px;
        width: max-content;
      }

      .wrapper:hover {
        --obc-tooltip-open: 1;
      }
    </style>

    <div class="wrapper" >
    <obc-tooltip label="I'm here" position="above">
      <div class="box">Hover me!</div>
    </obc-tooltip>
    </div>`;
  }
}