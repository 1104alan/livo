import { Progress } from './progress';

export default {
  title: 'UI/Progress',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  args: {
    value: 40,
  },
  render: (args) => <Progress {...args} style={{ width: 280 }} />,
};

export const Default = {};

export const Completo = {
  args: { value: 100 },
};
