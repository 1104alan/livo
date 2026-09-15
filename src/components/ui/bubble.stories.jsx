import { BubbleGroup, Bubble, BubbleContent } from './bubble';

export default {
  title: 'UI/Bubble',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'muted', 'tinted', 'outline', 'ghost', 'destructive'],
    },
  },
};

export const Default = () => (
  <BubbleGroup style={{ width: 280 }}>
    <Bubble variant="tinted" align="start">
      <BubbleContent>¿Cómo te fue con el deploy?</BubbleContent>
    </Bubble>
    <Bubble variant="default" align="end">
      <BubbleContent>Todo salió bien 🚀</BubbleContent>
    </Bubble>
  </BubbleGroup>
);

export const Variantes = () => (
  <div style={{ display: 'grid', gap: 8, width: 260 }}>
    {['default', 'secondary', 'muted', 'tinted', 'outline', 'ghost', 'destructive'].map((variant) => (
      <Bubble key={variant} variant={variant}>
        <BubbleContent>{variant}</BubbleContent>
      </Bubble>
    ))}
  </div>
);
