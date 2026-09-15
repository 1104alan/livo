import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './carousel';

export default {
  title: 'UI/Carousel',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <Carousel style={{ width: 260 }}>
    <CarouselContent>
      {[1, 2, 3, 4, 5].map((n) => (
        <CarouselItem key={n}>
          <div
            style={{
              display: 'flex',
              height: 160,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border)',
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            {n}
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);
