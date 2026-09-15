import { Label } from './label';
import { Input } from './input';

export default {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Etiqueta',
  },
};

export const ConInput = () => (
  <div style={{ display: 'grid', gap: 6 }}>
    <Label htmlFor="email-story">Correo electrónico</Label>
    <Input id="email-story" type="email" placeholder="nombre@correo.com" />
  </div>
);
