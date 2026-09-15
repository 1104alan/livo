import { Button } from './button';

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
  args: {
    children: 'Botón',
  },
};

export const Default = {
  args: {
    variant: 'default',
  },
};

export const Destructive = {
  args: {
    variant: 'destructive',
  },
};

export const Outline = {
  args: {
    variant: 'outline',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
  },
};

export const Ghost = {
  args: {
    variant: 'ghost',
  },
};

export const Link = {
  args: {
    variant: 'link',
  },
};

export const Todas = () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <Button variant="default">Default</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
);
