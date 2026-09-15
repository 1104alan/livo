import { RadioGroup, RadioGroupItem } from './radio-group';
import { Label } from './label';

export default {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <RadioGroup defaultValue="comfortable" style={{ display: 'grid', gap: 8 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <RadioGroupItem value="default" id="r1" />
      <Label htmlFor="r1">Default</Label>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <RadioGroupItem value="comfortable" id="r2" />
      <Label htmlFor="r2">Comfortable</Label>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <RadioGroupItem value="compact" id="r3" />
      <Label htmlFor="r3">Compact</Label>
    </div>
  </RadioGroup>
);
