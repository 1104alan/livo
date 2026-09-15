import { DirectionProvider } from './direction';
import { Button } from './button';
import { ArrowRight } from 'lucide-react';

export default {
  title: 'UI/Direction',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

function Demo() {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button variant="outline">
        Continuar
        <ArrowRight />
      </Button>
    </div>
  );
}

export const LTR = () => (
  <DirectionProvider dir="ltr">
    <Demo />
  </DirectionProvider>
);

export const RTL = () => (
  <DirectionProvider dir="rtl">
    <div dir="rtl">
      <Demo />
    </div>
  </DirectionProvider>
);
