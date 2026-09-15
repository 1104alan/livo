import { Badge } from './badge';

export default {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
    },
  },
  args: {
    children: 'Badge',
  },
};

export const Default = {
  args: { variant: 'default' },
};

export const Secondary = {
  args: { variant: 'secondary' },
};

export const Destructive = {
  args: { variant: 'destructive' },
};

export const Outline = {
  args: { variant: 'outline' },
};

export const Todas = () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
    <Badge variant="default">Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="ghost">Ghost</Badge>
    <Badge variant="link">Link</Badge>
  </div>
);
