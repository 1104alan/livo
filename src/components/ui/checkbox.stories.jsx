import { Checkbox } from './checkbox';
import { Label } from './label';

export default {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
  },
};

export const Default = {
  args: {},
};

export const Marcado = {
  args: { defaultChecked: true },
};

export const Deshabilitado = {
  args: { disabled: true },
};

export const ConLabel = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <Checkbox id="terms-story" />
    <Label htmlFor="terms-story">Acepto los términos y condiciones</Label>
  </div>
);
