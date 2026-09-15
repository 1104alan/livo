import { Input } from './input';

export default {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    placeholder: 'Escribe algo...',
  },
  render: (args) => <Input {...args} style={{ width: 260 }} />,
};

export const Default = {
  args: {
    type: 'text',
  },
};

export const ConValor = {
  args: {
    type: 'text',
    defaultValue: 'Hola mundo',
  },
};

export const Deshabilitado = {
  args: {
    disabled: true,
    defaultValue: 'No editable',
  },
};

export const Email = {
  args: {
    type: 'email',
    placeholder: 'nombre@correo.com',
  },
};
