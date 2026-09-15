import { Switch } from './switch';
import { Label } from './label';

export default {
  title: 'UI/Switch',
  component: Switch,
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

export const Activado = {
  args: { defaultChecked: true },
};

export const Deshabilitado = {
  args: { disabled: true },
};

export const ConLabel = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <Switch id="notif-story" />
    <Label htmlFor="notif-story">Notificaciones</Label>
  </div>
);
