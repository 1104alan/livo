import { ScrollArea } from './scroll-area';
import { Separator } from './separator';

export default {
  title: 'UI/ScrollArea',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const tags = Array.from({ length: 30 }, (_, i) => `Componente ${i + 1}`);

export const Default = () => (
  <ScrollArea style={{ height: 240, width: 220 }} className="rounded-md border">
    <div style={{ padding: 16 }}>
      <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Componentes</h4>
      {tags.map((tag) => (
        <div key={tag}>
          <div style={{ fontSize: 14, padding: '6px 0' }}>{tag}</div>
          <Separator />
        </div>
      ))}
    </div>
  </ScrollArea>
);
