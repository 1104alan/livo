import { AspectRatio } from './aspect-ratio';

export default {
  title: 'UI/AspectRatio',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <div style={{ width: 320 }}>
    <AspectRatio ratio={16 / 9}>
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Paisaje de montaña"
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
      />
    </AspectRatio>
  </div>
);
