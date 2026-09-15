import { Toggle } from './toggle';
import { Bold } from 'lucide-react';

export default {
  title: 'UI/Toggle',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
  },
  args: {
    'aria-label': 'Negrita',
  },
};

export const Default = {
  render: (args) => (
    <Toggle {...args}>
      <Bold />
    </Toggle>
  ),
};

export const Outline = {
  args: { variant: 'outline' },
  render: (args) => (
    <Toggle {...args}>
      <Bold />
    </Toggle>
  ),
};
