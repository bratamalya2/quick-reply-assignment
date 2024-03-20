import Button from '../components/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'neutral', 'reverse']
    },
    iconOnly: {
      control: 'boolean'
    },
    textOnly: {
      control: 'boolean'
    },
    status: {
      control: 'select',
      options: ['default', 'hover', 'disabled']
    },
    size: {
      control: 'select',
      options: ['default', 'small', 'X-small']
    },
    icon: {
      control: 'text'
    }
  }
};

export const CustomButton = {
  args: {}
};

