import { ToggleGroup, ToggleGroupItem } from './toggle-group';
import { Bold, Italic, Underline } from 'lucide-react';

export default {
  title: 'UI/ToggleGroup',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Multiple = () => (
  <ToggleGroup type="multiple" variant="outline">
    <ToggleGroupItem value="bold" aria-label="Negrita">
      <Bold />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Cursiva">
      <Italic />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Subrayado">
      <Underline />
    </ToggleGroupItem>
  </ToggleGroup>
);

export const Single = () => (
  <ToggleGroup type="single" defaultValue="bold" variant="outline">
    <ToggleGroupItem value="bold" aria-label="Negrita">
      <Bold />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Cursiva">
      <Italic />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Subrayado">
      <Underline />
    </ToggleGroupItem>
  </ToggleGroup>
);
