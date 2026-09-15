import { Textarea } from './textarea';

export default {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
  args: {
    placeholder: 'Escribe tu mensaje...',
  },
  render: (args) => <Textarea {...args} style={{ width: 320 }} />,
};

export const Default = {};

export const Deshabilitado = {
  args: {
    disabled: true,
    defaultValue: 'No editable',
  },
};
