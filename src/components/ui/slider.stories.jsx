import { Slider } from './slider';

export default {
  title: 'UI/Slider',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => <Slider {...args} style={{ width: 240 }} />,
};

export const Default = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
};

export const Rango = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
  },
};
