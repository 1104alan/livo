import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './collapsible';
import { Button } from './button';
import { ChevronsUpDown } from 'lucide-react';

export default {
  title: 'UI/Collapsible',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <Collapsible style={{ width: 280 }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: 14, fontWeight: 600 }}>@livo/design-system</span>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" size="icon">
          <ChevronsUpDown className="size-4" />
        </Button>
      </CollapsibleTrigger>
    </div>
    <div style={{ fontSize: 14, fontFamily: 'var(--font-mono)', marginTop: 8 }}>@radix-ui/react-collapsible</div>
    <CollapsibleContent style={{ display: 'grid', gap: 8, marginTop: 8 }}>
      <div style={{ fontSize: 14, fontFamily: 'var(--font-mono)' }}>@radix-ui/react-dialog</div>
      <div style={{ fontSize: 14, fontFamily: 'var(--font-mono)' }}>@radix-ui/react-popover</div>
    </CollapsibleContent>
  </Collapsible>
);
